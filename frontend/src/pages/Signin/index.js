import React , { useState }from 'react';
import {Link, useHistory} from 'react-router-dom';
 
import api from '../../services/api';

import './styles.css';

export default function Signin(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            password
        };
        try{
        const response = await api.post('usersignin', data);

        history.push('/');

        alert('Cadastrado com sucesso')
        } catch(err){
            alert('Erro no cadastro')
        }
    }

    return(
        <div>
            <section className="Form">
                <form onSubmit={handleRegister}>
                    <h1> Faça seu cadastro </h1>
                    
                    <input placeholder="Seu nome"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                     <input placeholder="Seu email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                     />
                     <input placeholder="Sua senha"
                     type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                     />
                     <button type="submit">Cadastrar</button>
                 </form>

                 <Link to="/">
                        Voltar para a página de Login
                </Link>   
            </section>
        </div>
    )
}