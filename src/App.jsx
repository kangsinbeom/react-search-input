import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import instance from "./apis/api";
function App() {
  useEffect(() => {
    instance
      .get("/v2/search/web")
      .then((res) => {
        console.log("결과 : ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <></>;
}

export default App;
