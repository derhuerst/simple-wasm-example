'use strict'

const path = require('path')

const base = path.join(__dirname, 'target')
const tail = path.join('release', 'hello_world.js')

let sayHello
if (Webassembly) {
	const dir = path.join(__dirname, 'target', 'wasm32-unknown-emscripten', 'release')
	const module = require(path.join(dir, 'hello_world.js'))
	sayHello = module._say_hello
} else {
	const dir = path.join(__dirname, 'target', 'asmjs-unknown-emscripten', 'release')
	const module = require(path.join(dir, 'hello_world.js'))
	sayHello = module.cwrap('say_hello', '', [])
}

module.exports = sayHello
