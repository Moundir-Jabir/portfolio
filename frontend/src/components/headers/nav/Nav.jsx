import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineLibraryBooks } from "react-icons/md";


function Nav() {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <div className="nav_item">
        <a href="#" onClick={() => setActiveNav("#")} value="Home" className={activeNav === "#" ? 'active' : ''} >
          <AiOutlineHome className="nav_icon" size={20} />
          <h6 className="nav_name">Home</h6>
        </a>
      </div>
      <div className="nav_item">
        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? 'active' : ''}>
          <AiOutlineUser className="nav_icon" size={20} />
          <h6 className="nav_name" >About Me</h6>
        </a>
      </div>
      <div className="nav_item">
        <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? 'active' : ''}>
          <BiBook className="nav_icon" size={20} />
          <h6 className="nav_name" >Experience</h6>
        </a>
      </div>
      <div className="nav_item">
        <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? 'active' : ''}>
          <MdOutlineLibraryBooks className="nav_icon" size={20} />
          <h6 className="nav_name" >Portfolio</h6>
        </a>
      </div>
      <div className="nav_item">
        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'active' : ''}>
          <AiOutlineMessage className="nav_icon" size={20} />
          <h6 className="nav_name" >Contact</h6>
        </a>
      </div>
    </nav>
  )
}

export default Nav