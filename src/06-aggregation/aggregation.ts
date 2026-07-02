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

const userByLength = db.prepare(`
    SELECT name,
        CASE
            WHEN LENGTH(name) < 4 THEN 'short name'
            WHEN LENGTH(name) < 10 THEN 'normal length'
            ELSE 'long name'
        END AS name_length
    FROM users;
`).all();

const usersByCurrency = db.prepare(`
    SELECT name, salary || ' (' || currency || ')' AS salary_with_currency
    FROM users;
`).all();

const usersWithoutSymbols = db.prepare(`
    SELECT REPLACE(name, '-', '') AS name FROM users;
`).all();

const firstCompaniesCharacters = db.prepare(`
    SELECT SUBSTR(name, 0, 6) FROM companies;
`).all();

const roundedUsersSalary = db.prepare(`
    SELECT name, ROUND(salary, 2) AS rounded_salary FROM users;
`).all();

// logs
console.table(usersByAge);
console.table(userByLength);
console.table(usersByCurrency);
console.table(usersWithoutSymbols);
console.table(firstCompaniesCharacters);
console.table(roundedUsersSalary);