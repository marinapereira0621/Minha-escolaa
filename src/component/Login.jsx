import CampoTexto from '../components/CampoTexto'
import Botao from '../components/Botao'
import './Login.css'
function Login() {
     return (
        <div className="pagina-login">
         <form className="formulario-login">
           <h1>Sistema de Qualidade do Ensino</h1>
           <h2>Entrar no sistema</h2>
            <CampoTexto
            label="E-mail"  
             tipo="email"
           />
             <CampoTexto
              label="Senha"
             tipo="password"
             />
            <Botao>Entrar</Botao>
             </form>
               </div>
     )
    }         
    export default Login