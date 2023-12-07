import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CoolTable } from 'react-cool-table';

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
      <h2>Current Employees</h2>
      <CoolTable data={employees} excludedColumns={["id"]}/>
    </ContainerEmployees>
  );
}

export default EmployeeList;
