import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('meals', (table) => {
    table.text('id').primary()
    table.text('fk_user_id').notNullable()
    table.text('name').notNullable()
    table.text('description')
    table.date('date').notNullable()
    table.time('time').notNullable()
    table.boolean('is_diet').notNullable().defaultTo(true)
    table
      .foreign('fk_user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('meals')
}
