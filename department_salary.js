const company = {
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
function calculateDepartmentSalary (employees){
    return employees.reduce((totalSalary, employee)=>{
        totalSalary += employee.salary;
    
        totalSalary += employee.subordinates.reduce((subTotal,subordinate)=>{
            return subTotal + calculateDepartmentSalary([subordinate]);
        },0);
    

    return totalSalary;
    },0);
}

const itDepartment= company.departments.find(dep=>dep.departmentName=== 'IT');
const accountingDepartment = company.departments.find(dep=>dep.departmentName==='Accounting');

const totalSalaryIT= calculateDepartmentSalary(itDepartment.employees);
const totalSalaryAccounting= calculateDepartmentSalary(accountingDepartment.employees);

console.log (`The total salary of the IT department is: $${totalSalaryIT}`);
console.log (`The total salary of the Accounting department is: $${totalSalaryAccounting}`);


