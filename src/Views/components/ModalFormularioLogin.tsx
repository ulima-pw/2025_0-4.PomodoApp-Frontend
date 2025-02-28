interface ModalFormularioLoginProps {
    showModal : boolean;
    closeModal : () => void
}

const ModalFormularioLogin = (props : ModalFormularioLoginProps) => {
    return <div className={ props.showModal == true ? "modal fade show d-block" : "modal fade" } >
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Error</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Login y/o password incorrecto.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" 
                        className="btn btn-secondary"
                        onClick={ () =>  {
                            props.closeModal()
                        } }>
                        Cerrar
                    </button>

                </div>
            </div>
        </div>
    </div>
}

export default ModalFormularioLogin