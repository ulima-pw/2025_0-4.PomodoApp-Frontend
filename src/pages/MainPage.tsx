import { useNavigate } from "react-router-dom"

const MainPage = () => {
    const navigate = useNavigate()
    return <div>
        <h1>MainPage</h1>
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