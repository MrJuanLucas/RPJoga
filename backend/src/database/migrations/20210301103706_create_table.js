
exports.up = function(knex) {
    return knex.schema.createTable('board', function(table){
        table.increments('board_id').primary();
  
        table.text('name').notNullable();
        table.text('system').notNullable();
        table.text('status').notNullable();

        table.integer('user_id').unsigned();
      
        table.foreign('user_id').references('user_id').inTable('user');
        
    })
};

exports.down = function(knex) {
    knex.schema.dropTable('board');
};