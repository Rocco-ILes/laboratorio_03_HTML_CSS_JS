class GestionarCuentas {
    constructor(repo, gestionarPersonas) {
        this.repo = repo;
        this.gestionarPersonas = gestionarPersonas;

    }

    registrarCuenta(numeroCuenta, saldo, tipo, personaId) {
        const persona = this.gestionarPersonas.buscarPersona(personaId);
        if (!persona) {
            throw new Error('La persona no existe');
        }
        const cuenta = new Cuenta(numeroCuenta, saldo, tipo, persona);
        this.repo.agregar(cuenta);
        return cuenta;
    }

    listarCuentas() {
        return this.repo.obtenerTodas();
    }

    /* NUEVOS MÉTODOS IMPLEMENTADOS */

    /*
    Devuelve el número total de cuentas registradas.
    Se apoya en el método cantidadCuentas() del repositorio.
    */
    numeroCuentas() {
        return this.repo.cantidadCuentas();
    }

    /*
    Devuelve cuántas cuentas existen según su tipo ("ahorros" o "corriente").
    Se apoya en el método cantidadCuentasTipo(tipo) del repositorio.
    */
    numeroCuentasTipo(tipo) {
        return this.repo.cantidadCuentasTipo(tipo);

    }

    /*
    Calcula el valor total de dinero que tiene las cuentas de un tipo específico
    (todas las cuentas de "Ahorros" o todas las cuentas "Corriente")
    Se apoya en el método valorTotalPorTipo(tipo) del repositorio.
    */
    totalMontoTipo(tipo) {
        return this.repo.valorTotalPorTipo(tipo);
    }

    /*
    Calcula el saldo promedio de todas las cuentas registradas.
    Se apoya en el método saldoTotalPromedio() del repositorio.
    */
    saldoPromedio() {
        return this.repo.saldoTotalPromedio();
    }
}

const gestionarCuentas = new GestionarCuentas(cuentaRepo, gestionarPersonas);






