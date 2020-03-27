import React from 'react';
import {Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';

import logo from '../../assets/logo.svg';

export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                
            <section>
                <img src={logo} alt="Be the Hero"/>
                <h1> Cadstro </h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
            
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#e02041"/>Não tenho Cadastro
                </Link>
            </section>
            <form>
                <input placeholder="Nome da ONG"/>
                <input type="email" placeholder="E-Mail"/>
                <inut placeholder="WhatsApp"/>
                <div className="input-group">
                    <input placeholder="Cidade"/>
                    <input placeholder="UF" style={{width:80}}/>
                </div>
                <button className="button">Cadastrar</button>
            </form>

            </div>
        </div>
    );
}