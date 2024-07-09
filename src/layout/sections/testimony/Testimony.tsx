import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/commonComponents/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/commonComponents/FlexWrapper";
import { S } from "../skills/Skills_Styles";
import { Container } from "../../../components/commonComponents/Container";
import { St } from "./Testimony_Styles";

export const Testimony: React.FC = () => {
  return (
    <St.Testimony>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"}>
          <S.IconWrapper>
            <Icon iconId={"quote"} />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </St.Testimony>
  );
};
