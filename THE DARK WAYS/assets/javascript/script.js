let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 6000)

function nextImage(){
    count++;
    if(count>8){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

window.sr = ScrollReveal({ reset: true });

sr.reveal('#area-1', { 
    rotate: { x: 0, y: 20, z: 0},
    duration: 2000 });

sr.reveal('#area-2', { 
    rotate: { x: 0, y: 20, z: 0},
    duration: 2000 });

sr.reveal('#area-3', { 
    rotate: { x: 0, y: 20, z: 0},
    duration: 2000 });

sr.reveal('#area-4', { 
    rotate: { x: 0, y: 20, z: 0},
    duration: 2000 });

sr.reveal('#area-5', { 
    rotate: { x: 0, y: 20, z: 0},
    duration: 2000 });

sr.reveal('#area-6', { 
    rotate: { x: 0, y: 20, z: 0},
    duration: 2000 });

sr.reveal('#area-7', { 
    rotate: { x: 0, y: 20, z: 0},
    duration: 2000 });

sr.reveal('#area-8', { 
    rotate: { x: 0, y: 20, z: 0},
    duration: 2000 });

sr.reveal('#o-jogo', { 
    rotate: { x: 0, y: 100, z: 0},
    duration: 3000 });