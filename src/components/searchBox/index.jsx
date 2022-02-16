import React from "react";
import styled from "styled-components";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <SearchField
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

const SearchField = styled.input`
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 200px;
  line-height: 30px;
  margin-bottom: 30px;
`;
