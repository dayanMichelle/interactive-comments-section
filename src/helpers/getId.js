const generarId = () => {
    const numero = Math.random().toString(32).substring(2)
    const fecha = Date.now().toString(32)
    return numero + fecha
}
export default generarId