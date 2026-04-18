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

/* === OUTPUT === */
console.table(selectJobsWithCompanies);
console.table(joinWithAlias);