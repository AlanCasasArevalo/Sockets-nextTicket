const fs = require('fs');

class Ticket {
    constructor(ticketNumber, desk){
        this.ticketNumber = ticketNumber;
        this.desk = desk;
    }
}

class TicketControl {

    constructor(){

        this.lastTicket = 0;
        this.today = new Date().getDate();
        // this.allTickets = [];

        let data = require('../data/data.json');

        console.log('Data de json', data);

        if (data.today === this.today) {
            this.lastTicket = data.lastTicket;
            // this.allTickets = data.allTickets;
            // this.nextTicket();
        } else {
            this.resetDateCount()
        }
        
    }

    actualTicket () {
        return `Ticket ${ this.lastTicket }`;
    }


    nextTicket() {
        this.lastTicket +=1;

        // let ticket = new Ticket(this.lastTicket, null);

        // this.allTickets.push(ticket);

        this.saveIntoFile();

        return `Ticket ${ this.lastTicket }`;
    }

    saveIntoFile() {

        let jsonData = {
            "lastTicket" : this.lastTicket,
            "today": this.today,
            // "allTickets" : this.allTickets
        }

        let dataString = JSON.stringify(jsonData);
        fs.writeFileSync('./server/data/data.json', dataString);

    }

    resetDateCount(){
        this.lastTicket = 0;
        // this.allTickets = [];
        console.log('Reiniciado el sistema');
        this.saveIntoFile();
    }

}




module.exports = {
    TicketControl
};






















