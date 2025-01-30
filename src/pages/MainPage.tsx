import { useNavigate } from "react-router-dom"
import MenuOpciones from "../components/MenuOpciones"
import Footer from "../components/Footer"
import ListadoProyectos from "../components/ListadoProyectos"

const MainPage = () => {
    const navigate = useNavigate()

    // TODO: A manejarse por backend
    const proyectos = [
        {
            id : 1,
            nombre : "Proy A",
            nroPom : 2,
            status : "Iniciado"
        },
        {
            id : 2,
            nombre : "Proy B",
            nroPom : 0,
            status : "Creado"
        }
    ]

    return <div className="container">
        <h1>Pomodoro UL</h1>
        <div className="row mb-4">
            <div className="col-md-3">
                <MenuOpciones />
            </div>
            <div className="col-md-9">
                <ListadoProyectos data={ proyectos }/>
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