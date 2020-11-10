import React from "react";
import { Container, Heading, Hero } from "react-bulma-components";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";

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
                </Heading>
            </Container>
        </Hero.Body>
    </Hero>,
    rootElement
);

registerServiceWorker();
