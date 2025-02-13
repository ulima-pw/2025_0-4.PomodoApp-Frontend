interface ModalFormularioProyectoProps {
    showModal : boolean
}

const ModalFormularioProyecto = (props : ModalFormularioProyectoProps) => {
    return (
        <div className={ props.showModal ? "modal fade show d-block" : "modal fade" }>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4>
                            Crear Proyecto
                        </h4>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div>
                                <label className="form-label">Nombre:</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div>
                                <label className="form-label">Categoria:</label>
                                <select className="form-select">
                                    <option value={0}>----- Seleccionar -----</option>
                                    <option value={1}>ULima</option>
                                    <option value={2}>Personal</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success">
                            Guardar
                        </button>
                        <button type="button" className="btn btn-danger">
                            Cerrar
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModalFormularioProyecto