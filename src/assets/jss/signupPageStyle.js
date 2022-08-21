const signupPageStyle = () => ({
  signUpLink: {
    fontSize: "12px",
    color: "#1976d2",
    textDecoration: "underline",
    cursor: "pointer",
  },
  background: {
    //backgroundColor: "#faebd7",
    minHeight: "100vh",
    minWidth: "100vw",
  },
  card: {
    background: "white",
    paddingLeft: "50px",
    paddingRight: "50px",
    borderRadius: "10px",
    paddingTop: "40px",
  },
  title: {
    fontSize: "22px",
    fontWeight: "700",
  },
  signupButton: {
    "&.MuiButton-contained": {
      color: "#E0B19D",
      fontWeight: 700,
      border: "4.72616px solid #E0B19D",
      borderRadius: "15.75px",
      boxShadow: "0px 6px 6px #E0B19D",
      fontSize: "16px",
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "white",
      },
    },
    "&.Mui-focusVisible": {
      backgroundColor: "white",
    },
  },
  input: {
    '& label.Mui': {
      color: "#E0B19D",
    },
    '& label.Mui-focused': {
      color: "#E0B19D",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'orange',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: "#E0B19D",
      },
      '&:hover fieldset': {
        borderColor: "#E0B19D",
      },
      '&.Mui-focused fieldset': {
        borderColor: "#E0B19D",
      },
    },
    "& .MuiFormLabel-root":{
      color: "#E0B19D"
    }
  }
});

export default signupPageStyle;
