import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../helpers/config'
import toastr from 'toastr'
import 'toastr/build/toastr.css'
import { login } from '../helpers/authentification'
import FormCard from '../components/forms/FormCard'

const Login = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "", password: ""
  })

  const submit = (e) => {
    e.preventDefault()
    axios.post(`${API_URL}/auth/login`, user)
      .then((res) => {
        toastr.success('User logged successfuly', 'Login', {
          positionClass: "toast-bottom-left"
        })
        login(res.data.user, res.data.token)
        navigate('/dashboard')
      })
      .catch((err) => {
        if (err.response.data.erreur) {
          toastr.warning(err.response.data.erreur, 'Please Check form !', {
            positionClass: "toast-bottom-left"
          })
        } else {
          toastr.warning("Problem connection", 'Sorry !', {
            positionClass: "toast-bottom-left"
          })
        }
      })
  }
  const { email, password } = user
  let inputs = [
    { name: "email", value: email, type: "email", label: "Email" },
    { name: "password", value: password, type: "password", label: "Password" }
  ]
  return (
    <div style={{marginTop: "50px"}} className="container">
      <div className="row justify-content-center">
        <FormCard submit={submit} title="Admin" button="Login" inputs={inputs} setState={setUser} state={user} />
      </div>
    </div>
  )
}

export default Login