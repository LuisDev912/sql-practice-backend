import { db } from "../01-tables/tables.ts";

/* === SELECT + WHERE STATEMENTS === */

const getUsers = db.prepare('SELECT * FROM users;').all();

// show the information
console.table(getUsers);