import { db } from '../db.ts';

/* === SUBQUERIES === */

const usersWithOldestAge = db.prepare(`
    SELECT name, age 
    FROM users
    WHERE age = (SELECT MAX(age) FROM users);    
`).all();

/* === CTES === */


/* === LOGS ===*/
console.table(usersWithOldestAge);