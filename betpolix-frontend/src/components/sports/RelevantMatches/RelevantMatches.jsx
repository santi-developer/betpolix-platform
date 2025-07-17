import { useState, useEffect } from 'react';
<<<<<<< HEAD
import MatchCard from '../MatchCard/MatchCard'
=======
import MatchCard from '../MatchCard/MatchCard';
>>>>>>> develop

export default function RelevantMatches() {

    const [relevantMatches, setRelevantMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/partidos/relevantes/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar partidos relevantes');
        }
        return response.json();
      })
      .then(data => {
        setRelevantMatches(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar los partidos relevantes:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando partidos destacados...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (relevantMatches.length === 0) {
    return <div>No hay partidos relevantes en este momento.</div>;
  }
  return (
    <div>
      <h2>Partidos Destacados</h2>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        gap: '1rem'
      }}>
        {relevantMatches.map((match, index) => (
          <MatchCard 
            key={match.id || index} 
            localTeam={match.equipo_local} 
            visitorTeam={match.equipo_visitante} 
            date={match.fecha} 
            result={match.resultado} 
          />
        ))}
      </div>
    </div>
  )
}
