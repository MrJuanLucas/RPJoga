const connection = require('../database/connection');
module.exports = {
    async index(request, response){
        const medias = await connection('media').select('*');

        return response.json(medias);
    },
    async index_user(request,response){
        const medias = await connection('media').select('*');

        return response.json(medias);
    }
    ,async create(request, response){
        
        const {media_name, tag, media} = request.body;

        const user_id = request.headers.authorization;
        const board_id = request.headers.board_id;
         
        await connection('media').insert({
            media_name,
            tag,
            media,
            user_id,
            board_id
        })
    
        return response.json('Cadastrado');
    }
} 