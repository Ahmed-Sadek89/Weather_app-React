import React from 'react';
import './style.css'

const Form = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <input type='text' name='city' placeholder='City ..' autoComplete='true'/>
            
        </form>
    )
}

export default Form;