import React from 'react'
import { Container, Heading, Hero } from 'react-bulma-components'

export default function TeatroCard({ direccion, id, nombre }) {
    return (
        <Hero className="has-background-white-ter">
            <Hero.Header>
                <Heading>
                    {nombre}
                </Heading>
            </Hero.Header>
            <Hero.Body>
                <Container>

                    <Heading
                        size={3}
                        subtitle
                    >
                        {direccion}
                    </Heading>
                </Container>
            </Hero.Body>

        </Hero>
    )
}
