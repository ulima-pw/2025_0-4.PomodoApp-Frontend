import { Categoria } from "./ModalFormularioProyecto";

export interface ListadoProyectosItem {
    id : number;
    nombre : string;
    nro_pom : number;
    categoriaId : number;
    categoria : Categoria
    status : string; // TODO: number
}

interface ListadoProyectosProps {
    data : ListadoProyectosItem[]
    onOpenModal : () => void
}

const ListadoProyectos = (props : ListadoProyectosProps) => {
    return <>
        <h2>
            Proyectos
            <button type="button"
                    className="btn btn-primary"
                    onClick={ () => {
                        props.onOpenModal()
                    } }>
                +
            </button>
        </h2>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Nro Pom</th>
                    <th>Categoría</th>
                    <th>Status</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((proyecto : ListadoProyectosItem) => {
                        return <tr>
                            <td>{ proyecto.id }</td>
                            <td>{ proyecto.nombre }</td>
                            <td>{ proyecto.nro_pom }</td>
                            <td>
                                { 
                                    proyecto.categoria != null 
                                        ? proyecto.categoria.nombre 
                                        : "-"
                                }
                            </td>
                            <td>{ proyecto.status }</td>
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
                    })
                }
            </tbody>
        </table>
    </>
}

export default ListadoProyectos