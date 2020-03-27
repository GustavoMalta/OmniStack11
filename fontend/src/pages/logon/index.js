import React from 'react';
import {Link} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css'
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero"/>
                <form>
                    <h1>Faça seu Login</h1>
                    <input type="text" className="ID" placeholder="Sua ID"/>
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#e02041"/>Não tenho Cadastro
                    </Link>
                </form>
            </section>
        <img src={heroesImg} alt="heroes"/>

        </div>
    ); 
}