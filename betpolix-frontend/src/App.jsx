import MatchGrid from "./components/sports/MatchGrid/MatchGrid"
import { DashBoard } from "./pages/DashBoard/DashBoard";
import Home from "./pages/Home/Home"
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>
    
      <div className="app">

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/matches" element={<MatchGrid/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/dashboard" element={<ProtectedRoute><DashBoard/></ProtectedRoute>}/>
        </Routes>  
    
    
    
      </div>
        </BrowserRouter>
  
      
  )
}

export default App
