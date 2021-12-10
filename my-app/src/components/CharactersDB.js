import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

function CharactersDB() {
  const [state, setState] = useState({
    id: "",
    fullName: "",
  });

  useEffect(() => {
    axios({
      method: "get",
      url: "http://173.249.20.184:7001/api/Characters/GetAll",
      params: {
        PageNumber: "1",
        PageSize: "200",
      },
    })
      .then((res) => {
        const result = res.data;
        setState((prevState) => prevState + result.id);
      })
      .catch((err) => console.error(err));
  }, [setState]);
  return (
    <>
      <Button style={{ height: "100px", width: "100px", background: "blue" }} />
      <div></div>
      <div></div>
    </>
  );
}

export default CharactersDB;
