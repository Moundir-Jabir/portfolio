import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiFiverr} from 'react-icons/si'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'

import './header.css'
function HeaderMedia() {
  return (
    <div className="header_media" >
        <a href="https://www.linkedin.com/in/moundir-jabir-913636202/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Moundir-Jabir" target="_blank"><FaGithub/></a>
        <a href="https://web.facebook.com/mondir.jabir" target="_blank"><BsFacebook/></a>
        <a href="https://twitter.com/MoundirJabir" target="_blank"><AiFillTwitterCircle size={26} /></a>
    </div>
  )
}
    
export default HeaderMedia