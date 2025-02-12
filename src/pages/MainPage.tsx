import { useNavigate } from "react-router-dom"
import MenuOpciones from "../components/MenuOpciones"
import Footer from "../components/Footer"
import ListadoProyectos, { ListadoProyectosItem } from "../components/ListadoProyectos"
import { useEffect, useState } from "react"

const MainPage = () => {
    const [proyectos, setProyectos] = useState<ListadoProyectosItem[]>([])

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
                <ListadoProyectos data={ proyectos }/>
            </div>
        </div>
        <Footer />

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