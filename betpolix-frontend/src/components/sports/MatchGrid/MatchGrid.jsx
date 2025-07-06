import { useEffect, useState } from 'react'
import MatchCard from '../MatchCard/MatchCard'

function MatchGrid() {
  const[matches, setmatches]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/api/partidos/')
    .then(response=>response.json())
    .then(data=>setmatches(data))
    .catch(error => console.error ( 'error al cargar los partidos', error) ); 
  },[]);

  return (
    <div>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {matches.map((match, index)=>(
        
        <MatchCard key={index} localTeam={match.equipo_local} visitorTeam={match.equipo_visitante} date={match.fecha} result={match.resultado} /> 
      
      ))}

    </div>
    </div>
  )
}

export default MatchGrid