const connection = require('../database/connection');
module.exports = {
    async index(request, response){
        const {page = 1} = request.query;

        const [count] = await connection('board').count();

        const boards = await connection('board')
             .join('user', 'user.user_id', '=', 'board.user_id')
             .limit(5)
             .offset((page-1) * 5)
             .select(['board.*',
            'user.name'
            ])

        response.header('X-Total-Count', count['count[*]']) 
        
        return response.json(boards)

    },
    async index_user(request, response){

        const {page = 1} = request.query;

        const [count] = await connection('board').count();

        const boards = await connection('board')
             .join('user', 'user.user_id', '=', 'board.user_id')
             .limit(5)
             .offset((page-1) * 5)
             .select(['board.*'
            ])

        response.header('X-Total-Count', count['count[*]']) 
        
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