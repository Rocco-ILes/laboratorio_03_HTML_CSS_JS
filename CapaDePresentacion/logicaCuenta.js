const formCuenta = document.getElementById('formCuenta');
const tablaCuentas = document.getElementById('tablaCuentas');


formCuenta.addEventListener('submit', (e) => {
    e.preventDefault();
    const numeroCuenta = document.getElementById('numeroCuenta').value;
    const saldo = parseFloat(document.getElementById('saldoCuenta').value);
    const tipo = document.getElementById('tipo').value;
    const personaId = parseInt(personaSelect.value);


    console.log({ numeroCuenta, saldo, tipo, personaId });

    try {
        const cuenta = gestionarCuentas.registrarCuenta(numeroCuenta, saldo, tipo, personaId);

        //mostrar en la tabla

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${cuenta.numeroCuenta}</td>
            <td>${cuenta.saldo}</td>
            <td>${cuenta.tipo}</td>
            <td>${cuenta.persona.nombre} ${cuenta.persona.apellido}</td>
            <td>${cuenta.persona.empresa.nombre}
        `;
        tablaCuentas.appendChild(fila);
        formCuenta.reset();

    } catch (error) {
        alert(error.message);
    }
    //Actualiza las estadísticas en la página (número total de cuentas, saldo total de cuentas, etc.)
    RenovarEstadistico();
});