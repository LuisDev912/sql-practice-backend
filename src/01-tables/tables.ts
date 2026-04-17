import { db } from "../db.ts";
/* === TABLES ===*/

// --- main table ---
// db.exec(
//     // `DROP TABLE users;` this will cause an error because the users table isn't defined yet
//     `DROP TABLE IF EXISTS users;`
// );

db.exec(`DROP TABLE IF EXISTS demo_table;`);

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        salary INTEGER,
        currency TEXT NOT NULL,
        age INTEGER NOT NULL CHECK (age > 13)
    );
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS companies(
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL
    );
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS jobs(
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        company_id INTEGER,
        FOREIGN KEY (company_id) REFERENCES companies(id)
    );
`);

// --- demo table ---
db.exec(`
    CREATE TABLE IF NOT EXISTS demo_table (
        id INTEGER PRIMARY KEY,
        user_name TEXT NOT NULL,
        invalid_type WRONGTYPE,
        is_active BOOLEAN NOT NULL CHECK (is_active IN (0, 1))
    );
`);

db.exec(`
    ALTER TABLE demo_table ADD email TEXT;
`);