import { useNavigate } from "react-router-dom"
import MenuOpciones from "../components/MenuOpciones"
import Footer from "../components/Footer"
import ListadoProyectos, { ListadoProyectosItem } from "../components/ListadoProyectos"
import { useEffect, useState } from "react"
import ModalFormularioProyecto from "../components/ModalFormularioProyecto"

const MainPage = () => {
    const [proyectos, setProyectos] = useState<ListadoProyectosItem[]>([])
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

    useEffect( ()=> {
        httpObtenerProyectos()
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
                    onOpenModal={ openModalProyecto }/>
            </div>
        </div>
        <Footer />
        <ModalFormularioProyecto showModal={ showModalProyecto }
            onCloseModal={ closeModalProyecto }
            onGuardarProyecto={ (nombre : string, categoriaId : number) => {
                httpGuardarProyecto(nombre, categoriaId)
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