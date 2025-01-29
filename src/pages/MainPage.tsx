import { useNavigate } from "react-router-dom"

const MainPage = () => {
    const navigate = useNavigate()
    return <div>
        <h1>Pomodoro UL</h1>
        <div className="row">
            <div className="col-md-4">
                <MenuOpciones />
            </div>
            <div className="col-md-8">
                <ListaProyectos />
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