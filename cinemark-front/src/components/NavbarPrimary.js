import React from 'react'
import { Navbar } from 'react-bulma-components'
import { Link } from 'react-router-dom';
import '../assets/NavbarPrimary.css';


export default function NavbarPrimary() {
    return (
        <Navbar>
            <Navbar.Brand>
                <Navbar.Item renderAs="span" >
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="22.446" viewBox="0 0 230 22.446"><g id="lg_cinemark_red" transform="translate(-0.029 0.015)"><path id="Path_1_1_" d="M26.93,1.1h2.53V13.637H24.4V1.1Z" transform="translate(3.66 0.167)" fill="#b5121b"></path><path id="Path_2_1_" d="M52.317,7.541,52.087,1.1h5.176V13.637H52.892L45.531,7.2l.23,6.441H40.7V1.1h4.256Z" transform="translate(6.107 0.167)" fill="#b5121b"></path><path id="Path_3_1_" d="M77.927,10.991v2.645H67V1.1H77.927V3.745H72.176V5.931h5.176V8.576H72.061v2.415Z" transform="translate(10.057 0.167)" fill="#b5121b"></path><path id="Path_4_1_" d="M133.262,1.2h-5.291L121.3,13.737h5.061l.92-2.07h6.556l.92,2.07h5.061Zm-4.831,8.166,2.185-4.946L132.8,9.366Z" transform="translate(18.211 0.182)" fill="#b5121b"></path><path id="Path_5_1_" d="M11.152,16.1a5.006,5.006,0,0,1,0-10.006,5.046,5.046,0,0,1,3.566,1.5l2.53-5.751A10.954,10.954,0,0,0,1.836,5.178,11.03,11.03,0,0,0,5.171,20.59a11.48,11.48,0,0,0,6.1,1.84H108V11.159l7.131,7.706,7.476-7.706V22.431H230.029L206.451,6.558l6.326-5.521h-5.636l-6.556,5.751V1.037h-5.061V13.8h5.061v-6.1l12.652,8.626H128.814V1.382h-5.521l-8.281,8.511-8.051-8.626H101.44V16.22Z" transform="translate(0)" fill="#b5121b"></path><path id="Path_6_1_" d="M160.557,9.726a4.039,4.039,0,0,0-2.07-2.07,3.767,3.767,0,0,0,2.3-3.22A3.376,3.376,0,0,0,157.682,1.1H147.1V13.637h5.061V8.461a2.913,2.913,0,0,1,3.105.92,18.217,18.217,0,0,1,2.415,4.371h4.946Zm-6.211-3.105h-2.3V3.285h2.3a1.769,1.769,0,0,1,1.725,1.725A1.671,1.671,0,0,1,154.346,6.621Z" transform="translate(22.085 0.167)" fill="#b5121b"></path></g></svg>
                    </Link>
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item className="navbar__item" renderAs="span" >
                        <Link to="/cartelera">CARTELERA</Link>
                    </Navbar.Item>
                    <Navbar.Item className="navbar__item" renderAs="span" >
                        <Link to="/teatros">TEATROS</Link>
                    </Navbar.Item>
                    <Navbar.Item className="navbar__item" renderAs="span" >
                        <Link to="/confiteria">CONFITERIA</Link>
                    </Navbar.Item>
                    <Navbar.Item className="navbar__item" renderAs="span" >
                        <Link to="/promociones">PROMOCIONES</Link>
                    </Navbar.Item>
                    <Navbar.Item className="navbar__item" renderAs="span" >

                        <Link to="/membresia">MEMBRESIA GOLD</Link>

                    </Navbar.Item>
                </Navbar.Container>

            </Navbar.Menu>
        </Navbar>
    )
}
