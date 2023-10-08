import React from "react";
import styled from "styled-components";
import { useResume } from "../providers/ResumeProvider";

const Section = styled.section`
  margin: auto;
  max-width: 1040px;
`;

const SectionMore = () => {
  const { more } = useResume();

  return (
    <Section>
      <h2>More about me</h2>
      <ul>
        {more.map(x => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </Section>
  );
};

export default SectionMore;
