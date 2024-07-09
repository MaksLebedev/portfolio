import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section``;

const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  /* margin-top: 62px; */
  margin-top: -25px;
`;

const Field = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  background-color: ${theme.colors.secondaryBg};

  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${theme.colors.font};

  &:nth-child(3) {
    height: 155px;
    resize: none;
  }

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`;

export const S = {
  Contacts,
  Form,
  Field,
};
