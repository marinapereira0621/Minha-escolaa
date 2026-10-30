
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Cabecalho from './component/cabecalho'
import MenuLateral from './component/MenuLateral'
import Botao from './component/Botao'
import CampoTexto from './component/CampoTexto'
import CartaoIndicador from './component/Cartaoindicador'
import Alunos from './pages/Aluno'
import Professores from './pages/Professores'
function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <p>Bem-vindo ao sistema!</p>
      <div className="indicadores">
        <CartaoIndicador
          titulo="Total de alunos"
          valor="120"
        />
        <CartaoIndicador
          titulo="Total de professores"
          valor="15"
        />
        <CartaoIndicador
          titulo="Avaliações realizadas"
          valor="85"
        />
      </div>
      <Botao>Entrar</Botao>
      <Botao>Novo aluno</Botao>
      <Botao>Cadastrar professores</Botao>
      <CampoTexto
        label="Cadastre seu E-mail para receber nossas novidades"
        tipo="email"
      />
    </>
  )
}
function App() {
  return (
    <BrowserRouter>
      <div>
        <Cabecalho />
        <div className="layout">
          <MenuLateral />
          <main className="conteudo">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/alunos" element={<Alunos />} />
              <Route path="/professores" element={<Professores />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
