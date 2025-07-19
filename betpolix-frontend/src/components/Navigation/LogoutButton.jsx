import { useNavigate } from "react-router-dom"

const LogoutButton = () => {

    const navigate = useNavigate();

    const handleLogout = () => { 

        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        console.log("sesion cerrada de buena manera")

        navigate('/')
     };


  return (
    <button onClick={handleLogout}>cerrar sesion</button>
  );
}

export default LogoutButton