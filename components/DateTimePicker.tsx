"use client";

import React, { use, useState } from 'react'
// custom or other imports 
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

type DateTimePickerProps={
  placeholder?: string
}

const DateTimePicker = ({placeholder} : DateTimePickerProps) => {

    const [selectedDate, setSelectedDate] = useState(null)

    const handleDateChange = (date) =>{
      setSelectedDate(date);
    }

    return (
      <DatePicker 
      selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy hh:mm aa"
          showTimeSelect
          timeFormat="hh:mm aa"
          timeIntervals={15}  
          placeholderText={placeholder}    
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
      />
    )
}

export default DateTimePicker