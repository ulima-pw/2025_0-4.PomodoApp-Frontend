import { useState } from "react"

interface ModalFormularioProyectoProps {
    showModal : boolean
    onCloseModal : () => void
    onGuardarProyecto : (nombre: string, categoriaId : number) => void
}

const ModalFormularioProyecto = (props : ModalFormularioProyectoProps) => {
    const [nombreProyecto, setNombreProyecto] = useState<string>("")
    const [categoriaId, setCategoriaId] = useState<number>(0)

    const nombreProyectoChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNombreProyecto(e.target.value)
    }

    const categoriaIdChangeHandler = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setCategoriaId(parseInt(e.target.value))
    }

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
                                <input className="form-control" type="text"
                                    value={ nombreProyecto }
                                    onChange={ nombreProyectoChangeHandler } />
                            </div>
                            <div>
                                <label className="form-label">Categoria:</label>
                                <select className="form-select"
                                    value={categoriaId}
                                    onChange={ categoriaIdChangeHandler }>
                                    <option value={0}>----- Seleccionar -----</option>
                                    <option value={1}>ULima</option>
                                    <option value={2}>Personal</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success"
                        onClick={ () => {
                            props.onGuardarProyecto(nombreProyecto, categoriaId)
                        }}>
                            Guardar
                        </button>
                        <button type="button" className="btn btn-danger"
                            onClick={ ()=> {
                                props.onCloseModal()
                            }}>
                            Cerrar
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModalFormularioProyecto