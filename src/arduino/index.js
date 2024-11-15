const { SerialPort, ReadlineParser } = require('serialport')

const serialport = new SerialPort({
    path: 'COM3',
    baudRate: 9600,
    autoOpen: true
})

const parser = serialport.pipe(new ReadlineParser())

function receiveSerialport() {
    parser.on('data', (data) => {
        console.log('Received data: ', data)
    })

    // serialport.write('main screen turn on', function(error) {
    //     if (error) {
    //         return console.log('Error on write: ', error.message)
    //     }

    //     console.log('Message written')
    // })

    serialport.on('error', function(error) {
        console.log('Error: ', error.message)
    })
}

module.exports = { receiveSerialport }