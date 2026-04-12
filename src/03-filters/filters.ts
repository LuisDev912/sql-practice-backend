import { db } from '../db.ts';

/* === SELECT + WHERE STATEMENTS === */

const getAllUsers = db.prepare('SELECT * FROM users;').all();
// --- operators ---
const johnUsers = db.prepare("SELECT * FROM users WHERE name = 'John Doe';").all();
const belowThirtyAge = db.prepare("SELECT * FROM users WHERE age < 30;").all();
const notDollarSalaryUsers = db.prepare("SELECT * FROM users WHERE currency != 'USD'").all();

// show the information
console.table(getAllUsers);
console.table(johnUsers);
console.table(belowThirtyAge);
console.table(notDollarSalaryUsers);