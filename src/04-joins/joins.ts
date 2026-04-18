import { db } from '../db.ts';

/* === JOINS === */

// --- basic join ---
const selectJobsWithCompanies = db.prepare(`
    SELECT jobs.title, companies.name FROM jobs
    JOIN companies ON jobs.company_id = companies.id;
`).all();

/* === OUTPUT === */
console.table(selectJobsWithCompanies);