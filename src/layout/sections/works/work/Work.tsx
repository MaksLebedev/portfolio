import React from "react";
import styled from "styled-components";
import { Link } from "../../../../components/Link";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={props.src} alt="" />
        <Button>View project</Button>
      </ImageWrapper>
      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href="#">demo</Link>
        <Link href="#">code</Link>
      </Description>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 330px;
  flex-grow: 1;

  ${Link} {
    padding: 10px 0;
    /* margin-right: 20px; */

    & + ${Link} {
      margin-left: 20px;
    }
  }

  @media ${theme.media.desctop} {
    max-width: 540px;
  }
`;

const Description = styled.div`
  padding: 25px 20px;
`;

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Title = styled.h3`
  /* margin: 25px 0 0 20px; */
`;

const Text = styled.p`
  /* margin: 14px 20px 20px; */
  margin-top: 14px;
  margin-bottom: 20px;
`;
