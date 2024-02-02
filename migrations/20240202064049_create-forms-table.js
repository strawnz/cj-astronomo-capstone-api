/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("forms", (table) => {
      table.increments("id").primary();
      table.string("venue_name").notNullable();
      table.date("event_date").notNullable();
      table.timestamp("preferred_time").notNullable();
      table.string("option_parking").notNullable();
      table.string("option_restaurant").notNullable();
      table.string("option_price").notNullable();
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
  await knex.schema.dropTableIfExists("forms")
};
