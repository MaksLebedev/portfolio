import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/commonComponents/SectionTitle";
import { Button } from "../../../components/commonComponents/Button";
import { Container } from "../../../components/commonComponents/Container";
import { FlexWrapper } from "../../../components/commonComponents/FlexWrapper";

export const Slogan: React.FC = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction="column" justify="center" align="center">
          <SectionTitle>I Am Available For Freelance</SectionTitle>
          <Button type={"button"}>Hire me</Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #ffe1f5;
`;
