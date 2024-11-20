const { SerialPort, ReadlineParser } = require('serialport')

function serial() {
    const serialport = new SerialPort({
        path: 'COM3',
        baudRate: 9600,
        autoOpen: true
    })

    serialport.on('error', function(error) {
        console.error('[Serialport]', error)
    })

    const parser = serialport.pipe(new ReadlineParser({ delimiter: '\n'}))

    // parser.on('data', (data) => {
    //     console.log('Received data: ', data)
    //     console.log(typeof(data))
    // })

    return parser
}


module.exports = { serial }