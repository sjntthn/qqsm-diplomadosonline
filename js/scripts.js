function jugar() {
    Swal.fire({
            icon: 'success',
            html: `<h2>Veamos que tan burro eres!!!</h2>`,
            confirmButtonText: '<h3>Comenzar!</h3>',
            confirmButtonColor: '#3085d6',
            allowOutsideClick: false
        })
        .then((result) => {
            if (result.value) {
                window.location = "jugar.html";
            }
        })
}

function seleccionar(respuesta) {
    if (document.getElementById(respuesta).innerHTML != "-") {
        marcarSeleccion(respuesta);
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = '//cdn.jsdelivr.net/npm/@sweetalert2/theme-bulma/bulma.css';
        link.onload = function() {
            Swal.fire({
                title: '<h3>¿Respuesta Definitiva?</h3>',
                icon: 'question',
                showCancelButton: true,
                allowOutsideClick: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '<h4>Definitiva</h4>',
                cancelButtonText: '<h4>No</h4>'
            }).then((result) => {
                if (result.value) {
                    validarRespuesta(respuesta);
                } else {
                    desmarcarSeleccion(respuesta);
                }
                var quitar = document.querySelector('link[href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-bulma/bulma.css"]')
                quitar.parentNode.removeChild(quitar);
            })
        }
        document.getElementsByTagName('head')[0].appendChild(link)
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
        var nivel = document.getElementById("nivel");
        marcarSeleccionCorrecta(seleccionada);
        var acumulado = document.getElementById("acumulado");
        if (acumulado.innerHTML == "0") {
            acumulado.innerHTML = "125";
        } else if (acumulado.innerHTML == "2000") {
            acumulado.innerHTML = "2500";
        } else if (acumulado.innerHTML == "320000") {
            acumulado.innerHTML = "500000";
        } else {
            acumulado.innerHTML = parseInt(acumulado.innerHTML) * 2;
            if (acumulado.innerHTML == "2000" || acumulado.innerHTML == "40000" || acumulado.innerHTML == "1000000") {
                dinero_seguro.innerHTML = acumulado.innerHTML;
            }
        }

        if (nivel.innerHTML == "15") {
            Swal.fire({
                title: 'USTED GANO ' + dinero_seguro.innerHTML + '$ FELICIDADES,<br> NO ERES TAN IDIOTA COMO PENSABAMOS!!!',
                html: '<h4>Reiniciando Juego en <b></b> Segundos.</h4>',
                timer: 12000,
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
            reproducirSonido("ganador");
        } else {
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = '//cdn.jsdelivr.net/npm/@sweetalert2/theme-bulma/bulma.css';
            link.onload = function() {
                Swal.fire({
                    title: '<h3>CORRECTO</h3>',
                    html: "<h4>Estaba Fácil no te creas tan Inteligente!</h4>",
                    icon: 'success',
                    showCancelButton: false,
                    allowOutsideClick: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: '<h4>CONTINUAR<h4>'
                }).then((result) => {
                    if (result.value) {
                        subirNivel();
                        var quitar = document.querySelector('link[href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-bulma/bulma.css"]')
                        quitar.parentNode.removeChild(quitar);
                    }
                })
                reproducirSonido("correcta");
            };
            document.getElementsByTagName('head')[0].appendChild(link)
        }
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
            html: '<h3>La repuesta correcta era: ' + correcta + '</h3><h4><br> Reiniciando Juego en <b></b> Segundos.</h4>',
            timer: 20000,
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
    if (parseInt(nivel.innerHTML) <= 5) {
        reproducirSonido("R1");
    } else if (parseInt(nivel.innerHTML) < 15) {
        reproducirSonido("R6");
    } else {
        reproducirSonido("RF");
    }
    hacerPregunta();
}
var correcta = null;
var incorrecta = null;
var R1 = null;
var R6 = null;
var RF = null;
var ganador = null;
var temporizador = null;

function reproducirSonido(aReproducir) {
    let activo = document.getElementById("sonidoActivo");
    if (activo.innerHTML == "1") {
        pausarSonido();
        switch (aReproducir) {
            case "correcta":
                correcta = new Audio();
                correcta.src = "assets/sounds/CORRECTA.mp3";
                correcta.loop = false;
                correcta.play();
                break;
            case "incorrecta":
                incorrecta = new Audio();
                incorrecta.src = "assets/sounds/PERDIO.mp3";
                incorrecta.loop = false;
                incorrecta.play();
                break;
            case "R1":
                R1 = new Audio();
                R1.src = "assets/sounds/PREGUNTAS1-5.mp3";
                R1.loop = true;
                R1.play();
                break;
            case "R6":
                R6 = new Audio();
                R6.src = "assets/sounds/PREGUNTAS6-14.mp3";
                R6.loop = true;
                R6.play();
                break;
            case "RF":
                RF = new Audio();
                RF.src = "assets/sounds/PREGUNTAFINAL.mp3";
                RF.loop = false;
                RF.play();
                break;
            case "ganador":
                ganador = new Audio();
                ganador.src = "assets/sounds/GANADOR.mp3";
                ganador.loop = false;
                ganador.play();
                break;
            case "temporizador":
                temporizador = new Audio();
                temporizador.src = "assets/sounds/TIEMPO.mp3";
                temporizador.loop = false;
                temporizador.play();
                break;
            default:
                break;
        }
    }
}

function pausarSonido() {
    if (correcta != null) {
        correcta.pause();
        correcta = null;
    }
    if (incorrecta != null) {
        incorrecta.pause();
        incorrecta = null;
    }
    if (R1 != null) {
        R1.pause();
        R1 = null;
    }
    if (R6 != null) {
        R6.pause();
        R6 = null;
    }
    if (RF != null) {
        RF.pause();
        RF = null;
    }
    if (ganador != null) {
        ganador.pause();
        ganador = null;
    }
    if (temporizador != null) {
        temporizador.pause();
        temporizador = null;
    }
}

function modificarSonido(link) {
    let elemento = document.getElementById("sonido");
    let activo = document.getElementById("sonidoActivo");

    if (activo.innerHTML == "1") {
        //desactivar
        activo.innerHTML = "0";
        elemento.style.cssText = 'background: linear-gradient(to bottom, #ffb76b 0%, #ff7f04 100%);';
        elemento.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
        pausarSonido();
        pausarComodin();
    } else {
        //activar
        activo.innerHTML = "1";
        elemento.style.cssText = 'background: linear-gradient(to bottom, #121656 0%, #2b2e91 100%););';
        elemento.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
        reproducirSonido("R1");
    }
}