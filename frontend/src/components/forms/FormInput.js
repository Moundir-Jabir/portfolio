import React from 'react'

const FormInput = (props) => {
    const { onChange, value, name, type, label } = props
    return (
        <div class="mb-3">
            <label htmlFor={name} class="form-label">{label}</label>
            {
                (type == "textarea") ? (
                    <textarea onChange={onChange} className="form-control" id={name} name={name} value={value} rows="5"></textarea>
                ) : (
                    <input onChange={onChange} value={value} type={type} class="form-control" id={name} name={name} />
                )
            }
        </div>
    )
}

export default FormInput