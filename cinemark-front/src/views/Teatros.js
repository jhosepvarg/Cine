import React, { useState } from 'react'
import { Container, Heading, Section } from 'react-bulma-components';
import SelectCity from '../components/SelectCity'
import TeatroCard from '../components/Teatro/TeatroCard';
import { obtenerTeatrosPorCiudad } from '../services/teatro';

export default function Teatros() {

    const [teatros, setTeatros] = useState([]);

    const obtenerTeatros = async (id) => {
        const respuesta = await obtenerTeatrosPorCiudad(id);
        if (respuesta && respuesta.resultados) {
            setTeatros(respuesta.resultados);
        } else {
            setTeatros([]);
        }
    }

    const handleChangeCiudad = async (id) => {
        await obtenerTeatros(id);
        console.log(teatros);
    }

    return (
        <div>
            <SelectCity onChange={handleChangeCiudad} />
            <Section>
                <Container>
                    {
                        teatros && teatros.length ? (
                            <>
                                <Heading>Teatros Disponibles</Heading>
                                {
                                    teatros.map((teatro) => <TeatroCard key={teatro.id} id={teatro.id} nombre={teatro.nombre} direccion={teatro.direccion} />)
                                }
                            </>
                        ) : (
                                <>
                                    <Heading>No hay Teatros en la ciudad</Heading>
                                </>
                            )

                    }
                </Container>
            </Section>


        </div>
    )
}
