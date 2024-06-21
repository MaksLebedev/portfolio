import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper>
        <Skill iconId={"code"} />
        <Skill iconId={"css"} />
        <Skill iconId={"react"} />
        <Skill iconId={"typeScript"} />
        <Skill iconId={"styledComponents"} />
        <Skill iconId={"figma"} />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #ffe5e4;
  min-height: 100vh;
`;
