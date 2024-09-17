let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){

    let numeroDigitado = parseInt (cantidad.value);

    if( numeroDigitado < 8) {
        contrasena.value = "la cantidad de caracteres tiene que ser mayor que 8";
    }else{
        let password = '';
        for(let i=0; i < numeroDigitado; i++){

            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random()  * cadenaCaracteres.length)];
            password+=caracterAleatorio;
        }
        contrasena.value = password;
    }
    

}

function limpiar(){
    contrasena.value = '';
}








