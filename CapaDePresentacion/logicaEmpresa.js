const formEmpresa = document.getElementById('formEmpresa');
const empresaSelect = document.getElementById('empresaSelect');

formEmpresa.addEventListener('submit', (e) => {

    e.preventDefault();

    const nombre = document.getElementById('nombreEmpresa').value;

    const direccion = document.getElementById('direccion').value;

    const nit = document.getElementById('nit').value;

    console.log({ nombre, direccion, nit })
    const empresa = gestionarEmpresas.registrarEmpresa(nombre, direccion, nit);

    ///Actualizar Select

    const option = document.createElement('option');
    option.value = empresa.id;
    option.text = `${empresa.nombre}`;
    empresaSelect.appendChild(option);

    formEmpresa.reset();
}
);