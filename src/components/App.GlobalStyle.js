import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --fg-color: Black;
  --bg-color: AliceBlue;
  --nav-fg-color: White;
  --nav-bg-color: RebeccaPurple;
  --paper-bg-color: White;
  --action-color: #9860d0;
  --progress-color: RebeccaPurple;
  --progress-bg-color: silver;
}
[data-theme="dark"] {
  --fg-color: #efefef;
  --bg-color: #1e1e1e;
  --nav-fg-color: White;
  --nav-bg-color: RebeccaPurple;
  --paper-bg-color: #2f2f2f;
  --action-color: #9860d0;
  --progress-color: RebeccaPurple;
  --progress-bg-color: silver;
}

html, body {
  color: var(--fg-color);
  background-color: var(--bg-color);
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  margin: 0;
}
//h1, h2, h3, h4, h5 ,h6 { margin: 0; }

#root {
  display: flex;
  height: 100vh;
}
`;

export default GlobalStyle;
