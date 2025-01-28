import { Link, NavLink, useNavigate } from "react-router-dom"
import FormularioLoginSeccion from "../components/FormularioLoginSeccion"
import TitulosSeccion from "../components/TitulosSeccion"
import "./LoginPage.css"
import { useState } from "react"

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
            <div className={ showModal == true ? "modal fade show d-block" : "modal fade" } >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Error</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Login y/o password incorrecto.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" 
                                className="btn btn-secondary"
                                onClick={ () =>  {
                                    setShowModal(false)
                                } }>
                                Cerrar
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col"></div>
    </div>
}

export default LoginPage