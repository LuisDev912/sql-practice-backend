import { db } from '../db.ts';

/* === SELECT + WHERE STATEMENTS === */

const getUsers = db.prepare('SELECT * FROM users;').all();

// show the information
console.table(getUsers);