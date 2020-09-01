var sonido = null;

function usarComodin(link, comodin) {
    let elementStyle = window.getComputedStyle(link);
    let usado = elementStyle.getPropertyValue('pointer-events');
    if (usado != "none") {
        if (sonido != null) {
            stopSonido();
        }
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

function sonidoComodin(aReproducir) {
    sonido = new Audio();
    sonido.pause();

    switch (aReproducir) {
        case "audiencia":
            sonido.src = "assets/sounds/question.mp3";
            break;
        case "tiempo":
            sonido.src = "assets/sounds/question2.mp3";
            break;
        case "descartar2":
            sonido.src = "assets/sounds/remove.mp3";
            break;
        case "perdio":
            sonido.src = "assets/sounds/lose.mp3";
            break;
        default:
            break;
    }

    sonido.loop = false;
    sonido.play();
}

function stopSonido() {
    sonido.pause();
    sonido = null;
}

function ejecutarComodin(link, comodin) {
    sonido = new Audio();
    sonido.pause();

    switch (comodin) {
        case "audiencia":
            consultarAudiencia();
            break;
        case "tiempo":

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
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'ME RETIRO',
        text: "¿Realmente desear Retirarte?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Me retiro!',
        cancelButtonText: 'No, Sigo Jugando!',
        allowOutsideClick: false,
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                title: 'USTED GANO ' + premio + '$ FELICIDADES, UN NIÑO DE 5 LO HABRIA HECHO MEJOR!!!',
                html: 'Se cerrara en <b></b> Segundos.',
                timer: 5000,
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
            swalWithBootstrapButtons.fire(
                'NO ME RETIRO PORQUE SOY RETRASADO',
                'Continuo Jugando, EXCELENTE!!!, amo ser humillado',
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
    });
}