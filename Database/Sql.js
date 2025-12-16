// Top SQL Interview Questions & Answers
// 1. What is SQL?
// Answer:
// SQL (Structured Query Language) is a language used to store, manipulate, 
// and retrieve data from relational databases.

// 2. What is the difference between SQL and MySQL?
// SQL: A query language used to interact with databases.
// MySQL: A relational database management system (RDBMS) that uses SQL.

// 3. What are the different types of SQL statements?
// DDL (Data Definition Language): CREATE, DROP, ALTER

// DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE

// DCL (Data Control Language): GRANT, REVOKE

// TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT

// 4. What is a Primary Key?
// A column (or set of columns) that uniquely identifies each row and cannot contain NULL values.

// 5. What is a Foreign Key?
// A column that creates a relationship between two tables. It references a primary key in another table.

// 6. What is the difference between WHERE and HAVING?
// WHERE: Filters rows before grouping.
// HAVING: Filters groups after grouping.

// 7. What is an Index?\
// A performance optimization object that speeds up data retrieval but can slow down insert/update/delete operations.

// 8. What is the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN?
// INNER JOIN: Returns only matching rows.

// LEFT JOIN: All rows from left table + matching rows from right.

// RIGHT JOIN: All rows from right table + matching rows from left.

// 9. What is Normalization?
// Normalization is code optimization technique for organizing the data in the database.
// A process of organizing data to reduce redundancy and improve consistency of data.
// Common forms: 1NF, 2NF, 3NF, BCNF 

// 10. What is Denormalization?
// The process of intentionally adding redundancy to improve read performance.

// 11. What is a View?
// A virtual table created using a SELECT query. It does not store data physically.

// 12. What is a Stored Procedure?
// A precompiled group of SQL statements that can be reused.

// 13. What is a Trigger?
// A block of SQL that executes automatically when an event occurs (INSERT/UPDATE/DELETE).

// 14. What is the difference between DELETE, TRUNCATE, DROP?
// DELETE: Removes specific rows; can be rolled back.

// TRUNCATE: Removes all rows; cannot delete specific rows; faster.

// DROP: Deletes the entire table.

// 15. What is GROUP BY used for?
// Used to group rows that have the same values in specified columns (often used with aggregate functions).

// 16. What is an Aggregate Function?
// Functions that operate on multiple rows and return a single value:
// COUNT, SUM, AVG, MIN, MAX

// 17. What is a Subquery?
// A query inside another query.

// 18. What is the difference between UNION and UNION ALL?
// UNION: Removes duplicates.

// UNION ALL: Keeps duplicates; faster.

// 19. What is ACID in SQL?
// Atomicity

// Consistency

// Isolation

// Durability

// These ensure reliable transactions.

// 20. What is a Constraint?
// Rules applied on table columns:
// NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT