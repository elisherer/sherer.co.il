import React from "react";
import styled from "styled-components";
import useResume from "../hooks/useResume";

const Section = styled.section`
	margin: auto;
	max-width: 1040px;
`;

const SectionMore = () => {
	const resume = useResume();

	return (
		<Section>
			<h2>More about me</h2>
			<ul>
				{resume.more.map(x => (
					<li key={x}>{x}</li>
				))}
			</ul>
		</Section>
	);
};

export default SectionMore;
