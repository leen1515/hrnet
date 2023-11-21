import styled from 'styled-components';
import Selector from '../modules/selector/Selector';
import { departmentsArray } from '../modules/selector/datasArrays/departmentsArray';
import { statesArray } from '../modules/selector/datasArrays/statesArray';
import DateSelector from '../modules/DateSelector';
import Modal from '../modules/Modal';
const Title = styled.div`
`;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100vh;
    background-color:#f2f2f2;
`;

const AddressFieldset = styled.fieldset`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const InfosFieldset = styled.fieldset`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
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
            <a>View Current Employees</a>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <InfosFieldset>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" />
                <DateSelector title = "Date of Birth"/>
                <DateSelector title = "Date Start"/>
                </InfosFieldset>
                <AddressFieldset>
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <Selector name="state" id="state" 
                options={statesArray} 
                onChange={handleSelectChange} />

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