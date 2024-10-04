//task 1: Create a Department Structure
const company = { //the object "ompany" contains the "departments" array which consists of objects that contain more information
    departments: [
        {
            departmentName: 'Accounting',
            employees: [
                {
                    name: 'Sandra',
                    salary: 90000,
                    subordinates: [
                        {
                            name: 'Noah',
                            salary: 75000,
                            subordinates: [
                                {
                                    name: 'Bill',
                                    salary: 55000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Amy',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'IT',
            employees: [
                {
                    name: 'Jade',
                    salary: 95000,
                    subordinates: [
                        {
                            name: 'Sal',
                            salary: 80000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Vin',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};
//task 2: Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary (employees){
    return employees.reduce((totalSalary, employee)=>{//using reduce to calculate the total salary
        totalSalary += employee.salary;//adding the employee's salary to the total
    
        totalSalary += employee.subordinates.reduce((subTotal,subordinate)=>{//adding the salaries of the subordinates
            return subTotal + calculateDepartmentSalary([subordinate]);
        },0);
    

    return totalSalary;//this returns the total salary
    },0);
}

const itDepartment= company.departments.find(dep=>dep.departmentName=== 'IT');//finding the IT department from departments
const accountingDepartment = company.departments.find(dep=>dep.departmentName==='Accounting');//finding the Accounting department from departments

const totalSalaryIT= calculateDepartmentSalary(itDepartment.employees); //calculating total salary for the IT department
const totalSalaryAccounting= calculateDepartmentSalary(accountingDepartment.employees);//calculating total salary for the Accounting department

//logging the total salaries of both departments
console.log (`The total salary of the IT department is: $${totalSalaryIT}`);
console.log (`The total salary of the Accounting department is: $${totalSalaryAccounting}`);

//task 3: Create a Function to Calculate the Total Salary for All Departments

function calculateCompanySalary (company){
    return company.departments.reduce ((totalcompanySalary, department)=> {//using reduce to calculate the total salary of all departments
        return totalcompanySalary + calculateDepartmentSalary(department.employees);//adding the salary of each department to total company salary
    },0);

}

const totalcompanySalary = calculateCompanySalary(company);

console.log (`The total salary of the company is: $${totalcompanySalary}`);//logging the total salary of the company
