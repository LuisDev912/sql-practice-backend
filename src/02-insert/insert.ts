import { db } from '../db.ts';

/* === INSERT QUERIES === */
const firstInsert = db.prepare(`
    INSERT INTO users (name, salary, currency, age) VALUES (?, ?, ?, ?);
`);

// --- run insert queries ---
firstInsert.run('John Doe', 1500, 'USD', 19);
firstInsert.run('Guillermo', 3.471465, 'ars', 37);
firstInsert.run('DROP TABLE users); --', 3.471465, 'ars', 37);
firstInsert.run(0, '', '', '20'); // test query

/* ===  SELECT STATEMENTS === */
const getUsers = db.prepare('SELECT * FROM users;').all();

console.table(getUsers);