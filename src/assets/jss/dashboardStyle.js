const dashboardStyle = (theme) => ({
  signUpLink: {
    fontSize: "12px",
    color: "#1976d2",
    textDecoration: "underline",
    cursor: "pointer",
  },
  background: {
    backgroundColor: "#faebd7",
    minHeight: "93vh",
    minWidth: "100vw",
    paddingTop: "10%"
  },
  card: {
    background: "white",
    paddingLeft: "30px",
    paddingRight: "30px",
    borderRadius: "10px",
    width: "35%",
    [theme.breakpoints.down('md')]: {
      width: "100%",
    },
  },
  title: {
    fontSize: "22px",
    fontWeight: "700",
  },
  button: {
    "&.MuiButton-contained": {
      backgroundColor: "#4a9acf",
      "&:hover": {
        backgroundColor: "#4a9acf",
      },
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#4a9acf",
    },
  },
  instruction: {
    marginBottom: "25px",
  },
  loader: {
    marginBottom: "10px",
  },
  chatBox: {
    marginTop: "30px",
    marginBottom: "30px",
    border: "1px solid #ababab",
    borderRadius: "3px",
    width: "100%",
  },
  chatTitle: {
    flexGrow: 1,
  },
  icon: {
    color: "black",
  },
  titleItem: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ababab",
    backgroundColor: "#f5f5f5",
  },
  messageBox: {
    height: "40vh",
    paddingTop: "5px",
    paddingLeft: "5px",
    paddingRight: "5px",
    overflowY: "auto",
  },
  inputField: {
    "& .MuiFilledInput-input": {
      background: "#f9f9f9",
    },
    "& .Mui-focused": {
      background: "#f9f9f9",
    },
    "&.MuiFilledInput-root": {
      paddingRight: "0px",
    },
  },
  adornment: {
    backgroundColor: "#f9f9f9",
    padding: "24px 14px",
    margin: "0px",
    "&.MuiInputAdornment-root": {
      margin: "0px",
    },
  },
  partnerMessage: {
    backgroundColor: "#f5f5f5",
    width: "fit-content",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  selfMessage: {
    background: "#faebd7",
    width: "fit-content",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  circleIcon: {
    color: "#08dd08",
    transform: "scale(0.5)",
  },
});

export default dashboardStyle;
