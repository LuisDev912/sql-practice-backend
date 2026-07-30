import { db } from '../db.ts';

/* === SUBQUERIES === */

const usersWithOldestAge = db.prepare(`
    SELECT name, age 
    FROM users
    WHERE age = (SELECT MAX(age) FROM users);    
`).all();

const subqueryInSelect = db.prepare(`
    SELECT name, salary, (SELECT MAX(salary) FROM users) AS max_salary
    FROM users;
`).all();

/* --- with IN --- */

/* --- EXISTS and NOT EXISTS ---*/


/* === CTEs === */


/* === LOGS ===*/
console.table(usersWithOldestAge);
console.table(subqueryInSelect);