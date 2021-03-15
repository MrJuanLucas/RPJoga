import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function Index(){
    return(
        <div>
            <header>

            </header>

        <h1>Mesas disponíveis</h1>

        <ul>
            <li>Nome: 
            <p></p>
            Sistema:
            <p></p>
            Status:
            <p></p>

        <Link>
            <button type="button">
                <span>Entrar na mesa</span>
            </button>
        </Link>
            </li>
        </ul>

         </div> 
    )
}