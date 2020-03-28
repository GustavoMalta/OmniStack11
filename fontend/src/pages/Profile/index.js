import React,{useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';
import logo from '../../assets/logo.svg';

export default function Register(){
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    async function handleDeleteIncident(id){
        try {
            const response =  await api.delete(`incidents/${id}`,{
                            headers:{
                                authorization:ongId,
                            },id
                        }); 
            alert(`Caso numero ${response.config.id} Deletado`);
            return setIncidents(incidents.filter(incident =>incident.id !=id));
            
        } catch (error) {
            return alert("Erro ao deletar o caso");
        }
        
    }

    function handleLogOut(){
        localStorage.clear();
        history.push('/');
    }
    useEffect(()=>{
        api.get('profile',{
            headers:{
                authorization:ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    return(
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be the Hero"/>
                <span>bem vindo, {ongName}</span>
                <Link className="button" to="/incident/new">
                    Cadastrar novo Caso
                </Link>
                <button onClick={handleLogOut} type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>

                {incidents.map(incident =>(
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>
                        
                        <strong>Desrição:</strong>
                        <p>{incident.description}</p>
                        
                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}</p>

                        <button type="button" onClick={() =>handleDeleteIncident(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
               
                
            </ul>

        </div>

    );

}