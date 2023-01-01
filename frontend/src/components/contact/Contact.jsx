import React, { useRef } from 'react'
import './contact.css'
import { AiFillUpCircle } from "react-icons/ai";

function Contact() {
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className="container contact_container" >
				<form  >
					<input type="text" name="name" placeholder="Your Full Name" required />
					<input type="email" name="name" placeholder="Your Email" required />
					<textarea name="message" rows="6" placeholder="Write Your Message Here..." required  ></textarea>
					<button type='submit' className='btn btn-primary' >Send</button>
				</form>
				<a href="#" className="scroll_up" ><AiFillUpCircle size={50} /></a>
			</div>
		</section>
	)
}

export default Contact