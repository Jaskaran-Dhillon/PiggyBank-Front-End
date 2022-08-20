const signupPageStyle = () => ({
  signUpLink: {
    fontSize: "12px",
    color: "#1976d2",
    textDecoration: "underline",
    cursor: "pointer",
  },
  background: {
    backgroundColor: "#faebd7",
    minHeight: "100vh",
    minWidth: "100vw",
  },
  card: {
    background: "white",
    paddingLeft: "50px",
    paddingRight: "50px",
    borderRadius: "10px",
  },
  title: {
    fontSize: "22px",
    fontWeight: "700",
  },
  signupButton: {
    "&.MuiButton-contained": {
      backgroundColor: "#4a9acf",
      "&:hover": {
        backgroundColor: "#4a9acf",
      },
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#4a9acf",
    },  },
});

export default signupPageStyle;
