import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateSelector({ title, onChange }){
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleChange = (date) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
  };
  return (<>
    <h2>{title}</h2>
    <DatePicker selected={selectedDate} onChange={handleChange} />
    </>
  );
};

export default DateSelector;
