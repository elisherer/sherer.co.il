import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	position: absolute;
	top: 1rem;
	right: 1rem;

	display: flex;
	align-items: center;

	em {
		margin-left: 10px;
		font-size: 1rem;
	}
	label {
		display: inline-block;
		height: 1.5rem;
		position: relative;
		width: 2.5rem;
		> div {
			background-color: #bbbbbb;
			bottom: 0;
			cursor: pointer;
			left: 0;
			position: absolute;
			right: 0;
			top: 0;
			transition: 0.4s;
			border-radius: 1.5rem; // round
			&:before {
				background-color: white;
				bottom: 4px;
				content: "";
				width: 1rem;
				height: 1rem;
				left: 0.25rem;
				position: absolute;
				transition: 0.4s;
				border-radius: 50%; // round
			}
		}
	}
	input {
		display: none;
		&:checked + div:before {
			background-color: #333;
			transform: translateX(1rem);
		}
	}
`;

const ThemeSwitch = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") === "dark" ? "dark" : "light"
	);

	const handleChecked = function (e) {
		if (e.target.checked) {
			document.documentElement.setAttribute("data-theme", "dark");
			localStorage.setItem("theme", "dark");
			setTheme("dark");
		} else {
			document.documentElement.setAttribute("data-theme", "light");
			localStorage.setItem("theme", "light");
			setTheme("light");
		}
	};

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, []);

	return (
		<Wrapper>
			<label>
				<input
					type="checkbox"
					checked={theme === "dark"}
					onChange={handleChecked}
				/>
				<div />
			</label>
		</Wrapper>
	);
};

export default ThemeSwitch;
