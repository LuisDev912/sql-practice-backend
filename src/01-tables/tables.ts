import Database from 'better-sqlite3';

export const db = new Database(':memory:');

db.exec(`
    CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        salary INTEGER,
        age INTEGER
    );
`);