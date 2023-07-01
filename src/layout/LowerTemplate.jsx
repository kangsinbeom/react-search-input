import React from "react";
import styled from "styled-components";
import ItemList from "../components/search/ItemList";
function LowerTemplate() {
  return (
    <StLowerTemplate>
      <ItemList />
    </StLowerTemplate>
  );
}

const StLowerTemplate = styled.div`
  background-color: #474747;
  padding: 6rem;
`;

export default LowerTemplate;
