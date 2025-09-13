
/*
Esta función ermite conducir la lógica para mostrar las estadísticas
de las cuentas registradas.
 */
function RenovarEstadistico() {
    /*
    1. Busca el <div> donde se mostrarán las estadísticas. Este <div> ya esta 
    ubicado en el archivo index.html y tiene el id= "estadisticas"*/
    const cantidadCuentas = document.getElementById('estadisticas');
    if (!cantidadCuentas) return; // Si no existe salir.

    /*
    2. Limpia antes de actualizar lo que tenga el <div>. Evita que los 
    datos se acumulen cada vez que se llama a la función.
    */
    cantidadCuentas.innerHTML = "";
    /*
    3. Se obtiene las estadísticas a partir del servicio gestionCuentas.
    Las funciónes ya están ubicadas en la capa de servicio.
    -numeroCuentas(): Devuelve cuentas cuentas hay en total.
    -numeroCuentasTipo("Ahorros"): Devuelve cuantas cuentas son de "Ahorros".
    -numeroCuentasTipo("Corriente"): Devueve cuantas cuentas son de "Corriente"
    -totalMontoTipo("Ahorros"): Devuelve la suma de todos los saldos de todas las cuentas de ahorro.
    -totalMontoTipo("Ahorros"): Devuelve la suma de todos los saldos de todas las cuentas corrientes.
    -saldoPromedio():Se obtiene el promedio de todos los saldos de las cuentas.
    */
    const totalCuentas = gestionarCuentas.numeroCuentas();
    const totalCuentasAhorro = gestionarCuentas.numeroCuentasTipo("Ahorros");
    const totalCuentasCorriente = gestionarCuentas.numeroCuentasTipo("Corriente");
    const saldoAhorros = gestionarCuentas.totalMontoTipo("Ahorros");
    const saldoCorriente = gestionarCuentas.totalMontoTipo("Corriente");
    const saldoPromedioTotal = gestionarCuentas.saldoPromedio();


    /***MUESTRA ESTADÍSTICAS***/

    // 4. Crear un <div> para mostrar el total de cuentas.
    const divTotal = document.createElement('div');// Creación de un <div>
    divTotal.textContent = " Total de cuentas:" + totalCuentas;// Le ponemos texto
    cantidadCuentas.appendChild(divTotal);;// Lo agregamos dentro del conten

    // 5.  Crear un <div> para mostrar la cantidad de cuentas de "Ahorros".
    if (totalCuentasAhorro > 0) {
        const divAhorros = document.createElement('div');
        divAhorros.textContent = "Cuentas de Ahorro: " + totalCuentasAhorro;
        cantidadCuentas.appendChild(divAhorros);
    }

    // 6. Crear un <div> para mostrar la cantidad de cuentas "Corriente".
    if (totalCuentasCorriente > 0) {
        const divCorriente = document.createElement('div');
        divCorriente.textContent = "Cuentas Corriente: " + totalCuentasCorriente;
        cantidadCuentas.appendChild(divCorriente);
    }

    // 7. Crear un <div> para mostrar el SALDO total de las cuentas de "Ahorros".
    const divSaldoAhorros = document.createElement('div');
    divSaldoAhorros.textContent = " Saldo cuentas Ahorro: " + saldoAhorros;
    cantidadCuentas.appendChild(divSaldoAhorros);

    // 8. Crear un <div> para mostrar saldo total de cuentas "Corriente".
    const divSaldoCorriente = document.createElement('div');
    divSaldoCorriente.textContent = " Saldo cuentas Corriente: " + saldoCorriente;
    cantidadCuentas.appendChild(divSaldoCorriente);

    // 9. Crear un <div> para mostrar el promedio de  los saldos de todas la cuentas.
    const divSaldoPromedioTotal = document.createElement('div');
    divSaldoPromedioTotal.textContent = " Promedio saldo cuentas: " + saldoPromedioTotal;
    cantidadCuentas.appendChild(divSaldoPromedioTotal);

}
