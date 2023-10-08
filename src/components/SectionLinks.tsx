import React from "react";
import styled from "styled-components";
import { useResume } from "../providers/ResumeProvider";

const Section = styled.section`
  margin: auto;
  max-width: 1040px;

  a {
    color: var(--action-color);
    font-weight: bold;
  }
`;

const SectionLinks = () => {
  const { links } = useResume();

  return (
    <Section>
      <h2>Other links</h2>
      <ul>
        {links.map(l => (
          <li key={l.href} style={{ whiteSpace: "pre-wrap" }}>
            <a href={l.href} target="_blank" rel="noopener noreferrer">
              <b>{l.label}</b>
            </a>
            <br />
            <p>{l.summary}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default SectionLinks;
