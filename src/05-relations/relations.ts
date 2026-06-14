import { db } from '../db.ts';

const jobsWithTech = db.prepare(`
    SELECT 
        j.title,
        GROUP_CONCAT(jt.technology) AS technologies
    FROM jobs j
    JOIN job_technologies jt ON j.id = jt.job_id
    GROUP BY j.id;
`).all();

console.table(jobsWithTech);