import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css'
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await api.post('sessions',{id})
            console.log(response.data.name);
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile')
        } catch (err) {
            console.log(err);
            alert(`Falha no Login ${err}`);
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>
                    <input type="text" 
                            className="ID" 
                            placeholder="Sua ID"
                            value={id}
                            onChange={e=>setId(e.target.value)}/>
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