import { FlexWrapper } from "../../components/commonComponents/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { S } from "./Footer_Styles";

const socialItemData = [
  {
    iconId: "instagram",
  },
  {
    iconId: "telegram",
  },
  {
    iconId: "vk",
  },
  {
    iconId: "linkedIn",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.Name>Maksim</S.Name>
        <S.SocialList>
          {socialItemData.map((i, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink>
                  <Icon
                    height={"21px"}
                    width={"21px"}
                    viewBox={"0 0 21px 21px"}
                    iconId={i.iconId}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
        </S.SocialList>
        <S.Copyright>© 2024 Maksim Lebedev, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};
