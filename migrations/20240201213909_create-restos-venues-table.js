/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("restos_venues", (table) => {
      table.increments("id").primary();
      table.integer("resto_id").unsigned();
      table.integer("venue_id").unsigned();
      table.string("price_level").notNullable();
      table.integer("distance_venue").unsigned();
      table.integer("duration_venue").unsigned();
      table
        .foreign("resto_id")
        .references("id")
        .inTable("restaurants")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .foreign("venue_id")
        .references("id")
        .inTable("venues")
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
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("restos_venues")
};
