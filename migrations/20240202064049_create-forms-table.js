/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("forms", (table) => {
      table.increments("id").primary();
      table.string("venue_name").notNullable();
      table.datetime("event_date").notNullable();
      table.time("preferred_time").notNullable();
      table.string("option_parking").notNullable();
      table.string("option_restaurant").notNullable();
      table.string("option_price").notNullable();
      table.integer("parking_id").unsigned();
      table.integer("resto_id").unsigned();
      table.integer("venue_id").unsigned();
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
  await knex.schema.dropTableIfExists("forms")
};
