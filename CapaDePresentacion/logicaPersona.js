// Para obtener referencias a elemento en el DOM (Document Object Model)
const formPersona = document.getElementById('formPersona');// Formulario para registrar personas
const personaSelect = document.getElementById('personaSelect');// Select conde se listaran las personas
const empresaS = document.getElementById('empresaSelect');// Select de empresas

//Escuchar evento 'submit' del formulario
formPersona.addEventListener('submit', (e) => {
    e.preventDefault();// Evita que la página se recargue en el formulario  

    //Para obtener valores ingresados por el usuario
    const nombre = document.getElementById('nombrePersona').value;
    const apellido = document.getElementById('apellidoPersona').value;
    const empresaId = parseInt(empresaS.value);// Convierte el id de la empresa a número
    console.log({ nombre, apellido, empresaId });// Ver valores en la consola

    // Registrar la persona usando el método de la clase gestionarPersonas  
    const persona = gestionarPersonas.registrarPersona(nombre, apellido, empresaId);

    // Para agregar persona al select creando un nuevo <option>
    const option = document.createElement('option');
    option.value = persona.id;// Asignar el id de la persona como valor
    option.text = `${persona.nombre} ${persona.apellido}`; // Mostrar nombre completo
    personaSelect.appendChild(option);// Agrehgar la nueva opcion al select

    //Limpiar el formulario para permitir un nuevo registro
    formPersona.reset();

});