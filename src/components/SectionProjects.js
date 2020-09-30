import React from "react";
import styled from "styled-components";
import { OpenInNew } from "../assets/icons";
import useResume from "../hooks/useResume";

const Section = styled.section`
	margin: auto;
	max-width: 1040px;
`;

const Projects = styled.div`
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 1rem;
`;

const Project = styled.div`
	display: inline-block;
	background: var(--paper-bg-color);
	box-shadow: 0 6px 16px -5px rgba(0, 0, 0, 0.3);
	border-radius: 0.5rem;
	width: 320px;
	min-height: 360px;
	padding: 0.5rem;
	h3 {
		margin: 0.5rem 0.5rem 1rem;
	}
	footer {
		text-align: right;
		a {
			color: var(--action-color);
			font-weight: bold;
		}
	}
`;

const SectionProjects = () => {
	const resume = useResume();

	const openInNew = (
		<svg style={{ width: "1rem", height: "1rem" }} viewBox="0 0 24 24">
			<path fill="currentColor" d={OpenInNew} />
		</svg>
	);

	return (
		<Section>
			<h2>Projects</h2>
			<Projects>
				{resume.projects.map((p, i) => (
					<Project key={i}>
						<h3>{p.title}</h3>
						<img src={p.thumbnail} alt={p.thumbnailAlt} width="320px" />
						<p dangerouslySetInnerHTML={{ __html: p.summary }} />
						{p.moreSummary && (
							<details>
								<summary>Show more</summary>
								<p dangerouslySetInnerHTML={{ __html: p.moreSummary }} />
							</details>
						)}
						<footer>
							{p.links.map((a, j) => (
								<span key={j}>
									<a href={a.href} target="_blank" rel="noopener noreferrer">
										{a.label}
									</a>{" "}
									{openInNew}
								</span>
							))}
						</footer>
					</Project>
				))}
			</Projects>
		</Section>
	);
};

export default SectionProjects;
