const connection = require('../database/connection');

module.exports = {
    async create(request, response){
       const {email, password} = request.body;
    
       const user = await connection('user')
        .where('email',email)
        .where('password', password)
        .select('user_id').first()
        ;
       
       if(!user){
           return response.status(400).json('Senha ou e-mail incorretos')
       } 

       return response.json({user})
    }
}