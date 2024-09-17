let cantidad = document.getElementById('cantidad');
let contrasena = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    if (isNaN(numeroDigitado) || numeroDigitado < 8) {
        contrasena.value = "La cantidad de caracteres tiene que ser mayor que 8";
        mensaje.textContent = "";
    } else {
        let password = '';
        for (let i = 0; i < numeroDigitado; i++) {
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            password += caracterAleatorio;
        }
        contrasena.value = password;

        // Evaluar fortaleza de la contraseña
        evaluarFortaleza(password);
    }
}

function limpiar() {
    contrasena.value = '';
    mensaje.textContent = '';
}

function evaluarFortaleza(password) {
    let longitud = password.length >= 12;
    let tieneMayuscula = /[A-Z]/.test(password);
    let tieneMinuscula = /[a-z]/.test(password);
    let tieneNumero = /[0-9]/.test(password);
    let tieneEspecial = /[!@#$%^&*()]/.test(password);

    if (longitud && tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        mensaje.textContent = "Contraseña Fuerte";
        mensaje.style.color = "green";
    } else if (longitud && (tieneMayuscula || tieneMinuscula) && tieneNumero) {
        mensaje.textContent = "Contraseña Mediana";
        mensaje.style.color = "orange";
    } else {
        mensaje.textContent = "Contraseña Débil";
        mensaje.style.color = "red";
    }
}
