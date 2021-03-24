const connection = require('../database/connection');
module.exports = {
    async create(request, response){
        const user_id = request.headers.authorization;
        const board_id = request.headers.board_id;
         
        await connection('player').insert({
            user_id,
            board_id
        })
    }
} 