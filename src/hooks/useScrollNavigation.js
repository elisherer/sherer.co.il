import { useState } from "react";

let items;

const useScrollNavigation = topValue => {
	const [active, setActive] = useState(topValue);

	const handleScroll = e => {
		const fromTop = e.target.scrollTop;
		if (!items) {
			items = e.target.querySelectorAll("a[id]");
		}
		let top = items[0];
		items.forEach(item => {
			if (item.offsetTop < fromTop + 100) top = item;
		});
		if (active !== top.id) {
			setActive(top.id);
		}
	};

	const onLinkClick = e => {
		e.preventDefault();
		const id = e.target.href.split("#").pop();
		const top = id === topValue ? 0 : document.getElementById(id).offsetTop;
		document.getElementById("main").scrollTo({ top, behavior: "smooth" });
		//setActive(id); -- will happen on account of handleScroll above
	};

	return [active, handleScroll, onLinkClick];
};

export default useScrollNavigation;
