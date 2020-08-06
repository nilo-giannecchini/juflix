import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../assets/img/Logo.png';
import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import './menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo Bravo!" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;