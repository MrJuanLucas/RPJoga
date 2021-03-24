const connection = require('../database/connection');
module.exports = {
    async index(request, response){

        const cards = await connection('card')
        .join('user', 'user.user_id', '=','card.user_id')
        .select(['card.*', 
        'user.name']);
        

        return response.json(cards);
    }
    ,async create(request, response){
        
        const {card_name, card_tag, card_text} = request.body;

        const user_id = request.headers.authorization;
        const board_id = request.headers.board_id;
         
        await connection('card').insert({
            card_name,
            card_tag,
            card_text,
            user_id,
            board_id
        })
    
        return response.json('Cadastrado');
    }
} 