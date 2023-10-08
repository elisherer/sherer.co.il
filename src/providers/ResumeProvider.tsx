import { createContext, ReactNode, useContext } from "react";

export type Skill = {
  field: string;
  level: number;
};

export type Link = {
  href: string;
  label: string;
  summary?: string;
};

export type Project = {
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  summary: string;
  moreSummary?: string;
  links: Link[];
};

export type Experience = {
  start: number;
  end?: number;
  company: string;
  logo: string;
  location: string;
  title: string;
  description: string;
};

export type Education = {
  start: number;
  end: number;
  logo: string;
  diploma: string;
  institute: string;
  honors?: string;
  projects: string[];
  photos?: string[];
};

export type Resume = {
  name: string;
  photo: string;
  title: string;
  location: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  npm?: string;
  medium?: string;
  email: string;
  avatar?: string;
  aboutMe: string;
  moreAboutMe?: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  languages: string[];
  more: string[];
  links: Link[];
};

const ResumeContext = createContext({} as Resume);

export const useResume = () => {
  return useContext(ResumeContext);
};

export const ResumeProvider = ({ resume, children }: { resume: Resume; children: ReactNode }) => {
  return <ResumeContext.Provider value={resume}>{children}</ResumeContext.Provider>;
};
