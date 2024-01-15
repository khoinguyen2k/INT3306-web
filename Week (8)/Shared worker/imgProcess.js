function noise() {
    return Math.random() * 0.5 + 0.5;
}

function colorDistance(scale, dest, src) {
    return (scale * dest + (1 - scale) * src);
}

function processSepia(binaryData) {
	
    for (let i = 0; i < binaryData.length; i += 4) {
        let r = binaryData[i];
        let g = binaryData[i + 1];
        let b = binaryData[i + 2];

        binaryData[i] = colorDistance(noise(), (r * 0.393) + (g * 0.769) + (b * 0.189), r);
        binaryData[i + 1] = colorDistance(noise(), (r * 0.349) + (g * 0.686) + (b * 0.168), g);
        binaryData[i + 2] = colorDistance(noise(), (r * 0.272) + (g * 0.534) + (b * 0.131), b);
    }
}

onconnect = function(e) {
    let port = e.ports[0];
	port.onmessage = function (e) {
        processSepia(e.data);
        port.postMessage(e.data);
    }
};
