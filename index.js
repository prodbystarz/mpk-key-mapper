const midi = require('midi');
const robot = require('robotjs');

const input = new midi.Input();

const portCount = input.getPortCount();
console.log(`Number of available MIDI ports: ${portCount}`);

for (let i = 0; i < portCount; i++) {
    console.log(`Port ${i}: ${input.getPortName(i)}`);
}

input.openPort(0);
console.log(`Opened port: ${input.getPortName(0)}`);

input.ignoreTypes(false, false, false);

console.log('Listening for MIDI messages...');

const midiToKeyMap = {
    36: 'put the key you want in these', // C2
    37: '', // C#2
    38: '', // D2
    39: '', // D#2
    40: '', // E2
    41: '', // F2
    42: '', // F#2
    43: '', // G2
    44: '', // G#2
    45: '', // A2
    46: '', // A#2
    47: '', // B2
    48: '', // C3
    49: '', // C#3
    50: '', // D3
    51: '', // D#3
    52: '', // E3
    53: '', // F3
    54: '', // F#3
    55: '', // G3
    56: '', // G#3
    57: '', // A3
    58: '', // A#3
    59: '', // B3
    60: '', // C4
    61: '', // C#4
};

input.on('message', (deltaTime, message) => {
    console.log(`MIDI message: ${message}`);
    const [status, note, velocity] = message;
    const isNoteOn = (status & 0xf0) === 0x90;
    const isNoteOff = (status & 0xf0) === 0x80 || (isNoteOn && velocity === 0);

    if (isNoteOn) {
        const key = midiToKeyMap[note];
        if (key) {
            console.log(`Key down: ${key}`);
            robot.keyToggle(key, 'down');
        }
    }

    if (isNoteOff) {
        const key = midiToKeyMap[note];
        if (key) {
            console.log(`Key up: ${key}`);
            robot.keyToggle(key, 'up');
        }
    }
});

process.on('SIGINT', () => {
    input.closePort();
    console.log('MIDI input closed.');
    process.exit();
});
