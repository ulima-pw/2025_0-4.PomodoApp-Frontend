import { useNavigate } from "react-router-dom"
import MenuOpciones from "../components/MenuOpciones"
import Footer from "../components/Footer"
import ListadoProyectos, { ListadoProyectosItem } from "../components/ListadoProyectos"
import { useEffect, useState } from "react"
import ModalFormularioProyecto, { Categoria } from "../components/ModalFormularioProyecto"

const MainPage = () => {
    const [proyectos, setProyectos] = useState<ListadoProyectosItem[]>([])
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [showModalProyecto , setShowModalProyecto] = useState<boolean>(false)

    const httpGuardarProyecto = async (nombreProyecto : string, categoriaId : number) => {
        const url = "http://localhost:5000/proyectos"
        const resp = await fetch(url, {
            method : "POST",
            body : JSON.stringify({
                nombre : nombreProyecto,
                categoria : categoriaId
            }),
            headers : {
                "Content-Type": "application/json",
            }
        })
        const data = await resp.json()
        if (data.msg == "") {
            closeModalProyecto()
        }
    }

    const httpObtenerProyectos = async () => {
        const url = "http://localhost:5000/proyectos"
        const resp = await fetch(url)
        const data = await resp.json()
        if (data.msg == "") {
            const listaProyectos = data.proyectos
            setProyectos(listaProyectos)
            console.log(listaProyectos)
        }else {
            console.error(`Error al obtener proyectos: ${data.msg}`)
        }
    }

    const httpObtenerCategorias = async () => {
        const url = "http://localhost:5000/categorias"
        const resp = await fetch(url)
        const data = await resp.json()
        if (data.msg == "") {
            const listaCategorias = data.categorias
            setCategorias(listaCategorias)
        }else {
            console.error(`Error al obtener categorias: ${data.msg}`)
        }
    }

    const httpEliminarProyecto = async (id : number) => {
        const url = "http://localhost:5000/proyectos?id=" + id
        const resp = await fetch(url, {
            method : "DELETE"
        })
        const data = await resp.json()
        if (data.msg == "") {
            httpObtenerProyectos()
        }else {
            console.error(`Error al eliminar un Proyecto: ${data.msg}`)
        }
    }

    useEffect( ()=> {
        httpObtenerProyectos()
        httpObtenerCategorias()
    },[])

    const openModalProyecto = () => {
        setShowModalProyecto(true)
    }

    const closeModalProyecto = () => {
        setShowModalProyecto(false)
    }   
    
    /*const promesa = fetch(url)
    promesa.then( (resp : Response)=>{
        // Promesa exitosa
        const promesaResp = resp.json()
        promesaResp.then( (listaProyectos : any) => {
            // PromesaResp exitosa
            console.log("Respuesta:", listaProyectos)
        } ).catch( () => {
            // PromesaResp no cumplida
            console.error("Error en promesaResp")
        })
    } ).catch( () => {
        // Promesa no cumplida
        console.error("Error en fetch")
    } )*/

    const navigate = useNavigate()

    return <div className="container">
        <h1>Pomodoro UL</h1>
        <div className="row mb-4">
            <div className="col-md-3">
                <MenuOpciones />
            </div>
            <div className="col-md-9">
                <ListadoProyectos data={ proyectos }
                    onOpenModal={ openModalProyecto }
                    onEliminar={  async (id : number) => {
                        await httpEliminarProyecto(id)
                    }}/>
            </div>
        </div>
        <Footer />
        <ModalFormularioProyecto showModal={ showModalProyecto }
            categorias={ categorias }
            onCloseModal={ closeModalProyecto }
            onGuardarProyecto={ async (nombre : string, categoriaId : number) => {
                await httpGuardarProyecto(nombre, categoriaId)
                await httpObtenerProyectos()
            }} />

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