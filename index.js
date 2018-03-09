'use strict'

const path = require('path')

let sayHello
if (Webassembly) {
	const file = path.join(
		__dirname,
		'target', 'wasm32-unknown-emscripten', 'release',
		'hello_world.js'
	)
	const module = require(file)
	sayHello = module._say_hello
} else {
	const dir = path.join(
		__dirname,
		'target', 'asmjs-unknown-emscripten', 'release',
		'hello_world.js'
	)
	const module = require(file)
	sayHello = module.cwrap('say_hello', '', [])
}

module.exports = sayHello
