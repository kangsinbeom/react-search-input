import { useState } from "react";
import { kakaoSearch } from "../../apis/api";

function SearchInput() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const kakao = await kakaoSearch(input);
    setData(kakao.data.documents);
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </form>
  );
}

export default SearchInput;
