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
        }else{
            // Acción POST para enviar el correo electrónico
          $.ajax({
            type: 'POST',
            url: 'https://formsubmit.co/alvaroruizroldan@gmail.com',
            data: {
              name: nombre,
              email: correo,
              subject: asunto,
              message: mensaje
            },
            success: function (response) {
              // Acciones después de enviar el correo exitosamente
              alert('¡Correo enviado!');
              // Puedes realizar otras acciones, redireccionar, etc.
            },
            error: function (error) {
              // Manejo de errores si la solicitud falla
              alert('Error al enviar el correo.');
            }
          });
        }

        // Función de validación para los campos del formulario
        function validarCampos(nombre, correo, asunto, mensaje) {
            // Validar campos vacíos
            if (nombre === '' || correo === '' || asunto === '' || mensaje === '') {
                alert('Por favor, completa todos los campos.');
                return false;
            }

            // Validar correo electrónico
            if (!validarCorreo(correo)) {
                alert('Por favor, ingresa un correo electrónico válido');
                return false;
            }
            // Validar nombre y mensaje (permitir solo espacios cuando se ingrese texto)
            if (nombre.trim() === '' || mensaje.trim() === '' || asunto.trim() === '') {
                alert('Los campos no pueden tener espacios antes de ingresar el texto.');
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
