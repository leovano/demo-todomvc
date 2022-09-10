import { render } from "preact";

import Main from "./domains/root/Main";

import "./index.css";

render(<Main />, document.getElementById("app") as HTMLElement);
