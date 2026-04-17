import { db } from '../db.ts';

/* === INSERT QUERIES === */
const firstInsert = db.prepare(`
    INSERT INTO users (name, salary, currency, age) VALUES (?, ?, ?, ?);
`);

const secondInsert = db.prepare(`
    INSERT INTO companies (name) VALUES (?);
`);

// --- run insert queries ---
firstInsert.run('John Doe', 1500, 'USD', 19);
firstInsert.run('Guillermo', 3471465, 'ars', 37);
firstInsert.run('DROP TABLE users); --', 3471465, 'ars', 37);
firstInsert.run(0, '', '', '20'); // test query

secondInsert.run('Bungie');
secondInsert.run('Rockstar');
secondInsert.run('Vercel');
secondInsert.run('Microsoft');
secondInsert.run('343 Industries');
secondInsert.run('Apple');
secondInsert.run('Globant');
secondInsert.run('Meta');

/* ===  SELECT STATEMENTS === */
const getUsers = db.prepare('SELECT name, salary, currency, age FROM users;').all();
const getCompanies = db.prepare('SELECT name FROM companies;').all();

console.table(getUsers);
console.table(getCompanies);