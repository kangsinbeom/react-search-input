import { useEffect, useState } from "react";
import "./App.css";
import api, { kakaoSearch } from "./apis/api";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("input : ", input);
    const kakao = await kakaoSearch(input);
    setData(await kakaoSearch(input));
  };
  console.log("data :", data);
  return (
    <>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button>검색</button>
      </form>
    </>
  );
}
// 왜 changeHandler는 ()=> onChangeHandler로 쓰면 안되는가??
// 아니구나 써도 되는데 event를 인자로 안줘서 그러는구나
export default App;

// 데이터 출력까지 성공

// input값에 따른 데이터 출력 시도 (input 값을 params에 query로 넣어보자)
// 1. 핸들링 할 함수를 만들어서 import 해온다

// 핸들러를 만들어서 적용을 했더니 400에러가 뜬다 async로 비동기적으로 만들지 않아서인지 의심이 가서 useEffect부분을 비동기적으로
// 바꾸는 것을 실행해보겠음
