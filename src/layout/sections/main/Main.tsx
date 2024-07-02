import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Maksim Lebedev</span>
            </Name>
            <MainTitle>A Web developer</MainTitle>
          </div>
          <PhotoWrapper>
            <Photo src={photo} alt="photo_developer" />
          </PhotoWrapper>
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

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    top: -24px;
    right: -34px;
    z-index: -1;
  }
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const MainTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 27px;
`;

const Name = styled.h2`
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0px;
      z-index: -1;
    }
  }
`;

const SmallText = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
`;
