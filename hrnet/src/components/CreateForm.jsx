import styled from 'styled-components';
import Selector from '../modules/selector/Selector';
import { departmentsArray } from '../modules/selector/datasArrays/departmentsArray';
import { statesArray } from '../modules/selector/datasArrays/statesArray';
import DateSelector from '../modules/DateSelector';
import Modal from '../modules/modal/Modal';
import { Label } from '../styled/global';
import { useDispatch } from 'react-redux';
import { submitForm } from '../reduxcode/sliceform';
import { useState } from 'react';
import { createEmployeeData } from '../datas/format';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    width:80%;
    height:100vh;
    margin:auto;
    border-radius: 10px;
`;
const FormStyle = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 0px;
    
    && input{
        font-size: 1em;
        font-weight: 400;
    }

`;

const AddressFieldset = styled.fieldset`
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color: white;
    border-radius: 10px;
    border:none;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.315);

`;

const InfosFieldset = styled.fieldset`
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color: white;
    border-radius: 10px;
    border:none;
    margin: 20px 0; 
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.315);

`;

const Legend = styled.legend`
    font-size: 1em;
    font-weight: 400;
    margin:auto;
    padding: 10px 20px;
    background-color:#ffffff;
    border-radius: 10px;

`;

const Button = styled.button`
    font-size: 1em;
    font-weight: 400;
    padding: 10px 20px;
    background-color:#e9fed3;
    border-radius: 10px;
    border:none;
    width:100%;
    margin:0;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.315);
    cursor:pointer;
    &:hover{
        background-color: #ffffff;
    }
`;
function CreateForm() {
    const departmentOptions = departmentsArray;
    const dispatch = useDispatch();
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [dateStart, setDateStart] = useState(new Date());
    const [state, setState] = useState('');
    const [department, setDepartment] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const employeeData  = createEmployeeData(
            Date.now(),
            e.target["first-name"].value,
            e.target["last-name"].value,
            dateOfBirth,
            dateStart,
            e.target["street"].value,
            e.target["city"].value,
            state,
            e.target["zip-code"].value,
            department
        );
        dispatch(submitForm(employeeData ));
        setIsModalOpen(true);
    };

    return (
        <>
            <Container>
                <FormStyle action="#" id="create-employee" onSubmit={handleSubmit}>
                    
                    <InfosFieldset>
                        <Legend>Identity</Legend>

                        <Label htmlFor="first-name">First Name</Label>
                        <input type="text" id="first-name" aria-label="First Name" />

                        <Label htmlFor="last-name">Last Name</Label>
                        <input type="text" id="last-name" aria-label="Last Name" />

                        <DateSelector 
                            title="Date of Birth" 
                            aria-label="Date of Birth"
                            onChange={(date) => setDateOfBirth(date)} />

                        <DateSelector 
                            title="Date Start" 
                            aria-label="Date Start"
                            onChange={(date) => setDateStart(date)} />
                    </InfosFieldset>

                    <AddressFieldset>
                        <Legend>Address</Legend>

                        <Label htmlFor="street">Street</Label>
                        <input id="street" type="text" aria-label="Street" />

                        <Label htmlFor="city">City</Label>
                        <input id="city" type="text" aria-label="City" />

                        <Selector 
                            label="State" 
                            name="state" 
                            id="state" 
                            aria-label="State"
                            options={statesArray} 
                            onChange={(e) => setState(e.target.value)} />

                        <Label htmlFor="zip-code">Zip Code</Label>
                        <input id="zip-code" type="number" aria-label="Zip Code" />
                    </AddressFieldset>

                    <InfosFieldset>
                        <Selector 
                            label="Department" 
                            name="department" 
                            id="department" 
                            aria-label="Department"
                            options={departmentOptions} 
                            onChange={(e) => setDepartment(e.target.value)} />
                    </InfosFieldset>

                    <Button type="submit" aria-label="Save Employee Data">Save</Button>
                </FormStyle>
            </Container>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p>Employee Created!</p>
            </Modal>        </>
    );
}

export default CreateForm;