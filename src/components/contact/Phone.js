import React, {useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Phone() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState()
  return (
    <PhoneInput
      placeholder="Phone"
      value={value}
      onChange={setValue}
      className="tel" required/>
  )
}

export default Phone
