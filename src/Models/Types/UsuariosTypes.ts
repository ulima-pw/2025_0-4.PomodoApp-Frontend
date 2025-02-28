export interface UsuarioType {
    nombre : string
    username : string
    password? : string
    estado : boolean
}

export interface LoginRequestType {
    usuario : string
    password : string
}

export interface LoginResponseType {
    msg : string
    usuario? : UsuarioType
}