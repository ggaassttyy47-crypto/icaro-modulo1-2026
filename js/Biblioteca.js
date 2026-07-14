class Biblioteca extends Mueble{ 
    constructor(tipoMueble, cantidadEstantes){
        super(altura, ancho, profundidad)
        this.tipoMueble = 'biblioteca'
        this.cantidadEstantes = cantidadEstantes
    }

    getInputs() {
        // medidas y tipo de madera - todos los muebles
        const inputAltura = document.querySelector("#altura")
        const inputAncho = document.querySelector("#ancho")
        const inputProfundidad = document.querySelector("#profundidad")
        const selectorMadera = document.querySelector("#tipo-de-madera")
        // solo estantes
        const bloqueEstantes = document.querySelector(".cantidad-estantes")
        const imputEstantes = document.querySelector("#cantidad-estantes")

        imputEstantes.addEventListener('input', (e) => {
            const cantidadEstantes = parseInt(e.target.value)
            this.cantidadEstantes = cantidadEstantes
        })

        return {
            altura : inputAltura,
            ancho : inputAncho,
            profundidad : inputProfundidad,
            madera : selectorMadera,
            estantes : imputEstantes,
        }
    }

    specs() {
        return `
            <div>
                Cantidad de estantes: ${this.cantidadEstantes}
            </div>
        `
    }
}