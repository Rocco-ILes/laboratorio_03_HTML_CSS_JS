class GestionarPersonas {
    /*
    El constructor recibe una nueva dependencia: gestionarEmpresas,
    que permite a un objeto trabajar con empresas (eje: buscarEmpresa).
    Esto permite validar el registro de una persona siempre y cuando exista
    la empresa a la que pertenece la persona.
    */
    constructor(repo, gestionarEmpresas) {
        this.repo = repo;
        this.gestionarEmpresas = gestionarEmpresas;
    }

    registrarPersona(nombre, apellido, empresaId) {
        // Aquí se obtiene un id único desde el repositorio
        const id = this.repo.siguienteId();

        // Busca si existe la empresa a la que se le quiere asociar la persona
        const empresa = this.gestionarEmpresas.buscarEmpresa(empresaId);

        // Si la empresa no existe, se lanza un error
        if (!empresa) {
            throw new Error('La empresa no existe');
        }

        // Se crea un nuevo objeto persona
        const persona = new Persona(id, nombre, apellido, empresa);

        // Se guarda la persona en el repositorio
        this.repo.agregar(persona);
        return persona;
    }

    //Lista todas las personas registradas en el repositorio.
    listarPersonas() {
        return this.repo.obtenerTodas();
    }

    // Busca una persona por su ID.
    buscarPersona(id) {
        return this.repo.buscarPorId(id);
    }
}

/* Se crea una instancia de la clase GestionarPersonas pasando como
dependencias el repositorio de personas y gestor de empresas.*/
const gestionarPersonas = new GestionarPersonas(personaRepo, gestionarEmpresas);
