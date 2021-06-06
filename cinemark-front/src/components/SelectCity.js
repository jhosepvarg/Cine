import React, { useEffect, useState } from 'react'
import { Form, Notification } from 'react-bulma-components'
import Select from 'react-select'
import '../assets/Home.css';
import { obtenerCiudades } from '../services/ciudad';



export default function SelectCity({ onChange }) {
    const [ciudades, setCiudades] = useState([])

    useEffect(() => {
        async function obtener() {
            const respuesta = await obtenerCiudades();
            if (respuesta && respuesta.resultados) {
                setCiudades(respuesta.resultados);
            } else {
                setCiudades([]);
            }
        }

        obtener();
    }, [])

    const handleChangeCiudades = (id) => {
        onChange && onChange(id);
    }

    return (
        <Notification color="text">
            <Form.Field kind="addons" alignItems="center" >
                <Form.Label className="mr-3">USTED ESTÁ EN:</Form.Label>

                <Select placeholder="Ciudad" className="select__custom" options={ciudades}
                    getOptionLabel={(ciudad) => ciudad.nombre}
                    getOptionValue={(ciudad) => ciudad.id}
                    onChange={(ciudad) => handleChangeCiudades(ciudad.id)}
                />

            </Form.Field>
        </Notification>
    )
}
