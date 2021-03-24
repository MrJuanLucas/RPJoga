import React ,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api'
import './styles.css';

export default function Table(){

    const [card_name, setCard_name] = useState('');
    const [card_tag, setCard_Tag] = useState('');
    const [card_text, setCard_text] = useState('');

    const [diceRoll, setDiceRoll] = useState('');

    const [cards, setCards] = useState([]);

    const history = useHistory();

    const board_id = localStorage.getItem('board_id');
    const user_id = localStorage.getItem('user_id');

    useEffect(() => {
        api.get('card_index').then(response => {
            setCards(response.data);
        })
    }, [])

    function rolld4(){
        const min = Math.ceil(1)
        const max = Math.floor(4)
        setDiceRoll(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    function rolld6(){
        const min = Math.ceil(1)
        const max = Math.floor(6)
        setDiceRoll(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    function rolld8(){
        const min = Math.ceil(1)
        const max = Math.floor(8)
        setDiceRoll(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    function rolld10(){
        const min = Math.ceil(1)
        const max = Math.floor(10)
        setDiceRoll(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    function rolld12(){
        const min = Math.ceil(1)
        const max = Math.floor(12)
        setDiceRoll(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    function rolld20(){
        const min = Math.ceil(1)
        const max = Math.floor(20)
        setDiceRoll(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    function rolld100(){
        const min = Math.ceil(1)
        const max = Math.floor(100)
        setDiceRoll(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    async function handleCard(e){
        

        const data ={
            card_name,
            card_tag,
            card_text
        }

        try{
            const response = await api.post('card', data,{
                headers:{
                    Authorization: user_id,
                    board_id: board_id
                }
            });   
    
            alert('Cadastrado com sucesso')
            }catch(err){
                alert('Erro no cadastro')
            }

    }

     function handleGetOutTable(){
        localStorage.removeItem('board_id');
        history.push('/home');
    }

    return(
        <div>
            <button onClick={handleGetOutTable}>
                Sair
            </button>
        <div>
           <section className="Form">
                <form > 
                    <h1> Envie um card</h1>

                     <input placeholder="Nome do card"
                     value={card_name}
                     onChange={e => setCard_name(e.target.value)}
                     />

                     <input placeholder="Tag da imagem"
                     value={card_tag}
                     onChange={e => setCard_Tag(e.target.value)}
                     />

                     <input placeholder="Coloque um texto"

                     value={card_text}
                     onChange={e => setCard_text(e.target.value)}
                     />

                    
                    <button  onClick={handleCard} type="submit">Enviar cartão</button>
                 </form>   
            </section>
            <div>
                Role dados!<br/>
            <button  onClick={rolld4} type="submit">d4</button>
            <button  onClick={rolld6} type="submit">d6</button>
            <button  onClick={rolld8} type="submit">d8</button>
            <button  onClick={rolld10} type="submit">d10</button>
            <button  onClick={rolld12} type="submit">d12</button>
            <button  onClick={rolld20} type="submit">d20</button>
            <button  onClick={rolld100} type="submit">d100</button>
            <p>Resultado: {diceRoll}</p>

            </div>
            </div>

            <ul>
            {cards.map(card => (
                <li key={card.card_id}>
                Nome: 
                <p>{card.card_name}</p>
                Tag:
                <p>{card.card_tag}</p>
                <p>{card.card_text}</p>
                Criado por:
                <p>{card.name}</p>
                </li>
            ))

            }
            </ul>
        

         </div>   
    )
}