import React from "react";
import styled from "styled-components";
import useResume from "../hooks/useResume";
import {Timeline, TimelineItem, TimeLineItemText, TimeLineItemLine, TimeLineItemTimestamp} from "./TimeLine";

const Section = styled.section`
	margin: auto;
	max-width: 1040px;
`;

const SectionExperience = () => {
	const resume = useResume();

	return (
		<Section>
			<h2>Experience</h2>
			<Timeline>
				{resume.experience.map((xp, i) => {
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
								<img src={xp.logo} width="1rem" height="1rem" />
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
