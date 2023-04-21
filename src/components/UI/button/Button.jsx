import React from "react";
import styled from "styled-components";

export const Button = ({ title, onClick, color }) => {
  return (
    <StyledButton style={{ background: color }} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  color: white;
  width: 100px;
  height: 30px;
  border-style: none;
  border-radius: 5px;
  cursor: pointer;
  padding-top: 3px;
  margin-left: 10px;
`;
