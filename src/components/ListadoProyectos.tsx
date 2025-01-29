
interface ListadoProyectosItem {
    id : number;
    nombre : string;
    nroPom : number;
    status : string; // TODO: number
}

interface ListadoProyectosProps {
    data : ListadoProyectosItem[]
}

const ListadoProyectos = (props : ListadoProyectosProps) => {
    return <>
        <h2>
            Proyectos
            <button type="button"
                    className="btn btn-primary">
                +
            </button>
        </h2>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Nro Pom</th>
                    <th>Status</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Proy 1</td>
                    <td>1</td>
                    <td>Iniciado</td>
                    <td>
                        <button type="button"
                                className="btn btn-primary me-2">
                            I
                        </button>
                        <button type="button"
                                className="btn btn-primary">
                            E
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Proy 1</td>
                    <td>1</td>
                    <td>Iniciado</td>
                    <td>
                        <button type="button"
                                className="btn btn-primary me-2">
                            I
                        </button>
                        <button type="button"
                                className="btn btn-primary">
                            E
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
}

export default ListadoProyectos