import styled from "styled-components";
import React from "react";
import { GitHub, LinkedIn, NPM, Twitter } from "../assets/icons";
import useResume from "../hooks/useResume";

const Container = styled.div`
	margin: 2rem;
	display: flex;
	justify-content: space-between;
`;

const LinkContainer = styled.a`
	width: 2rem;
	height: 2rem;
	display: inline-block;
	text-align: center;
	border-radius: 50%;
	color: var(--nav-bg-color);
	background-color: var(--nav-fg-color);
	text-decoration: none;
	font-size: 1.5rem;
	transition: opacity 200ms ease-in-out;
	svg {
		padding-top: 0.25rem;
		width: 1.5rem;
		height: 1.5rem;
	}
	&:hover {
		opacity: 0.5;
	}
`;

const QuickLink = ({
	path,
	children,
	...rest
}: {
	path?: string,
	children?: any
}) => {
	return (
		<LinkContainer target="_blank" rel="noopener noreferrer" {...rest}>
			{children || (
				<svg viewBox="0 0 24 24">
					<path fill="currentColor" d={path} />
				</svg>
			)}
		</LinkContainer>
	);
};

const QuickLinks = () => {
	const resume = useResume();
	return (
		<Container>
			<QuickLink href={resume.github} title="GitHub" path={GitHub} />
			<QuickLink href={resume.twitter} title="Twitter" path={Twitter} />
			<QuickLink href={resume.linkedin} title="LinkedIn" path={LinkedIn} />
			<QuickLink href={resume.npm} title="npm" path={NPM} />
			<QuickLink href={resume.email} title="Email">
				@
			</QuickLink>
		</Container>
	);
};

export default QuickLinks;
