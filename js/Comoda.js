class Comoda extends Mueble{
    constructor(tipoMueble, cantidadCajones){
        super(altura, ancho, profundidad)
        this.tipoMueble = 'comoda'
        this.cantidadCajones = cantidadCajones
    }

    getInputs() {    
        // solo cajones
        const bloqueCajones = document.querySelector(".cantidad-cajones")
        const imputCajones = document.querySelector("#cantidad-cajones")

        imputCajones.addEventListener('input', (e) => {
            const cantidadCajones = parseInt(e.target.value) 
            muebleSeleccionado.cantidadCajones = cantidadCajones
        })

        return {}
    }

    specs() {
        return `
            <div>
                Cantidad de cajones: ${this.cantidadCajones}
            </div>
        `
    }
}