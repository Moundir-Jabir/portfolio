import React, {useState, useEffect} from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { CgMicrosoft } from 'react-icons/cg'
import { AiFillCode } from 'react-icons/ai'
import { API_URL } from '../../helpers/config'
import axios from 'axios'

function About() {
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
	const { description, phone, city, email } = user
	return (
		<section id="about" >
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className="container about_container" >
				<div className="about_me" >
					<div className="aboutme_img" >
						<img src={`${API_URL}/user/image2`} alt="Moundir Jabir" />
					</div>
				</div>
				<div className="about_content" >
					<div className="about_cards" >
						<article className="about_card">
							<AiFillCode className="about_icon" />
							<h5>Education</h5>
							<small>Développement web et mobile</small>
						</article>

						<article className="about_card">
							<FaAward className="about_icon" />
							<h5>Certifications</h5>
							<small>Certificat Simplon.co</small>
						</article>

						<article className="about_card">
							<CgMicrosoft className="about_icon" />
							<h5>Projects</h5>
							<small> +10 Projets réalisés</small>
						</article>
					</div>
					<p>{description}
					<ul>
						<li> - email : {email}</li>
						<li> - Tél : {phone}</li>
						<li> - Ville : {city}</li>
					</ul>
					</p>
					<a href='#contact' className="btn btn-primary ">Contact</a>
				</div>
			</div>
		</section>
	)
}

export default About 