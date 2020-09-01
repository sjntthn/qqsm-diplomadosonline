var sonido = null;

function usarComodin(link, comodin) {
    let elementStyle = window.getComputedStyle(link);
    let usado = elementStyle.getPropertyValue('pointer-events');
    if (usado != "none") {
        sonidoComodin(comodin);
        marcarComodin(link, comodin);
        ejecutarComodin(link, comodin);
    } else {
        comodinUsado();
    }
}

function marcarComodin(link, comodin) {
    var elemento = document.getElementById(comodin);
    elemento.style.cssText = 'background: linear-gradient(to bottom, #ffb76b 0%, #ff7f04 100%);';
    link.style.cssText = 'pointer-events: none;';
}

var audiencia = null;
var tiempo = null;
var descartar2 = null;
var perdio = null;

function sonidoComodin(aReproducir) {
    let activo = document.getElementById("sonidoActivo");
    if (activo.innerHTML == "1") {
        pausarComodin();
        switch (aReproducir) {
            case "audiencia":
                audiencia = new Audio();
                audiencia.src = "assets/sounds/REMOVER.mp3";
                audiencia.loop = false;
                audiencia.play();
                break;
            case "tiempo":
                tiempo = new Audio();
                tiempo.src = "assets/sounds/TICTOC.mp3";
                tiempo.loop = false;
                tiempo.play();
                break;
            case "descartar2":
                descartar2 = new Audio();
                descartar2.src = "assets/sounds/REMOVER.mp3";
                descartar2.loop = false;
                descartar2.play();
                break;
            case "perdio":
                perdio = new Audio();
                perdio.src = "assets/sounds/PERDIO.mp3";
                perdio.loop = false;
                perdio.play();
                break;
            default:
                break;
        }
    }
}

function pausarComodin() {
    if (perdio != null) {
        perdio.pause();
        perdio = null;
    }
    if (tiempo != null) {
        tiempo.pause();
        tiempo = null;
    }
    if (descartar2 != null) {
        descartar2.pause();
        descartar2 = null;
    }
    if (audiencia != null) {
        audiencia.pause();
        audiencia = null;
    }
}

function ejecutarComodin(link, comodin) {
    sonido = new Audio();
    sonido.pause();

    switch (comodin) {
        case "audiencia":
            consultarAudiencia();
            break;
        case "tiempo":
            LlamarUnAmigo();
            break;
        case "descartar2":
            cincuenta50();
            break;
        case "perdio":
            retirarse(link, comodin);
            break;
        default:
            break;
    }

    sonido.loop = false;
    sonido.play();
}

function comodinUsado() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'error',
        title: 'YA USASTE ESTE COMODIN MENZ@'
    })
}

function retirarse(link, comodin) {
    var premio = document.getElementById('acumulado').innerHTML;
    let timerInterval
    Swal.fire({
        title: '¿TE RETIRAS?',
        html: "<h4>¿Realmente desear Retirarte?</h4>",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '<h4>Si, bye losers!!!</h4>',
        cancelButtonText: '<h4>No, ya va!</h4>',
        allowOutsideClick: false,
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                title: 'USTED GANO ' + premio + '$ FELICIDADES, UN NIÑO DE 5 LO HABRIA HECHO MEJOR!!!',
                html: 'Se cerrara en <b></b> Segundos.',
                timer: 20000,
                timerProgressBar: true,
                imageUrl: 'assets/img/logo.png',
                imageAlt: 'Custom image',
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
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {

            var elemento = document.getElementById(comodin);
            elemento.style.cssText = 'background: linear-gradient(to bottom, #121656 0%, #2b2e91 100%);';
            link.style.cssText = 'pointer-events: noretirado;';
            Swal.fire(
                'SI YO FUERA TU ME HABRIA RETIRADO',
                '<h4>Estás bien pendejo pero te gusta ser humillado</h4>',
                'success'
            )
        }
    })
}

function cincuenta50() {
    var r1 = document.getElementById("respuesta1");
    var r2 = document.getElementById("respuesta2");
    var r3 = document.getElementById("respuesta3");
    var r4 = document.getElementById("respuesta4");
    var rCorrecta = document.getElementById("respuestaCorrecta");
    var nroCorrecta;
    var nroAnt;
    if (rCorrecta.innerHTML == r1.innerHTML) {
        nroCorrecta = 1;
        r2.innerHTML = "-";
        r3.innerHTML = "-";
    } else if (rCorrecta.innerHTML == r2.innerHTML) {
        nroCorrecta = 2;
        r1.innerHTML = "-";
        r3.innerHTML = "-";
    } else if (rCorrecta.innerHTML == r3.innerHTML) {
        nroCorrecta = 3;
        r1.innerHTML = "-";
        r4.innerHTML = "-";
    } else if (rCorrecta.innerHTML == r4.innerHTML) {
        nroCorrecta = 4;
        r1.innerHTML = "-";
        r2.innerHTML = "-";
    }
}

function consultarAudiencia() {
    var a = document.getElementById("respuesta1");
    var b = document.getElementById("respuesta2");
    var c = document.getElementById("respuesta3");
    var d = document.getElementById("respuesta4");
    var rCorrecta = document.getElementById("respuestaCorrecta");
    if (rCorrecta.innerHTML == a.innerHTML) {
        a = 60;
        b = Math.floor(Math.random() * (100 - a));
        c = Math.floor(Math.random() * (100 - b - a));
        d = 100 - a - b - c;
    } else if (rCorrecta.innerHTML == b.innerHTML) {
        b = 55;
        a = Math.floor(Math.random() * (100 - b));
        c = Math.floor(Math.random() * (100 - a - b));
        d = 100 - a - b - c;
    } else if (rCorrecta.innerHTML == c.innerHTML) {
        c = 71;
        b = Math.floor(Math.random() * (100 - c));
        a = Math.floor(Math.random() * (100 - b - c));
        d = 100 - a - b - c;
    } else if (rCorrecta.innerHTML == d.innerHTML) {
        d = 80;
        b = Math.floor(Math.random() * (100 - d));
        c = Math.floor(Math.random() * (100 - b - d));
        a = 100 - d - b - c;
    }

    var contenido =
        '<div class="contenedorAudiencia">' +
        '<p style="color: #4CAF50;">A ' + a + '%</p>' +
        '<div class="porcentajeAudiencia" style="grid-area: b; width: 100%; height: ' + a + '%; background-color: #4CAF50;"></div>' +
        '</div>' +

        '<div class="contenedorAudiencia">' +
        '<p style="color: #2196F3;">B ' + b + '%</p>' +
        '<div class="porcentajeAudiencia" style="grid-area: b; width: 100%; height: ' + b + '%; background-color: #2196F3;"></div>' +
        '</div>' +

        '<div class="contenedorAudiencia">' +
        '<p style="color: #f44336;">C ' + c + '%</p>' +
        '<div class="porcentajeAudiencia" style="grid-area: b; width: 100%; height: ' + c + '%; background-color: #f44336;"></div>' +
        '</div>' +

        '<div class="contenedorAudiencia">' +
        '<p style="color: #808080;">D ' + d + '%</p>' +
        '<div class="porcentajeAudiencia" style="grid-area: b; width: 100%; height: ' + d + '%; background-color: #808080;"></div>' +
        '</div>';
    Swal.fire({
        title: contenido,
        allowOutsideClick: false
    }).then((result) => {
        pausarComodin();
    });
}

function LlamarUnAmigo() {
    var jose = 'Ing. Jose<br><img class="card-img-top"  style="width: 20rem;" src="assets/img/jose.png" alt="imagen de jose">';
    var carlos = 'Lic. Carlos<br><img class="card-img-top"  style="width: 20rem;" src="assets/img/carlos.png" alt="imagen de carlos">';
    var guzman = 'Guzmán<br><img class="card-img-top"  style="width: 20rem;" src="assets/img/guzman.png" alt="imagen de guzman">';
    (async() => {
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    "1": jose,
                    "2": carlos,
                    "3": guzman
                })
            }, 1000)
        })

        const { value: respuesta } = await Swal.fire({
            title: '¿A Quién vas a llamar?',
            inputOptions: inputOptions,
            input: 'radio',
            allowOutsideClick: false,
            inputValidator: (value) => {
                if (!value) {
                    return '<h3>Selecciona alguno pedazo de Baboso!</h3>'
                }
            }
        })

        if (respuesta) {
            pausarComodin();
            var rALaSuerte = document.getElementById("respuesta3").innerHTML;
            var rCorrecta = document.getElementById("respuestaCorrecta").innerHTML;
            var res;
            var imagen;
            if (respuesta == "1") {
                res = rCorrecta;
                imagen = '<img class="card-img-top"  style="width: 30rem;" src="assets/img/jose.png" alt="imagen de jose">';
            } else if (respuesta == "2") {
                res = rCorrecta;
                imagen = '<img class="card-img-top"  style="width: 30rem;" src="assets/img/carlos.png" alt="imagen de carlos">';
            } else {
                res = rALaSuerte;
                imagen = '<img class="card-img-top"  style="width: 30rem;" src="assets/img/guzman.png" alt="imagen de guzman">';
            }
            Swal.fire({ html: `${imagen}<br><h3>La respuesta correcta es ${res} estoy 100% seguro</h3>` })
        }

    })()
}