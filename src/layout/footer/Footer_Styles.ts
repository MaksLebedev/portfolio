import styled from "styled-components";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  min-height: 20vh;
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`;

const Name = styled.span`
  ${font({
    family: '"Josefin Sans", sans-serif',
    weight: 700,
    Fmax: 22,
    Fmin: 16,
  })}
  /* font-family: "Josefin Sans", sans-serif;
  font-weight: 700; */
  /* font-size: 22px; */
  letter-spacing: 0.14em;
  color: ${theme.colors.font};
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accent};

  &:hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.imageHoverColor};
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`;

export const S = {
  Footer,
  Name,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright,
};
