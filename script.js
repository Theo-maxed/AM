let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'iwby.jpg',
        name : 'I Wanna Be Yours',
        artist : 'Arctic Monkeys',
        music : 'iwannabeyours.mp3'
    },

    {
        img : 'diwk.jpg',
        name : 'Do I Wanna Know?',
        artist : 'Arctic Monkeys',
         music : 'doiwannaknow.mp3'
    },
    {
        img : '505.jpg',
        name : '505',
        artist : 'Arctic Monkeys',
        music : '505.mp3'
    },
    {
        img : 'wyocmwyh.jpg',
        name : 'Why’d You Only Call Me When You’re High?',
        artist : 'Arctic Monkeys',
        music : 'wyocmwyh.mp3'
    },
    {
        img : 'aum.jpg',
        name : 'R U Mine?',
        artist : 'Arctic Monkeys',
        music : 'rumine.mp3'
    },
    {
        img : 'sooi.jpg',
        name : 'Snap Out Of It',
        artist : 'Arctic Monkeys',
        music : 'sooi.mp3'
    },
    {
        img : 'tbbamb.jpg',
        name : 'There’d Better Be a Mirrorball',
        artist : 'Arctic Monkeys',
        music : 'tbbamb.mp3'
    },
    {
        img : 'Fluorescent_Adolescent.jpg',
        name : 'Fluorescent Adolescent',
        artist : 'Arctic Monkeys',
        music : 'fa.mp3 '
    },
    {
        img : 'arabella.jpg',
        name : 'Arabella',
        artist : 'Arctic Monkeys',
        music : 'arabella.mp3'
    },
    {
        img : 'kneesocks.jpg',
        name : 'Knee Socks',
        artist : 'Arctic Monkeys',
        music : 'kneesocks.mp3'
    },
    {
        img : 'wtsgd.jpg',
        name : 'When The Sun Goes Down',
        artist : 'Arctic Monkeys',
        music : 'wtsgd.mp3'
    },
    {
        img : 'mardybum.jpg',
        name : 'Mardy Bum',
        artist : 'Arctic Monkeys',
        music : 'mardybum.mp3'
    },
    {
        img : 'bodypaint.jpg',
        name : 'Body Paint',
        artist : 'Arctic Monkeys',
        music : 'bodypaint.mp3'
    },
    {
        img : 'brianstorm.jpg',
        name : 'Brianstorm',
        artist : 'Arctic Monkeys',
        music : 'brianstorm.mp3'
    },
    {
        img : 'ibetyoulookgoodonthedancefloor.jpg',
        name : 'I bet You Look Good At The Dancefloor',
        artist : 'Arctic Monkeys',
        music : 'ibylgotdf.mp3'
    },
    {
        img : 'teddypicker.jpg',
        name : 'Teddy Picker',
        artist : 'Arctic Monkeys',
        music : 'teddypicker.mp3'
    },
    {
        img : 'iaqwitia.jpg',
        name : 'I Ain’t Quite Where I Think I Am',
        artist : 'Arctic Monkeys',
        music : 'iaqwitia.mp3'
    },
    {
        img : 'cryingstorm.jpg',
        name : 'Crying Lightning',
        artist : 'Arctic Monkeys',
        music : 'cryinglightning.mp3'
    },
    {
        img : 'n1oa.jpg',
        name : 'No. 1 Party Anthem',
        artist : 'Arctic Monkeys',
        music : 'No. 1 Party Anthem.mp3'
    },
    {
        img : 'soag.jpg',
        name : 'Sculptures Of Anything Goes',
        artist : 'Arctic Monkeys',
        music : 'oyb.mp3'
    },
    {
        img : 'oyb.jpg',
        name : 'Old Yellow Bricks',
        artist : 'Arctic Monkeys',
        music : ''
    },
    {
        img : 'stwiwgowy.jpg',
        name : 'Stop the World I Wanna Get Off With You',
        artist : 'Arctic Monkeys',
        music : 'stwiwgowy.mp3'
    },
    {
        img : '505.jpg',
        name : 'Do Me a Favour',
        artist : 'Arctic Monkeys',
        music : 'Do Me a Favour.mp3'
    },
    {
        img : 'foof.jpg',
        name : 'Four Out Of Five',
        artist : 'Arctic Monkeys',
        music : 'foof.mp3'
    },
    {
        img : 'oftr.jpg',
        name : 'One For The Road',
        artist : 'Arctic Monkeys',
        music : 'oftr.mp3'
    },
    {
        img : 'acr.jpg',
        name : 'A Certain Romance',
        artist : 'Arctic Monkeys',
        music : 'A Certain Romance.mp3'
    },
    {
        img : 'cornerstone.jpg',
        name : 'Cornerstone',
        artist : 'Arctic Monkeys',
        music : 'cornerstone.mp3'
    },
    {
        img : 'ftrttr.jpg',
        name : 'From the Ritz to the Rubble',
        artist : 'Arctic Monkeys',
        music : 'From The Ritz To The Rubble.mp3'
    },
    {
        img : 'jsotm.jpg',
        name : 'Jet Skis On The Moat',
        artist : 'Arctic Monkeys',
        music : 'jsotm.mp3'
    },
    {
        img : 'fireside.jpg',
        name : 'Fireside',
        artist : 'Arctic Monkeys',
        music : 'fireside.mp3'
    },
    {
        img : 'lialq.jpg',
        name : 'Love Is a Laserquest',
        artist : 'Arctic Monkeys',
        music : 'Love is a Laserquest.mp3'
    },
    {
        img : 'biy.jpg',
        name : 'Baby I’m Yours',
        artist : 'Arctic Monkeys',
        music : 'biy.mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);


}


function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
