import { useEffect, useState } from "react"
import { login } from "../Models/Services/UsuariosServices"
import { useNavigate } from "react-router-dom"

const useLoginViewModel = () => {
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
        const data = await login({
            usuario : usuario,
            password : password
        })

        if (data.msg == "") {
            // Login correcto
            const userJSON = JSON.stringify(data.usuario)
            console.log(userJSON)
            sessionStorage.setItem("usuario", userJSON)
            navigate("/main")
        }else {
            // Error en el login
            setShowModal(true)
        }
    }

    return {
        showModal,
        setShowModal,
        loginHandler
    }
}

export default useLoginViewModel