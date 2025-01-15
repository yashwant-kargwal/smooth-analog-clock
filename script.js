// Yashwant Kargwal
// 16 Jan 2025
// very smooth analog Animation clock

function repeat(){
    const now = new Date();
  
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let milli = now.getMilliseconds();
  
    // For Hour Hand 
    let hourDeg = h * 30 + m*0.5;
    let hourHand = document.querySelector(".hour");
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
  
    // For Minute Hand
    let minDeg = m*6 + s*0.1;
    let minHand = document.querySelector(".min");
    minHand.style.transform = `rotate(${minDeg}deg)`;
  
    // For Second Hand
    let secDeg = s*6 + milli*0.006;
    let secHand = document.querySelector(".sec");
    secHand.style.transform =`rotate(${secDeg}deg)`;
  }
  setInterval(repeat,1);
  repeat();