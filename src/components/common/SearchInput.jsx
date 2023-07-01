import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
function SearchInput() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const search = input;
    const KAKAO_KEY = "a62f8adfb182625e79bba243fd847be3";
    const Kakao = axios.create({
      baseURL: "https://dapi.kakao.com",
      headers: {
        Authorization: `KakaoAK ${KAKAO_KEY}`,
      },
    });
    const kakaoSearch = (params) => {
      return Kakao.get(`/v2/search/web`, { params });
    };
    try {
      if (search === "") {
        setData([]);
      } else {
        const params = {
          query: search,
          sort: "accuracy",
        };
        const result = await kakaoSearch(params);
        if (result) {
          setData(result.data.documents);
        } else {
          console.log("fail");
        }
      }
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <StSearchInput placeholder="search" value={input} onChange={onChange} />
    </form>
  );
}

const StSearchInput = styled.input`
  width: 100%;
  min-height: 50px;
  margin-bottom: 0px;
  padding: 0.5rem 1rem;
  border-style: solid;
  border-width: 1px;
  border-color: #474747;
  border-radius: 30px;
  background-color: #474747;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  color: #fff;
  font-size: 1rem;
  line-height: 1.6;
  ::placeholder {
    color: #fff; // 이거 안되는 이유
  }
`;

export default SearchInput;
