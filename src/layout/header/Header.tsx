import React from "react";
import { S } from "./Header_Styles";

import { Container } from "../../components/commonComponents/Container";
import { FlexWrapper } from "../../components/commonComponents/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          {width < breakpoint ? (
            <MobileMenu menuItems={items}></MobileMenu>
          ) : (
            <DesktopMenu menuItems={items} />
          )}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
