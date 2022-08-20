import { LOGIN_USER, LOGOUT_USER } from "store/actions/auth.action";

const signUserIn = (user) => {
  //localStorage.setItem("user", JSON.stringify(user));
  //delete user.token;

  return {
    loggedIn: true,
    user: user
  };
};

const logUserOut = () => {
  //localStorage.removeItem("user");
  return {};
}

export default function auth(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return signUserIn(action.user);
    case LOGOUT_USER:
      return logUserOut();
    default:
      return state;
  }
}
