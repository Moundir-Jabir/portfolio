import React from 'react'
import Nav from '../components/headers/nav/Nav.jsx'
import Header from '../components/header/Header.jsx'
import About from '../components/about/About.jsx'
import Experience from '../components/experience/Experience.jsx'
import Portfolio from '../components/portfolio/Portfolio.jsx'
import Contact from '../components/contact/Contact.jsx'
import Footer from '../components/footer/Footer.jsx'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home