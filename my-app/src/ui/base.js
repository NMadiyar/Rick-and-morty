import React from "react";
import { makeStyles } from "@material-ui/core";

const useBase = makeStyles((theme) => ({
  Container: {
    padding: "0 28px",
  },

  RegButton: {
    alignItems: "center",
    padding: "12px 20px",
    width: "100%",
    height: "48px",
    background: "#22A2BD",
    borderRadius: "12px",
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#fff",
    letterSpacing: "0.15px",
    textTransform: "none",
    fontWeight: "normal",
    "&:hover": {
      background: "#216f80",
    },
  },
  DivFlex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Footer: {
    height: "60px",
    background: "#FFFFFF",
    boxShadow: "0px -4px 30px rgba(0, 0, 0, 0.08)",
    position: "fixed",
    bottom: "0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "8px 0px 12px",
  },
  ButtonTransparent: {
    padding: "8px 20px",
    width: "100%",
    height: "40px",
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    lineHeight: "24px",
    border: "1px solid #22A2BD",
    borderRadius: "12px",
    letterSpacing: "0.15px",
    textTransform: "none",
    fontWeight: "normal",
    margin: "30px 0px",
    color: "#22A2BD",
    "&:hover": {
      background: "#216f80",
      color: "#fff",
    },
  },
}));

export default useBase;
