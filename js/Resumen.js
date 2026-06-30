/* const resumenTipo = document.querySelector("#resumen-tipo")
const resumenAltura = document.querySelector("#resumen-altura")
const resumenAncho = document.querySelector("#resumen-ancho")
const resumenProfundidad = document.querySelector("#resumen-profundidad")
const resumenMadera = document.querySelector("#resumen-madera")
const resumenCantidad = document.querySelector("#resumen-cantidad")
const resumenPrecio = document.querySelector("#resumen-precio") */

class Resumen {
    constructor(mueble) {
        if (!(mueble instanceof Mueble)) {
            throw new Error('Se requiere una instancia de la clase Mueble');
        }

        this.mueble = mueble;
    }

    render() {
        return `
            <div>Altura: ${this.mueble.altura.value}</div>
            <div>Ancho: ${this.mueble.ancho.value}</div>
            <div>Profundidad: ${this.mueble.profundidad.value}</div>
            <div>Tipo de madera: ${this.mueble.tipoDeMadera.value}</div>
            <div>Tipo de mueble: ${this.mueble.tipoMueble.value}</div>

            ${this.mueble.specs()}
        `
    }
}
