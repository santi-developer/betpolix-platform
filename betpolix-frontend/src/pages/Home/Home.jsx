import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import RelevantMatches from '../../components/sports/RelevantMatches/RelevantMatches'


export default function Home() {

  return (
    <div>
      <Navbar/>

        <div>
      <h1>Bienvenido</h1>
      
      {/* Otros contenidos del home */}
      <section>
        <p>Tu contenido principal aquí...</p>
      </section>

      {/* Partidos relevantes */}
      <section>
        <RelevantMatches />
      </section>
      
      {/* Otros contenidos del home */}
    
      </div>
    </div>
  )
}
