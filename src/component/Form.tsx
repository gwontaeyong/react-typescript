import React from 'react'
import './Form.css'
/**
 * FormProps 수정
 */
interface FormProps{
    value:string
    onChange:any
    onKeyPress:any
    onCreate:any
}

const Form:React.FC<FormProps> = ({value, onChange, onKeyPress, onCreate}) => {    
  return (
    <div className="form">
      <input type="text" value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  )
}

export default Form