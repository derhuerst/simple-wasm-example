# simple-wasm-example

**A [Rust](https://www.rust-lang.org/) lib, compiled to [WASM](https://developer.mozilla.org/en-US/docs/WebAssembly), with fallback to [asm.js](http://asmjs.org).**

I have given up for now though, because the tooling is just not ready yet. [There are two `rustc` backends (`wasm32_unknown_emscripten` and `wasm32_unknown_unknown`)](https://github.com/rust-lang/rust/tree/fedce67cd21dc08ece5a484fe1a060346acac98a/src/librustc_back/target) and [some issues to be dealt with](https://github.com/rust-lang/rust/issues?q=is%3Aopen+is%3Aissue+label%3AO-wasm). [Emscripten](https://kripken.github.io/emscripten-site/index.html) IMHO is a nightmare to work with, and its generated JS wrapper code is not very portable.

[![build status](https://img.shields.io/codeship/a0aaa5a0-055d-0136-7f21-62225b813afe.svg)](https://app.codeship.com/projects/280737)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/simple-wasm-example.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Building

The following tools are expected to be installed and/or available via `$PATH`. You can use [`install.sh`](scripts/install.sh) to install them automatically.

- `emcc` from the [Emscripten SDK](https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html) with the [`latest` tools](https://kripken.github.io/emscripten-site/docs/tools_reference/emsdk.html#tools-and-sdk-targets)
- [`cargo`](https://doc.rust-lang.org/cargo/getting-started/installation.html) `nightly`.
- the `asmjs-unknown-unknown` and `wasm32-unknown-unknown` `rustc` targets

```shell
npm run build
npm test
```


## Contributing

If you have a question or have difficulties using `simple-wasm-example`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/simple-wasm-example/issues).
