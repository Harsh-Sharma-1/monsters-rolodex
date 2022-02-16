import React from "react";
import styled from "styled-components";

const Card = ({ monster }) => {
  return (
    <Container>
      <img src={`https://robohash.org/${monster.id}?set=set2`} alt="" />
      <h2>{monster.name}</h2>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  box-sizing: border-box;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: transformZ(0);
  transition: transform 0.25s ease-out;

  img {
    width: 100%;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export default Card;
