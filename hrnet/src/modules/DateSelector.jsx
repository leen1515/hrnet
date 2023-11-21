import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Label } from '../styled/global';
import styled from 'styled-components';


const DatePickStyle = styled(DatePicker)`

    &&:focus {
    outline: 2px solid black;}
`;

function DateSelector({ title, onChange }){
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleChange = (date) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
  };
  return (<>
    <Label htmlFor={title}>{title}</Label>
    <DatePickStyle id ={title} selected={selectedDate} onChange={handleChange} />
    </>
  );
};

export default DateSelector;
