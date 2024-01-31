console.log("welcome to spotify")
let songIndex=0;
let audioElement =new Audio('')
let masterPlay =document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs=[
    {songname:"1",filepath:"",coverpath:""}
    {songname:"1",filepath:"",coverpath:""}
    {songname:"1",filepath:"",coverpath:""}
    {songname:"1",filepath:"",coverpath:""}
    {songname:"1",filepath:"",coverpath:""}
    {songname:"1",filepath:"",coverpath:""}
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

    }
})
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})