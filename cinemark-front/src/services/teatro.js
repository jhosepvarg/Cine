import axios from 'axios';
const api = 'http://localhost:3200/teatro/';


export async function obtenerTeatrosPorCiudad(id) {
    try {
        const response = await axios.request({
            url: api + 'list/byciudad/' + id,
            method: "get",
        });
        if (response && response.data) {
            return response.data;
        } else {
            return false;
        }
    } catch (error) {
        console.log('Error');
    }
}