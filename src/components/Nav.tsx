import { MouseEventHandler } from "react";
import styled from "styled-components";
import QuickLinks from "./QuickLinks";
import { useResume } from "../providers/ResumeProvider";
import ThemeSwitch from "./ThemeSwitch";
import { MapLocation } from "../assets/icons";
import getFlagEmoji from "../util/getFlagEmoji";

const Languages: Record<string, string> = {
  he: "עברית",
  en: "English",
};

const NavContainer = styled.nav`
  position: relative;
  color: var(--nav-fg-color);
  background-color: var(--nav-bg-color);
  width: 0;
  text-align: center;
  overflow-y: auto;
  transition: width 0.5s ease-in-out;

  &[data-open] {
    width: 260px;
  }

  img {
    display: inline-block;
    background-color: #bebebe;
    border-radius: 50%;
    margin-top: 2rem;
  }
  h1 {
    font-size: 2.2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
  }
  h3 {
    font-weight: normal;
    margin: 0;
  }
  ul.languages {
    padding: 0;
    & li {
      list-style: none;
      padding: 0.5rem;
      margin: 0;
    }
  }

  @media print {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    width: 260px;
  }
`;

const LocationText = styled.div`
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  svg {
    opacity: 0.7;
    margin-right: 0.5rem;
  }
`;

const NavLinkContainer = styled.li`
  list-style: none;
  padding: 0;
  margin-top: 1.2em;
  margin-bottom: 1.2em;
  transition: opacity 200ms ease-in-out;
  a {
    color: var(--nav-fg-color) !important;
    text-decoration: none;
  }
`;

const NavLinks = styled.ul`
  text-align: left;
  padding: 0.5rem 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const NavLink = ({
  active,
  id,
  label,
  onClick,
}: {
  active: string;
  id: string;
  label: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}) => {
  return (
    <NavLinkContainer style={{ opacity: active === id ? 0.5 : 1 }}>
      <a href={`#${id}`} onClick={onClick}>
        {label}
      </a>
    </NavLinkContainer>
  );
};

const Nav = ({
  active,
  onLinkClick,
  open,
}: {
  active: string;
  onLinkClick: MouseEventHandler<HTMLAnchorElement>;
  open: boolean;
}) => {
  const resume = useResume();
  return (
    <NavContainer data-open={open || undefined}>
      <ThemeSwitch />
      <img alt={resume.name} src={resume.avatar} width="160px" height="160px" />
      <h1>{resume.name}</h1>
      <h3>{resume.title}</h3>

      <LocationText>
        <svg style={{ width: "1rem", height: "1rem" }} viewBox="0 0 24 24">
          <path fill="currentColor" d={MapLocation} />
        </svg>
        {resume.location}
      </LocationText>

      <QuickLinks />

      <NavLinks>
        <NavLink active={active} onClick={onLinkClick} id="about" label="About Me" />
        <NavLink active={active} onClick={onLinkClick} id="skills" label="Skills" />
        <NavLink active={active} onClick={onLinkClick} id="projects" label="Projects" />
        <NavLink active={active} onClick={onLinkClick} id="experience" label="Experience" />
        <NavLink active={active} onClick={onLinkClick} id="education" label="Education" />
        <NavLink active={active} onClick={onLinkClick} id="more" label="More about me" />
        <NavLink active={active} onClick={onLinkClick} id="links" label="Other links" />
      </NavLinks>

      <h2>Languages</h2>
      <ul className="languages">
        {resume.languages.map(lang => (
          <li key={lang}>
            {getFlagEmoji(lang.slice(-2))}&nbsp;&nbsp;&nbsp;{Languages[lang.substring(0, 2)]}
          </li>
        ))}
      </ul>
    </NavContainer>
  );
};

export default Nav;
