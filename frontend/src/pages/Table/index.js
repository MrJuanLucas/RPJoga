import React ,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {GiD4, GiPerspectiveDiceFive, GiDiceEightFacesEight, GiD10, GiD12, GiDiceTwentyFacesTwenty} from 'react-icons/gi';
import {FiPower} from 'react-icons/fi';

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
        <div className="Idf3">
        <div className="home-container">
        <div>
            <button className="button" onClick={handleGetOutTable}>
               <FiPower size={13} color="#fff"/>
            </button>
        <div >
           <section className="Form">
                <form > 
                    <h1 color="#fff"> Envie um card</h1>

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

                    
                    <button  className="button" onClick={handleCard} type="submit">Enviar cartão</button>
                 </form>   
            </section>
            <div>
                <h3>Role dados!</h3>
            <button  className="button" onClick={rolld4} type="submit"><GiD4 size={18} color="#fff"/></button>
            <button  className="button" onClick={rolld6} type="submit"><GiPerspectiveDiceFive size={18} color="#fff"/></button>
            <button  className="button" onClick={rolld8} type="submit">< GiDiceEightFacesEight size={18} color="#fff"/></button>
            <button  className="button" onClick={rolld10} type="submit">< GiD10 size={18} color="#fff"/></button>
            <button  className="button" onClick={rolld12} type="submit">< GiD12 size={18} color="#fff"/></button>
            <button  className="button" onClick={rolld20} type="submit">< GiDiceTwentyFacesTwenty size={18} color="#fff"/></button>
            <button  className="button" onClick={rolld100} type="submit">< GiD10 size={18} color="#fff"/>< GiD10 size={18} color="#fff"/></button>
            <h3 color="#fff">Resultado: {diceRoll}</h3>

            </div>
            </div>

            <ul>
            {cards.map(card => (
                <li key={card.card_id}>
                <strong>Nome:</strong> 
                <p>{card.card_name}</p>
                <strong>Tag:</strong>
                <p>{card.card_tag}</p>
                <p>{card.card_text}</p>
                <strong>Criado por:</strong>
                <p>{card.name}</p>
                </li>
            ))

            }
            </ul>
        
        </div>
         </div>   
    </div>
    )
}