import { useState } from "react"
import {Navigate, useNavigate} from "react-router-dom"

export default function LoginForm() {

    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const navigate = useNavigate();

    
   const handleLogin= async (e) => {

    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok){

      const data = await response.json();

      localStorage.setItem('acces_token',data.acces);
      localStorage.setItem('refresh_token',data.refresh);
      console.log('autenticado correctamente');

      navigate("/dashboard");
    }

      else{
        alert('credenciales incorrectas');

      }
    
      
    }


  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Iniciar Sesion</h2>
        
      <div style={styles.inputGroup}>
        <label>UserName:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
      </div>

      <div style={styles.inputGroup}>
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </div>

      <button type="submit">Entrar</button>
      </form>
    </div>

  )
}
const styles = {
  form: {
    maxWidth: '300px',
    margin: 'auto',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
};