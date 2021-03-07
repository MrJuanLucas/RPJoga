const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        
        const {name, email, password} = request.body;

        const email_test = await connection('user')
            .where('email', email)
            .select('email').first();
        if(email_test){
            return response.status(400).json(
                {error:'Esse mail já foi cadastrado'}
            )
        }
         
        await connection('user').insert({
            name,
            email,
            password,
        })
    
        return response.json('Cadastrado');
    }
}   