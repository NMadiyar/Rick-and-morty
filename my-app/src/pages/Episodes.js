import React from "react";
import useStyles from "../styles/registration.styles";
import useBase from "../ui/base";
import useText from "../styles/text.styles";
import { useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Input,
  InputAdornment,
  Typography,
} from "@material-ui/core";

function Episodes() {
  const classes = useStyles();
  const base = useBase();
  const text = useText();
  const history = useHistory();

  return (
    <>
      <Container maxWidth="xs" className={base.Container}>
        <div style={{ marginTop: "54px", marginBottom: "24px" }}>
          <form>
            <label for="search"></label>
            <Input
              disableUnderline={true}
              type="search"
              placeholder="Найти персонажа"
              className={classes.RegInput}
              startAdornment={
                <InputAdornment position="start">
                  <img
                    className={classes.RegLoginIcon}
                    src="../icons/Search.svg"
                  />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <img src="../icons/Line 1.svg" />
                  <img
                    style={{ marginLeft: "10px", marginRight: "12px" }}
                    src="../icons/Filter, Sort.3.svg"
                  ></img>
                </InputAdornment>
              }
            ></Input>
          </form>
        </div>

        <div className={base.DivFlex}>
          <div>
            <Typography className={text.TextGray3}>Всего локаций:</Typography>
          </div>
          <div>
            <img style={{ marginRight: "1em" }} src="../icons/Group.svg" />
          </div>
        </div>

        <div style={{ marginBottom: "900px" }}></div>
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
              <img src="icons/EpisodesSelected.svg" />
            </div>
          </Button>
          <Button
            onClick={() => {
              history.push("/Options");
            }}
            style={{ padding: "0 0 0 0 " }}
          >
            <div>
              <img src="icons/options.svg" />
            </div>
          </Button>
        </div>
      </footer>
    </>
  );
}

export default Episodes;
