import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Heading, Hero } from "react-bulma-components";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";

library.add(faCoffee)

const rootElement = document.querySelector("#root");

ReactDOM.render(
    <Hero color="primary">
        <Hero.Body>
            <Container>
                <Heading>
                    Hero title Primary
                </Heading>
                <Heading subtitle size={3}>
                    Subtitle
                    <FontAwesomeIcon icon="coffee" />
                </Heading>
            </Container>
        </Hero.Body>
    </Hero>,
    rootElement
);

registerServiceWorker();
