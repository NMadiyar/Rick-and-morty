import React from "react";
import useStyles from "../styles/registration.styles";
import useBase from "../ui/base";
import useText from "../styles/text.styles";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Input,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import useStylesCreateAcc from "../styles/createAcc.styles";

function Options() {
  const classes = useStyles();
  const base = useBase();
  const text = useText();
  const history = useHistory();
  const classesAcc = useStylesCreateAcc();
  return (
    <>
      <Container maxWidth="xs" className={base.Container}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <Link to="/Options" className={classesAcc.createBack}>
            <img src="../icons/Arrow.back24.svg" />
          </Link>
          <Typography
            style={{ marginLeft: "20px" }}
            className={text.TextTitleOptions}
          >
            Настройки
          </Typography>
        </div>

        <div style={{ display: "flex" }}>
          <div>
            <img src="../images/Morty.png" />
          </div>
          <div style={{ marginLeft: "16px" }}>
            Имя Фамилия<div>Login</div>
          </div>
        </div>

        <div>
          <Button type="submit" className={base.ButtonTransparent}>
            Редактировать
          </Button>
        </div>

        <div
          style={{ margin: "2px 0 36px 0" }}
          className={classesAcc.LineDiv}
        ></div>

        <Typography style={{ marginBottom: "28px" }} className={text.TextGray3}>
          Внешний вид
        </Typography>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img src="../icons/Color,Palette.svg" />
          </div>
          <div>
            Темная тема<div>Включена</div>
          </div>
          <div>
            <img src="../icons/Arrow.5.svg" />
          </div>
        </div>

        <div style={{ margin: "36px 0" }} className={classesAcc.LineDiv}></div>

        <Typography style={{ marginBottom: "24px" }} className={text.TextGray3}>
          О приложении
        </Typography>

        <Typography className={text.TextSimple}>
          Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет
          изготовления концен-трирован- ной темной материи.
        </Typography>

        <div style={{ margin: "36px 0" }} className={classesAcc.LineDiv}></div>

        <Typography style={{ marginBottom: "24px" }} className={text.TextGray3}>
          Версия приложения
        </Typography>

        <div style={{ marginBottom: "60px" }}>
          <Typography className={text.TextSimple}>
            Rick & Morty v1.0.0
          </Typography>
        </div>
        <div style={{ marginBottom: "120px" }}></div>
      </Container>

      <footer className={base.Footer}>
        <div>
          <Button
            onClick={() => {
              history.push("/Characters");
            }}
            style={{ padding: "0 0 0 0 " }}
          >
            <div>
              <img src="icons/CharactersUnselected.svg" />
            </div>
          </Button>
          <Button
            onClick={() => {
              history.push("/Location");
            }}
            style={{ padding: "0 0 0 0 " }}
          >
            <div>
              <img src="icons/location.svg" />
            </div>
          </Button>
          <Button
            onClick={() => {
              history.push("/Episodes");
            }}
            style={{ padding: "0 0 0 0 " }}
          >
            <div>
              <img src="icons/episodes.svg" />
            </div>
          </Button>
          <Button
            onClick={() => {
              history.push("/Options");
            }}
            style={{ padding: "0 0 0 0 " }}
          >
            <div>
              <img src="icons/OptionsSelected.svg" />
            </div>
          </Button>
        </div>
      </footer>
    </>
  );
}

export default Options;
