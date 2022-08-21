import React, { Fragment } from "react";
import piggybankicon from "assets/images/piggybankicon.png";
import budget from "assets/images/budget.png";
import locked from "assets/images/locked.png";

import Grid from "@mui/material/Grid";

//styles
import styles from "assets/jss/dashboardStyle";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const navigate = useNavigate();

  const selectionPage = () => {
    return (
      <Grid item xs={12} className={classes.card}>
        <Grid container flexDirection="column" alignItems="center">
          <Grid item xs={4}>
            <div
              onClick={() => {
                navigate("/modules/savings");
              }}
              style={{
                backgroundColor: "#EBB145",
                width: "fit-content",
                cursor: "pointer",
                borderRadius: "8px",
                padding: "15px",
              }}
            >
              <img src={piggybankicon} alt="pig0" style={{ height: "50px", width: "60px" }} />
            </div>
            <h3 className={classes.instruction}>Savings</h3>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="baseline" >
              <Grid item>
                <div
                  onClick={() => {
                    navigate("/modules/investing");
                  }}
                  style={{
                    backgroundColor: "#E0B19D",
                    width: "fit-content",
                    cursor: "pointer",
                    borderRadius: "8px",
                    padding: "15px",
                    marginRight: "10px"
                  }}
                >
                  <img src={budget} alt="pig0" style={{ height: "50px", width: "60px" }} />
                </div>
                <h3 className={classes.instruction}>Investing</h3>
              </Grid>
              <Grid item>
                <div
                  style={{
                    backgroundColor: "#D9D9D9",
                    width: "15px",
                    height: "15px",
                    borderRadius: "3px",
                    marginLeft: "15px",
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    backgroundColor: "#D9D9D9",
                    width: "15px",
                    height: "15px",
                    borderRadius: "3px",
                    marginLeft: "15px",
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    backgroundColor: "#D9D9D9",
                    width: "fit-content",
                    borderRadius: "8px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  <img src={locked} alt="pig0" style={{ height: "50px", width: "60px" }} />
                </div>
                <h3 className={classes.instruction} style={{marginLeft: "20px"}}>Accounts</h3>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="baseline" >
              <Grid item>
                <div
                  onClick={() => {
                    navigate("/modules/investing");
                  }}
                  style={{
                    backgroundColor: "#D9D9D9",
                    width: "fit-content",
                    borderRadius: "8px",
                    padding: "15px",
                    marginRight: "10px"
                  }}
                >
                  <img src={locked} alt="pig0" style={{ height: "50px", width: "60px" }} />
                </div>
                <h3 className={classes.instruction}>Finance</h3>
              </Grid>
              <Grid item>
                <div
                  style={{
                    backgroundColor: "#D9D9D9",
                    width: "15px",
                    height: "15px",
                    borderRadius: "3px",
                    marginLeft: "15px",
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    backgroundColor: "#D9D9D9",
                    width: "15px",
                    height: "15px",
                    borderRadius: "3px",
                    marginLeft: "15px",
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    backgroundColor: "#D9D9D9",
                    width: "fit-content",
                    borderRadius: "8px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  <img src={locked} alt="pig0" style={{ height: "50px", width: "60px" }} />
                </div>
                <h3 className={classes.instruction} style={{marginLeft: "20px"}}>Retirement</h3>
              </Grid>
              <Grid item>
                <div
                  style={{
                    backgroundColor: "#D9D9D9",
                    width: "15px",
                    height: "15px",
                    borderRadius: "3px",
                    marginLeft: "15px",
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    backgroundColor: "#D9D9D9",
                    width: "15px",
                    height: "15px",
                    borderRadius: "3px",
                    marginLeft: "15px",
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    backgroundColor: "#D9D9D9",
                    width: "fit-content",
                    borderRadius: "8px",
                    padding: "15px",
                    marginLeft: "20px",
                  }}
                >
                  <img src={locked} alt="pig0" style={{ height: "50px", width: "60px" }} />
                </div>
                <h3 className={classes.instruction} style={{marginLeft: "20px"}}>Crypto</h3>
              </Grid>
            </Grid>
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
