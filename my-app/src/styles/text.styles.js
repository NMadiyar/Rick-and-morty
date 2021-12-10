import React from "react";
import { makeStyles } from "@material-ui/core";

const useText = makeStyles(() => ({
  Text: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    lineHeight: "20px",
  },
  TextWhite: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#fff",
    letterSpacing: "0.15px",
  },
  TextGreen: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#43D049",
    margin: "0 10px",
  },
  TextGray: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#5B6975",
  },
  TextTitle: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "34px",
    lineHeight: "36px",
    color: "#0A1B28",
    fontWeight: "700",
  },
  TextGray3: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    fontSize: "10px",
    lineHeight: "16px",

    letterSpacing: "1.5px",
    textTransform: "uppercase",

    color: "#828282",
  },
  TextBlue: {
    fontFamily: "Roboto",
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: "center",
    letterSpacing: "0.5px",
    color: "#22A2BD",
    textTransform: "none",
  },
  TextTitleOptions: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "28px",
    letterSpacing: "0.15px",
    color: "#0B1E2D",
  },
  TextSimple: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "150%",
    width: "100%",
    letterSpacing: "0.25px",

    color: "#0B1E2D",

    margin: "24px 0px",
  },
}));

export default useText;
