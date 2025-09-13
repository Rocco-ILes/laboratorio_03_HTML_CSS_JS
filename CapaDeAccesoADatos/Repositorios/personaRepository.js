class PersonaRepository {
    constructor() {
        this.personas = [];
    }

    agregar(persona) {
        this.personas.push(persona);
    }

    obtenerTodas() {
        return this.personas;
    }

    buscarPorId(id) {
        return this.personas.find(persona => persona.id === id);
    }

    siguienteId() {
        return this.personas.length + 1;
    }
}

const personaRepo = new PersonaRepository();
