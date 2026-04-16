import { db } from '../db.ts';

/* === PREPARED STATEMENTS === */

// --- base queries ---
const selectBasicUsers = db.prepare(`
    SELECT id, name, age FROM users;
`);

const selectDistinctNames = db.prepare(`
    SELECT DISTINCT name FROM users;
`);

// --- filters ---
const selectUsersByName = db.prepare(`
    SELECT id, name, age
    FROM users
    WHERE name = ?;
`);

const selectUsersBelowAge = db.prepare(`
    SELECT id, name, age
    FROM users
    WHERE age < ?;
`);

const selectUsersByCurrency = db.prepare(`
    SELECT id, name, salary, currency
    FROM users
    WHERE currency != ?;
`);

// --- advanced search ---
const selectUsersByPattern = db.prepare(`
    SELECT id, name
    FROM users
    WHERE name LIKE ?;
`);

const selectUsersNotIn = db.prepare(`
    SELECT id, name
    FROM users
    WHERE name NOT IN (?);
`);

const selectUsersBetweenAges = db.prepare(`
    SELECT id, name, age
    FROM users
    WHERE age BETWEEN ? AND ?;
`);

// --- order ---
const selectUsersOrdered = db.prepare(`
    SELECT id, name, age
    FROM users
    ORDER BY name ASC;
`);

const selectUsersOrderedDesc = db.prepare(`
    SELECT id, name, age
    FROM users
    ORDER BY name DESC;
`);

// --- pagination ---
const selectUsersWithLimit = db.prepare(`
    SELECT id, name
    FROM users
    LIMIT ?;
`);

const selectUsersWithPagination = db.prepare(`
    SELECT id, name
    FROM users
    LIMIT ? OFFSET ?;
`);

// show the information
console.table(selectBasicUsers.all());
console.table(selectDistinctNames.all());
console.table(selectUsersByName.all());
console.table(selectUsersBelowAge.all());
console.table(selectUsersByCurrency.all());
console.table(selectUsersByPattern.all());
console.table(selectUsersNotIn.all());
console.table(selectUsersBetweenAges.all());
console.table(selectUsersOrdered.all());
console.table(selectUsersOrderedDesc.all());
console.table(selectUsersWithLimit.all(3));
console.table(selectUsersWithPagination.all(5, 10),);