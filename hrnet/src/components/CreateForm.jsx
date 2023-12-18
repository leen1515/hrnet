import styled from 'styled-components';
import Selector from '../modules/selector/Selector';
import { departmentsArray } from '../modules/selector/datasArrays/departmentsArray';
import { statesArray } from '../modules/selector/datasArrays/statesArray';
import DateSelector from '../modules/DateSelector';
import Modal from '../modules/modal/Modal';
import { useDispatch } from 'react-redux';
import { submitForm } from '../reduxcode/sliceform';
import { useState } from 'react';
import { createEmployeeData } from '../datas/format';

const Fieldset = styled.fieldset`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.315);
    margin-bottom: 20px;

    && label {
        align-self: flex-start;
        width: 90%;
        margin: 10px auto;
    }

    && input {
        background-color: white;
        border: 0.5px solid #000000;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
    height: 100vh;
    margin: auto;
    top: 0;
`;

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 0px;
    
    && input {
        font-size: 1em;
        font-weight: 400;
    }
    && p {
        color: red;
    }
`;

const Legend = styled.legend`
    font-size: 1em;
    font-weight: 400;
    margin: 0 auto;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: white;
`;

const Button = styled.button`
    font-size: 1em;
    font-weight: 400;
    padding: 10px 20px;
    background-color: #9bbe1c;
    border-radius: 10px;
    border: none;
    width: 100%;
    margin: 0;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.315);
    cursor: pointer;

    &:hover {
        background-color: #ffffff;
    }
`;


function CreateForm() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        dateStart: new Date(),
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formError, setFormError] = useState('');



    const validate = (name, value) => {
        if (name === 'dateOfBirth' || name === 'dateStart' || name === 'state' || name === 'department') {
            return '';
        }

        if (typeof value === 'string') {
            if (!value.trim()) {
                return 'Fields cannot be empty';
            }
            if (/[^a-zA-Z0-9 -]/.test(value)) {
                return 'No special characters allowed';
            }
        }
        return '';
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        for (const key of Object.keys(formData)) {
            const error = validate(key, formData[key]);
            if (error) {
                setFormError(error);
                isValid = false;
                break;
            }
        }

        if (!isValid) {
            return;
        }


        const employeeData = createEmployeeData(
            Date.now(),
            formData.firstName,
            formData.lastName,
            formData.dateOfBirth,
            formData.dateStart,
            formData.street,
            formData.city,
            formData.state,
            formData.zipCode,
            formData.department
        );

        dispatch(submitForm(employeeData));
        setIsModalOpen(true);
    };

    return (
        <>
            <Container>
                <FormStyle onSubmit={handleSubmit}>
                    <Fieldset>
                        <Legend>Identity</Legend>
                        <label htmlFor="first-name">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            name="firstName"
                            onChange={handleChange}
                            aria-label="First Name"
                        />
                        <label htmlFor="last-name">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            name="lastName"
                            onChange={handleChange}
                            aria-label="Last Name"
                        />
                        <DateSelector
                            title="Date of Birth"
                            onChange={(date) => setFormData({ ...formData, dateOfBirth: date })}
                            aria-label="Date of Birth"
                        />
                        <DateSelector
                            title="Date Start"
                            onChange={(date) => setFormData({ ...formData, dateStart: date })}
                            aria-label="Date Start"
                        />
                    </Fieldset>

                    <Fieldset>
                        <Legend>Address</Legend>
                        <label htmlFor="street">Street</label>
                        <input
                            id="street"
                            type="text"
                            name="street"
                            onChange={handleChange}
                            aria-label="Street"
                        />
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            onChange={handleChange}
                            aria-label="City"
                        />
                        <Selector
                            label="State"
                            name="state"
                            id="state"
                            onChange={handleChange}
                            options={statesArray}
                            aria-label="State"
                        />
                        <label htmlFor="zip-code">Zip Code</label>
                        <input
                            id="zip-code"
                            type="number"
                            name="zipCode"
                            onChange={handleChange}
                            aria-label="Zip Code"
                        />
                    </Fieldset>

                    <Fieldset>
                        <Selector
                            label="Department"
                            name="department"
                            id="department"
                            onChange={handleChange}
                            options={departmentsArray}
                            aria-label="Department"
                        />
                    </Fieldset>
                    {formError && <p>{formError}</p>}
                    <Button type="submit" aria-label="Save Employee Data">Save</Button>
                </FormStyle>
            </Container>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p>Employee Created!</p>
            </Modal>
        </>
    );
}

export default CreateForm;
