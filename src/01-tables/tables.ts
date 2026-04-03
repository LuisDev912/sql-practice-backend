import Database from 'better-sqlite3';

export const db = new Database(':memory:');

// --- main table ---

db.exec(`
    CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        salary INTEGER,
        age INTEGER
    );
`);

// --- demo table ---

db.exec(`
    CREATE TABLE demo_table (
        id INTEGER PRIMARY KEY,
        user_name TEXT NOT NULL,
        null_example NULL,
        is_active BOOLEAN NOT NULL CHECK (is_active IN (0, 1))
    );
`);

// --- SELECT statements ---

const getUsers = db.prepare('SELECT * FROM users;').all();
const getDemoTable = db.prepare('SELECT * FROM demo_table;').all();

console.log(getUsers);
console.log(getDemoTable);