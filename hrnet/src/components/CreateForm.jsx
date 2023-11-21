import styled from 'styled-components';
import Selector from '../modules/selector/Selector';
import { departmentsArray } from '../modules/selector/datasArrays/departmentsArray';
import { statesArray } from '../modules/selector/datasArrays/statesArray';
import DateSelector from '../modules/DateSelector';
import Modal from '../modules/Modal';
import { Label } from '../styled/global';

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
    margin-top: -250px;
    
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

const LabelLegend = styled.label`
    font-size: 1em;
    font-weight: 400;
    margin: 10px 0 0 0;
    width:fit-content;
    background-color:#ffffff;
    border-radius: 10px;
    border:none;
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

    const handleSelectChange = (e) => {
    console.log('Selected value:', e.target.value);
    };

return (
    <>
        <Container>
            <FormStyle action="#" id="create-employee">
                
                <InfosFieldset>
                <Legend>Identity</Legend>

                <Label htmlFor="first-name">First Name</Label>
                <input type="text" id="first-name" />

                <Label htmlFor="last-name">Last Name</Label>
                <input type="text" id="last-name" />
                <DateSelector title = "Date of Birth"/>
                <DateSelector title = "Date Start"/>
                </InfosFieldset>
                <AddressFieldset>
                    <Legend>Address</Legend>

                    <Label htmlFor="street">Street</Label>
                    <input id="street" type="text" />

                    <Label htmlFor="city">City</Label>
                    <input id="city" type="text" />

                    <Selector label="state" name="state" id="state" 
                options={statesArray} 
                onChange={handleSelectChange} />

                    <Label htmlFor="zip-code">Zip Code</Label>
                    <input id="zip-code" type="number" />
                </AddressFieldset>
                <InfosFieldset>
                <LabelLegend>Company department</LabelLegend>
                <Selector label="department" name="department" id="department" 
                options={departmentOptions} 
                onChange={handleSelectChange} />
                </InfosFieldset>
                <Button type="submit">Save</Button>

            </FormStyle>
        </Container>
        <Modal id="confirmation">Employee Created!</Modal>
    </>
);
}

export default CreateForm;