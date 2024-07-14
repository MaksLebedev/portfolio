import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

const Main = styled.section`
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
    top: -20px;
    right: -14px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -20px;
      right: -15px;
    }
  }

  @media ${theme.media.mobile} {
    margin-top: 65px;
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

  p {
    display: none;
  }

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

export const S = {
  Main,
  PhotoWrapper,
  Photo,
  MainTitle,
  Name,
  SmallText,
};
