import React , { useState }from 'react';
import {Link, useHistory} from 'react-router-dom';
import IWUA from '../../assets/IWUA.png'
 
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

        console.log(data);
        
        try{
        const response = await api.post('usersignin', data);

        history.push('/');

        console.log(response)

        alert('Cadastrado com sucesso')
        }catch(err){
            alert('Erro no cadastro')
        }
    }

    return(
    <div className="Idf2">
        <div className="Signin-container">
            <section className="Form">
                <img src={IWUA} alt="I Want you for an Adventure"/>
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
                     <button className="button" type="submit">Cadastrar</button>
                 </form>

                 <Link to='/'>
                        Voltar para a página de Login
                </Link>   
            </section>
        </div>
    </div>
    )
}