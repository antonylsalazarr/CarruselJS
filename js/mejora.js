function obtenerFecha() {
    let fecha = new Date();

    // Obtener día, mes y año
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1; // Los meses empiezan desde 0, por lo que sumamos 1
    let año = fecha.getFullYear() % 100; // Obtener solo los últimos dos dígitos del año

    // Formatear día y mes para que tengan dos dígitos
    if (dia < 10) {
        dia = '0' + dia;
    }
    if (mes < 10) {
        mes = '0' + mes;
    }

    // Formatear la fecha en formato dd/mm/aa
    let fechaFormateada = `${dia}/${mes}/${año}`;

    return fechaFormateada;
};

function mostrarFecha() {
    let hora = new Date();
    document.getElementById('fechaHora').innerHTML = obtenerFecha() + " " + hora.getHours() + ":" + hora.getMinutes();

};

let numero = 0;

function carrusel() {
    let imgFinal = document.getElementById('imgFinal');

    numero = numero + 1;
    if (numero == 1) {
        imgFinal.src = '../imagenes/baner2.jpg';
    } else if (numero == 2) {
        imgFinal.src = '../imagenes/baner3.jpg';
    } else if (numero == 3) {
        imgFinal.src = '../imagenes/baner4.jpg';
    } else {
        imgFinal.src = '../imagenes/MP.jpg';
        numero = 0;
    }
    setTimeout('carrusel()', 2000);
}
document.body.setAttribute('onload', 'carrusel(); mostrarFecha();');


