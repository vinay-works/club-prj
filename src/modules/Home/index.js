import React from 'react'
import Hero from '../../components/Hero'
import Membership from '../../components/Membership'
import Gallery from '../../components/Gallery'
import About from '../../components/About'

const Home = () => {

  return (
    <>
      <Hero />
      <Gallery/>
      <Membership/>
      <About/>
    </>
  )
}

export default Home