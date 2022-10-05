import React from 'react';
import Employee from './Employee';

class EmployeeList extends React.Component {
    render () {
        const employees = [
            {
                name: 'Diego',
                position: 'Manager',
            },
            {
                name: 'Harley',
                position: 'CEO',
            },
            {
                name: 'Ronald',
                position: 'Salesman',
            },
            {
                name: 'Josue',
                position: 'Designer',
            },
            {
                name: 'Eduardo',
                position: 'Teacher',
            },
        ];

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Posiition</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <Employee name={employee.name} position={employee.position} />
                    ))}                    
                    
                </tbody>
            </table>
        );
    }
}

export default EmployeeList;