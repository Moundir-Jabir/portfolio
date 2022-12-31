import React from 'react'

const FormInput = (props) => {
    const { onChange, value, name, type, label } = props
    return (
        <div class="mb-3">
            <label htmlFor="" class="form-label">{label}</label>
            <input onChange={onChange} value={value} type={type} class="form-control" id={name} name={name}/>
        </div>
    )
}

export default FormInput