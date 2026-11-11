
import './MenuLateral.css'
import { useNavigate } from 'react-router-dom'
function MenuLateral() {
  const navigate = useNavigate()
  function sair() {
    navigate('/')
  }
  function PaginaDashboard() {
    navigate('/')
  }
  function PaginaAluno() {
    navigate('/alunos')
  }
  function PaginaProfessor() {
    navigate('/professores')
  }
  return (
    <aside className="menu-lateral">
      <h2>Menu</h2>
      <ul>
        <li>
          <a href="#" onClick={(e) => {
            e.preventDefault()
            PaginaDashboard()
          }}>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => {
            e.preventDefault()
            PaginaAluno()
          }}>
            Alunos
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => {
            e.preventDefault()
            PaginaProfessor()
          }}>
            Professores
          </a>
        </li>
      </ul>

      <button onClick={sair}>Sair</button>
    </aside>
  )
}
export default MenuLateral
