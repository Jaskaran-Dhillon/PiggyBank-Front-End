import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//styles
import styles from "assets/jss/headerStyle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" classes={{ root: classes.appBar }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PiggyBank
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {`Welcome ${user.firstName}!`}
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/logout");
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {props.children}
    </div>
  );
}
