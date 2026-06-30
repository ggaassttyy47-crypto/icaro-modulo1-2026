class Placard extends Mueble{
    constructor(tipoMueble, cantidadPuertas){
        super(altura, ancho, profundidad)
        this.tipoMueble = 'placard'
        this.cantidadPuertas = cantidadPuertas
    }

    getInputs() {
        // solo puertas
        const bloquePuertas = document.querySelector(".cantidad-puertas")
        const imputPuertas = document.querySelector("#cantidad-puertas")
        
        imputPuertas.addEventListener('input', (e) => {
            const cantidadPuertas = parseInt(e.target.value) 
            muebleSeleccionado.cantidadPuertas = cantidadPuertas
        })

        return {}
    }

    specs() {
        return `
            <div>
                Cantidad de puertas: ${this.cantidadPuertas}
            </div>
        `
    }
}