import React, { useEffect, useState } from 'react'
import './header.css'
import HeaderMedia from './HeaderMedia'
import { AiFillDownCircle } from "react-icons/ai";
import axios from 'axios';
import { API_URL } from '../../helpers/config';


function Header() {
  const [user, setUser] = useState({
    name: "",
    title: "",
    description: "",
    email: "",
    phone: "",
    city: ""
  })
  useEffect(() => {
    axios.get(`${API_URL}/user`)
      .then(data => {
        setUser({ ...user, ...data.data.user })
      })
  }, [])
  const { name, title, description, email, phone, city } = user
  return (
    <header>
      <div className="container header_container" >
        <h4>Je suis</h4>
        <h1>{name}</h1>
        <h4 className='text-light' >{title}</h4>
        <div className="buttons" >
          <a href={`${API_URL}/user/cv`} className="btn" download >Download CV</a>
          <a href="#contact" className="btn btn-primary" >Contacter moi</a>
        </div>
        <HeaderMedia />
        <div className="me" >
          <img src={`${API_URL}/user/image1`} alt="Moundir Jabir" />
        </div>
        <a href="#footer" className="scroll_down" ><AiFillDownCircle size={50} /></a>

      </div>
    </header>
  )
}

export default Header