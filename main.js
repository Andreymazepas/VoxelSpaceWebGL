function main() {
    console.log("start");

    /** @type {HTMLCanvasElement} */
    const canvas = document.querySelector('#glCanvas');

    /** @type {WebGLRenderingContext} */
    const gl = canvas.getContext('webgl');

    if(gl === null) {
        alert('webgl initialization error');
        return;
    }

    gl.clearColor(1.0, 0.0, 1.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;

