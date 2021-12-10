import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import useStyles from "../styles/startingPage.styles";
import { Link } from "react-router-dom";
import useBase from "../ui/base";

function StartingPage() {
  const classes = useStyles();
  const base = useBase();
  return (
    <>
      <div>
        <Link to="/Registration">
          <img
            src="../images/StartingPage2.jpg"
            className={"media"}
            width="100%"
          />
          <img
            src="../images/Desktop1.jpg"
            className={"mediaDesk"}
            width="100%"
          />
        </Link>
      </div>
    </>
  );
}

export default StartingPage;
