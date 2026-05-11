import { db } from '../db.ts';

const jobsWithTech = db.prepare(`
    SELECT j.id, j.title, GROUP_CONCAT(technology)
    FROM jobs j
    JOIN job_technologies ON id = job_id;
`).all();

console.table(jobsWithTech);