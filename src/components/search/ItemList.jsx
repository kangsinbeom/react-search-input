import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Item from "./Item";

function ItemList() {
  const fetchData = useSelector((state) => state.fetchData);
  return (
    <StList>
      {fetchData.map((data, index) => (
        <Item key={index} data={data} />
      ))}
    </StList>
  );
}

const StList = styled.div`
  border-radius: 16px;
  background-color: #e4e2df;
  margin-left: auto;
  margin-right: auto;
  max-width: 48rem;
  width: 100%;
  display: block; // 이거 왜 필요한지 알아보자
  box-sizing: border-box; // 이거도 왜 필요한지 알아보자
`;

export default ItemList;
