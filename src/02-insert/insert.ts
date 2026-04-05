import { db } from '../01-tables/tables.ts';

/* === INSERT QUERIES === */
const firstInsert = db.prepare(`
    INSERT INTO users (name, salary, currency, age) VALUES (?, ?, ?, ?);
`);

// --- run insert queries ---
firstInsert.run('John Doe', 1500, 'USD', 19);
firstInsert.run('Guillermo', 3.471465, 'ars', 37);
firstInsert.run(0, '', '', '20'); // test query

/* === INSERT STATEMENTS === */
const getUsers = db.prepare('SELECT * FROM users;').all();

console.log(getUsers);