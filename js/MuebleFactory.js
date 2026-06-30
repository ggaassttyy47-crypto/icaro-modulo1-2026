class MuebleFactory {
    static #registry = {
        'biblioteca' : new Biblioteca,
        'placard' : new Placard,
        'comoda' : new Comoda,
    }

    static make(name) {
        if (this.#registry[name]) {
            return this.#registry[name];
        }

        throw new Error('El tipo de mueble es desconocido.')
    }
}