import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  RegImg: {
    display: "flex",
    marginTop: "30px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  RegDiv: {
    display: "flex",
    marginTop: "65px",
    justifyContent: "center",
  },
  RegLabel: {
    color: "#0A1B28",
    fontSize: "14px",
    lineHeight: "20px",
  },
  RegInput: {
    marginTop: "8px !important",
    height: "48px",
    width: "100%",
    borderRadius: "12px",
    padding: "12px, 16px, 12px, 16px",
    background: "#F2F2F2",
    border: "none",
  },
  RegLoginIcon: {
    margin: "12px 16px",
  },
  RegLoginEye: {
    margin: "0 20px",
  },
}));

export default useStyles;
