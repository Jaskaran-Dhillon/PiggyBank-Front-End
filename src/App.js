import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

//components
import Header from "components/Header";
import RequireAuth from "HOC/RequireAuth";

//views
import LoginPage from "views/LoginPage";
import SignupPage from "views/SignupPage";
import Dashboard from "views/Dashboard";
import Logout from "views/Logout";
import Module from "views/Module";

//styles
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Theme from "theme/Theme";

const theme = createTheme(Theme);

function App() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <Route
          path="/"
          element={
            <RequireAuth>
              <Header>
                <Dashboard />
              </Header>
            </RequireAuth>
          }
        /> */}
        <Routes>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Header>
                  <Dashboard />
                </Header>
              </RequireAuth>
            }
          />
          <Route
            path="/modules/:module"
            element={
              <RequireAuth>
                <Header>
                  <Module />
                </Header>
              </RequireAuth>
            }
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="*"
            element={loggedIn ? <Navigate to="/dashboard" replace={true} /> : <Navigate to="/login" replace={true} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
