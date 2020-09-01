function jugar() {
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Seguir &rarr;',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: false,
        showCancelButton: true,
        progressSteps: ['1', '2']
    }).queue([{
            title: 'Ingrese su nombre',
            text: 'Pero si su nombre es feo ponga otra cosa'
        },
        {
            title: 'Ingrese su genero',
            text: 'Sin mentir, que en esta vida todo se sabe...'
        }
    ]).then((result) => {
        if (result.value) {
            const answers = JSON.stringify(result.value)
            Swal.fire({
                    title: 'Todo listo!',
                    allowOutsideClick: false,
                    html: `<code> Bienvenido:${answers.substring(2, answers.indexOf(",")-1)}</code>
                    <br>Veamos que tan burro eres!!!`,
                    confirmButtonText: 'Comenzar!'

                })
                .then((result) => {
                    if (result.value) {
                        window.location = "jugar.html";
                    }
                })
        }
    })
}

function seleccionar(respuesta) {
    if (document.getElementById(respuesta).innerHTML != "-") {
        marcarSeleccion(respuesta);
        Swal.fire({
            title: '¿Respuesta Definitiva?',
            text: "Estas seguro de tu respuesta!?",
            icon: 'question',
            showCancelButton: true,
            allowOutsideClick: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Definitiva'
        }).then((result) => {
            if (result.value) {
                validarRespuesta(respuesta);
            } else {
                desmarcarSeleccion(respuesta);
            }
        })
    }
}

function marcarSeleccion(respuesta) {
    var elemento = document.getElementById(respuesta).parentElement;
    elemento.style.cssText = 'background: linear-gradient(to bottom, #ffb76b 0%, #ff7f04 100%);';
}

function desmarcarSeleccion(respuesta) {
    var elemento = document.getElementById(respuesta).parentElement;
    elemento.style.cssText = 'background: linear-gradient(to bottom, #121656 0%, #2b2e91 100%);';
}

function marcarSeleccionIncorrecta(respuesta) {
    var elemento = document.getElementById(respuesta).parentElement;
    elemento.style.cssText = 'background: linear-gradient(to bottom, #561212 0%, #912b2b 100%);';
}

function marcarSeleccionCorrecta(respuesta) {
    var elemento = document.getElementById(respuesta).parentElement;
    elemento.style.cssText = 'background: linear-gradient(to bottom, #0abb3f 0%, #0adf3f 100%);';
}

function validarRespuesta(seleccionada) {
    var rCorrecta = document.getElementById("respuestaCorrecta");
    var rSeleccionada = document.getElementById(seleccionada);
    var dinero_seguro = document.getElementById("dinero_seguro");

    if (rCorrecta.innerHTML == rSeleccionada.innerHTML) {
        reproducirSonido("correcta");
        marcarSeleccionCorrecta(seleccionada);
        var acumulado = document.getElementById("acumulado");
        if (acumulado.innerHTML == "0") {
            acumulado.innerHTML = "125";
        } else if (acumulado.innerHTML == "2000") {
            acumulado.innerHTML = "2500";
        } else {
            acumulado.innerHTML = parseInt(acumulado.innerHTML) * 2;
            if (acumulado.innerHTML == "2000" || acumulado.innerHTML == "40000" || acumulado.innerHTML == "1000000") {
                dinero_seguro.innerHTML = acumulado.innerHTML;
            }
        }
        subirNivel();
    } else {
        reproducirSonido("incorrecta");
        var r1 = document.getElementById("respuesta1");
        var r2 = document.getElementById("respuesta2");
        var r3 = document.getElementById("respuesta3");
        var r4 = document.getElementById("respuesta4");
        var correcta;

        if (rCorrecta.innerHTML == r1.innerHTML) {
            correcta = r1.innerHTML;
            marcarSeleccionCorrecta("respuesta1");
        } else if (rCorrecta.innerHTML == r2.innerHTML) {
            correcta = r2.innerHTML;
            marcarSeleccionCorrecta("respuesta2");
        } else if (rCorrecta.innerHTML == r3.innerHTML) {
            correcta = r3.innerHTML;
            marcarSeleccionCorrecta("respuesta3");
        } else if (rCorrecta.innerHTML == r4.innerHTML) {
            correcta = r4.innerHTML;
            marcarSeleccionCorrecta("respuesta4");
        }
        marcarSeleccionIncorrecta(seleccionada);

        Swal.fire({
            title: 'USTED GANO ' + dinero_seguro.innerHTML + '$ FELICIDADES,<br> UN NIÑO DE 5 AÑOS LO HABRIA HECHO MEJOR!!!',
            html: 'La repuesta correcta era: ' + correcta + '<br> Reiniciando Juego en <b></b> Segundos.',
            timer: 10000,
            timerProgressBar: true,
            imageUrl: 'assets/img/logo.png',
            imageAlt: 'Custom image',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = (Swal.getTimerLeft() / 1000).toFixed();
                        }
                    }
                }, 100)
            },
            onClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below 
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
            */
            window.location = "index.html";
        })
    }
}

function subirNivel() {
    var nivel = document.getElementById("nivel");
    nivel.innerHTML = parseInt(nivel.innerHTML) + 1;
    var marcadorDeNivel = document.getElementById("badge" + nivel.innerHTML);
    marcadorDeNivel.classList.add('nivelActual');
    desmarcarSeleccion("respuesta1");
    desmarcarSeleccion("respuesta2");
    desmarcarSeleccion("respuesta3");
    desmarcarSeleccion("respuesta4");
    hacerPregunta();
}

var sonido = null;

function reproducirSonido(aReproducir) {
    sonido = new Audio();
    sonido.pause();

    switch (aReproducir) {
        case "correcta":
            sonido.src = "assets/sounds/win.mp3";
            break;
        case "incorrecta":
            sonido.src = "assets/sounds/lose.mp3";
            break;
        default:
            break;
    }

    sonido.loop = false;
    sonido.play();
}

function pausarSonido() {
    sonido.pause();
    sonido = null;
}