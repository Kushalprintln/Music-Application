const music = new Audio('./songs/01.mp3');
// music.play();















let psl = document.getElementById('ps_left');
let psr = document.getElementById('ps_right');
let pal = document.getElementById('pa_left');
let par = document.getElementById('pa_right');
let popSong = document.getElementsByClassName('pop_song')[0];
let popArt = document.getElementsByClassName('items')[0];

psr.addEventListener('click',()=>{
    popSong.scrollLeft += 430;
});
psl.addEventListener('click',()=>{
    popSong.scrollLeft -= 430;
});
par.addEventListener('click',()=>{
    popArt.scrollLeft += 430;
});
pal.addEventListener('click',()=>{
    popArt.scrollLeft -= 430;
});