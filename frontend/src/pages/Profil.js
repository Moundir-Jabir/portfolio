import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../helpers/config'
import toastr from 'toastr'
import 'toastr/build/toastr.css'
import { isAuthenticated } from '../helpers/authentification'
import FormCard from '../components/forms/FormCard'

const Profil = () => {
    let token = isAuthenticated()

    const [user, setUser] = useState({
        name: "",
        title: "",
        description: "",
        email: "",
        phone: "",
        city: ""
    })
    const [formData] = useState(new FormData())

    useEffect(() => {
        axios.get(`${API_URL}/user`)
            .then(data => {
                setUser({ ...user, ...data.data.user })
            })
    }, [])

    const submit = (e) => {
        e.preventDefault()
        for (let key in user) {
            formData.set(key, user[key])
        }
        axios.put(`${API_URL}/user`, formData, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
                toastr.success('Profil modifié avec Succés', 'Success', {
                    positionClass: "toast-bottom-left"
                })
            })
            .catch((err) => {
                if (err.response.data.error) {
                    toastr.warning(err.response.data.error, 'Please Check form !', {
                        positionClass: "toast-bottom-left"
                    })
                } else {
                    toastr.warning("Problem connection", 'Sorry !', {
                        positionClass: "toast-bottom-left"
                    })
                }
            })
    }
    const { name, title, description, email, phone, city } = user
    let inputs = [
        { name: "name", value: name, type: "text", label: "Nom Complet" },
        { name: "title", value: title, type: "text", label: "Titre" },
        { name: "email", value: email, type: "email", label: "Email" },
        { name: "phone", value: phone, type: "text", label: "Télephone" },
        { name: "city", value: city, type: "text", label: "Ville" },
        { name: "description", value: description, type: "textarea", label: "Description" },
        { name: "image1", type: "file", label: "Image 1" },
        { name: "image2", type: "file", label: "Image 2" },
        { name: "cv", type: "file", label: "Mon CV" }
    ]
    return (
        <div style={{ marginTop: "50px" }} className="container">
            <div className="row justify-content-center">
                <FormCard submit={submit} title="Mon Profil" button="Modifier" inputs={inputs} setState={setUser} state={user} />
            </div>
        </div>
    )
}

export default Profil