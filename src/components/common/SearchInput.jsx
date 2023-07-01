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
