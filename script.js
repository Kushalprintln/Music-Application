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
        song:"https://drive.google.com/uc?export=download&id=1i8qsc3NwSqWCWyhncBZeGWJm1y3Wcpp7",
        singers:"Alan Walker, Iselin Solheim"
    },
    {
        srno:'02',
        id:2,
        songname:"Guli Mata",
        poster:"./Images/guli mata.jpg",
        lyrics:"Jagi Hu, Na Soi Hu Khayalon Mein Tere, Khoi Hu Jagi Hu, Na Soi Hu Khayalon Mein Tere, Khoi Hu Guli Mata Nchoufek Ana Mata",
        song:"https://drive.google.com/uc?export=download&id=1rgk3N7yahheMrhqSa3vCDokZWFv9Aw5q",
        singers:"Saad Lamjarred, Shreya Ghoshal"
    },
    {
        srno:'03',
        id:3,
        songname:"Yadav Brand 2",
        poster:"./Images/yadav brand.jpg",
        lyrics:"Maran ki baat kare tere ke Aukaat bahar re chora rao sahab ke Mazak thodi hai, Re jonsa bhi mahare beta haath laavega Saala pachtavega na sukh paavega sun kaan kholke",
        song:"https://drive.google.com/uc?export=download&id=19CzeX56z7UEBi7wVAThTLKKx_F-ckzp2",
        singers:"Sunny Yaduvanshi, AK Rok"
    },
    {
        srno:'04',
        id:4,
        songname:"Kun Faaya Kun",
        poster:"./Images/kunfaya.jpg",
        lyrics:"Kadam badha le Haddon ko mita le Aaja khaalipan mein pee ka ghar tera Tere bin khaali aaja khaalipan mein Tere bin khaali aaja khaalipan mein",
        song:"https://drive.google.com/uc?export=download&id=1eSNFue3ob6l1MrWVwCnzwkxgZQnNNkWd",
        singers:"A.R. Rahman, Javed Ali, Mohit Chauhan"
    },
    {
        srno:'05',
        id:5,
        songname:"UnStopable",
        poster:"./Images/unstopable.jpeg",
        lyrics:"All smiles, I know what it takes to fool this town I'll do it 'til the sun goes down And all through the nighttime Oh, yeah",
        song:"https://drive.google.com/uc?export=download&id=1NoPQHj5Jf082boneN4-ZoFPHe-wLxtfD",
        singers:"Sia"
    },
    {
        srno:'06',
        id:6,
        songname:"Believer",
        poster:"./Images/believer.jpg",
        lyrics:"First things first I'ma say all the words inside my head I'm fired up and tired of the way that things have been, oh-ooh The way that things have been, oh-ooh",
        song:"https://drive.google.com/uc?export=download&id=1fOC3FNuDYaMOmXJ77n-URuO2x24FFpNo",
        singers:"Imagine Dragons"
    },
    {
        srno:'07',
        id:7,
        songname:"Memories",
        poster:"./Images/memories.jpg",
        lyrics:"Here's to the ones that we got Cheers to the wish you were here, but you're not 'Cause the drinks bring back all the memories Of everything we've been through",
        song:"https://drive.google.com/uc?export=download&id=16cBD26qamU2cA_2gp51y-z8bADvUGePD",
        singers:"Maroon 5"
    },
    {
        srno:'08',
        id:8,
        songname:"Gasolina",
        poster:"./Images/gasolina.webp",
        lyrics:"Mamita, yo sé que tú no te me vas a quitar (duro) Lo que me gusta es que tú te dejas llevar (duro) To' los weekenes ella sale a vacilar (duro)",
        song:"https://drive.google.com/uc?export=download&id=1tg3j4QHVeX0hbfwmJpfAhKAby5OPVwhQ",
        singers:"Daddy Yankee"
    },
    {
        srno:'09',
        id:9,
        songname:"Criminal",
        poster:"./Images/criminal.jpg",
        lyrics:"He is a hustler, he's no good at all He is a loser, he's a bum-bum-bum-bum He lies, he bluffs, he's unreliable He's is a sucker with a gun-gun-gun-gun",
        song:"https://drive.google.com/uc?export=download&id=13YYm7ZhaJyi9vg1hkkqQmroJQVsZEA8d",
        singers:"Britney Spears"
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
    songPlay();
});

function songPlay(){
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        playtopause(Playbtn);

        
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        Pausetoplay(Playbtn);
    }
}
//  PLAY AND PAUSE BUTTON UPDATE
function playtopause(btn){
    btn.classList.replace('bi-play-fill','bi-pause-fill');
}
function Pausetoplay(btn){
    btn.classList.replace('bi-pause-fill','bi-play-fill');
}

// PENDING WORKS 
// 1 BACKGROUD COLOR CHANGE OF THE SELECTED SONG;
// 2 UPDATING SMALL PLAY BUTTON (NOT NESSECARRY);

// SONG PLAYING FUNCTION
let songArray = document.getElementsByClassName('songlist');
Array.from(songArray).forEach((song)=>{
    song.addEventListener('click',(ele)=>{
        console.log(ele.target.id);
        console.log(ele.target);
        SongSelect(ele.target.id);
        songPlay();
    })
})
// TITLE UPDATING EVERYWHERE
let selectimg = document.getElementById('poster_master_play');
let selectSongTitle = document.getElementById('title');
let selectsub = document.querySelector('#title .subtitle');
let selectMain = document.querySelector('.content h1');
let lyrics = document.querySelector('.content p');
// SONG SELECT WILL UPDATE THE TITLES 
function SongSelect(num){
    for(let ele of Album){
        if(ele.srno == num){
            updatingTitles(ele); 
        }
    }
}
function updatingTitles(obj){
    // MUSIC UPDATE
    music.src = obj.song;
    // TITLES UPDATE
    selectimg.src = obj.poster;
    selectsub.innerText = obj.singers;
    selectSongTitle.innerHTML = obj.songname;
    selectSongTitle.appendChild(selectsub);
    selectMain.innerText = obj.songname;
    lyrics.innerText = obj.lyrics;
}
function initialSelectedSong(song){
    updatingTitles(song);
}
initialSelectedSong(Album[4]);


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

//SEEK AND TIME UPDATING & SEEK;
let currentStart = document.getElementById('currentstart');
let currentEnd = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('bardot');

let vol = document.getElementById('vol');
let volbar = document.getElementById('volbar');
let vol_dot = document.getElementById('vol_dot');
let vol_icon = document.getElementById('vol_icon');

music.addEventListener('timeupdate',()=>{
    let music_curr_time = music.currentTime;
    let music_duration = music.duration;
    let remaining_duration = music_duration-music_curr_time;
    // Current time update;
        let minc = Math.floor(music_curr_time / 60);
        let secc = Math.floor(music_curr_time % 60);
        if(secc < 10){
            secc = `0${secc}`;
        }
        minc = `0${minc}`;
        currentStart.innerText = `${minc}:${secc}`;
        console.log(`${minc}:${secc}`);
    // -----------------------
    // End Time Update In;
        let mind = Math.floor(remaining_duration / 60);
        let secd = Math.floor(remaining_duration % 60);
        if(secd < 10){
            secd = `0${secd}`;
        }
        mind = `0${mind}`;
        currentEnd.innerText = `${mind}:${secd}`;
    //-------------------------
    // Seek Updating
    let progressbar = parseInt((music_curr_time / music_duration) * 100);
    seek.value = progressbar;
    bar2.style.width = `${seek.value}%`;
    dot.style.left = `${seek.value}%`;
    console.log(seek);
})
seek.addEventListener('input',()=>{
    music.currentTime = seek.value * music.duration / 100;
})
    // INITIAL VOLUME WILL BE FULL AND SONG SEEK
    function initialvolume(){
        vol.value = 100;
        updateVolumeIcon();
        volumeSeekDotVolume();
        seek.value = 0;

    }
    initialvolume();

    // VOLUME CHANGING
vol.addEventListener('input',()=>{
    updateVolumeIcon();
    volumeSeekDotVolume();
})
function volumeSeekDotVolume(){
    volbar.style.width = `${vol.value}%`;
    vol_dot.style.left = `${vol.value}%`;
    music.volume = vol.value /100;
}

function updateVolumeIcon(){
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-up-fill');

        vol_icon.classList.add('bi-volume-mute-fill');
    }
    else if(vol.value < 50){
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');

        vol_icon.classList.add('bi-volume-down-fill');
    }
    else{
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-down-fill');

        vol_icon.classList.add('bi-volume-up-fill');
    }
}