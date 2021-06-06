import axios from 'axios';
const api = 'http://localhost:3200/cartelera/';


export async function obtenerPeliculas() {
    try {
        const response = await axios.request({
            url: api,
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

export async function obtenerPeliculasPorProximas() {
    try {
        const response = await axios.request({
            url: api + 'proximas',
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

export async function obtenerPeliculasPorEstrenadas() {
    try {
        const response = await axios.request({
            url: api + 'estrenadas',
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