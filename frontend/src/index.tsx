import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReactDOM from "react-dom";

import HelloWorld from "./hello-world";
import registerServiceWorker from "./registerServiceWorker";

library.add(faCoffee);

const rootElement = document.querySelector("#root");

ReactDOM.render(<HelloWorld />, rootElement);

registerServiceWorker();
