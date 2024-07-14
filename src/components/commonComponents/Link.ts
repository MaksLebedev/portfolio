import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";

export const Link = styled.a<{ active?: boolean }>`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 10px;

  position: relative;

  z-index: 1;

  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 5px;

    z-index: -1;
    height: 0;
    transition: ${theme.animations.transition};

    ${(props) =>
      props.active &&
      css<{ active?: boolean }>`
        height: 10px;
      `};
  }
`;
