let minEl = document.getElementById('min')
let segEl = document.getElementById('seg')
let minElP = document.getElementById('minP')
let segElP = document.getElementById('segP')
let dataPause = document.querySelector('.data-pause')
let dataTimer = document.querySelector('.data-timer')
let som = document.getElementById('som')
let over = document.getElementById('over')
let btnStart = document.querySelector('.start')
let btnPause = document.querySelector('.pause')
let btnContinue = document.querySelector('.continue')
let min = 0
let seg = 0
let mili = 0
let intervalo;
document.body.style.backgroundColor = '#040203'

let isPause = false
function start(){

dataPause.style.display = 'none'
  intervalo = setInterval(()=>{

    if(!isPause){
      mili += 10;
    
      if(mili === 1000){
        seg ++;
        mili = 0;
      
      }
      if(seg === 60){
         min++;
         seg = 0;
     
      }
      if(min === 1){
         som.play()
        
         min =0
         seg = 0
        dataTimer.style.display = 'none'
        dataPause.style.display = 'flex'
     
      }
    }
   minEl.textContent = formatMin(min);
   segEl.textContent = formatSeg(seg);
   
   
 
 
  },10)
}
function pausar(){
  isPause = true;

}
function resume(){
  isPause = false;

}
function reset(){
 window.location.reload()

}
function startDescanso(){
  min =0
  seg = 0
  seg = 0
  
  intervalo = setInterval(()=>{
    if(!isPause){
      mili += 10;
    
      if(mili === 1000){
        seg ++;
        mili = 0;
      
      }
      if(seg === 60){
         min++;
         seg = 0;
         
      }
      if(min === 1){
        over.play()
        pausaDescanso()
        min = 0;
        seg = 0;
        
       dataTimer.style.display = 'flex'
    
      }
    }
 
   minElP.textContent = formatMin(min);
   segElP.textContent = formatSeg(seg);
  
  },10)

}
function pausaDescanso(){
  isPause = true;
 
}
function resumeDescanso(){
  isPause = false;
 
}
function formatMin(min){
  return min < 10 ? `0${min}` : min
}
function formatSeg(seg){
  return seg < 10 ? `0${seg}` : seg
}



