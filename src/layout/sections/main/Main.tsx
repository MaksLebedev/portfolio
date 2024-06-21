import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <span>Hi There</span>
          <Name>I am Maksim Lebedev</Name>
          <MainTitle>A Web developer</MainTitle>
        </div>
        <Photo src={photo} alt="photo_developer" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #fff5e7;
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const MainTitle = styled.h1`
  color: red;
`;

const Name = styled.h2`
  color: green;
`;
