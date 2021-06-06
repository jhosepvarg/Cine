import React, { useEffect, useState } from 'react'
import { Card, Container, Heading, Media, Section } from 'react-bulma-components'
import OwlCarousel from 'react-owl-carousel2';
import { obtenerPeliculasPorEstrenadas } from '../../services/cartelera';
import { Link } from 'react-router-dom';


export default function EstrenosCartelera() {
    const options = {
        items: 3,
        rewind: true,
        autoplay: true
    };
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        async function obtener() {
            const respuesta = await obtenerPeliculasPorEstrenadas();
            if (respuesta && respuesta.resultados) {
                setPeliculas(respuesta.resultados);
            } else {
                setPeliculas([]);
            }
        }

        obtener();
    }, [])

    if (!peliculas || !peliculas.length) return null;


    return (
        <Section>
            <Container>
                <Heading>
                    ESTRENOS / CARTELERA
                </Heading>




                <OwlCarousel options={options}  >
                    {
                        peliculas.map(({ id, nombre, imagen_principal }) => {
                            return (
                                <div key={id}>
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
                                    </Card>
                                </div>
                            )
                        })
                    }

                </OwlCarousel>
                <div className="has-text-centered">
                    <Link to="/cartelera">
                        <button className="button is-rounded">VER TODAS LAS PELICULAS</button>
                    </Link>
                </div>
            </Container>
        </Section>
    )
}
