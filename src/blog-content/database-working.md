# Database Architecture & ORM/ODM

## Introduction

- **Database Architecture overview**
- **ORM / ODM**: Talks to the client and client talks to the actual database. So what is ORM?

### What is ORM?

[StackOverflow: What is an ORM?](https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one)

> ORM is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. Most people refer to a *library* that implements Object-Relational Mapping as "an ORM". It allows developers to interact with relational databases using OOP concepts.

#### Pros and Cons

**Using ORM saves a lot of time because:**
- [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself): You write your data model in only one place, making it easier to update, maintain, and reuse.
- Many things are automated, from database handling to [I18N](https://en.wikipedia.org/wiki/Internationalization_and_localization).
- Encourages [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) code, making your code cleaner.
- No need to write poorly-formed SQL.
- Sanitizing (prepared statements, transactions) is as easy as calling a method.

**ORM libraries are more flexible because:**
- They fit your natural way of coding (your language!).
- Abstract the DB system, so you can change it whenever you want.
- The model is weakly bound to the rest of the app, so you can change or reuse it.
- Lets you use OOP features like data inheritance.

**But ORM can be a pain:**
- You have to learn it, and ORM libraries are not lightweight.
- Setup can be complex.
- Performance is OK for usual queries, but a SQL master can do better for big projects.
- It abstracts the DB, which can be a trap for new programmers (e.g., heavy queries in a loop).

#### How to learn about ORM?

Use one! All ORM libraries use the same principles. Examples:
- Java: [Hibernate](https://en.wikipedia.org/wiki/Hibernate_(Java))
- PHP: [Propel](https://en.wikipedia.org/wiki/Propel_(PHP)), [Doctrine](https://en.wikipedia.org/wiki/Doctrine_(PHP))
- Python: Django ORM, [SQLAlchemy](https://en.wikipedia.org/wiki/SQLAlchemy)
- C#: [NHibernate](https://en.wikipedia.org/wiki/NHibernate), [Entity Framework](https://en.wikipedia.org/wiki/Entity_Framework)

Frameworks:
- [Symfony](https://en.wikipedia.org/wiki/Symfony) (PHP)
- [Django](https://en.wikipedia.org/wiki/Django_(web_framework)) (Python)

> Do not try to write your own ORM unless you want to learn. It's a gigantic task.

---

- **Client**: A database client is a software application or tool that allows users or other software components to interact with a database server (e.g., MySQL Workbench).
- **Flow of execution**: Query is written → Query Parser (converts to AST → Tokens - Syntax and Semantic - Tree) → Query Optimizer → Execution Engine → Cache → Disk → Storage Engine (B-trees, B+ Trees, etc.). Other parts: Authentication, Backup, Metrics.
- **Data is stored in disk** and managed with metadata (e.g., index file).
- **Storage engine** is the main part and writes to disk.
- **Managers**: Transaction manager, Lock Manager, Recovery manager.

---

## Flow of Execution

1. **Query Writing**
- User or app writes SQL queries (SELECT, INSERT, UPDATE, DELETE, etc.).

2. **Query Parsing**
 - The DBMS's query parser parses the SQL query and converts it into an Abstract Syntax Tree (AST).
    **Query Parsing Steps:**
    1. **Tokenization**: Break query into tokens (keywords, identifiers, literals, operators, punctuation).
    2. **Syntax Checking**: Ensure tokens form a valid SQL statement.
    3. **Semantic Analysis**: Check query meaning and validity (table/column existence, data types, constraints).
    4. **Query Transformation**: Rewrite/optimize the query for better execution.
    5. **AST Generation**: (Optional) Build an Abstract Syntax Tree for further analysis.
    6. **Query Execution**: Pass to optimizer and execution engine.

3. **Query Optimization**
- The optimizer finds the most efficient way to execute the query (index usage, join order, etc.).

4. **Execution Engine**
- Executes the query based on the optimized plan.
    **Execution Engine Steps:**
    1. Receives SQL queries or execution plans.
    2. Executes the plan step by step.
    3. Accesses data via storage engine.
    4. Coordinates complex queries (joins, subqueries).
    5. Uses indexes or full table scans as needed.
    6. Processes filtering, sorting, aggregation, joining, projection.
    7. Manages transactions (ACID).
    8. Handles errors and exceptions.
    9. Generates result set.
    10. Provides feedback to optimizer (in advanced DBMSs).
    11. Collects performance metrics.

    Example SQL:
    ```sql
    SELECT * FROM customers WHERE country = 'USA';
    ```
    Steps:
    1. Read data from `customers` table.
    2. Filter for `country = 'USA'`.
    3. Return results.

5. **Cache**
- Frequently accessed data and query results are cached in memory.

6. **Disk (Storage)**
- Data not in cache or to be written is read/written to disk.

7. **Storage Engine**
- Manages how data is stored on disk (B-trees, B+ trees, etc.), indexing, caching, disk I/O, transactions, durability, recovery.

8. **Utilities**
- Tools for authentication, backup, metrics, etc.

9. **Authentication and Authorization**
- Verifies identity and permissions.

10. **Backup and Recovery**
- Tools for disaster recovery and data preservation.

11. **Metrics and Monitoring**
- Collects performance and usage metrics.

12. **Concurrency Control and Transaction Management**
- Ensures multiple users can access/modify data safely and transactions are consistent (ACID).
---

> For more details, see the referenced links and documentation for each DBMS or ORM library.