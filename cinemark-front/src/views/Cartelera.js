import React, { useEffect, useState } from 'react'
import { Section, Container, Heading, Columns } from 'react-bulma-components';
import PeliculaCard from '../components/Cartelera/PeliculaCard';
import { obtenerPeliculas } from '../services/cartelera';

export default function Cartelera() {

    const [peliculasEstrenadas, setPeliculasEstrenadas] = useState([]);
    const [peliculasProximas, setPeliculasProximas] = useState([]);


    useEffect(() => {
        async function obtener() {
            const respuesta = await obtenerPeliculas();
            if (respuesta && respuesta.resultados) {
                setPeliculasProximas(respuesta.resultados.proximas);
                setPeliculasEstrenadas(respuesta.resultados.estrenadas);
            } else {
                setPeliculasProximas([]);
                setPeliculasEstrenadas([]);
            }
        }

        obtener();
    }, [])

    return (
        <>
            <Section>
                <Container>
                    <Heading>
                        Todas las películas disponibles
                    </Heading>
                    <Columns>
                        {
                            peliculasEstrenadas.map((pelicula) => {
                                return (
                                    <Columns.Column key={pelicula.id}>
                                        <PeliculaCard
                                            id={pelicula.id}
                                            imagen_principal={pelicula.imagen_principal}
                                            nombre={pelicula.nombre}
                                            fecha_estreno={pelicula.fecha_estreno}
                                        />
                                    </Columns.Column>
                                )
                            })
                        }

                    </Columns>


                </Container>
            </Section>
            <Section>
                <Container>
                    <Heading>
                        Próximos estrenos
                    </Heading>
                    <Columns>
                        {
                            peliculasProximas.map((pelicula) => {
                                return (
                                    <Columns.Column key={pelicula.id}>
                                        <PeliculaCard
                                            id={pelicula.id}
                                            imagen_principal={pelicula.imagen_principal}
                                            nombre={pelicula.nombre}
                                            fecha_estreno={pelicula.fecha_estreno}
                                        />
                                    </Columns.Column>
                                )
                            })
                        }

                    </Columns>
                </Container>
            </Section>
        </>
    )
}
