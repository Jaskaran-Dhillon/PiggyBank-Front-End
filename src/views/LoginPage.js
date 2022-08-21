import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { authService } from "../services/auth.service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "store/actions/auth.action";

//mui components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

//components
import Copyright from "components/Copyright";
import Grid from "@mui/material/Grid";

//styles
import styles from "assets/jss/loginPageStyle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(styles);

export default function LoginPage() {
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();

  const authenticateUser = async (data) => {
    try {
      const result = await authService.login(data);
      dispatch(login(result.data));
      navigate("/dashboard");
    } catch (e) {
      console.warn(e);
      toast.error("Failed to authenticate user.");
    }
  };

  const onSubmit = (data) => {
    authenticateUser(data);
  };

  return (
    <Container component="main" className={classes.background}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <div className={classes.card}>
            <Box
              sx={{
                marginTop: 25,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p className={classes.title}>Sign Into Your Account</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ mt: 1 }}>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Email Address"
                        fullWidth
                        autoComplete="email"
                        sx={{ mb: "10px" }}
                        className={classes.input}
                      />
                    )}
                    defaultValue=""
                    name="email"
                    control={control}
                  />
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Password"
                        fullWidth
                        autoComplete="password"
                        type="password"
                        sx={{ mb: "10px" }}
                        className={classes.input}
                      />
                    )}
                    defaultValue=""
                    name="password"
                    control={control}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className={classes.signInButton}
                  >
                    Sign In
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <p
                        onClick={() => {
                          navigate("/signup");
                        }}
                        className={classes.signUpLink}
                      >
                        Don't have an account? Sign Up
                      </p>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Box>
          </div>
        </Grid>
        <Grid item>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Grid>
      </Grid>
    </Container>
  );
}
