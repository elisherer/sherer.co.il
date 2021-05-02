import React from "react";
import styled from "styled-components";
import useResume from "../hooks/useResume";

const Section = styled.section`
	h1 {
		font-size: 3rem;
		font-weight: 500;
		margin: 0;
	}
	h3 {
		font-size: 1.5rem;
		font-weight: 300;
		margin: 0;
	}
	> div {
		display: flex;
		margin: auto;
		max-width: 1040px;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 3rem;
	
		padding-right: 1rem;

		p {
			font-size: 1.1rem;
			font-weight: 300;
			white-space: pre-wrap;
		}
	}
	img {
		max-height: 384px;
    	height: 35vw;
	}
`;

const SectionAbout = () => {
	const resume = useResume();
	return (
		<Section>
			<h1>Hi, I&apos;m {resume.name}</h1>
			<h3>{resume.title}</h3>
			<div>
				<div>
				<p>{resume.aboutMe}</p>
				<p>{resume.moreAboutMe}</p>
				</div>
				<img src={resume.photo} alt="Photo" />
			</div>
		</Section>

	);
};

export default SectionAbout;
