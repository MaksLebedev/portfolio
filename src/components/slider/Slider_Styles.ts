import { theme } from "./../../styles/Theme";
import styled from "styled-components";

const Slider = styled.div`
  /* border: 1px solid red; */
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slide = styled.div`
  text-align: center;
`;

const Text = styled.p``;

const Name = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: inline-block;
  margin: 22px 0 35px;
`;

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.5);

    & + span {
      margin-left: 5px;
    }

    &.active {
      border-radius: 20px;
      width: 20px;
      height: 7px;
      background-color: ${theme.colors.accent};
    }
  }
`;

export const S = {
  Slider,
  Slide,
  Text,
  Name,
  Pagination,
};
