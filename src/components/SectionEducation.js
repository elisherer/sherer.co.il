import React from "react";
import styled from "styled-components";
import useResume from "../hooks/useResume";
import {
	Timeline,
	TimelineItem,
	TimeLineItemText,
	TimeLineItemLine,
	TimeLineItemTimestamp
} from "./TimeLine";

const Section = styled.section`
	margin: auto;
	max-width: 1040px;
`;

const SectionEducation = () => {
	const resume = useResume();

	return (
		<Section>
			<h2>Education</h2>
			<Timeline>
				{resume.education.map((ed, i) => {
					const text = (
							<TimeLineItemText>
								<strong>{ed.diploma}</strong>
								<div>{ed.institute}</div>
								<p>
									<b>Project:</b> {ed.projects}
								</p>
								{ed.photos && (
									<footer>
										{ed.photos.map((p, i) => (
											<span key={i}>
												<a href={p} target="-blank">
													<img src={p} width="150" />
												</a>
												&nbsp;
											</span>
										))}
									</footer>
								)}
							</TimeLineItemText>
						),
						time = (
							<TimeLineItemTimestamp>
								{ed.start}-{ed.end || "Present"}
							</TimeLineItemTimestamp>
						);

					return (
						<TimelineItem key={i}>
							{i % 2 ? time : text}
							<TimeLineItemLine>
								<img src={ed.logo} width="1rem" height="1rem" />
							</TimeLineItemLine>
							{i % 2 ? text : time}
						</TimelineItem>
					);
				})}
			</Timeline>
		</Section>
	);
};

export default SectionEducation;
