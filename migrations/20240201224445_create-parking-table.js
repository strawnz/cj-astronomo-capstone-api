/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("parking", (table) => {
      table.increments("id").primary();
      table.string("address").notNullable();
      table.integer("venue_id").unsigned();
      table.integer("distance_venue").unsigned();
      table.integer("duration_venue").unsigned();
      table.foreign("venue_id").references("id").inTable("venues");
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
    return knex.schema.dropTable("parking");
};
