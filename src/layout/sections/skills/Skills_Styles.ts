import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section``;

const Skill = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  width: 330px;
  flex-grow: 1;
  padding: 42px 20px 52px;

  @media ${theme.media.mobile} {
    padding: 62px 40px;
  }
`;

const SkillTitle = styled.h3`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-top: 70px;
  margin-bottom: 15px;
  color: ${theme.colors.font};
`;

const SkillText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  line-height: 1.4;
  color: ${theme.colors.font};
`;

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(-45deg) translate(-50%, -50%);
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`;

export const S = {
  Skills,
  Skill,
  SkillTitle,
  SkillText,
  IconWrapper,
};
