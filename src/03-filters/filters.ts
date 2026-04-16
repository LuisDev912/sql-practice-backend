import { db } from '../db.ts';

/* === SELECT + WHERE STATEMENTS === */

// note: it is a good practice to select the rows we want to get instead of all the rows. Here I do it this way for learning purposes.
const getAllUsers = db.prepare('SELECT * FROM users;').all();
const getDifferentUsers = db.prepare('SELECT DISTINCT name FROM users;').all();
// --- operators ---
const johnUsers = db.prepare("SELECT * FROM users WHERE name = 'John Doe';").all();
const belowThirtyAge = db.prepare("SELECT * FROM users WHERE age < 30;").all();
const notDollarSalaryUsers = db.prepare("SELECT * FROM users WHERE currency != 'USD'").all();
// --- advanced search ---
const similarNames = db.prepare("SELECT * FROM users WHERE name LIKE '_uillermo'").all();
const differentNames = db.prepare("SELECT * FROM users WHERE name NOT IN ('Guillermo')").all();
const similarAges = db.prepare('SELECT * FROM users WHERE age BETWEEN 18 AND 25').all();
// --- order ---
const ascendentUsers = db.prepare('SELECT * FROM users ORDER BY name;').all(); // the ASC value is the default value
const descendentUsers = db.prepare('SELECT * FROM users ORDER BY name DESC;').all();
// --- pagination ---
const getFirstUsers = db.prepare('SELECT * FROM users LIMIT 3;').all();
const getLastUsers = db.prepare('SELECT * FROM users LIMIT 5 OFFSET 10;').all();

// show the information
console.table(getAllUsers);
console.table(getDifferentUsers);
console.table(johnUsers);
console.table(belowThirtyAge);
console.table(notDollarSalaryUsers);
console.table(similarNames);
console.table(differentNames);
console.table(similarAges);
console.table(ascendentUsers);
console.table(descendentUsers);
console.table(getFirstUsers);
console.table(getLastUsers);