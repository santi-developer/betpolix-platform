import MatchGrid from "./components/sports/MatchGrid/MatchGrid"
import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (

    <BrowserRouter>
    
      <div className="app">

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/matches" element={<MatchGrid/>}/>

        </Routes>  
    
    
    
      </div>
        </BrowserRouter>
  
      
  )
}

export default App
