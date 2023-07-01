import React from "react";
import SearchInput from "../components/common/SearchInput";
import styled from "styled-components";

function UpperTemplate() {
  return (
    <StUpperTemplate>
      <h1>Quick Search for Webflow</h1>
      <SearchInput />
    </StUpperTemplate>
  );
}

const StUpperTemplate = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 48rem;
  width: 100%;
  display: block; // 이거 왜 필요한지 알아보자
  box-sizing: border-box; // 이거도 왜 필요한지 알아보자

  h1 {
    box-sizing: border-box;
    color: white;
    text-align: center;
    font-size: 3.5rem;
    line-height: 1.2;
    font-weight: 700;
  }
`;

export default UpperTemplate;
