import { Link, NavLink, useNavigate } from "react-router-dom"
import FormularioLoginSeccion from "../components/FormularioLoginSeccion"
import TitulosSeccion from "../components/TitulosSeccion"
import "./LoginPage.css"
import { useEffect, useState } from "react"
import ModalFormularioLogin from "../components/ModalFormularioLogin"

const LoginPage = () => {
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState<boolean>(false)

    // Se va a ejecutar al terminar el renderizado del componente
    useEffect(() => {
        const usuario = sessionStorage.getItem("usuario")
        if (usuario != null) {
            navigate("/main")
        }
    })

    const loginHandler = async (usuario : string, password:string) => {
        const userData = {
            usuario : usuario,
            password : password
        }
        const resp = await fetch("http://localhost:5000/login", {
            method : "POST",
            body : JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await resp.json()
        if (data.msg == "") {
            // Login correcto
            const userJSON = JSON.stringify(userData)
            console.log(userJSON)
            sessionStorage.setItem("usuario", userJSON)
            navigate("/main")
        }else {
            // Error en el login
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