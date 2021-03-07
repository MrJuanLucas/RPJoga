const connection = require('../database/connection');
module.exports = {
    async create(request, response){
        
        const {name, tag, media} = request.body;

        const user_id = request.headers.authorization;
        const board_id = request.headers.board_id;
         
        await connection('media').insert({
            name,
            tag,
            media,
            user_id,
            board_id
        })
    
        return response.json('Cadastrado');
    }
} 