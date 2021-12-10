import React, { useState } from "react";
import axios from "axios";

function Creating() {
  const [state, setState] = useState({
    login: "",
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
    e.preventDefault();
    console.log(state);
  };
}

export default Creating;
