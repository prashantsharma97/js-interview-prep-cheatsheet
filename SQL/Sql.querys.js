// SQL Interview Queries Cheatsheet

// 1. Find Highest Salary
const findHighestSalary = `
    SELECT MAX(salary) as highest_salary FROM employees;
`;

// 2. Find Second Highest Salary
const findSecondHighestSalary = `
    SELECT MAX(salary) FROM employees 
    WHERE salary < (SELECT MAX(salary) FROM employees);
`;

// 3. Remove Duplicate Data
const removeDuplicates = `
    DELETE FROM table_name 
    WHERE id NOT IN (
        SELECT MIN(id) FROM table_name GROUP BY duplicate_column
    );
`;

// 4. Count Occurrences of Each Value
// occurrences mean how many times a value appears in a column like if in a column 'status' we have values like 'active', 'inactive', 'active', 'pending', 'active', then the occurrences would be: active - 3, inactive - 1, pending - 1.
const countOccurrences = `
    SELECT column_name, COUNT(*) as count 
    FROM table_name 
    GROUP BY column_name 
    HAVING COUNT(*) > 1;
`;

// 5. Find Employees Above Average Salary
const aboveAverageSalary = `
    SELECT * FROM employees 
    WHERE salary > (SELECT AVG(salary) FROM employees);
`;

// 6. Top N Earners
const topNEarners = `
    SELECT * FROM employees 
    ORDER BY salary DESC 
    LIMIT 3;
`;

// 7. Department-wise Highest Salary
const deptHighestSalary = `
    SELECT department, MAX(salary) as max_salary 
    FROM employees 
    GROUP BY department;
`;

// 8. Employees with Same Salary
const sameSalaryEmployees = `
    SELECT salary, COUNT(*) FROM employees 
    GROUP BY salary 
    HAVING COUNT(*) > 1;
`;

// 9. Top 5 highest salaries in each department
const top5SalariesPerDept = `
    SELECT * FROM (
        SELECT *, 
        ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as rn 
        FROM employees
    ) AS ranked 
    WHERE rn <= 5;
`;

// 10. highest n salaries without using limit
const highestNSalariesWithoutLimit = `
    SELECT DISTINCT salary FROM employees e1
    WHERE n-1 = (
        SELECT COUNT(DISTINCT salary) FROM employees e2
        WHERE e2.salary > e1.salary
    );
`;
