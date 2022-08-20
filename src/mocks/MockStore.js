import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

export function MockStore(props) {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const store = mockStore({
    auth: {
      loggedIn: props.loggedIn || false,
      user: {
        userId: '22a98df7-f796-4493-8e9f-ebbf9a69e5a9',
        email: 'jas.dhillon@hotmail.com',
        firstName: 'Jaskaran',
        lastName: 'Dhillon'
      }
    }
  });

  return <Provider store={store}>{props.children}</Provider>;
};