import React from "react";
import { Button } from "../../../components/commonComponents/Button";
import { Container } from "../../../components/commonComponents/Container";
import { SectionTitle } from "../../../components/commonComponents/SectionTitle";
import { S } from "./Contact_Styles";

export const Contact: React.FC = () => {
  return (
    <S.Contacts>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form>
          <S.Field placeholder={"Name"} />
          <S.Field placeholder={"Subject"} />
          <S.Field as={"textarea"} placeholder={"Message"} />
          <Button type={"submit"}>Send message</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
