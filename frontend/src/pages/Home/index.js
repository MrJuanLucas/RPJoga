import React ,{useState, useEffect}from 'react';
import {Link, useHistory } from 'react-router-dom';
import {FaDiceD20} from 'react-icons/fa';
import {FiPower} from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/Logo.png'

import api from '../../services/api';
import Ex1 from '../../assets/Ex1.jpg';
import Ex2 from '../../assets/Ex2.jpg';
import Ex3 from '../../assets/Ex3.png';
import Ex4 from '../../assets/Ex4.jpg';


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

    
    async function handleRegistrateTable(board_id){
       await localStorage.setItem('board_id', board_id);
    }


    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }


    return(
        <div className="Idf3">
        <div className="home-container">
            <div className="bottons1">
            <header>
                <img src={logo}/>
                <br/>
                <span>Bem vindo {user_name}</span>
                <Link className="button" to="create">Crie uma nova mesa</Link>
                <Link className="button" to="index">Encontre novas mesas</Link>
                <button className="button" type="button" onClick={handleLogout}><FiPower size={18} color="#fff"/></button>
            </header>
            </div>

        <h1>Suas mesas</h1>

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
                <button className="button" onClick= {handleRegistrateTable(board.board_id)} type="button">
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