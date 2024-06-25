import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <Name>Maksim</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21px 21px"}
                iconId={"instagram"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21px 21px"}
                iconId={"telegram"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21px 21px"}
                iconId={"vk"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21px 21px"}
                iconId={"linkedIn"}
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2024 Maksim Lebedev, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 20vh;
  background-color: #ffd8a5;
`;

const Name = styled.span``;

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small``;
