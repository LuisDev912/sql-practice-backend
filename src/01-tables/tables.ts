import Database from 'better-sqlite3';

export const db = new Database(':memory:');

/* === TABLES ===*/

// --- main table ---
db.exec(
    // `DROP TABLE users;` this will cause an error because the users table isn't defined yet
    `DROP TABLE IF EXISTS users;`
)

db.exec(`
    CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        salary INTEGER,
        currency TEXT NOT NULL,
        age INTEGER
    );
`);

// --- demo table ---
db.exec(`
    CREATE TABLE demo_table (
        id INTEGER PRIMARY KEY,
        user_name TEXT NOT NULL,
        invalid_type WRONGTYPE,
        is_active BOOLEAN NOT NULL CHECK (is_active IN (0, 1))
    );
`);

db.exec(`
    ALTER TABLE demo_table ADD email TEXT;
`);

/* === TESTS STATEMENTS === */

const getUsers = db.prepare('SELECT * FROM users;').all();
const getDemoTable = db.prepare('SELECT * FROM demo_table;').all();

console.log(getUsers);
console.log(getDemoTable);