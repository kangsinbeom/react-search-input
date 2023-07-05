import { useState } from "react";
import { kakaoSearch } from "../../apis/api";
import { setData } from "../../redux/modules/data";
import { useDispatch } from "react-redux";

function SearchInput() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const kakao = await kakaoSearch(input);
    dispatch(setData(kakao.data.documents));
  };
  // setData 가죠오는거까지는 확인 완료 dispatch가 작동이 안되는것으로 파악이 됨

  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </form>
  );
}

export default SearchInput;
