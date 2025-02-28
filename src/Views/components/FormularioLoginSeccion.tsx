import { useState } from "react"

interface FormularioLoginSeccionProps {
    onLogin : (usuario : string, password:string) => void
}

const FormularioLoginSeccion = (props : FormularioLoginSeccionProps) => {
    const [usuario, setUsuario] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleUsuarioChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUsuario(e.currentTarget.value)
    }

    const handlePasswordChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    return <form>
        <div>
            <label className="form-label">Usuario:</label>
            <input className="form-control" 
                    type="text"
                    value={ usuario }
                    onChange={ handleUsuarioChange } />
        </div>
        <div>
            <label className="form-label">Password:</label>
            <input className="form-control" 
                    type="password"
                    value={ password }
                    onChange={ handlePasswordChange } />
        </div>
        <button id="margen-superior-boton" 
            className="btn btn-success" 
            type="button"
            onClick={ () => {
                props.onLogin(usuario, password)
            } }>
                Ingresar
        </button>
    </form>
}

export default FormularioLoginSeccion