import { db } from '../db.ts';

/* === SELECT + WHERE STATEMENTS === */

const getAllUsers = db.prepare('SELECT * FROM users;').all();
const getFirstUsers = db.prepare('SELECT * FROM users LIMIT 3;').all();
const getDifferentUsers = db.prepare('SELECT DISTINCT name FROM users;').all();
// --- operators ---
const johnUsers = db.prepare("SELECT * FROM users WHERE name = 'John Doe';").all();
const belowThirtyAge = db.prepare("SELECT * FROM users WHERE age < 30;").all();
const notDollarSalaryUsers = db.prepare("SELECT * FROM users WHERE currency != 'USD'").all();
// --- advanced search ---
const similarNames = db.prepare("SELECT * FROM users WHERE name LIKE '_uillermo'").all();
const differentNames = db.prepare("SELECT * FROM users WHERE name NOT IN ('Guillermo')").all();
const similarAges = db.prepare('SELECT * FROM users WHERE age BETWEEN 18 AND 25').all();

// show the information
console.table(getAllUsers);
console.table(getFirstUsers);
console.table(getDifferentUsers);
console.table(johnUsers);
console.table(belowThirtyAge);
console.table(notDollarSalaryUsers);
console.table(similarNames);
console.table(differentNames);
console.table(similarAges);