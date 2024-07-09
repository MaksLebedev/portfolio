import React from "react";
import photo from "../../../assets/images/photo.webp";
import { Container } from "../../../components/commonComponents/Container";
import { FlexWrapper } from "../../../components/commonComponents/FlexWrapper";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I am <span>Maksim Lebedev</span>
            </S.Name>
            <S.MainTitle>A Web developer</S.MainTitle>
          </div>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt="photo_developer" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
