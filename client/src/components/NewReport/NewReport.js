import React, { useRef, useState } from 'react'
import { Input } from 'antd'
import { DatePicker} from 'antd'
import dayjs from 'dayjs'

const NewReport = () => {
  const [injuryNo, setInjuryNo] = useState({});
  const num = useRef(0);
  const { TextArea } = Input;

  const handleClick = () =>{
    num.current++;
    setInjuryNo({...injuryNo, [num.current]: ''} );
  }

  const handleDesc = (item) =>(event) => {
    setInjuryNo({...injuryNo, [item]: event.target.value});
    console.log("inasdfa",injuryNo);
  }

  return (
    <div className='newReport'>
      <div className='newReport_details'>
        <span>
          <label for='reporterName'>Reporter Name:</label>
          <Input id='reporterName' allowClear/>
        </span>
          
        <span>
          <label for='patientName'>Patient Name:</label>
          <Input allowClear id='patientName'/>
        </span>
        <span>  
          <label for='DateTime'>Injury Date & Time:</label>
          <DatePicker id='DateTime' format="YYYY-MM-DD HH:mm:ss"  showTime={{defaultValue: dayjs('00:00:00', 'HH:mm:ss'),}}/>
        </span>
        <span>
        <DatePicker format="YYYY-MM-DD HH:mm:ss"  showTime={{defaultValue: dayjs('00:00:00', 'HH:mm:ss'),}}/>
        </span>
      </div>
      <div className='newReport_bodyMap'>
        <span onClick={handleClick}>leg</span> -> 
        <span onClick={handleClick}>head</span> ->
        <span onClick={handleClick}>arm</span>
      </div>
      {(num.current)  ?  <div className='newReport_injuries'>
        {
          Object.keys(injuryNo).map((item) => {
            return(
              <div>
                <span>{item}</span>
                <TextArea onChange={handleDesc(item)}/>
              </div>
            )
          })
        }
      </div> : ''}
    </div>
  )
}

export default NewReport