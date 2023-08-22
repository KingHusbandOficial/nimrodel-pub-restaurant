//Mostrar y ocultar formularios comunícate y reserva.
const comunicaBtn = document.querySelector('#comunicate-btn');
const reservaBtn = document.querySelector('#reserva-btn');
const comunicaForm = document.querySelector('#comunicate');
const cerrarComunicaBtn = document.querySelector('#cerrar_comunicate-btn');
const reservaForm = document.querySelector('#reserva');
const cerrarReservaBtn = document.querySelector('#cerrar_reserva-btn');

//Inputs formulario comunícate
const comunicaNombre = document.querySelector('#comunicaNombre');
const comunicaCorreo = document.querySelector('#comunicaCorreo');
const comunicaTlf = document.querySelector('#comunicaTelefono');
const comunicaMotivo = document.querySelector('#comunicaMotivo');
const comunicaMensaje = document.querySelector('#comunicaMensaje');

//Inputs formulario reserva
const reservaNombre = document.querySelector('#reservaNombre');
const reservaCorreo = document.querySelector('#reservaCorreo');
const reservaTlf = document.querySelector('#reservaTelefono');
const reservaFecha = document.querySelector('#reservaFecha');
const reservaHora = document.querySelector('#reservaHora');
const reservaPresentes = document.querySelector('#reservaPresentes');

//Botones enviar comunícate y reserva
const comunicaEnviar = document.querySelector('#comunicateEnviar');
const reservaEnviar = document.querySelector('#reservaEnviar');

//Mostrar formularios
comunicaBtn.addEventListener('click', function () {
	comunicaForm.setAttribute(
		'class',
		'd-block d-lg-inline-block col-lg-9 col-xl-6 col-xxl-6 text-white text-center bg-dark px-4 py-2 my-3 rounded'
	);
});

reservaBtn.addEventListener('click', function () {
	reservaForm.setAttribute(
		'class',
		'd-block d-lg-inline-block col-lg-9 col-xl-6 col-xxl-6 text-white text-center bg-dark px-4 py-2 my-3 rounded'
	);
});

//Ocultar formularios
cerrarComunicaBtn.addEventListener('click', function () {
	comunicaForm.setAttribute(
		'class',
		'd-none d-lg-inline-block col-lg-9 col-xl-6 col-xxl-6 text-white text-center bg-dark p-2 m-3 rounded px-5'
	);
});

cerrarReservaBtn.addEventListener('click', function () {
	reservaForm.setAttribute(
		'class',
		'd-none d-lg-inline-block col-lg-9 col-xl-6 col-xxl-6 text-white text-center bg-dark p-2 m-3 rounded px-5'
	);
});

//Evento submit depara formulario comunícate
comunicaEnviar.addEventListener('click', function (event) {
	event.preventDefault();
	if (comunicaNombre.value === '') {
		alert(`Debes llenar el campo "Nombre" para poder enviar la información.`);
	} else if (comunicaCorreo.value === '') {
		alert(`Debes llenar el campo "Correo" para poder enviar la información.`);
	} else if (comunicaTlf.value === '') {
		alert(`Debes llenar el campo "Número de teléfono" para poder enviar la información.`);
	} else {
		alert(
			`Muchas gracias, ${comunicaNombre.value}. Hemos recibido su sugerencia. Enviaremos una pronta respuesta al correo ${comunicaCorreo.value}.`
		);
		comunicaForm.reset();
	}
});

//Evento submit para formulario reserva
reservaEnviar.addEventListener('click', function (event) {
	event.preventDefault();
	if (reservaNombre.value === '') {
		alert(`Debes llenar el campo "Nombre" para poder enviar la información.`);
	} else if (reservaCorreo.value === '') {
		alert(`Debes llenar el campo "Correo" para poder enviar la información.`);
	} else if (reservaTlf.value === '') {
		alert(`Debes llenar el campo "Número de teléfono" para poder enviar la información.`);
	} else if (reservaFecha.value === '') {
		alert(`Debes llenar el campo "Fecha" para poder enviar la información.`);
	} else if (reservaHora.value === '') {
		alert(`Debes llenar el campo "Hora" para poder enviar la información.`);
	} else if (reservaPresentes.value === '') {
		alert(`Debes llenar el campo "Cantidad de asistentes" para poder enviar la información.`);
	} else {
		alert(
			`Muchas gracias, ${reservaNombre.value}. Hemos recibido su solicitud para reservar. Enviaremos una pronta respuesta al correo ${reservaCorreo.value}, donde le indicaremos todos los detalles.`
		);
		reservaForm.reset();
	}
});
