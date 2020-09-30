import React from "react";
import styled from "styled-components";
import useResume from "../hooks/useResume";

const Section = styled.section`
	margin: auto;
	max-width: 1040px;

	a {
		color: var(--action-color);
		font-weight: bold;
	}
`;

const SectionLinks = () => {
	const resume = useResume();

	return (
		<Section>
			<h2>Other links</h2>
			<ul>
				{resume.links.map(l => (
					<li key={l.url} style={{ whiteSpace: "pre-wrap" }}>
						<a href={l.url} target="_blank" rel="noopener noreferrer">
							<b>{l.title}</b>
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
