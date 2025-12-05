// ...existing code...
const density = '        .:-?|=+%O#.@'
let video;
let asciiDiv;

function setup() {
    asciiDiv = createDiv();
    // asciiDiv.style('font-family', 'monospace');
    // asciiDiv.style('line-height', '6px');
    // asciiDiv.style('font-size', '12px');
    noCanvas();
    video = createCapture(VIDEO);
    video.size(100, 80);
    video.hide(); // hide the raw video element
}

function draw() {
    video.loadPixels();
    let asciiImage = "";
    for (let j = 0; j < video.height; j++) {
        for (let i = 0; i < video.width; i++) {
            const pixelIndex = (i + j * video.width) * 4;
            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;
            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, 0, len - 1));
            const c = density.charAt(charIndex);
            const ch = (c === " ") ? '&nbsp;' : c;
            // wrap each character in a span colored with the original RGB
            asciiImage += `<span style="color:rgb(${r},${g},${b})">${ch}</span>`;
        }
        asciiImage += '<br/>';
    }
    asciiDiv.html(asciiImage);
    // ...existing code...
}

// ...existing code...
// ...existing code...
// const density = '        .:-?|=+%O#.@'
// let video;
// let asciiDiv;

// function setup() {
//     asciiDiv = createDiv();
//     asciiDiv.style('font-family', 'monospace');
//     asciiDiv.style('line-height', '6px');
//     asciiDiv.style('font-size', '8px');
//     noCanvas();
//     video = createCapture(VIDEO);
//     video.size(100, 40);
//     video.hide(); // hide the raw video element
// }

// function draw() {
//     video.loadPixels();
//     let asciiImage = "";
//     for (let j = 0; j < video.height; j++) {
//         for (let i = 0; i < video.width; i++) {
//             const pixelIndex = (i + j * video.width) * 4;
//             const r = video.pixels[pixelIndex + 0];
//             const g = video.pixels[pixelIndex + 1];
//             const b = video.pixels[pixelIndex + 2];
//             const avg = (r + g + b) / 3;
//             const len = density.length;
//             const charIndex = floor(map(avg, 0, 255, 0, len - 1));
//             const c = density.charAt(charIndex);
//             const ch = (c === " ") ? '&nbsp;' : c;
//             // wrap each character in a span colored with the original RGB
//             asciiImage += `<span style="color:rgb(${r},${g},${b})">${ch}</span>`;
//         }
//         asciiImage += '<br/>';
//     }
//     asciiDiv.html(asciiImage);
//     // ...existing code...
// }