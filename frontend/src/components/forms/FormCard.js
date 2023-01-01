import React from 'react'
import FormInput from './FormInput'

const FormCard = (props) => {

    const { submit, title, button, inputs, setState, state } = props

    const update = (e) => {
        let value = e.target.value
        if (e.target.type == 'file')
            value = e.target.files[0]
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    return (
        <div class="card col-md-5 col-sm-6 col-11">
            <div class="card-body">
                <h5 class="card-title text-center">{title}</h5>
                <form onSubmit={submit}>
                    {
                        inputs.map((input, i) => (
                            <FormInput key={i} onChange={update} value={input.value} name={input.name} type={input.type} label={input.label} />
                        ))
                    }
                    <button type='submit' class="btn btn-primary">{button}</button>
                </form>
            </div>
        </div>
    )
}

export default FormCard