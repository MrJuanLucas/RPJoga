import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';

import IWU from '../../assets/IWU.png';
import Logo from '../../assets/Logo.png';


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const user_id = localStorage.getItem('user_id');

    async function handleLogin(e){
        e.preventDefault();


        const data = {
            email,
            password
        };

       
           try{
            const response = await api.post('session', data);  

            if(response.data.user.user_id == user_id){
                alert("Usuário já logado");
                
            }else{

            localStorage.setItem('user_id', response.data.user.user_id);
            localStorage.setItem('user_name', response.data.user.name);
            localStorage.setItem('user_email', response.data.user.email);

            
            history.push('/home');
            }
           
        } catch(err){
            alert("Usuário não encontrado")
        }
    }


    return(
    <div className="Idf">
        <div className="login-container">
            <section className="Form">
                <img src={Logo} alt="Gather your party"/>
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
                     <button className="button" type="submit">Entrar</button>
                 </form>
                 <Link to="/signin">
                     <FiLogIn size={16} color="e9e7e7"/>
                        Cadastre-se
                </Link>  
            </section>
            <img src={IWU} alt="We can play dnd now?"/>
        </div>
    </div>
    )
}