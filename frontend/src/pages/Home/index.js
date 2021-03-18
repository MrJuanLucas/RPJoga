import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function Home(){

    const user_name = localStorage.getItem('user_name');


    return(
        <div>
            <header>
                <span>Bem vindo {user_name}</span>

                <Link className="button" to="create">Crie uma nova mesa</Link>
                <Link className="button" to="index">Encontre novas mesas</Link>
            </header>

        <h1>Suas mesas</h1>

        <ul>
            <li>Nome: 
            <p></p>
            Sistema:
            <p></p>
            Status:
            <p></p>

        <Link to="/table">
            <button type="button">
                <span>Entrar na mesa</span>
            </button>
        </Link>
            </li>
        </ul>

         </div> 
    )
}