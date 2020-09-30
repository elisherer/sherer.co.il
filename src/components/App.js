import React from "react";
import GlobalStyle from "./App.GlobalStyle";
import Nav from "./Nav";
import Main from "./Main";
import useScrollNavigation from "../hooks/useScrollNavigation";

const App = () => {
	const [active, handleScroll, onLinkClick] = useScrollNavigation("about");

	return (
		<>
			<GlobalStyle />
			<Nav active={active} onLinkClick={onLinkClick} />
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
