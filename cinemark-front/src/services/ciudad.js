import axios from 'axios';
const api = 'http://localhost:3200/ciudad/';


export async function obtenerCiudades() {
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