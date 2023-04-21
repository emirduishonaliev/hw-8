import React, { forwardRef } from "react";
import styled from "styled-components";

export const Input = forwardRef((props, ref) => {
  const { inputType, labelName, id } = props;
  return (
    <div>
      <StyledLabel htmlFor={id}>{labelName}</StyledLabel>
      <StyledInput ref={ref} type={inputType} id={id} />
    </div>
  );
});

const StyledInput = styled.input`
  border: 1px solid black;
  width: 600px;
  height: 30px;
  margin: 10px;
`;

const StyledLabel = styled.label`
  text-align: left;
  margin-left: 10px;
  font-weight: bold;
`;
