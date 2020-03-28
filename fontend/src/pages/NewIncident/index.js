import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';

import api from '../../services/api';
import logo from '../../assets/logo.svg';

export default function Newincident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValor] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    let [valueshow, setshow] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const data = {title,description,value};
                console.log(data);
        try {
            await api.post('incidents',data,{
                headers:{authorization: ongId},
                });
            history.push('/profile');
            return alert('Caso Cadastrado com sucesso!!');
        } catch (err) {
            return alert('Erro ao cadastrar o caso: '. err);
        }
    }


    return(
        <div className="newincident-container">
            <div className="content">
                
            <section>
                <img src={logo} alt="Be the Hero"/>
                <h1> Cadstrar Novo Caso </h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
            
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#e02041"/>Voltar apra home
                </Link>
            </section>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Titulo do caso"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    />
                <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                    />
                <input 
                    placeholder="Valor em Reais"
                    value={value}
                    type='number'
                    pattern="[0-9]+([,\.][0-9]+)?" min="0"
                    onChange={e=>setValor(e.target.value)}
                    
                    />
                <button type="submit" className="button">Cadastrar</button>
            </form>

            </div>
        </div>
    );
}