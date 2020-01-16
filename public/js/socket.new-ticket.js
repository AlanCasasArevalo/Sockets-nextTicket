
// Comando para establecer comunicacion

const socketIO = io();

var label = $('#lblNuevoTicket');

socketIO.on('connect', function () {
    console.log('Conectado al servidor')
});

socketIO.on('disconnect', function () {
    console.log('Se perdio la conexion con el servidor')
});

socketIO.on('actualTicket', function (response) {
    console.log('Actual ticket', response);

    label.text(response.actualTicket);
});

$('button').on('click', function () {

    // Emitir el nuevo ticket
    socketIO.emit('nextTicket', null, function ( nextTicket ) {

        label.text = nextTicket;

    });

});
































