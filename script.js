const music = new Audio('./songs/01.mp3');
// music.play();
let psl = document.getElementById('ps_left');
let psr = document.getElementById('ps_right');
let pal = document.getElementById('pa_left');
let par = document.getElementById('pa_right');
let popSong = document.getElementsByClassName('pop_song')[0];
let popArt = document.getElementsByClassName('items')[0];
let menusong = document.getElementsByClassName('menu_song')[0];

const Album = [
    {
        srno:'01',
        id:1,
        songname:"Faded",
        poster:"./Images/faded.jpg",
        lyrics:"You Were The Shadow To My Light Did You Feel Us Another Start You Fade Away Afraid Our Aim Is Out Of Sight Wanna See Us Alive",
        song:"./Songs/Faded(PaglaSongs).mp3",
        singers:"Alan Walker, Iselin Solheim"
    },
    {
        srno:'02',
        id:2,
        songname:"Guli Mata",
        poster:"./Images/guli mata.jpg",
        lyrics:"Jagi Hu, Na Soi Hu Khayalon Mein Tere, Khoi Hu Jagi Hu, Na Soi Hu Khayalon Mein Tere, Khoi Hu Guli Mata Nchoufek Ana Mata",
        song:"./Songs/Guli-Mata(PaglaSongs).mp3",
        singers:"Saad Lamjarred, Shreya Ghoshal"
    },
    {
        srno:'03',
        id:3,
        songname:"Yadav Brand 2",
        poster:"./Images/yadav brand.jpg",
        lyrics:"Maran ki baat kare tere ke Aukaat bahar re chora rao sahab ke Mazak thodi hai, Re jonsa bhi mahare beta haath laavega Saala pachtavega na sukh paavega sun kaan kholke",
        song:"./Songs/Yadav-Brand-2(PaglaSongs).mp3",
        singers:"Sunny Yaduvanshi, AK Rok"
    },
    {
        srno:'04',
        id:4,
        songname:"Kun Faaya Kun",
        poster:"./Images/kunfaya.jpg",
        lyrics:"Kadam badha le Haddon ko mita le Aaja khaalipan mein pee ka ghar tera Tere bin khaali aaja khaalipan mein Tere bin khaali aaja khaalipan mein",
        song:"./Songs/Kun Faaya Kun - Rockstar 128 Kbps.mp3",
        singers:"A.R. Rahman, Javed Ali, Mohit Chauhan"
    },
];

function updateMenusong(){
    for(let ele of Album){
        let songlistItem = document.createElement('li'); 
        songlistItem.classList.add('songlist');
        let spn = document.createElement('span')
        spn.innerText = ele.srno;;
        let posterimg = document.createElement('img');
        posterimg.src = ele.poster;
        let h5 = document.createElement('h5')
        h5.innerHTML = ele.songname;
        let h5div = document.createElement('div');
        h5div.className = "subtitle";
        h5div.innerText = ele.singers;
        h5.appendChild(h5div);
        let playlogo = document.createElement('i');
        playlogo.classList.add('bi','bi-play-circle-fill','Plplay');
        playlogo.id = ele.srno;
        songlistItem.appendChild(spn);
        songlistItem.appendChild(posterimg);
        songlistItem.appendChild(h5);
        songlistItem.appendChild(playlogo);
        menusong.appendChild(songlistItem);   
    }
}
function updatePopsong(){
    for(let ele of Album){
        let songlistItem = document.createElement('li'); 
        songlistItem.classList.add('songlist');
        let imgdiv = document.createElement('div');
        imgdiv.className = 'img_play';

        let posterimg = document.createElement('img');
        posterimg.src = ele.poster;
        imgdiv.appendChild(posterimg);
        let playlogo = document.createElement('i');
        playlogo.classList.add('bi','bi-play-circle-fill','Plplay');
        playlogo.id = ele.srno;
        imgdiv.appendChild(playlogo);
        let h5 = document.createElement('h5')
        h5.innerHTML = ele.songname;
        let h5div = document.createElement('div');
        h5div.className = "subtitle";
        h5div.innerText = ele.singers;
        h5.appendChild(h5div);
        songlistItem.appendChild(imgdiv);
        songlistItem.appendChild(h5);
        popSong.appendChild(songlistItem);   
    }
}
updateMenusong();
updatePopsong();
let Playbtn = document.getElementById('masterplay');
let wave = document.getElementById('wave');
Playbtn.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        Playbtn.classList.remove('bi-play-fill');
        Playbtn.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        Playbtn.classList.remove('bi-pause-fill');
        Playbtn.classList.add('bi-play-fill');
    }
});

//ADDING EVENT LISTENERS
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