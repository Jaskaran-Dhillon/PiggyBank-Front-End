import * as React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import pig from "assets/images/pig.png";

//mui components
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

//components
import Grid from "@mui/material/Grid";

//styles
import styles from "assets/jss/loginPageStyle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(styles);

export default function Home() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" classes={{ root: classes.appBar }} elevation={0}>
          <Toolbar>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              PiggyBank
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container component="main" className={classes.background2}>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <div className={classes.card}>
              <Grid container flexDirection="column">
                <Grid item xs={4} alignSelf="center">
                  <img src={pig} alt="pig0" style={{ height: "300px", width: "250px",  }} />
                </Grid>
                <Grid item xs={12}>
                  <p style={{ textAlign: "center", color: "#EBB145", fontWeight: 900, fontSize: "25px" }}>
                    The easiest way to learn financial literacy at your fingertips!
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <Grid container direction="row" alignItems="center" justifyContent="space-around">
                    <Grid item xs={5}>
                      <Button
                        style={{
                          marginBottom: "10px",
                          border: "2px solid #E0B19D",
                          boxShadow: "0px 3px 3px #EAC5B2",
                          borderRadius: "15.7539px",
                          color: "#E0B19D",
                          fontWeight: "900px",
                          fontSize: "16px",
                          width: "100%",
                        }}
                        onClick={() => navigate("/signup")}
                      >
                        Create Account
                      </Button>
                    </Grid>
                    <Grid item xs={5}>
                      <Button
                        style={{
                          marginBottom: "10px",
                          border: "2px solid #E0B19D",
                          boxShadow: "0px 3px 3px #EAC5B2",
                          borderRadius: "15.7539px",
                          color: "#E0B19D",
                          fontWeight: "900px",
                          fontSize: "16px",
                          width: "100%",
                        }}
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
