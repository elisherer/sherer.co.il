import { MouseEventHandler, UIEventHandler, useState } from "react";

let items: NodeListOf<HTMLElement>;

const useScrollNavigation = (
  topValue: string,
): [string, MouseEventHandler<HTMLDivElement>, MouseEventHandler<HTMLAnchorElement>] => {
  const [active, setActive] = useState(topValue);

  const handleScroll: UIEventHandler<HTMLElement> = e => {
    const fromTop = e.currentTarget.scrollTop;
    if (!items) {
      items = e.currentTarget.querySelectorAll("a[id]");
    }
    let top = items[0];
    items.forEach(item => {
      if (item.offsetTop < fromTop + 100) top = item;
    });
    if (active !== top.id) {
      setActive(top.id);
    }
  };

  const onLinkClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    const id = e.currentTarget.href.split("#").pop();
    const top = id === topValue ? 0 : id ? document.getElementById(id)?.offsetTop : undefined;
    if (typeof top !== "undefined") {
      document.getElementById("main")?.scrollTo({ top, behavior: "smooth" });
      //setActive(id); -- will happen on account of handleScroll above
    }
  };

  return [active, handleScroll, onLinkClick];
};

export default useScrollNavigation;
