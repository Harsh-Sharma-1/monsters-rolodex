import React, { memo } from "react";
import styled from "styled-components";
import Card from "../card";
const CardList = (props) => {
  return (
    <Container>
      {" "}
      {props.monsters.map((el) => (
        <Card key={el.id} monster={el} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 85vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 auto;
  grid-gap: 20px;
  box-sizing: border-box;
`;

export default memo(CardList);
