console.log("heyy");
let songindex=0;
let audioelement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songname:"Blank Space", filepath:"spotify clone/a.mp3", coverpath:"img/cover1.jpg"},
    {songname:"All_Of_The_Girls_You_Loved_Before", filepath:"spotify clone/b.mp3", coverpath:"img/cover2.jpg"},
    {songname:"Gorgeous", filepath:"spotify clone/c.mp3", coverpath:"img/cover3.jpg"},
    {songname:"Cruel-Summer", filepath:"spotify clone/d.mp3", coverpath:"img/cover4.jpg"},
    {songname:"You_Need_To_Calm_Down", filepath:"spotify clone/oo.mp3", coverpath:"img/cover5.jpg"},
]

songItem.forEach((element,i)=>{
      element.getElementsByTagName("img")[0].src=songs[i].coverpath;
      element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
      
})

// play/pause
console.log('play');
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;
        
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})
// listen to events
audioelement.addEventListener('timeupdate',()=>{
    // update seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
    audioelement.currentTime=progressbar.value*audioelement.duration/100; 
})

const makeallPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
        gif.style.opacity=1;
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.addEventListener('click',(e)=>{
        makeallPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioelement.src=`${index+1}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');    
        
        
      })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=4){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioelement.src=`${songindex+1}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');  
    gif.style.opacity=1;  
    
})
document.getElementById('back').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioelement.src=`${songindex+1}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');    
    
})