import styled from 'styled-components';
import Selector from '../modules/selector/Selector';
import { departmentsArray } from '../modules/selector/departmentsArray';

const Title = styled.div`
`;

const Container = styled.div`
`;

const AddressFieldset = styled.fieldset`
`;

const Modal = styled.div`
`;


function CreateForm() {
    const departmentOptions = departmentsArray;

    const handleSelectChange = (e) => {
    console.log('Selected value:', e.target.value);
    };

return (
    <>
        <Title>
            <h1>HRnet</h1>
        </Title>
        <Container>
            <a href="employee-list.html">View Current Employees</a>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" />

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" />

                <AddressFieldset>
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state">
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </AddressFieldset>

                <label htmlFor="department">Department</label>
                <Selector name="department" id="department" 
                options={departmentOptions} 
                onChange={handleSelectChange} />;

                <button type="submit">Save</button>
            </form>
        </Container>
        <Modal id="confirmation">Employee Created!</Modal>
    </>
);
}

export default CreateForm;