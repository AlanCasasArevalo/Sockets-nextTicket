const {io} = require('../server');
const {TicketControl} = require('../classes/ticket-control.js');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    // console.log('El siguiente ticket es ', ticketControl.lastTicket)

    // client.on('nextTicket', ( data, callback) =>{
    //     // let nextTicket = ticketControl.nextTicket();
    //     // console.log('Siguiente ticket', nextTicket);
    //     //
    //     // callback(nextTicket);
    //
    // })
    //
    // // emitir un nuevo evento de estado actual del ticket
    // client.emit('actualTicket', {
    //     actualTicket: ticketControl.actualTicket()
    // })
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

    });
});