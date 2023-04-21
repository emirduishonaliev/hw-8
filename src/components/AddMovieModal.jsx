import { useRef } from "react";
import styled from "styled-components";
import { Input } from "./UI/input/Input";
import { Button } from "./UI/button/Button";
import { Modal } from "./UI/modal/Modal";

export const AddMovieModal = ({ addNewMovie, addMovieClickHandler }) => {
  const titleRef = useRef();
  const imgRef = useRef();
  const ratingRef = useRef();

  const saveHandler = () => {
    const data = {
      title: titleRef.current.value,
      url: imgRef.current.value,
      rating: ratingRef.current.value,
      id: Math.random(),
    };
    addNewMovie(data);
    addMovieClickHandler();
    console.log(data);
  };
  return (
    <Modal closeModal={addMovieClickHandler}>
      <ModalMovie>
        <Input
          ref={titleRef}
          labelName={"Movie Title"}
          id={titleRef}
          inputType={"text"}
          value={titleRef}
        />
        <Input
          ref={imgRef}
          labelName={"Image URL"}
          id={imgRef}
          inputType={"text"}
          value={imgRef}
        />
        <Input
          ref={ratingRef}
          labelName={"Your Rating"}
          id={ratingRef}
          inputType={"number"}
          value={ratingRef}
        />
        <ButtonContainer>
          <Button
            onClick={addMovieClickHandler}
            color="#6495ED"
            title="Cancel"
          />
          <Button color="#00008B" title="Add" onClick={saveHandler} />
        </ButtonContainer>
      </ModalMovie>
    </Modal>
  );
};

const ModalMovie = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
  margin-right: 10px;
`;
