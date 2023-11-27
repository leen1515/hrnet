import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ContainerEmployees = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: auto;
    border-radius: 10px;
`;

function EmployeeList() {
  const employees = useSelector(state => state.form.employees);
 console.log(employees);
  return (
    <ContainerEmployees>
      <h2>Liste des Employés</h2>
      {employees.map(employee => (
        <div key={employee.id}>
          <p>{employee.firstName} {employee.lastName}</p>
        </div>
      ))}
    </ContainerEmployees>
  );
}

export default EmployeeList;
