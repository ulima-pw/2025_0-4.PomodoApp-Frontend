import "./LoginPage.css"

const LoginPage = () => {
    return <div className="row">
        <div className="col"></div>
        <div className="col">
            <h1>PomodoroApp</h1>
            <h2>Login</h2>
            <form>
                <div>
                    <label className="form-label">Usuario:</label>
                    <input className="form-control" type="text" />
                </div>
                <div>
                    <label className="form-label">Password:</label>
                    <input className="form-control" type="password" />
                </div>
                <button id="margen-superior-boton" 
                    className="btn btn-success" 
                    type="button">
                        Ingresar
                </button>
            </form>
        </div>
        <div className="col"></div>
    </div>
}

export default LoginPage