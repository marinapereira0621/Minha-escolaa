
import './MenuLateral.css'
import { useNavigate } from 'react-router-dom'
function MenuLateral() {
  const navegar = useNavigate()
  return (
    <aside className="menu-lateral">
      <h2>Menu</h2>
      <ul>
        <li>
          <a href="#" onClick={(e) => {
            e.preventDefault()
            navegar('/')
          }}>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => {
            e.preventDefault()
            navegar('/alunos')
          }}>
            Alunos
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => {
            e.preventDefault()
            navegar('/professores')
          }}>
            Professores
          </a>
        </li>
      </ul>
    </aside>
  )
}
export default MenuLateral
