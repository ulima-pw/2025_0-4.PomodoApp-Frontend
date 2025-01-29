import { useNavigate } from "react-router-dom"
import MenuOpciones from "../components/MenuOpciones"
import Footer from "../components/Footer"
import ListadoProyectos from "../components/ListadoProyectos"

const MainPage = () => {
    const navigate = useNavigate()
    return <div className="container">
        <h1>Pomodoro UL</h1>
        <div className="row mb-4">
            <div className="col-md-3">
                <MenuOpciones />
            </div>
            <div className="col-md-9">
                <ListadoProyectos />
            </div>
        </div>
        <Footer />

        <button type="button"
        className="btn btn-danger"
                onClick={ () => {
                    sessionStorage.removeItem("usuario")
                    navigate("/")
                } } >
            Logout
        </button>
    </div>
}

export default MainPage