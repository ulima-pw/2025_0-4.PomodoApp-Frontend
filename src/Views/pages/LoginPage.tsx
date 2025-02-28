import FormularioLoginSeccion from "../components/FormularioLoginSeccion"
import TitulosSeccion from "../components/TitulosSeccion"
import "./LoginPage.css"
import ModalFormularioLogin from "../components/ModalFormularioLogin"
import useLoginViewModel from "../../ViewModels/LoginViewModel"



const LoginPage = () => {
    const { showModal, setShowModal, loginHandler } = useLoginViewModel()

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