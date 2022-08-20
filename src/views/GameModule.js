import React, { Fragment, useContext, useEffect, useState, useRef, useLayoutEffect } from "react";
import { toast } from "react-toastify";
import { isBlank } from "helpers";
import { moduleService } from "services/module.service";
import { useParams, Navigate } from "react-router-dom";

//mui components
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";

//icons
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SendIcon from "@mui/icons-material/Send";
import CircleIcon from "@mui/icons-material/Circle";

//styles
import styles from "assets/jss/dashboardStyle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const [languageOptions, setLanguageOptions] = useState(null);
  const scrollRef = useRef();
  const classes = useStyles();
  const { module } = useParams();

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(1);

  // const fetchQuestions = async () => {
  //   try {
  //     const result = await moduleService.getQuestions(module);
  //     setQuestions(result.questions);
  //     setLoading(false);
  //   } catch (e) {
  //     console.warn("Failed to questions", e);
  //     toast.error("Failed to fetch questions.");
  //   }
  // };

  // useEffect(() => {
  //   fetchQuestions();
  // }, []);

  const selectionPage = () => {
    return (
      <Grid item xs={12} className={classes.card}>
        <Grid container flexDirection="column">
          <Grid item>
            <h3 className={classes.instruction}>{module}</h3>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const getPage = () => {
    return selectionPage();
  };

  return (
    <Fragment>
      <Grid container className={classes.background} direction="column" alignItems="center" justifyContent="flex-start">
        {getPage()}
      </Grid>
    </Fragment>
  );
}
