const connection = require('../database/connection');
module.exports = {
    async index(request, response){
        const boards = await connection('board')
             .select('*');
        
        return response.json(boards)

    },
    async index_user(request, response){

        const user_id = request.headers.authorization;

        const boards = await connection('board')
        .where('user_id', user_id)
        .select('*');
        
        return response.json(boards)
    }
    ,

    async create(request, response){
        
        const {name, system, status} = request.body;

        const user_id = request.headers.authorization
         
        await connection('board').insert({
            name,
            system,
            status,
            user_id
        })
    
        return response.json('Cadastrado');
    }
}   