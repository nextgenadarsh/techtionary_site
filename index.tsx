import * as React from "react";
import { render } from "react-dom";

import "./theme.css";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
