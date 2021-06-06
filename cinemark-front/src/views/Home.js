import React from 'react'
import BannerCarrousel from '../components/Home/BannerCarrousel'
import EstrenosCartelera from '../components/Home/EstrenosCartelera'
import ProximosEstrenos from '../components/Home/ProximosEstrenos'


export default function Home() {
    return (
        <>
            <BannerCarrousel />
            <EstrenosCartelera />
            <ProximosEstrenos />

        </>
    )
}
