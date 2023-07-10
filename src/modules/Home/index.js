import React from 'react'
//import Categories from '../../components/Categories'
//import FeatureCard from '../../components/FeatureCard'
import Hero from '../../components/Hero'
//import ProductCard from '../../components/ProductCard'
//import Products from '../../components/ProductCard'
//import Stats from '../../components/StatCard'
import Membership from '../../components/Membership'
import Gallery from '../../components/Gallery'
import About from '../../components/About'
//import { userFun } from '../../utils/utilites';
//import { useToast } from '@chakra-ui/react'

const Home = () => {

  return (
    <>
      <Hero />
      {/* <Categories/> */}
      <Gallery/>
      <Membership/>
      <About/>
    </>
  )
}

export default Home