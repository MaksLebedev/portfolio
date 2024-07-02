import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <SmallText>Hi There</SmallText>
            <Name>I am Maksim Lebedev</Name>
            <MainTitle>A Web developer</MainTitle>
          </div>
          <Photo src={photo} alt="photo_developer" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #fff5e7;
  display: flex;
  /* align-items: center; */
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const MainTitle = styled.h1`
  /* color: red; */
`;

const Name = styled.h2`
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;
`;

const SmallText = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;
