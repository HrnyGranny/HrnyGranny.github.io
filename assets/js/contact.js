$(document).ready(function () {
    $('#contact').submit(function (e) {
        e.preventDefault();

        var nombre = $('#name').val();
        var correo = $('#email').val();
        var asunto = $('#subject').val();
        var mensaje = $('#message').val();

        // Función de validación
        if (!validarCampos(nombre, correo, asunto, mensaje)) {
            return;
        } else {
            Swal.fire({
                position: 'bottom-end',
                icon: 'success',
                title: '¡Correo enviado!',
                showConfirmButton: false,
                timer: 1500,
                toast: true
            });
            this.submit();
        }

        // Función de validación para los campos del formulario
        function validarCampos(nombre, correo, asunto, mensaje) {
            // Validar campos vacíos
            if (nombre === '' || correo === '' || asunto === '' || mensaje === '') {
                Swal.fire({
                    position: 'bottom-end',
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, completa todos los campos.',
                    showConfirmButton: false,
                    timer: 3000,
                    toast: true
                });
                return false;
            }

            // Validar correo electrónico
            if (!validarCorreo(correo)) {
                Swal.fire({
                    position: 'bottom-end',
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, ingresa un correo electrónico válido.',
                    showConfirmButton: false,
                    timer: 3000,
                    toast: true
                });
                return false;
            }

            // Validar nombre y mensaje (permitir solo espacios cuando se ingrese texto)
            if (nombre.trim() === '' || mensaje.trim() === '' || asunto.trim() === '') {
                Swal.fire({
                    position: 'bottom-end',
                    icon: 'error',
                    title: 'Error',
                    text: 'Los campos no pueden tener espacios antes de ingresar el texto.',
                    showConfirmButton: false,
                    timer: 3000,
                    toast: true
                });
                return false;
            }

            return true;
        }

        // Función para validar el formato de correo electrónico
        function validarCorreo(correo) {
            // Expresión regular para validar correo electrónico
            var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return expresion.test(correo);
        }
    });
});