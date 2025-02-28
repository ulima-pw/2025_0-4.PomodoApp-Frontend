import { URL_BACKEND } from "../../config"
import { LoginRequestType, LoginResponseType } from "../Types/UsuariosTypes"

export const login = async (userData : LoginRequestType) : Promise<LoginResponseType> => {
    const resp = await fetch(URL_BACKEND + "/usuarios/login", {
        method : "POST",
        body : JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        }
    })
    const data = await resp.json()
    return data
}
