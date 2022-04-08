import Photo from "./photo.jpg";
import Kidev from "./kidev.png";
import Devek from "./devek.png";
import TinyTalk from "./tinytalk.png";
import GamingCast from "./gamingcast.png";
import NickNack from "./nicknack.png";
import PapayaGlobal from "./papayaglobal.png";
import Payoneer from "./payoneer-logo.png";
import TDN from "./tdn-logo.png";
import Technion from "./technion.jpg";
import TechnionProject1 from "./osm-screen1.jpg";
import TechnionProject2 from "./osm-screen2.jpg";
import Realit from "./realit.png";
import IgalAlon from "./igal-alon.jpg";

const AT = String.fromCharCode(1 << 6);
const resume = {
	name: "Eli Sherer",
	photo: Photo,
	title: "Software Architect",
	location: "Central District, Israel",
	github: "https://github.com/elisherer",
	twitter: "https://twitter.com/elisherer",
	linkedin: "https://www.linkedin.com/in/eli-sherer/",
	npm: "https://www.npmjs.com/~elisherer",
  medium: "https://medium.com/@elisherer",
	email: `mailto:eli.${(1722295107).toString(36)}${AT}gmail.com`,
	avatar:
		"https://www.gravatar.com/avatar/8e308e281247157b097e1578a48755e9?s=160&d=mp",
	aboutMe:
		"Specializing in front-end technologies, React, Webpack, NodeJS.\n" +
		"Love to do magic by solving hard problems using elegant solutions.",
	moreAboutMe:
		"Been a software developer as far as I can remember.\n" +
		"I have a vast experience in many languages and technologies.\n" +
		"My main interest is the web, front-end in particular.\n" +
		"Have worked in the past, and working at the present, on complicated\n" +
		"software designs, projects and architectures. Married +3.",
	skills: [
		{ field: "JavaScript", level: 100 },
		{ field: "ECMAScript 6+", level: 100 },
		{ field: "React (Web)", level: 100 },
		{ field: "C#", level: 80 },
		{ field: "SQL, GraphDB, Redis, ...", level: 80 },
		{ field: "NodeJS", level: 80 },
		{ field: "Java", level: 75 },
		{ field: "React (Native)", level: 60 },
		{ field: "Android", level: 60 }
	],
	projects: [
		{
			title: "kidev.io - Kids develop!",
			thumbnail: Kidev,
			thumbnailAlt: "kidev screenshot",
			summary:
				"Print fun mazes in all kinds of styles (predefined shapes or create your own). " +
				"Also Free paint, Sudoku and Word searches.",
			moreSummary:
				"You can easily create worksheets using the &quot;Saved work&quot;" +
				"tool. It will bundle all the worksheets with the drawings and stamps you" +
				"put on it, several in each page. There is also an option to draw" +
				"freely in the site and create &quot;connect the dots&quot; worksheets." +
				"<br />" +
				"<b>No Ads. No in-app purchases.</b>",
			links: [{ href: "https://kidev.io", label: "kidev.io" }]
		},
		{
			title: "Devek - Developer Kit",
			thumbnail: Devek,
			thumbnailAlt: "Devek logo",
			summary:
				"<strong>Helping tools for developers</strong>" +
				"<br />" +
				"<strong>Everything</strong> is done on the client side.",
			links: [{ href: "https://devek.app", label: "devek.app" }]
		},
		{
			title: "GamingCast (for Chromecast)",
			thumbnail: GamingCast,
			thumbnailAlt: "GamingCast feature",
			summary:
				"<strong>The first mobile gaming console using Chromecast!</strong>" +
				"<br />" +
				"Play retro games on your TV screen with your mobile device as the controller.",
			links: [
				{
					href:
						"https://play.google.com/store/apps/details?id=co.essh.gamecast",
					label: "Play Store"
				}
			]
		},
		{
			title: "TinyTalk",
			thumbnail: TinyTalk,
			thumbnailAlt: "TinyTalk feature",
			summary:
				"<strong>Teach your child to talk in any language.</strong>" +
				"<br />" +
				"Learn the names of animals, colors, numbers and more.",
			links: [
				{
					href:
						"https://play.google.com/store/apps/details?id=co.essh.tinytalk",
					label: "Play Store"
				}
			]
		}
	],
	experience: [
    {
      start: 2021,
      company: "Papaya Global",
      logo: PapayaGlobal,
      location: "Israel",
      title: "Architect, Payments",
      description:
        "In charge of the architectural design of the payments platform. Invloved in the initial development process."
    },
		{
			start: 2021,
      end: 2021,
			company: "NickNack",
			logo: NickNack,
			location: "Israel",
			title: "Chief Architect",
			description:
				"In charge of the architectural design of the application and system. Invloved in the initial development process."
		},
		{
			start: 2016,
			end: 2021,
			company: "Payoneer",
			logo: Payoneer,
			location: "Petah Tikva, Israel",
			title: "Software Architect",
			description:
				"Leading, consulting and participating in the development and design of\n" +
				"products. Technologies include:\n" +
				"React (Expert level, Redux, Webpack, NPM - Writing libraries and\n" +
				"collaborating with the community), Mobile (React Native),\n" +
				"Micro-services, API Gateway, C#, NodeJS, SQL Server, Graph DB\n" +
				"(Neo4J)"
		},
		{
			start: 2013,
			end: 2016,
			company: "Payoneer",
			logo: Payoneer,
			location: "Petah Tikva, Israel",
			title: "R&D Developer",
			description:
				"In charge of several web applications incorporating C#/.net, html/5, " +
				"CSS/3, JavaScript, React, AJAX, Web services & T-SQL Databases"
		},
		{
			start: 2010,
			end: 2013,
			company: "TriDiNetworks",
			logo: TDN,
			location: "Nesher, Israel",
			title: "Developer",
			description:
				"A startup company in Nesher. Installation and configuration of wireless\n" +
				"networks using Point-and-click technology. Power saving technologies.\n" +
				"Developing a network designing software. Developing software for mobile\n" +
				"devices (Android 2.2+, NFC, Audio).\n" +
				"Developing Server-Client Web application inside Microsoft's Azure Cloud\n" +
				"Platform for Monitoring and Controlling Power appliances."
		}
	],
	education: [
		{
			start: 2009,
			end: 2013,
			logo: Technion,
			diploma: "B.Sc. Computer Science",
			institute: "Israeli Institute of Technology, Technion, Haifa",
			projects: ["WebGL 3D roadmap rendering (with bridges)"],
			photos: [TechnionProject1, TechnionProject2]
		},
		{
			start: 2003,
			end: 2005,
			logo: Realit,
			diploma: "Practical Engineer in Software Engineering",
			institute: "Gimnasia Realit, Rishon Lezion",
			honors: "Summa cum laude",
			projects: ["Java IRC-like Client & Server with DB back-end."]
		},
		{
			start: 2001,
			end: 2003,
			logo: IgalAlon,
			diploma:
				"Technological diploma in Software Design and programming course of study",
			institute: "Igal Alon High School, Rishon Lezion",
			honors: "Magna cum laude",
			projects: [
				"Outlook-like app in C. Calendar, Tasks, Contacts, Notes, Calculator, Alarm and World clock (DOS)"
			]
		}
	],
	languages: ["en-US", "he-IL"],
	more: [
		"Highly motivated",
		"Team player",
		"Autodidact (fast)",
		"Crowd tutoring experience"
	],
	links: [
		{
			url: "http://wiibrew.org/wiki/Balance_Board_Tools",
			title: "Wii - Balance board tools",
			summary: "The first homebrew to use the Wii Balance Board"
		},
		{
			url: "http://wiibrew.org/wiki/GRRLIB",
			title: "Wii - GRRLIB",
			summary:
				"Helped with adding more graphics algorithms for the graphics library"
		},
		{
			url: "https://www.3dbrew.org/wiki/3DSExplorer",
			title: "3DSExplorer",
			summary:
				"Aims to be a file explorer for Nintendo’s 3ds associated files (.cci/cia/cxi/sav(save flash)/etc.. ) info from 3dbrew.org"
		},
		{
			url: "https://github.com/elisherer/intelligent-level-editor",
			title: "Intelligent Level Editor",
			summary:
				"A general level editor for the 3DSWare games (Including: Pushmo, Crashmo & Pyramids, and more to come…).\n" +
				"It uses the ZXing library for reading and creating QR codes for the 3DS to read.\n" +
				"A lot of image manipulations is used in Pushmo & Crashmo because of limited palette for each level (10 colors only from a given 184 color palette)."
		},
		{
			url: "http://www.rockbox.org",
			title: "ROCKbox",
			summary:
				"ROCKbox is a free replacement firmware for digital music players. It runs on a wide range of players"
		},
		{
			url: "http://www.rockbox.org/wiki/PluginRockblox",
			title: "ROCKbox - Rockblox",
			summary:
				"Tetris Clone (source: https://git.rockbox.org/cgit/rockbox.git/tree/apps/plugins/rockblox.c)"
		},
		{
			url: "http://www.rockbox.org/wiki/PluginXobox",
			title: "ROCKbox - Xobox",
			summary:
				"Qix Clone (source: https://git.rockbox.org/cgit/rockbox.git/tree/apps/plugins/xobox.c)"
		},
		{
			url: "http://www.rockbox.org/wiki/PluginRockpaint",
			title: "ROCKbox - RockPaint",
			summary:
				"Microsoft’s Paint clone (source: https://git.rockbox.org/cgit/rockbox.git/tree/apps/plugins/rockpaint.c)"
		}
	]
};

export default resume;
