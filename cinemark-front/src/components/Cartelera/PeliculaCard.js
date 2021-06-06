import React from 'react'
import { Card, Heading, Media } from 'react-bulma-components'

export default function PeliculaCard({ id, imagen_principal, nombre, fecha_estreno }) {
    return (
        <Card style={{ width: 300, margin: 'auto' }}>
            <Card.Image
                size="4by3"
                src={imagen_principal}
            />
            <Card.Content>
                <Media>
                    <Media.Item>
                        <Heading size={4}>{nombre}</Heading>
                    </Media.Item>
                </Media>
            </Card.Content>
            <Card.Footer className="is-justify-content-center">
                <span className="has-text-centered">{fecha_estreno}</span>
            </Card.Footer>

        </Card>
    )
}
