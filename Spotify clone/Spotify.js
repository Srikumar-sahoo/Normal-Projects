console.log("Welcome to Spotify")

//intialize the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Agar Tum Sath Ho(Alka yagnik,Arjit Singh)", filePath: "song/1.mp3", coverPath: "covers/song1.jpg" },
    { songName: "Khairiyat(Pritam,Arjit singh)", filePath: "song/2.mp3", coverPath: "covers/song2.jpg" },
    { songName: "Abhi Mujh Me Kahin(Ajay-Atul,sonu Nigam", filePath: "song/3.mp3", coverPath: "covers/song3.jpg" },
    { songName: "Hua Hai (Arman malik,Palak Muchaal,Amaal Malik)", filePath: "song/4.mp3", coverPath: "covers/song4.jpg" },
    { songName: "Matargashti (Mohit Chauhan) ", filePath: "song/5.mp3", coverPath: "covers/song5.jpeg" },
    { songName: "Before You Go(Lewis Capaldi)", filePath: "song/6.mp3", coverPath: "covers/song6.jpg" },
    { songName: "Heat Waves(Glass Animals)", filePath: "song/7.mp3", coverPath: "covers/song7.jpg" },
    { songName: "When You're Gone(Shawn Mendes)", filePath: "song/8.mp3", coverPath: "covers/song8.jpg" },
    { songName: "Save Your Tears(The Weekend)", filePath: "song/9.mp3", coverPath: "covers/song9.jpg" },
    { songName: "Sawaar Loon(Monali Thakur)", filePath: "song/10.mp3", coverPath: "covers/song10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].InnerText = songs[i].songName;
});
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// audioElement.play()
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex + 1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})