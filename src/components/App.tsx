import React from "react";
import GlobalStyle from "./App.GlobalStyle";
import Nav from "./Nav";
import Main from "./Main";
import useScrollNavigation from "../hooks/useScrollNavigation";
import useToggle from "../hooks/useToggle";
import MenuToggle from "./MenuToggle";
import { ResumeProvider } from "../providers/ResumeProvider";
import resume from "../resume";

const App = () => {
  const [active, handleScroll, onLinkClick] = useScrollNavigation("about");
  const [open, toggleOpen] = useToggle();

  return (
    <ResumeProvider resume={resume}>
      <GlobalStyle />
      <MenuToggle open={open} toggleOpen={toggleOpen} />
      <Nav active={active} onLinkClick={onLinkClick} open={open} />
      <Main onScroll={handleScroll} />
    </ResumeProvider>
  );
};

export default App;
