import React, { useState } from 'react'
import './portfolio.css'
import Modal from './Modal'
import { useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../helpers/config'

function Portfolio() {
  const [openModal, setOpenModal] = useState(false)
  const [idModal, setIdModal] = useState(0)
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`${API_URL}/portfolio`)
      .then(data => setData(data.data.portfolio))
  })
  return (
    <section id="portfolio">
      <h5>Mes Projets Récents</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container" >
        {data.map(({ _id, name, github, description }) =>
          <article key={_id} className="portfolio_item" >
            <div className="portfolio_item_img" >
              <h3>{name}</h3>
              <img src={`${API_URL}/portfolio/image/${_id}`} className="item_img" alt={name} />
              <div className="buttons " >
                <a href={github} target="_blank" className="btn btn-primary" >Code Source</a>
                <a onClick={() => { setOpenModal(true); setIdModal(_id) }} className="btn" >Read More</a>
              </div>
              {openModal && idModal == _id && <Modal id={setIdModal} closeModal={setOpenModal} description={description} />}
            </div>
          </article>
        )}
      </div>
    </section>
  )
}

export default Portfolio