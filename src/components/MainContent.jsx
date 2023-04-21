import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./UI/button/Button";
import { Modal } from "./UI/modal/Modal";

export const MainContent = ({ movies, setMovies, title, url, rating, id }) => {
  const [deleteMovieModal, setDeleteMovieModal] = useState(false);

  const openDeleteModal = () => {
    setDeleteMovieModal((prev) => !prev);
  };
  const handleDelete = () => {
    const filteredMovies = movies.filter((elem) => elem.id !== id);
    setMovies(filteredMovies);
  };

  return (
    <Card>
      <>
        <StyledImg src={url} />
      </>
      <div>
        <StyledH3>{title}</StyledH3>
        <BtnContainer>
          <StyledH5>{rating}/5 stars</StyledH5>
          <Button onClick={openDeleteModal} title="Delete" color="red" />
          {deleteMovieModal ? (
            <Modal closeModal={openDeleteModal}>
              <StyledH4>Are you sure wanna delete?</StyledH4>
              <BtnContain>
                <Button color="red" title="No" onClick={openDeleteModal} />
                <Button color="blue" title="Yes" onClick={handleDelete} />
              </BtnContain>
            </Modal>
          ) : null}
        </BtnContainer>
      </div>
    </Card>
  );
};

const Card = styled.div`
  background-color: rgba(108, 149, 180, 0.737);
  display: flex;
  align-items: center;
  width: 655px;
  height: 165px;
  margin: 0 auto;
  border-radius: 14px;
  margin-top: 15px;
`;

const StyledImg = styled.img`
  width: 250px;
  height: 166px;
  border-radius: 15px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
  margin-top: 12px;
`;

const StyledH5 = styled.h5`
  background-color: rgb(246, 119, 34);
  color: white;
  width: 86px;
  height: 23px;
  border-radius: 25px;
  padding-left: 30px;
  padding-top: 10px;
`;

const StyledH3 = styled.h3`
  margin-left: 23px;
`;

const StyledH4 = styled.h4`
  text-align: center;
`;

const BtnContain = styled.div`
  display: flex;
  justify-content: center;
`;
