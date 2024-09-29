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
            departmentName: 'IT,
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
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};
