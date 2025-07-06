import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import { useState } from 'react'


export default function Home() {

  const [relevantMatches, setRelevantMatches] =useState([])
  return (
    <div>
      <Navbar/>

      <div></div>
    </div>
  )
}
