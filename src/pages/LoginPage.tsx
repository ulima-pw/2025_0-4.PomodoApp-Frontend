import { Link, NavLink, useNavigate } from "react-router-dom"
import FormularioLoginSeccion from "../components/FormularioLoginSeccion"
import TitulosSeccion from "../components/TitulosSeccion"
import "./LoginPage.css"

const LoginPage = () => {
    const navigate = useNavigate()

    const loginHandler = (usuario : string, password:string) => {
        if (usuario == "PW" && password == "123") {
            // Login correcto
            navigate("/main")
        }else {
            // Login incorrecto
        }
    }

    return <div className="row">
        <div className="col"></div>
        <div className="col">
            <TitulosSeccion />
            <FormularioLoginSeccion onLogin={ loginHandler }/>
            <Link to={"/main"} className="btn btn-danger">Ir a MainPage</Link>
        </div>
        <div className="col"></div>
    </div>
}

export default LoginPage