import { MouseEventHandler } from "react";
import styled from "styled-components";
import SectionAbout from "./SectionAbout";
import SectionSkills from "./SectionSkills";
import SectionProjects from "./SectionProjects";
import SectionExperience from "./SectionExperience";
import SectionEducation from "./SectionEducation";
import SectionMore from "./SectionMore";
import SectionLinks from "./SectionLinks";

const MainContainer = styled.main`
  flex: 1;
  padding: 3rem;
  overflow: auto;
  h2 {
    margin: 2rem 0;
  }
  section:last-of-type {
    min-height: 90vh;
  }
`;

const Main = ({ onScroll }: { onScroll: MouseEventHandler<HTMLElement> }) => {
  return (
    <MainContainer id="main" onScroll={onScroll}>
      <a id="about" />
      <SectionAbout />
      <a id="skills" />
      <SectionSkills />
      <a id="projects" />
      <SectionProjects />
      <a id="experience" />
      <SectionExperience />
      <a id="education" />
      <SectionEducation />
      <a id="more" />
      <SectionMore />
      <a id="links" />
      <SectionLinks />
    </MainContainer>
  );
};

export default Main;
