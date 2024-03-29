/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("parking_restos", (table) => {
      table.increments("id").primary();
      table.integer("parking_id").unsigned();    
      table.integer("resto_id").unsigned();
      table.integer("distance_resto").unsigned();
      table.integer("duration_resto").unsigned();
      table
        .foreign("parking_id")
        .references("id")
        .inTable("parking")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .foreign("resto_id")
        .references("id")
        .inTable("restaurants")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("parking_restos");
};