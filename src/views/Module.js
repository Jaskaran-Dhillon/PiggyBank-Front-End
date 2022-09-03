import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { moduleService } from "services/module.service";
import { useParams, useNavigate } from "react-router-dom";

//mui components
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

import FillInTheBlank from "components/games/FillInTheBlank";
import MultipleChoice from "components/games/MultipleChoice";
import Grouping from "components/games/Grouping";

//styles
import styles from "assets/jss/dashboardStyle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(styles);

const validModules = ["savings", "investing"];

export default function Module() {
  const classes = useStyles();
  const { module } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const fetchQuestions = async () => {
    try {
      const result = await moduleService.getQuestions(module.replace("/", ""));
      setQuestions(result.data.data);
      setLoading(false);
    } catch (e) {
      console.warn("Failed to questions", e);
      toast.error("Failed to fetch questions.");
    }
  };

  const getNextQuestion = async (coin) => {
    try {
      setCurrentQuestion((prev) => prev + 1);
      setCoins((prev) => prev + coin);
    } catch (e) {
      console.warn("Failed get next question", e);
      toast.error("Failed to get next question.");
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    if (validModules.includes(module)) {
      fetchQuestions();
    } else {
      navigate("/dashboard");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [module]);

  const renderGame = () => {
    switch (questions?.[currentQuestion]?.type) {
      case 0:
        return <FillInTheBlank data={questions[currentQuestion]} getNextQuestion={getNextQuestion} />;
      case 1:
        return <MultipleChoice data={questions[currentQuestion]} getNextQuestion={getNextQuestion} />;
      case 2:
        return <Grouping data={questions[currentQuestion]} getNextQuestion={getNextQuestion} />;
      default:
        return null;
    }
  };

  const getPage = () => {
    if (loading){
      return <CircularProgress />
    } else if (currentQuestion === questions?.length) {
      return (
        <Grid item xs={12} className={classes.card2}>
          <Grid container flexDirection="column">
            <Grid item>
              <p
                style={{
                  textAlign: "center",
                  color: "#EBB145",
                  fontWeight: 900,
                  fontSize: "60px",
                }}
              >
                Congratulations!
              </p>
            </Grid>
            <Grid item>
              <p
                style={{ textAlign: "center", color: "#EBB145", fontWeight: 900, fontSize: "25px" }}
              >{`You answered ${coins} out of ${questions.length} questions correctly!`}</p>
            </Grid>
            <Button
              style={{
                marginBottom: "10px",
                border: "2px solid #E0B19D",
                boxShadow: "0px 3px 3px #EAC5B2",
                borderRadius: "15.7539px",
                color: "#E0B19D",
                fontWeight: "900px",
                fontSize: "16px",
              }}
              onClick={() => navigate("/dashboard")}
            >
              Return to dashboard
            </Button>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid item xs={12} className={classes.card2}>
          <Grid container flexDirection="column">
            <Grid item style={{ display: "flex" }}>
              <span style={{ flexGrow: 1 }}>{`Question ${currentQuestion + 1}/${questions?.length}`}</span>
              <span>{`Score: ${coins}`}</span>
            </Grid>
            <Grid item>{renderGame()}</Grid>
            <Grid item style={{ paddingTop: "15px", paddingBottom: "15px" }}>
              <LinearProgress variant="determinate" value={((currentQuestion + 1) / questions?.length) * 100} />
            </Grid>
          </Grid>
        </Grid>
      );
    }
  };

  return (
    <Fragment>
      <Grid container className={classes.background} direction="column" alignItems="center" justifyContent="flex-start">
        {getPage()}
      </Grid>
    </Fragment>
  );
}
