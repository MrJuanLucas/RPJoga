const connection = require('../database/connection');
module.exports = {
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