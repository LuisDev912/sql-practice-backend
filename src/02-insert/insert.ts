import { db } from '../01-tables/tables.ts';

const insert = db.prepare(`
    INSERT INTO users (name, salary, age) VALUES (?, ?, ?);
`);

insert.run('John Doe', 1500, 19);