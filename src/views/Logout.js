import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "store/actions/auth.action";

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(logout());
    navigate("/login");
  });

  return <Container component="main" maxWidth="xs"></Container>;
}
