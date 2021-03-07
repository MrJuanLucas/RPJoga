
exports.up = function(knex) {
    return knex.schema.createTable('user', function(table){
        table.increments('user_id').primary();
  
        table.text('name').notNullable();
        table.text('email').notNullable();
        table.text('password').notNullable();
        
    })
};

exports.down = function(knex) {
    knex.schema.dropTable('user');
};
