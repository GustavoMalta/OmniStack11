import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import logo from '../../assets/logo.svg';
import api from '../../services/api.js'
import { useState } from 'react';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = {name,email,whatsapp,city,uf};
        let response;
        try{
            response = await api.post('/ongs', data);
        }catch{
            alert(`Erro no cadastro: ${response.status}`)
        }
            alert(`Cadastrado com sucesso: ${response.data.id}`)
            console.log(response);
            history.push('/');
    } 

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
            <form onSubmit={handleRegister}>                
                <input placeholder="Nome da ONG"
                        value={name}
                        onChange={e=>setName(e.target.value)}/>
                <input type="email" placeholder="E-Mail"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}/>
                <input placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e=>setWhatsapp(e.target.value)}/>
                <div className="input-group">
                    <input placeholder="Cidade"
                        value={city}
                        onChange={e=>setCity(e.target.value)}/>
                    <input placeholder="UF" style={{width:80, textTransform: 'uppercase'}}
                        value={uf}
                        onChange={e=>setUf(e.target.value)}/>
                </div>
                <button className="button" type="submit">Cadastrar</button>
            </form>

            </div>
        </div>
    );
}