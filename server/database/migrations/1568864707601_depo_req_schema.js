"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DepoReqSchema extends Schema {
  up() {
    this.create("depo_reqs", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("nominal").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("depo_reqs");
  }
}

module.exports = DepoReqSchema;
