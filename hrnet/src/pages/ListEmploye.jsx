import { useSelector } from "react-redux";
// import styled from "styled-components";

function ListEmploye(){

    const employeeData = useSelector(state => state.form.employeeData);

    return(
        <h1>{JSON.stringify(employeeData)}</h1>
    );
}

export default ListEmploye;