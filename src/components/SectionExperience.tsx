import React from "react";
import styled from "styled-components";
import { Timeline, TimelineItem, TimeLineItemText, TimeLineItemLine, TimeLineItemTimestamp } from "./TimeLine";
import { useResume } from "../providers/ResumeProvider";

const Section = styled.section`
  margin: auto;
  max-width: 1040px;
`;

const SectionExperience = () => {
  const { experience } = useResume();

  return (
    <Section>
      <h2>Experience</h2>
      <Timeline>
        {experience.map((xp, i) => {
          const text = (
              <TimeLineItemText>
                <strong>{xp.title}</strong>
                <div>
                  {xp.company} | {xp.location}
                </div>
                <p>{xp.description}</p>
              </TimeLineItemText>
            ),
            time = (
              <TimeLineItemTimestamp>
                {xp.start}-{xp.end || "Present"}
              </TimeLineItemTimestamp>
            );

          return (
            <TimelineItem key={i}>
              {i % 2 ? time : text}
              <TimeLineItemLine>
                <img src={xp.logo} alt={`${xp.company} logo`} width="1rem" height="1rem" />
              </TimeLineItemLine>
              {i % 2 ? text : time}
            </TimelineItem>
          );
        })}
      </Timeline>
    </Section>
  );
};

export default SectionExperience;
