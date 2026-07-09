import { db } from '../db.ts';

/* === EXPRESSIONS === */

// conditionals
const usersByAge = db.prepare(`
    SELECT name, age,
        CASE
            WHEN age < 26 THEN 'young'
            WHEN age <= 45 THEN 'young adult'
            ELSE 'adult'
        END AS user_age
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

// concatenation
const usersByCurrency = db.prepare(`
    SELECT name, salary || ' (' || currency || ')' AS salary_with_currency
    FROM users;
`).all();

// string methods
const usersWithoutSymbols = db.prepare(`
    SELECT REPLACE(name, '-', '') AS name FROM users;
`).all();

const firstCompaniesCharacters = db.prepare(`
    SELECT SUBSTR(name, 0, 6) FROM companies;
`).all();

// number methods
const roundedUsersSalary = db.prepare(`
    SELECT name, ROUND(salary, 2) AS rounded_salary FROM users;
`).all();

/* === AGGREGATION === */

// functions
const countRows = db.prepare(`
    SELECT COUNT(*) AS total_rows FROM job_technologies;
`).all();

const countRow = db.prepare(`
    SELECT COUNT(technology) AS technology_count FROM job_technologies;
`).all();

// note: COUNT(*) counts all rows displaying even the rows with NULL values. COUNT(column), instead, counts only the rows where the value is not NULL.

const sumSalaries = db.prepare(`
    SELECT name, SUM(salary) AS salary_sum FROM users;
`).all();

const averageUserAge = db.prepare(`
    SELECT name, AVG(age) AS average_age FROM users;
`).all();

const roundAverageUserAge = db.prepare(`
    SELECT ROUND(AVG(age)) AS rounded_average_age FROM users;
`).all();

const minUserAge = db.prepare(`
    SELECT name, MIN(age) AS min_age FROM users;
`).all();

const maxUserAge = db.prepare(`
    SELECT name, MAX(age) AS max_age FROM users;
`).all();

// combining functions
const functionsCombination = db.prepare(`
    SELECT 
        COUNT(*) AS total_rows,
        MIN(age) AS min_user_age,
        MAX(age) AS max_user_age,
        AVG(salary) AS average_salary
    FROM users;
`).all();

// using filters
const longNameCompanies = db.prepare(`
    SELECT name FROM companies WHERE LENGTH(name) > 12;
`).all();

// values concatenation
const usersWithCurrency = db.prepare(`
    SELECT
        name, GROUP_CONCAT(currency) AS currency
    FROM users
    GROUP BY name;
`).all();

/* === GROUP BY & HAVING === */

// GROUP BY

// HAVING

/* === LOGS ===*/

// expressions
console.table(usersByAge);
console.table(userByLength);
console.table(usersByCurrency);
console.table(usersWithoutSymbols);
console.table(firstCompaniesCharacters);
console.table(roundedUsersSalary);
// aggregations
console.table(countRows);
console.table(countRow);
console.table(sumSalaries);
console.table(averageUserAge);
console.table(roundAverageUserAge);
console.table(minUserAge);
console.table(maxUserAge);
console.table(functionsCombination);
console.table(longNameCompanies);
console.table(usersWithCurrency);