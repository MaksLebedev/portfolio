import React from "react";
import { FlexWrapper } from "../../../../components/commonComponents/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";
import { S } from "../Skills_Styles";

type SkillPropsType = {
  iconId: string;
  title: string;
  description: string;
};

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper direction={"column"} align={"center"} wrap={"wrap"}>
        <S.IconWrapper>
          <Icon iconId={props.iconId} />
        </S.IconWrapper>
        <S.SkillTitle>{props.title}</S.SkillTitle>
        <S.SkillText>{props.description}</S.SkillText>
      </FlexWrapper>
    </S.Skill>
  );
};
