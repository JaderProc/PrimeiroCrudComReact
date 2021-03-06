import React from 'react';
import './Logo.css';
import logo from '../../assets/imgs/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <aside className="logo">
            <Link to="/" className="logo">
                <img src={logo} alt="Nuvem Kinto'un" />
            </Link>
        </aside>
    )
}

export default Logo