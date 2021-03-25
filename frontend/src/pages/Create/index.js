import React ,{ useState }from 'react';
import {Link, useHistory } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

export default function Create(){
    const [name, setName] = useState('');
    const [system, setSystem] = useState('');
    const [status, setStatus] = useState('');

    const history = useHistory();

    const user_id = localStorage.getItem('user_id');

    async function handleSubmit(e){
        e.preventDefault();
        

        const data = {
            name,
            system,
            status
        };

        
        try{
        const response = await api.post('board', data,{
            headers:{
                Authorization: user_id
            }
        });

        history.push('/home');

        alert('Cadastrado com sucesso')
        }catch(err){
            alert('Erro no cadastro')
        }
    }

    return(
        <div className="Idf">
        <div className="login-container">
            <section className="form">
                <form onSumit ={handleSubmit}> 
                    <h1> Crie sua mesa </h1>

                     <input placeholder="Nome da mesa"
                     value={name}
                     onChange={e => setName(e.target.value)}
                     />
                     <input placeholder="Sistema da mesa"
                     value={system}
                     onChange={e => setSystem(e.target.value)}
                     />
                     <input placeholder="Status da mesa"
                     value={status}
                     onChange={e => setStatus(e.target.value)}
                     />

                    <Link to="/table">
                        <button className="button" onClick={handleSubmit} type="submit">Criar mesa</button>
                    </Link>
                 </form>   
            </section>
        </div>
    </div>
    )
}