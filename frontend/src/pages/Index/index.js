import React , {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

export default function Index(){

    const [boards, setBoards] = useState([]);
    const [board_id, setBoard_id] = useState('');

    const user_name = localStorage.getItem('user_name');

    useEffect(() => {
        api.get('board_index').then(response => {
            setBoards(response.data);
        })
    }, [])

    function handleRegistrateTable(){
        localStorage.setItem('board_id', 3);
    }

    return(
        <div>
            <header>
                <span>Bem vindo {user_name}</span>

                    <Link className="button" to="create">Crie uma nova mesa</Link>
                    <Link className="button" to="index">Encontre novas mesas</Link>
            </header>

        <h1>Mesas disponíveis</h1>

        <ul>
            {boards.map(board => (
                <li key={board.board_id}>
                Nome: 
                <p>{board.name}</p>
                Sistema:
                <p>{board.system}</p>
                Status:
                <p>{board.status}</p>
    
            <Link to="/table">
                <button onClick={handleRegistrateTable} type="button">
                    <span>Entrar na mesa</span>
                </button>
            </Link>
                </li>
            ))
            }
        </ul>

         </div> 
    )
}