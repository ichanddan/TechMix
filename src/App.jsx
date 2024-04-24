import React from 'react'
import { Header } from './components/Header'
import { Navebar } from './components/Navebar'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'
import { Expriance } from './components/Expriance'

export default function App() {
  return (
    <div>
      <Header/>
      <Navebar/>
      {/* <Hero/> */}
      <Expriance/>
      <Footer/>      
    </div>
  )
}
