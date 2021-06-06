import React from 'react'
import { Navbar } from 'react-bulma-components'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

export default function NavbarSecundary() {
    return (
        <Navbar className="has-background-grey-lighter">
            <Navbar.Brand>
                <Navbar.Item href="#">
                    <FaFacebookSquare size={30} />
                    <FaTwitterSquare size={30} />
                    <FaInstagramSquare size={30} />
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu className="is-align-items-center">

                <Navbar.Container className="is-justify-content-center"   >
                    <Navbar.Item className="navbar__item" renderAs="span" href="#">
                        TARIFAS
                    </Navbar.Item>
                    <Navbar.Item className="navbar__item" renderAs="span" href="#">
                        CONOCENOS
                    </Navbar.Item>
                    <Navbar.Item className="navbar__item" renderAs="span" href="#">
                        FORMATOS
                    </Navbar.Item>
                    <Navbar.Item className="navbar__item" renderAs="span" href="#">
                        MARKETING EMPRESARIAL
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container align="end">

                    <Navbar.Item href="#">
                        <Navbar.Link>Nombre Usuario</Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item href="#">Mi Cuenta</Navbar.Item>
                            <Navbar.Item href="#">Cerrar Sesion</Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    )
}
