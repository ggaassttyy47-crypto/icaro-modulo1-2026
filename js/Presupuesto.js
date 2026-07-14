class Presupuesto {
    constructor() {
        // this.deshabilitar()

        // Mueble que seleccionó el usuario
        this.mueble = null;

        // Resumen generado a partir de las selecciones
        this.resumen = null;

        // Dónde se muestra el resumen
        this.resumenPlaceholder = null;

        // Campos del formulario a observar
        this.inputs = {}

        const selectorMueble = document.querySelector(".tipoMueble")

        selectorMueble.addEventListener('change', (e) => {
            this.mueble = MuebleFactory.make(e.target.value);
            this.inputs = this.mueble.getInputs();

            let keys = Object.keys(this.inputs);
            console.log(keys)

            for (let i = 0; i < keys.length; i++) {
                this.inputs[keys[i]].addEventListener('input', (e) => {
                    console.log(e.target.value)
                })
            }

            this.resumen = this.getSummary();
            this.resumenPlaceholder.innerHTML = this.getSummary().render();
        })
    }

    setRenderSummaryElement(el) {
        this.resumenPlaceholder = el;
    }

    // resumen informativo
    getSummary() {
        return new Resumen(this.mueble);
    }

    deshabilitar() {
        inputAltura.disabled = true
        inputAncho.disabled = true
        inputProfundidad.disabled = true
        selectorMadera.disabled = true
    }

    habilitar() {
        inputAltura.disabled = false
        inputAncho.disabled = false
        inputProfundidad.disabled = false
        selectorMadera.disabled = false
    }
}