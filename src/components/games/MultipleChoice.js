import React, { Fragment } from "react";

//mui components
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function MultipleChoice(props) {
  const { data, getNextQuestion } = props;

  const handleRadioChange = (event) => {
    let coin = 0;
    if (event.target.value === data.correctAnswer) {
      coin = 1;
    }
    getNextQuestion(coin);
  };

  return (
    <Fragment>
      <Grid container flexDirection="column">
        <Grid item>
          <p style={{ textAlign: "center", color: "#E0B19D", fontSize: "22px" }}>{data.prompt}</p>
        </Grid>
        <Grid item>
          <p style={{ textAlign: "center", color: "#EBB145", fontSize: "22px" }}>{data.question}</p>
        </Grid>
        <RadioGroup name="quiz" value={null} onChange={handleRadioChange}>
          {data.choices.map((label) => {
            return (
              <FormControlLabel
                style={{ color: "#E0B19D", fontSize: "16px", fontWeight: 600 }}
                disableTypography
                value={label}
                control={<Radio style={{ color: "#E0B19D" }} />}
                label={label}
              />
            );
          })}
        </RadioGroup>
      </Grid>
    </Fragment>
  );
}
