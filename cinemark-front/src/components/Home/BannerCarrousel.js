import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel2';
import { obtenerBanners } from '../../services/banner';



export default function BannerCarrousel() {

    const options = {
        items: 1,
        rewind: true,
        autoplay: true,
        loop: true
    };

    const [banners, setBanners] = useState([]);

    useEffect(() => {
        async function obtener() {
            const respuesta = await obtenerBanners();
            if (respuesta && respuesta.resultados) {
                setBanners(respuesta.resultados);
            } else {
                setBanners([]);
            }
        }

        obtener();
    }, []);

    if (!banners || !banners.length) return null;

    return (
        <div>
            <OwlCarousel options={options}  >
                {
                    banners.map(({ id, imagen }) => <div key={id}><img src={imagen} alt="imagen" /></div>
                    )
                }
            </OwlCarousel>
        </div>
    )
}
