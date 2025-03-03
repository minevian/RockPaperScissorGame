// import Game from "./compoents/Game"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./compoents/HomeScreen/HomePage"
import BackgroundMusic from "./compoents/common/BackgroundMusic"
import Game from "./compoents/Game"



const App =() => {
  

  return (
<BrowserRouter> {/* Move BrowserRouter to wrap everything */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <BackgroundMusic />

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Ensure HomePage is inside Routes */}
        <Route path="game-dashboard" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
