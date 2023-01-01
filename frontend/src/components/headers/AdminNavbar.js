import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../helpers/authentification'
import { API_URL } from '../../helpers/config'
import toastr from 'toastr'
import 'toastr/build/toastr.css'
import './nav/nav.css'

const AdminNavbar = () => {
  const navigate = useNavigate()

  const signout = () => {
    axios.get(`${API_URL}/auth/logout`)
      .then(() => {
        toastr.success('Logout successefuly', 'Logout', {
          positionClass: "toast-bottom-left"
        })
        logout()
        navigate('/')
      })
  }

  return (
    <nav>
      <div className="nav_item">
          <h6 className="nav_name"> <Link to="/dashboard/profil">Profil</Link> </h6>
      </div>
      <div className="nav_item">
          <h6 className="nav_name"> <Link to="/dashboard/profil">Expérience</Link> </h6>
      </div>
      <div className="nav_item">
          <h6 className="nav_name"> <Link to="/dashboard/profil">Compétences</Link> </h6>
      </div>
      <div className="nav_item">
          <h6 className="nav_name"> <Link to="/dashboard/profil">Portfolio</Link> </h6>
      </div>
      <div className="nav_item">
          <h6 onClick={signout} className="nav_name"><a href="#">Logout</a></h6>
      </div>
    </nav>
  )
}

export default AdminNavbar