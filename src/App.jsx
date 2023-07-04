import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import instance from "./apis/api";
function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    instance
      .get("/v2/search/web")
      .then((res) => {
        console.log("결과 : ", res);
        setDatas(res.data.documents);
        console.log(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {datas?.map((data, index) => (
        <div key={index}>{data.contents}</div>
      ))}
    </>
  );
}

export default App;

// 데이터 출력까지 성공
