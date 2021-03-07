
exports.up = function(knex) {
    return knex.schema.createTable('media', function(table){
        table.increments('media_id').primary();
  
        table.text('name').notNullable();
        table.text('tag').notNullable();
        table.binary('media').notNullable();

        table.integer('user_id').unsigned();
        table.integer('board_id').unsigned();
      
        table.foreign('user_id').references('user_id').inTable('user');
        table.foreign('board_id').references('board_id').inTable('board');
    
    })
};

exports.down = function(knex) {
    knex.schema.dropTable('media');
};
