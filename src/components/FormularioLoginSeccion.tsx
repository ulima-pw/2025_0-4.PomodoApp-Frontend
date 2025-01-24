const FormularioLoginSeccion = () => {
    return <form>
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
}

export default FormularioLoginSeccion