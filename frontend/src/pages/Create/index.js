import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function Create(){
    return(
        <div>
            <section className="Form">
                <form>
                    <h1> Crie sua mesa </h1>

                     <input placeholder="Nome da mesa"/>
                     <input placeholder="Sistema da mesa"/>
                     <input placeholder="Status da mesa"/>

                    <Link to="/table">
                        <button type="submit">Criar mesa</button>
                    </Link>
                 </form>   
            </section>
        </div>
    )
}