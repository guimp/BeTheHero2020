import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
    const[title,setTitle] = useState('');
    const[description,setDescription] = useState('');
    const[value,setValue] = useState('');
    
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };
        
        try {
            await api.post('incidents', data, {
                headers:{
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch (error) {
            alert("erro ao cadastrar!");
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"></img>
                    <p>Descreva o caso detalhadamente para encontra um herói para resolver isso!</p>
                        <Link className="back-link" to="/profile">
                            <FiArrowLeft size={16} color="#E02041">
                            </FiArrowLeft>
                            Voltar para Home
                        </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        value={title}
                        onChange={e=>setTitle(e.target.value)}
                        placeholder="Título do caso"
                    ></input>

                    <textarea 
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                        placeholder="Descrição"
                    ></textarea>

                    <input 
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                        placeholder="Valor em reais"
                    ></input>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}