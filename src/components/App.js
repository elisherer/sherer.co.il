import React from "react";
import GlobalStyle from "./App.GlobalStyle";
import Nav from "./Nav";
import Main from "./Main";
import useScrollNavigation from "../hooks/useScrollNavigation";
import useToggle from "../hooks/useToggle";
import MenuToggle from "./MenuToggle";

const App = () => {
	const [active, handleScroll, onLinkClick] = useScrollNavigation("about");
	const [open, toggleOpen] = useToggle();

	return (
		<>
			<GlobalStyle />
			<MenuToggle open={open} toggleOpen={toggleOpen} />
			<Nav active={active} onLinkClick={onLinkClick} open={open} />
			<Main onScroll={handleScroll} />
		</>
	);
};

let exportedApp = App;
if (process.env.NODE_ENV !== "production") {
	const { hot /*, setConfig*/ } = require("react-hot-loader/root");
	//setConfig({ logLevel: "debug"});
	exportedApp = hot(exportedApp);
}

export default exportedApp;
