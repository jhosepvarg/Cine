import React from 'react'
import NavbarPrimary from '../components/NavbarPrimary';
import NavbarSecundary from './NavbarSecundary';
import '../assets/Header.css';

export default function Header() {
    return (
        <div className="header__custom navbar is-fixed-top is-flex-direction-column">
            <NavbarSecundary />
            <NavbarPrimary />
        </div>
    )
}
