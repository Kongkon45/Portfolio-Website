import React from 'react'
import Banner from '../Banner/Banner'
import Services from '../../Services/Services'
import Contact from '../../Contact/Contact'
import Projects from '../../Projets/Projects'
import About_Us from '../../About_Us/About_Us'

const Home = () => {
  return (
    <div>
        <Banner/>
        <About_Us/>
        <Services/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home