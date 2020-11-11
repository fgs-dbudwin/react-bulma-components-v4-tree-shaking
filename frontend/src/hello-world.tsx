import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Heading, Hero } from "react-bulma-components";

export default function HelloWorld(): React.ReactElement<object> {
    return (
        <Hero color="primary">
            <Hero.Body>
                <Container>
                    <Heading>
                        Hello World!
                    </Heading>
                    <Heading subtitle size={3}>
                        Subtitle
                        <FontAwesomeIcon icon="coffee" />
                    </Heading>
                </Container>
            </Hero.Body>
        </Hero>
    );
}
