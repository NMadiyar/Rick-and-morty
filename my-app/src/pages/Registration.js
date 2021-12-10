import React, { useState } from "react";
import {
  CssBaseline,
  Container,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "../styles/registration.styles";
import useText from "../styles/text.styles";
import { Link, Redirect, useHistory } from "react-router-dom";
import useStylesCreateAcc from "../styles/createAcc.styles";
import Password from "../auth/Password";
import InputAdornments from "../auth/Password";
import CreateAcc from "./CreateAcc";
import useBase from "../ui/base";
import Authorisation from "../auth/Authorisation";
import axios from "axios";
import Characters from "./Characters";

function Registration(authorized) {
  const classes = useStyles();
  const text = useText();
  const createAcc = useStylesCreateAcc();
  const base = useBase();
  const history = useHistory();

  const [state, setState] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    axios({
      method: "post",
      url: "http://173.249.20.184:7001/api/Account/Login",
      data: {
        userName: state.userName,
        password: state.password,
      },
    })
      .then((res) => {
        if (res) {
          console.log(res);
        }
      })
      .catch((err) => {
        if (err) {
          alert(err);
        }
      });
  };

  return (
    <>
      <Container maxWidth="xs" className={base.Container}>
        <div>
          <img className={classes.RegImg} src="../images/RegImg.jpg" />
        </div>

        <div className={classes.RegDiv}>
          <form onSubmit={handleSubmit} method="post">
            <label className={text.Text} htmlFor="login">
              Логин
            </label>
            <Input
              disableUnderline={true}
              placeholder="Логин"
              className={classes.RegInput}
              id="userName"
              name="userName"
              value={state.userName}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <img
                    className={classes.RegLoginIcon}
                    src="../icons/login.svg"
                  />
                </InputAdornment>
              }
            ></Input>

            <label className={text.Text} htmlFor="password">
              Пароль
            </label>
            <Input
              type="password"
              disableUnderline={true}
              placeholder="Пароль"
              className={classes.RegInput}
              id="password"
              name="password"
              onChange={handleChange}
              value={state.password}
              startAdornment={
                <InputAdornment position="start">
                  <img
                    className={classes.RegLoginIcon}
                    src="../icons/Lock, Password, Login.svg"
                  />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <img
                    className={classes.RegLoginEye}
                    src="../icons/Eye.6.svg"
                  ></img>
                </InputAdornment>
              }
            ></Input>

            <div style={{ margin: "24px 0" }}>
              <Button
                onClick={() => {
                  history.push("/Characters");
                }}
                type="submit"
                className={base.RegButton}
              >
                Войти
              </Button>
            </div>
          </form>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography className={text.TextGray}>
            У вас еще нет аккаунта?
          </Typography>
          <Link to="/CreateAccount" className={text.TextGreen}>
            Cоздать
          </Link>
        </div>
      </Container>
    </>
  );
}

export default Registration;
