import React from "react";
import styled from "styled-components";
import { useResume } from "../providers/ResumeProvider";

const Section = styled.section`
  margin: auto;
  max-width: 1040px;

  progress {
    -webkit-appearance: none;
    border: none;
    height: 0.6rem;
    &::-webkit-progress-bar {
      background-color: var(--progress-bg-color);
    }
    &::-moz-progress-bar {
      background-color: var(--progress-bg-color);
    }
    &::-webkit-progress-value {
      background-color: var(--progress-color);
    }
  }
`;

const SectionSkills = () => {
  const { skills } = useResume();
  return (
    <Section>
      <h2>Skills</h2>
      <table>
        <tbody>
          {skills.map(skill => (
            <tr key={skill.field}>
              <td>{skill.field}</td>
              <td>
                <progress max={100} value={skill.level} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
};

export default SectionSkills;
