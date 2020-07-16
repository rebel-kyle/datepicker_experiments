import React, { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

function App() {
  const [ startDate, setStartDate ] = useState(null)
  const [ endDate, setEndDate ] = useState(null)

  const handleStartChange = (date) => {
    setStartDate(date)
  }

  const handleEndChange = (date) => {
    setEndDate(date)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="results">
          <p>Start Time: {startDate===null ? "Enter Date" : startDate.toString()}</p>
        </div>
        <div className="timecontainerouter">
          <div className="starttimecontainer">
            <DatePicker
              name="starttime"
              placeholderText="Enter start date"
              dateFormat="yyyy-MM-dd HH:mm"
              showTime
              isClearable
              selected={startDate}
              onChange={handleStartChange}
              maxDate={endDate}
              selectsStart
              timeInputLabel="Time:"
              showTimeInput
            />
          </div>
          <div className="endtimecontainer">
            <DatePicker
              name="endtime"
              placeholderText="Enter end date"
              dateFormat="yyyy-MM-dd HH:mm"
              showTime
              isClearable
              selected={endDate}
              onChange={handleEndChange}
              startDate={startDate}
              selectsEnd
              timeInputLabel="Time:"
              showTimeInput
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
