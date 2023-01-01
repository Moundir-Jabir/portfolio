import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaWhatsappSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { SiMessenger } from 'react-icons/si'
import { FaTwitterSquare } from 'react-icons/fa'
import { GrYoutube } from 'react-icons/gr'
function Footer() {
  return (
    <footer id="footer">
      <a href="#" className="footer_logo">SELLAKDEV</a>
      <ul className="permalinks" >
        <li><a href="#" >Home</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#experience" >Experience</a></li>
        <li><a href="#portfolio" >Portfolio</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>
      <div className="footer_socials" >
        <a href="https://www.linkedin.com/in/mouad-sellak/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.facebook.com/mouad.sellak.7/" target="_blank"><BsFacebook/></a>
        <a href="https://www.instagram.com/mouaadsellak/" target="_blank"><FaInstagramSquare/></a>
				<a href="https://api.whatsapp.com/send?phone=0637499636" target="_blank"><FaWhatsappSquare/></a>
				<a href="https://twitter.com/SellakMouad" target="_blank"><FaTwitterSquare/></a>
        <a href="mailto:mouaadsellak123@gmail.com" target="_blank"><SiGmail/></a>
				<a href="https://www.youtube.com/channel/UCXF-qYZji_hGw3mKuvE_YnQ" target="_blank"><GrYoutube size={28} /></a>
				<a href="https://m.me/mouad.sellak.7" target="_blank"><SiMessenger/></a>
        
    </div>
    <div className="footer_copyright" >
      <small> &copy;  <a href="#" >SELLAKDEV</a> All Rights Reserved.</small>
    </div>
    </footer>
  )
}

export default Footer