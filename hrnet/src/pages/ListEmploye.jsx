import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CoolTable } from 'react-cool-table';
import 'react-cool-table/dist/index.css';
import 'react-cool-table/dist/index.es.css';
import { SubTitle } from './Home';

const ContainerEmployees = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: auto;
    border-radius: 10px;
`;



function EmployeeList() {
  const employees = useSelector(state => state.form.employees);
 console.log(employees);
  return (
    <ContainerEmployees>
      <SubTitle>Current Employees</SubTitle>
      <CoolTable data={employees} excludedColumns={["id"]}/>
    </ContainerEmployees>
  );
}

export default EmployeeList;
