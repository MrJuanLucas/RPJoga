
exports.up = function(knex) {
    return knex.schema.createTable('card', function(table){
        table.increments('card_id').primary();

        table.text('card_name').notNullable();
        table.text('card_tag').notNullable();
        table.text('card_text').notNullable();

        table.integer('user_id').unsigned();
        table.integer('board_id').unsigned();

        table.foreign('user_id').references('user_id').inTable('user');
        table.foreign('board_id').references('board_id').inTable('board');

    })
};

exports.down = function(knex) {
  
};
