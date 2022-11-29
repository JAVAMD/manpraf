export class Menu {
    public static menu: Array<any> = [
        {
            Admin: [
                { lable: 'Add Admin', key: 'addAdmin' },
                { lable: 'Admin info', key: 'AdminInfo' },
                { lable: 'Remove Admin', key: 'removeAd' }
            ],
            Employee: [
                { lable: 'Add Employee', key: 'addEmployee' },
                { lable: 'Employee info', key: 'EmployeeInfo' }
            ],
            Customer:[
                { lable: 'Add Customer', key: 'addCustomer' },
                { lable: 'Customer info', key: 'CustomerInfo' }
            ]
        }
    ]
}
