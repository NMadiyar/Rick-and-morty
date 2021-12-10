import React, { useState } from "react";
import useStyles from "../styles/registration.styles";
import useText from "../styles/text.styles";
import {
  Container,
  Typography,
  Button,
  FormControl,
  Input,
  InputAdornment,
} from "@material-ui/core";
import useStylesCreateAcc from "../styles/createAcc.styles";
import { Link } from "react-router-dom";
import base from "../ui/base";
import useBase from "../ui/base";
import axios from "axios";

function CreateAcc() {
  const text = useText();
  const classes = useStyles();
  const classesAcc = useStylesCreateAcc();
  const base = useBase();

  const [state, setState] = useState({
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    patronymic: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const subTest = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://173.249.20.184:7001/api/Account/Register",
      data: {
        userName: state.userName,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
        patronymic: state.patronymic,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container maxWidth="xs" className={base.Container}>
        <div>
          <Link to="/Registration" className={classesAcc.createBack}>
            <img src="../icons/Arrow.24.svg" />
          </Link>
        </div>

        <div className={classesAcc.Title}>
          <Typography className={text.TextTitle}>Создать аккаунт</Typography>
        </div>

        <div className={classesAcc.FormDiv}>
          <form style={{ width: "100%" }} onSubmit={subTest}>
            <label className={text.Text} htmlFor="Name">
              Имя
            </label>
            <Input
              disableUnderline={true}
              placeholder="Имя"
              style={{ padding: "12px 16px 12px 16px" }}
              className={classes.RegInput}
              id="firstName"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
            ></Input>
            <div style={{ margin: "10px 0 0 0" }}>
              <label className={text.Text} htmlFor="Surname">
                Фамилия
              </label>
              <Input
                disableUnderline={true}
                placeholder="Фамилия"
                style={{ padding: "12px 16px 12px 16px" }}
                className={classes.RegInput}
                id="lastName"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
              ></Input>
            </div>
            <div style={{ margin: "10px 0 0 0" }}>
              <label className={text.Text} htmlFor="Patronymic">
                Отчество
              </label>
              <Input
                disableUnderline={true}
                placeholder="Отчество"
                style={{ padding: "12px 16px 12px 16px" }}
                className={classes.RegInput}
                id="patronymic"
                name="patronymic"
                value={state.patronymic}
                onChange={handleChange}
              ></Input>
            </div>

            <div
              style={{ margin: "36px 0" }}
              className={classesAcc.LineDiv}
            ></div>

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
            <div style={{ marginTop: "10px" }}>
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
                value={state.password}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <img
                      className={classes.RegLoginIcon}
                      src="../icons/Lock, Password, Login.svg"
                    />
                  </InputAdornment>
                }
              ></Input>
            </div>

            <div style={{ margin: "63px 0 25px 0" }}>
              <Button type="submit" className={base.RegButton}>
                Создать
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default CreateAcc;
