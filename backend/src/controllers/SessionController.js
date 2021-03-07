const connection = require('../database/connection');

module.exports = {
    async create(request, response){
       const {email, password} = request.body;

       const check = await connection('user')
        .where('email',email)
        .where('password', password)
        .select('name').first();
       
       if(!check){
           return response.status(400).json('Senha ou e-mail incorretos')
       } 

       return response.json({check})
    }
}