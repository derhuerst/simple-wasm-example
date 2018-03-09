#!/bin/bash

# rustup
curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain none
export PATH="$HOME/.cargo/bin:$PATH"

# asm.js & WASM targets
rustup install nightly-asmjs-unknown-unknown
rustup install nightly-wasm32-unknown-unknown

# Emscripten SDK
wget -q 'https://s3.amazonaws.com/mozilla-games/emscripten/releases/emsdk-portable.tar.gz'
tar -xzv -f emsdk-portable.tar.gz
source ./emsdk-portable/emsdk_env.sh
emsdk update
emsdk install latest --enable-wasm
emsdk activate latest
