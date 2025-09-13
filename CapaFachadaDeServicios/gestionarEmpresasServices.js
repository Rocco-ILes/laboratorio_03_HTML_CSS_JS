// Clase que se encarga de la lógica para gestionar las empresas
class GestionarEmpresas {
    /*
    El constructor recibe como parametro un repositorio de empresas.
    Ese  repositorio es el que guarda, busca y lista las empresas
    */
    constructor(repo) {
        this.repo = repo;// Guardamos el repositorio en la propiedad 'repo'
    }

    // Método para registrar una nueva empresa
    registrarEmpresa(nombre, direccion, nit) {
        // Se pide al repositorio el siguiente ID disponible
        const idEmpresa = this.repo.siguienteEmpresaId();

        // Se instancia un objeto de tipo Empresa
        const empresa = new Empresa(idEmpresa, nombre, direccion, nit);

        // Se guarda la  empresa en el repositorio
        this.repo.agregarEmpresa(empresa);

        // Retornamos la cuenta recién creada
        return empresa;

    }

    // Método para obtener todas las empresas  registradas
    listarEmpresas() {
        return this.repo.obtenerEmpresasTodas();

    }

    // Método para buscar una empresa específica mediante su ID
    buscarEmpresa(id) {
        return this.repo.buscarEmpresaId(id);
    }
}
/*
Se crea una instancia de la clase, pasando como parámetro
el repositorio de de empresas
*/
const gestionarEmpresas = new GestionarEmpresas(empresaRepo);