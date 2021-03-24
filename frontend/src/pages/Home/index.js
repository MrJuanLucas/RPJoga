import React ,{useState, useEffect}from 'react';
import {Link, useHistory } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

export default function Home(){

    const [boards, setBoards] = useState([]);
    const [board_id, setBoard_id] = useState('');

    const user_name = localStorage.getItem('user_name');
    const user_id = localStorage.getItem('user_id');
    localStorage.setItem('board_id', board_id)

    const history = useHistory();

    useEffect(() => {
        api.get('board_user',{
            headers:{
                Authorization: user_id
            }
        }).then(response => {
            setBoards(response.data);
        })
    }, [])

    
    function handleRegistrateTable(){
        localStorage.setItem('board_id', 3);
    }


    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }



    

    return(
        <div>
            <header>
                <span>Bem vindo {user_name}</span>
                <Link className="button" to="create">Crie uma nova mesa</Link>
                <Link className="button" to="index">Encontre novas mesas</Link>
                <button type="button" onClick={handleLogout}>Sair</button>
            </header>

        <h1>Suas mesas</h1>

        <ul>
        {boards.map(board => (
                <li key={board.board_id}>
                    {board.board_id}
                Nome: 
                <p>{board.name}</p>
                Sistema:
                <p>{board.system}</p>
                Status:
                <p>{board.status}</p>
    
            <Link to="/table">
                <button onClick= {handleRegistrateTable()} type="button">
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