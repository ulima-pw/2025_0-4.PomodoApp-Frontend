const URL_BACKEND = import.meta.env.VITE_URL_BACKEND || "http://localhost:5000"

const TitulosSeccion = () => {
    return <>
        <h1>PomodoroApp</h1>
        <h2>Login</h2>
        <img
            style={{ width: "100%" }} 
            src= {URL_BACKEND + "/logo.png"} />
    </>
}

export default TitulosSeccion