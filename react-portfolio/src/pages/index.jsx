import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Sobre from "./Sobre"
import Contato from "./Contato"
import Rodape from "../components/Footer"
import Navegacao from "../components/Nav"
import Cabecalho from "../components/Cabecalho"
import './reset.css'

function App() {
  return (
    <>
      <Navegacao />
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
      <Rodape />
    </>
  )
}

export default App