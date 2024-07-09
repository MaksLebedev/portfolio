import React from "react";
import socialImg from "../../../assets/images/project-1.webp";
import timerImg from "../../../assets/images/project-2.webp";
import { Container } from "../../../components/commonComponents/Container";
import { FlexWrapper } from "../../../components/commonComponents/FlexWrapper";
import { SectionTitle } from "../../../components/commonComponents/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { Work } from "./work/Work";
import { S } from "./Works_Styles";

const worksItems = ["All", "landing page", "React", "spa"];

const workData = [
  {
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    src: socialImg,
  },
  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    src: timerImg,
  },
];

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItems} />
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          {workData.map((w, index) => {
            return (
              <Work key={index} title={w.title} text={w.text} src={w.src} />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
