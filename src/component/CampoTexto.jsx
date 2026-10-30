import './CampoTexto.css'
function CampoTexto({ label, tipo }) {
return (
    <div className="campo-texto">
    <label>{label}</label>
    <input type={tipo} />
    </div> 
    )
}
export default CampoTexto