import { makeStyles } from "@material-ui/core";
import React from "react";

const useStylesCreateAcc = makeStyles((theme) => ({
  createBack: {
    display: "flex",
    marginLeft: "0",
    marginTop: "30px",
    marginBottom: "28px",
    justifyContent: "left",
    padding: "0",
  },
  Title: {
    display: "flex",
  },
  FormDiv: {
    display: "flex",
    marginTop: "40px",
  },
  LineDiv: {
    display: "flex",
    borderTop: "2px solid #F2F2F2",
  },
}));

export default useStylesCreateAcc;
