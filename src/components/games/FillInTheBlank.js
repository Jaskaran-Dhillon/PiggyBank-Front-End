import React, { Fragment } from "react";

//mui components
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";

//styles
import styles from "assets/jss/dashboardStyle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(styles);

export default function FillInTheBlank(props) {
  const { data, getNextQuestion } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container flexDirection="column">
      <Grid item>
          <p style={{ textAlign: "center", color: "#E0B19D", fontSize: "22px" }}>{data.prompt}</p>
        </Grid>
        <Grid item>
        <p style={{textAlign: "center", color: "#EBB145", fontSize: "22px"}}>{data.question}</p>
        </Grid>
        {data.choices.map((label, index) => {
          return (
            <Button
              onClick={() => {
                let coin = 0;
                if (index === data.correctAnswer) {
                  coin = 1;
                }
                getNextQuestion(coin);
              }}
              style={{
                marginBottom: "10px",
                border: "2px solid #E0B19D",
                boxShadow: "0px 3px 3px #EAC5B2",
                borderRadius: "15.7539px",
                color:  "#E0B19D",
                fontWeight: "900px",
                fontSize: "15px"
              }}
              className={classes.button}
            >
              {label}
            </Button>
          );
        })}
      </Grid>
    </Fragment>
  );
}
