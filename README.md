# mpk-key-mapper
Using RobotJS and Node.js turn your Akai MPK Mini into a keyboard controller that maps MIDI inputs directly from the MPK.

## features

- map MIDI notes from the Akai MPK Mini to keyboard strokes.
- customize key mappings easily.
- use the MPK Mini to control games or any other applications.

## prerequisites

- Node.js (https://nodejs.org/)
- NPM (comes with Node.js)

## Installation

1. Clone this repository:
    ```sh
    git clone https://github.com/prodbsytarz/mpk-key-mapper.git
    cd mpk-key-mapper
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. connect your Akai MPK Mini to your computer.

2. run the script:
    ```sh
    node index.js
    ```

3. press keys on your MPK Mini and observe the corresponding keystrokes in your application.

## Customizing Key Mappings

to customize the key mappings, edit the `midiToKeyMap` object in the `index.js` file. this object maps MIDI note numbers to keyboard keys.

### Example:

```javascript
const midiToKeyMap = {
    36: 'w',  // C2 -> 'w'
    37: 'a',  // C#2 -> 'a'
    38: 's',  // D2 -> 's'
    39: 'd',  // D#2 -> 'd'
    40: 'space',  // E2 -> 'space'
    // Add more mappings as needed
};
