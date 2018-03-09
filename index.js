'use strict'

const path = require('path')

let sayHello
if (WebAssembly) {
	const module = require(path.join(__dirname, 'hello_world.wasm.js'))
	sayHello = module._say_hello
} else {
	const module = require(path.join(__dirname, 'hello_world.asm.js'))
	sayHello = module.cwrap('say_hello', '', [])
}

module.exports = sayHello
