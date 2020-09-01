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
    var preguntas = null;
    switch (preguntaNro) {
        case 1:
            max = preguntasNivel1.length;
            preguntas = preguntasNivel1;
            break;
        case 2:
            max = preguntasNivel2.length;
            preguntas = preguntasNivel2;
            break;
        case 3:
            max = preguntasNivel3.length;
            preguntas = preguntasNivel3;
            break;
        case 4:
            max = preguntasNivel4.length;
            preguntas = preguntasNivel4;
            break;
        case 5:
            max = preguntasNivel5.length;
            preguntas = preguntasNivel5;
            break;
        case 6:
            max = preguntasNivel6.length;
            preguntas = preguntasNivel6;
            break;
        case 7:
            max = preguntasNivel7.length;
            preguntas = preguntasNivel7;
            break;
        case 8:
            max = preguntasNivel8.length;
            preguntas = preguntasNivel8;
            break;
        case 9:
            max = preguntasNivel9.length;
            preguntas = preguntasNivel9;
            break;
        case 10:
            max = preguntasNivel10.length;
            preguntas = preguntasNivel10;
            break;
        case 11:
            max = preguntasNivel11.length;
            preguntas = preguntasNivel11;
            break;
        case 12:
            max = preguntasNivel12.length;
            preguntas = preguntasNivel12;
            break;
        case 13:
            max = preguntasNivel13.length;
            preguntas = preguntasNivel13;
            break;
        case 14:
            max = preguntasNivel14.length;
            preguntas = preguntasNivel14;
            break;
        case 15:
            max = preguntasNivel15.length;
            preguntas = preguntasNivel15;
            break;
        default:
            break;
    }
    return preguntas[Math.floor(Math.random() * (max - min)) + min];
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
pregunta1_3.pregunta = 'según la canción, ¿quién se estaba bañando en el rio?';
pregunta1_3.respuesta1 = 'Lucia';
pregunta1_3.respuesta2 = 'Juan';
pregunta1_3.respuesta3 = 'Carmen';
pregunta1_3.respuesta4 = 'Mercedes';
pregunta1_3.respuestaCorrecta = 'Mercedes';

var pregunta1_4 = new Object();
pregunta1_4.pregunta = 'se dice que los ojos son el espejo del...';
pregunta1_4.respuesta1 = 'Retrovisor';
pregunta1_4.respuesta2 = 'Alma';
pregunta1_4.respuesta3 = 'Amo';
pregunta1_4.respuesta4 = 'Sueño';
pregunta1_4.respuestaCorrecta = 'Alma';

var pregunta2_1 = new Object();
pregunta2_1.pregunta = '¿Cuánto es el valor aproximado de PI?';
pregunta2_1.respuesta1 = '3,1664';
pregunta2_1.respuesta2 = '3,1614';
pregunta2_1.respuesta3 = '3,1416';
pregunta2_1.respuesta4 = '3';
pregunta2_1.respuestaCorrecta = '3,1416';

var pregunta2_2 = new Object();
pregunta2_2.pregunta = '¿Que es la acemita?';
pregunta2_2.respuesta1 = 'Un caramelo';
pregunta2_2.respuesta2 = 'Una sopa';
pregunta2_2.respuesta3 = 'Un pan';
pregunta2_2.respuesta4 = 'Una Jalea';
pregunta2_2.respuestaCorrecta = 'Un pan';

var pregunta3_1 = new Object();
pregunta3_1.pregunta = 'Si nos ilucionamos con algo con poco fundamento nos dicen que hacemos castillos en el...';
pregunta3_1.respuesta1 = 'Aire';
pregunta3_1.respuesta2 = 'Trabajo';
pregunta3_1.respuesta3 = 'Hielo';
pregunta3_1.respuesta4 = 'Patio';
pregunta3_1.respuestaCorrecta = 'Aire';

var pregunta3_2 = new Object();
pregunta3_2.pregunta = 'En una de sus canciones, ¿quién dice que sera \"Un buen perdedor\"?';
pregunta3_2.respuesta1 = 'Mana';
pregunta3_2.respuesta2 = 'David Bisbal';
pregunta3_2.respuesta3 = 'Franco de Vita';
pregunta3_2.respuesta4 = 'Luis Fonsi';
pregunta3_2.respuestaCorrecta = 'Franco de Vita';

var pregunta4_1 = new Object();
pregunta4_1.pregunta = '¿Qué nombre recibe la ciencia que trata de la descripción de la tierra?';
pregunta4_1.respuesta1 = 'Biología';
pregunta4_1.respuesta2 = 'Heliografía';
pregunta4_1.respuesta3 = 'Geografía';
pregunta4_1.respuesta4 = 'Ecografía';
pregunta4_1.respuestaCorrecta = 'Geografía';

var pregunta5_1 = new Object();
pregunta5_1.pregunta = 'según la serie animada ¿Cómo se llama la mascota de marco?';
pregunta5_1.respuesta1 = 'Amedio';
pregunta5_1.respuesta2 = 'Droopy';
pregunta5_1.respuesta3 = 'Garfield';
pregunta5_1.respuesta4 = 'Copo de Nieve';
pregunta5_1.respuestaCorrecta = 'Amedio';

var pregunta6_1 = new Object();
pregunta6_1.pregunta = 'si tenemos \"escoliosis\" ¿Qué se nos desvía?';
pregunta6_1.respuesta1 = 'El tabique nasal';
pregunta6_1.respuesta2 = 'La columna vertebral';
pregunta6_1.respuesta3 = 'Los dedos de las manos';
pregunta6_1.respuesta4 = 'Las pantorrillas';
pregunta6_1.respuestaCorrecta = 'La columna vertebral';

let preguntasNivel1 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel2 = [pregunta2_1, pregunta2_2];
let preguntasNivel3 = [pregunta3_1, pregunta3_2];
let preguntasNivel4 = [pregunta4_1];
let preguntasNivel5 = [pregunta5_1];
let preguntasNivel6 = [pregunta6_1];
let preguntasNivel7 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel8 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel9 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel10 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel11 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel12 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel13 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel14 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];
let preguntasNivel15 = [pregunta1_1, pregunta1_2, pregunta1_3, pregunta1_4];