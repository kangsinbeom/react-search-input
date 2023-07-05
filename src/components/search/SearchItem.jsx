import React from "react";
import styled from "styled-components";

function SearchItem({ data }) {
  const { title } = data;
  console.log("data는 ", data);

  return <StyledSearchItem>{title}</StyledSearchItem>;
}

export default SearchItem;

const StyledSearchItem = styled.div`
  width: 100%;
  background-color: #f1f3f4;
  border-radius: 10px;
  margin-bottom: 10px;
`;
