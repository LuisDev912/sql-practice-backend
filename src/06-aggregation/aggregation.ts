import { db } from '../db.ts';

const usersByAge = db.prepare(`
    SELECT name, age,
        CASE
            WHEN age < 26 THEN 'young'
            WHEN age <= 45 then 'young adult'
            ELSE 'adult'
        END as user_age
    FROM users;
`).all();

const usersByCurrency = db.prepare(`
    SELECT name || '(' || currency || ')', salary
    FROM users;
`).all();

const usersWithoutSymbols = db.prepare(`
    SELECT REPLACE(name, '-', '') FROM users;
`).all();

console.table(usersByAge);
console.table(usersByCurrency);
console.table(usersWithoutSymbols);