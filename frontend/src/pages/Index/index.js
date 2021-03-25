import React , {useState, useEffect}from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';
import {FaDiceD20} from 'react-icons/fa';

import './styles.css';

import api from '../../services/api';

export default function Index(){

    const [boards, setBoards] = useState([]);
    const [board_id, setBoard_id] = useState('');

    const user_name = localStorage.getItem('user_name');

    const history = useHistory();

    useEffect(() => {
        api.get('board_index').then(response => {
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
        <div className="Idf3">
        <div className="home-container">
            <header>
                <span>Bem vindo {user_name}</span>
                    <Link className="button" to="create">Crie uma nova mesa</Link>
                    <Link className="button" to="index">Encontre novas mesas</Link>
                    <button className="button" type="button" onClick={handleLogout}><FiPower size={18} color="#fff"/></button>
            </header>

        <h1>Mesas disponíveis</h1>

        <ul>
            {boards.map(board => (
                <li key={board.board_id}>
                <strong>Nome:</strong> 
                <p>{board.name}</p>
                <strong>Sistema:</strong>
                <p>{board.system}</p>
                <strong>Status:</strong>
                <p>{board.status}</p>
    
            <Link to="/table">
                <button className="button" onClick={handleRegistrateTable} type="button">
                        <FaDiceD20 size={18} color="#fff"/>
                </button>
            </Link>
                </li>
            ))
            }
        </ul>

         </div> 
    </div>
    )
}