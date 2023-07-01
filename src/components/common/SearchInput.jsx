import React from "react";
import styled from "styled-components";
import { useInput } from "../../hooks/useInput";

function SearchInput() {
  return <StSearchInput placeholder="search" onSubmit={useInput} />;
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
    color: #fff;
  }
`;

export default SearchInput;
