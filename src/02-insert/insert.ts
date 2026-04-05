import { db } from '../01-tables/tables.ts';

/* === INSERT QUERIES === */
const firstInsert = db.prepare(`
    INSERT INTO users (name, salary, age) VALUES (?, ?, ?);
`);

// --- run insert queries ---
firstInsert.run('John Doe', 1500, 19);
firstInsert.run('Guillermo', 2500, 37);
firstInsert.run(0, '', '20'); // test query