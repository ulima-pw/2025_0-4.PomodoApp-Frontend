import { Link, NavLink, useNavigate } from "react-router-dom"
import FormularioLoginSeccion from "../components/FormularioLoginSeccion"
import TitulosSeccion from "../components/TitulosSeccion"
import "./LoginPage.css"
import { useState } from "react"
import ModalFormularioLogin from "../components/ModalFormularioLogin"

const LoginPage = () => {
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState<boolean>(false)

    const loginHandler = (usuario : string, password:string) => {
        if (usuario == "PW" && password == "123") {
            // Login correcto
            navigate("/main")
        }else {
            // Login incorrecto
            setShowModal(true)
        }
    }

    return <div className="row">
        <div className="col"></div>
        <div className="col">
            <TitulosSeccion />
            <FormularioLoginSeccion onLogin={ loginHandler }/>
            <ModalFormularioLogin showModal={ showModal } 
                closeModal={ () => {
                    setShowModal(false)
                } }/>
        </div>
        <div className="col"></div>
    </div>
}

export default LoginPage