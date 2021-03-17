import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';

import './styles.css';

import api from '../../services/api'

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        console.log(email, password)

        const data = {
            email,
            password
        };

        console.log(data)
       

        try{
            const response = await api.post('session', {data});
            console.log(response);

            
            history.push('/home');

           
        } catch(err){
            alert("Usuário não encontrado")
        }
    }


    return(
        <div>
            <section className="Form">
                <form onSubmit={handleLogin}>
                    <h1> Faça seu login </h1>

                     <input placeholder="Seu email"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     />
                     <input placeholder="Sua senha"
                     type="password"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                     />
                     <button type="submit">Entrar</button>
                 </form>
                 <Link to="/signin">
                        Cadastre-se
                    </Link>  
            </section>
        </div>
    )
}