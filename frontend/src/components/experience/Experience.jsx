import React from 'react'
import './experience.css'
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../helpers/config';

function Experience() {
	const [skills, setSkills] = useState([])
	useEffect(() => {
		axios.get(`${API_URL}/skill`)
			.then(data => setSkills(data.data.skill))
	})
	let data = [{
		title: "Développement Frontend",
		content: skills.filter(skill => skill.category == "frontend")
	}, {
		title: "Développement Backend",
		content: skills.filter(skill => skill.category == "backend")
	}, {
		title: "Développement Mobile",
		content: skills.filter(skill => skill.category == "mobile")
	}, {
		title: "Outils et autres",
		content: skills.filter(skill => skill.category == "other")
	}]
	return (
		<section id="experience">
			<h5>Mes Expériences professionels et compétences</h5>
			<h2>Compétences Techniques</h2>
			<div className="container experience_container" >
				{data.map(({ title, content }) => (
					<div className="experience_other" >
						<h3>{title}</h3>
						<div className="experience_content">
							{content.map(({ name, pourcentage, _id }) => (
								<article className="experience_details">
									<div className="experience_skill" >
										<img style={{width: "25px"}} src={`${API_URL}/skill/image/${_id}`} alt="icon" />
										<h4>{name}</h4>
									</div>
									<ProgressBar className="progress_bar" height='13px' bgColor="#4db5ff" completed={pourcentage} />
								</article>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
export default Experience
