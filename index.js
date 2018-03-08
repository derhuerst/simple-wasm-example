'use strict'

const path = require('path')

const base = path.join(__dirname, 'lib', 'hello_world', 'target')
const tail = path.join('release', 'hello_world.js')

let sayHello
if (Webassembly) {
	const m = require(path.join(base, 'wasm32-unknown-emscripten', tail))
	sayHello = m._say_hello
} else {
	const m = require(path.join(base, 'asmjs-unknown-emscripten', tail))
	sayHello = Module.cwrap('say_hello', '', [])
}

module.exports = sayHello
