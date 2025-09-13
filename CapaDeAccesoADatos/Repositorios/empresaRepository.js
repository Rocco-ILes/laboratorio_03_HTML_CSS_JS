/*
Clase que actúa como "repositorio" para alamacenar y gestionar
obsjetos Empresa
*/
class EmpresaRepository {
    constructor() {
        // Inicializa un arreglo vacío que contendrá las empresas
        this.empresas = [];
    }

    // Método que agrega una empresa al repositorio.
    agregarEmpresa(empresa) {
        this.empresas.push(empresa);
    }

    // Método que devuelve todas las empresas almacenadas en el repositorio
    obtenerEmpresasTodas() {
        return this.empresas;
    }

    /*
    Método que busca a una empresa según su ID
    Parámetro: id (número o string que identifica la empresa)
    */
    buscarEmpresaId(id) {
        // Devuelve el objeto empresa encontrado, o undefined si no existe
        return this.empresas.find(empresa => empresa.id === id);

    }

    //Métoso que genera el siguiente ID para una nueva empresa 
    siguienteEmpresaId() {
        // Devuelve la longitud actual del arreglo + 1
        return this.empresas.length + 1;
    }

}
const empresaRepo = new EmpresaRepository();
