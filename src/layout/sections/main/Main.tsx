import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
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
  margin-top: 65px;

  &::before {
    content: "";
    position: absolute;
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    top: -20px;
    right: -34px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -20px;
      right: -15px;
    }
  }
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

const MainTitle = styled.h1`
  ${font({
    family: "'Poppins', sans-serif",
    weight: 400,
    Fmax: 27,
    Fmin: 20,
  })};

  /* font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 27px; */
`;

const Name = styled.h2`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 50,
    Fmin: 36,
  })};

  /* font-family: 'Josefin Sans, sans-serif';
  font-style: normal;
  font-weight: 700;
  font-size: 50px; */
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

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

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`;

const SmallText = styled.h2`
  ${font({
    family: "'Poppins', sans-serif",
    weight: 400,
    Fmax: 14,
    Fmin: 12,
  })};

  /* font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px; */
`;
