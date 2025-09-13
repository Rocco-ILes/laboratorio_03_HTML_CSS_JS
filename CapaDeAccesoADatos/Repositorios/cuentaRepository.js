class CuentaRepository {
    constructor() {
        this.cuentas = [];
    }

    agregar(cuenta) {
        this.cuentas.push(cuenta);
    }

    obtenerTodas() {
        return this.cuentas;
    }

    /* NUEVOS MÉTODOS IMPLEMENTADOS */

    // Método que devuelve la cantidad de cuentas registradas en el repositorio.
    cantidadCuentas() {
        return this.cuentas.length;// retorna la longitud del array "cuentas"
    }

    // Método que obtiene la cantidad de cuentas segun tipo ("Ahorros" o "Corriente")
    cantidadCuentasTipo(tipo) {
        //Filtra las cuentas por tipo y devuelve la cantidad encontrada
        return this.cuentas.filter(cuenta => cuenta.tipo === tipo).length;
    }

    // Método que calcula el valor total de los saldos de las cuentas según su tipo
    valorTotalPorTipo(tipo) {
        let total = 0;
        for (let i = 0; i < this.cuentas.length; i++) {
            if (this.cuentas[i].tipo === tipo) {
                total += this.cuentas[i].saldo;
            }
        }
        return total;//Devuelve la suma total
    }

    // Método que calcula el promedio de los saldos de todas la cuentas
    saldoTotalPromedio() {
        if (this.cuentas.length === 0) {
            return 0;
        }

        let suma = 0;
        /*
        for (const cuenta of this.cuentas) {
            suma += this.cuentas.saldo;// Acumula el saldo de cada cuenta
        }

        let promedio = suma / this.cuentas.length;// Devuelve el promedio de los saldos acumulados de las cuentas
        return promedio;
        */
       // Recorre todas la cuentas registradas
        for (const cuenta of this.cuentas) {
            /*
            Alternativa usando cuenta.saldo por si viene como string,
            es decir, convertimos el saldo a número, usando 0 como valor
            por defecto.
            */
            const monto = Number(cuenta.saldo) || 0;
            suma += monto;
        }
        // Devuelve el pomedio = suma de saldos / cantidad de cuentas
        return suma / this.cuentas.length;
    }
}

const cuentaRepo = new CuentaRepository();
