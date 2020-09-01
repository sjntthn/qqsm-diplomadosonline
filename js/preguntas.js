var pregunta = document.getElementById("pregunta");

var respuesta1 = document.getElementById("respuesta1");
var respuesta2 = document.getElementById("respuesta2");
var respuesta3 = document.getElementById("respuesta3");
var respuesta4 = document.getElementById("respuesta4");
var respuestaCorrecta = document.getElementById("respuestaCorrecta");

function hacerPregunta() {
    var preguntaNro = document.getElementById("nivel");
    preguntaNro = parseInt(preguntaNro.innerHTML);
    var preguntaActual = new Object();
    preguntaActual = getPreguntaRandom(preguntaNro);
    pregunta.innerHTML = preguntaActual.pregunta;
    respuesta1.innerHTML = preguntaActual.respuesta1;
    respuesta2.innerHTML = preguntaActual.respuesta2
    respuesta3.innerHTML = preguntaActual.respuesta3;
    respuesta4.innerHTML = preguntaActual.respuesta4;
    respuestaCorrecta.innerHTML = preguntaActual.respuestaCorrecta;
}


function getPreguntaRandom(preguntaNro) {
    var min = 0;
    var max;
    switch (preguntaNro) {
        case 1:
            max = preguntasNivel1.length;
            break;
        case 2:
            max = preguntasNivel2.length;
            break;
        case 3:
            max = preguntasNivel3.length;
            break;
        case 4:
            max = preguntasNivel4.length;
            break;
        case 5:
            max = preguntasNivel5.length;
            break;
        case 6:
            max = preguntasNivel6.length;
            break;
        case 7:
            max = preguntasNivel7.length;
            break;
        case 8:
            max = preguntasNivel8.length;
            break;
        case 9:
            max = preguntasNivel9.length;
            break;
        case 10:
            max = preguntasNivel10.length;
            break;
        case 11:
            max = preguntasNivel11.length;
            break;
        case 12:
            max = preguntasNivel12.length;
            break;
        case 13:
            max = preguntasNivel13.length;
            break;
        case 14:
            max = preguntasNivel14.length;
            break;
        case 15:
            max = preguntasNivel15.length;
            break;
        default:
            break;
    }
    return preguntasNivel1[Math.floor(Math.random() * (max - min)) + min];
}








var pregunta1_1 = new Object();
pregunta1_1.pregunta = '¿Cuál es la capital de Venezuela?';
pregunta1_1.respuesta1 = 'Caracas';
pregunta1_1.respuesta2 = 'Maracaibo';
pregunta1_1.respuesta3 = 'Valencia';
pregunta1_1.respuesta4 = 'Puerto la cruz';
pregunta1_1.respuestaCorrecta = 'Caracas';

var pregunta1_2 = new Object();
pregunta1_2.pregunta = '¿Cuánto es 45 multiplicado por 73?';
pregunta1_2.respuesta1 = '2463';
pregunta1_2.respuesta2 = '4123';
pregunta1_2.respuesta3 = '3285';
pregunta1_2.respuesta4 = '4573';
pregunta1_2.respuestaCorrecta = '3285';

var pregunta1_3 = new Object();
pregunta1_3.pregunta = '¿A quién se comio el caiman?';
pregunta1_3.respuesta1 = 'a Lucia';
pregunta1_3.respuesta2 = 'a Juan';
pregunta1_3.respuesta3 = 'a Carmen';
pregunta1_3.respuesta4 = 'a Mercedes';
pregunta1_3.respuestaCorrecta = 'a Mercedes';

var pregunta1_4 = new Object();
pregunta1_4.pregunta = '¿Cuánto vale PI?';
pregunta1_4.respuesta1 = '3,1664';
pregunta1_4.respuesta2 = '3,1614';
pregunta1_4.respuesta3 = '3,1416';
pregunta1_4.respuesta4 = '3';
pregunta1_4.respuestaCorrecta = '3,1416';

let preguntasNivel1 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel2 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel3 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel4 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel5 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel6 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel7 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel8 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel9 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel10 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel11 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel12 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel13 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel14 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel15 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];