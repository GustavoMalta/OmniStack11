import React from './node_modules/react';
import {Link} from './node_modules/react-router-dom';
import { FiPower, FiTrash2 } from './node_modules/react-icons/fi';

import './style.css';
import logo from '../../assets/logo.svg';

export default function NewIncident(){
    return(
        <div className="profile-indicent">
            <header>
                <img src={logo} alt="Be the Hero"/>
                <span>bem vindo, [nome da ong]</span>
                <Link className="button" to="/">
                    Cadastrar novo Caso
                </Link>
                <button type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    
                    <strong>Desrição:</strong>
                    <p>Descrição</p>
                    
                    <strong>Valor:</strong>
                    <p>R$123,45</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    
                    <strong>Desrição:</strong>
                    <p>Descrição</p>
                    
                    <strong>Valor:</strong>
                    <p>R$123,45</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    
                    <strong>Desrição:</strong>
                    <p>Descrição</p>
                    
                    <strong>Valor:</strong>
                    <p>R$123,45</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    
                    <strong>Desrição:</strong>
                    <p>Descrição</p>
                    
                    <strong>Valor:</strong>
                    <p>R$123,45</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    
                    <strong>Desrição:</strong>
                    <p>Descrição</p>
                    
                    <strong>Valor:</strong>
                    <p>R$123,45</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>

        </div>

    );

}