import styled from 'styled-components';
import Selector from '../modules/selector/Selector';
import { departmentsArray } from '../modules/selector/datasArrays/departmentsArray';
import { statesArray } from '../modules/selector/datasArrays/statesArray';
import DateSelector from '../modules/DateSelector';
import Modal from '../modules/Modal';

const Container = styled.div`
    
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    width:50%;
    height:100vh;
    margin:auto;
    background-color:#ffffff;
    border-radius: 10px;
    
`;
const FormStyle = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    width:50%;
    margin:auto;
    && input{
        width: 200px;
        height: 10px;
        margin: 10px 0px;
        padding: 10px 20px;
    }
    && button{
        width: 400px;
        height: 40px;
        margin: 10px 0px;
        padding: 10px 20px;
        border-radius: 10px;
        border:none;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.315);
        cursor:pointer;
        &:hover{
            background-color: #ffffff;
        }
    }
    && label{
       
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
    margin-bottom: 20px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.315);

`;

const Legend = styled.legend`
    font-size: 1em;
    font-weight: 400;
    margin-bottom: 10px;
    margin-left: -80px;
    padding: 10px 20px;
    background-color:#e9fed3;
    border-radius: 10px;
    border:none;
`;


const DepartementContainer = styled.div`
    font-size: 1.5em;
    font-weight: 400;
    width:100%;
    padding: 10px 50px;
    text-align: left;
    background-color:#e9fed3;
    border-radius: 10px;
    border:none;
`;
function CreateForm() {
    const departmentOptions = departmentsArray;

    const handleSelectChange = (e) => {
    console.log('Selected value:', e.target.value);
    };

return (
    <>
        <Container>
            <FormStyle action="#" id="create-employee">
                
                <InfosFieldset>
                <Legend>Personnal Infos</Legend>

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
                    <Legend>Address</Legend>

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
                <DepartementContainer>
                <label htmlFor="department">Department</label>
                <Selector name="department" id="department" 
                options={departmentOptions} 
                onChange={handleSelectChange} />
                <button type="submit">Save</button>
                </DepartementContainer>
            </FormStyle>
        </Container>
        <Modal id="confirmation">Employee Created!</Modal>
    </>
);
}

export default CreateForm;