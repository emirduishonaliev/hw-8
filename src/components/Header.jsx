import React, { useState } from "react";
import { Button } from "./UI/button/Button";
import { AddMovieModal } from "./AddMovieModal";
import styled from "styled-components";

export const Header = ({ addNewMovie }) => {
  const [showForm, setShowForm] = useState(false);

  const addMovieClickHandler = () => {
    setShowForm((prev) => !prev);
  };
  return (
    <StyledHeader>
      {showForm ? (
        <AddMovieModal
          addNewMovie={addNewMovie}
          addMovieClickHandler={addMovieClickHandler}
        />
      ) : null}
      <h1>Favorite Movies</h1>
      <Button
        color="#f67722"
        onClick={addMovieClickHandler}
        title="ADD MOVIE"
      />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3f3fe3;
  color: white;
`;
