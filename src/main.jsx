import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Carta from "./content/Carta.jsx"
import Menu from "./content/Menu.jsx"
import Reserva from "./content/Reserva.jsx"
import App from './App.jsx'
import "./css/global.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Carta" element={<Carta />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/Reserva" element={<Reserva />}></Route>
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
