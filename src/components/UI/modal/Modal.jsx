import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

export const Modal = ({ children, closeModal }) => {
  return (
    <>
      {createPortal(
        <>
          <Backdrop onClick={closeModal} />
          <Card>{children}</Card>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

const Card = styled.div`
  background-color: white;
  padding: 30px;
  min-width: 400px;
  min-height: 250px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
`;
