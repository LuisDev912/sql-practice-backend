import { db } from '../db.ts';

/* === JOINS === */

// --- basic join ---
const selectJobsWithCompanies = db.prepare(`
    SELECT jobs.title, companies.name FROM jobs
    JOIN companies ON jobs.company_id = companies.id;
`).all();

// --- with alias ---
const joinWithAlias = db.prepare(`
    SELECT j.title, c.name
    FROM jobs j
    JOIN companies c ON j.company_id = c.id;
`).all();

// --- left join ---
const leftJoin = db.prepare(`
    SELECT j.title, c.name 
    FROM jobs j
    LEFT JOIN companies c ON j.company_id = c.id;
`).all();

// --- right join ---
const rightJoin = db.prepare(`
    SELECT j.title, c.name
    FROM companies c
    RIGHT JOIN jobs j ON c.id = j.company_id;
`).all();

// --- full outer join ---
const fullOuterJoin = db.prepare(`
    SELECT j.title, c.name
    FROM jobs j
    FULL OUTER JOIN companies c ON j.company_id = c.id;
`).all();

// --- anti-join pattern ---
const antiJoinPattern = db.prepare(`
    SELECT c.name
    FROM companies c
    LEFT JOIN jobs j ON c.id = j.company_id
    WHERE j.id IS NULL;
`).all();

/* === OUTPUT === */
console.table(selectJobsWithCompanies);
console.table(joinWithAlias);
console.table(leftJoin);
console.table(rightJoin);
console.table(fullOuterJoin);
console.table(antiJoinPattern);