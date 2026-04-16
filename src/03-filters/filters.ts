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

/* === EXECUTION === */
const results = {
    allUsers: selectBasicUsers.all(),
    distinctNames: selectDistinctNames.all(),

    johnUsers: selectUsersByName.all('John Doe'),
    belowThirty: selectUsersBelowAge.all(30),
    notUSD: selectUsersByCurrency.all('USD'),

    similarNames: selectUsersByPattern.all('_uillermo'),
    differentNames: selectUsersNotIn.all('Guillermo'),
    ageRange: selectUsersBetweenAges.all(18, 25),

    asc: selectUsersOrdered.all(),
    desc: selectUsersOrderedDesc.all(),

    firstUsers: selectUsersWithLimit.all(3),
    paginated: selectUsersWithPagination.all(5, 10),
};

// --- output ---
Object.entries(results).forEach(([key, value]) => {
    console.log(`\n=== ${key.toUpperCase()} ===`);
    console.table(value);
});