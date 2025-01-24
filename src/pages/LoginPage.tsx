import FormularioLoginSeccion from "../components/FormularioLoginSeccion"
import TitulosSeccion from "../components/TitulosSeccion"
import "./LoginPage.css"

const LoginPage = () => {
    return <div className="row">
        <div className="col"></div>
        <div className="col">
            <TitulosSeccion />
            <FormularioLoginSeccion />
        </div>
        <div className="col"></div>
    </div>
}

export default LoginPage