import "./App.css";
import SearchItem from "./components/search/SearchItem";
import Outline from "./layout/Outline";
import SearchInput from "./components/search/SearchInput";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const reduxState = useSelector((state) => state); // Redux 상태를 가져옴
  console.log("redussdf", reduxState);
  const [data, setData] = useState([]); // 데이터 상태 초기화
  console.log("data", data);
  useEffect(() => {
    console.log("Redux 상태:", reduxState); // Redux 상태 로그 출력
    setData(reduxState); // Redux 상태를 데이터 상태로 업데이트
  }, [reduxState]); // Redux 상태가 변경될 때마다 useEffect 실행
  return (
    <div style={{ backgroundColor: "#e2dee5" }}>
      <h1>Posts</h1>
      <SearchInput />
      <div>
        {/* {data?.map((item, index) => (
          <SearchItem key={index} item={item} />
        ))} */}
      </div>
    </div>
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

// 왜 함수가 아니라고 할까?
