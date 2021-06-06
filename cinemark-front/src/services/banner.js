import axios from 'axios';
const api = 'http://localhost:3200/banner/';


export async function obtenerBanners() {
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