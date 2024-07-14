import React, { useState } from "react";
import socialImg from "../../../assets/images/project-1.webp";
import timerImg from "../../../assets/images/project-2.webp";
import { Container } from "../../../components/commonComponents/Container";
import { FlexWrapper } from "../../../components/commonComponents/FlexWrapper";
import { SectionTitle } from "../../../components/commonComponents/SectionTitle";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import { Work } from "./work/Work";
import { S } from "./Works_Styles";
import { log } from "console";

// const tabsItems = ["All", "landing page", "React", "spa"];

const tabsItems: Array<{
  status: TabsStatusType;
  title: string;
}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "landing page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "spa",
    status: "spa",
  },
];

const worksData = [
  {
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    src: socialImg,
    type: "spa",
  },
  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    src: timerImg,
    type: "react",
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = worksData;

  if (currentFilterStatus === "landing") {
    filteredWorks = worksData.filter((work) => {
      return work.type === "landing";
    });
  }
  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((work) => {
      return work.type === "react";
    });
  }
  if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter((work) => {
      return work.type === "spa";
    });
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id={"works"}>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          {filteredWorks.map((w, index) => {
            return (
              <Work key={index} title={w.title} text={w.text} src={w.src} />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
