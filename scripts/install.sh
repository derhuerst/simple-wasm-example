#!/bin/bash
set -e

# rustup
curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain nightly
export PATH="$HOME/.cargo/bin:$PATH"

# asm.js & WASM targets
rustup target add asmjs-unknown-unknown --toolchain nightly
rustup target add wasm32-unknown-unknown --toolchain nightly

# Emscripten SDK
wget -q 'https://s3.amazonaws.com/mozilla-games/emscripten/releases/emsdk-portable.tar.gz'
tar -xzv -f emsdk-portable.tar.gz
source ./emsdk-portable/emsdk_env.sh
emsdk update
emsdk install latest --enable-wasm
emsdk activate latest
