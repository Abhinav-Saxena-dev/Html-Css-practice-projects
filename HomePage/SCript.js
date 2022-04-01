function countdown(){
    let now = new Date();
    let eventDate= new Date(2021, 4, 25);
    let current= now.getTime();
    let eventTime=eventDate.getTime();

    let remTime= eventTime - current;

    let s= Math.floor(remTime/1000);
    let m= Math.floor(s/60);
    let h= Math.floor(m/60);
    let d= Math.floor(h/24);

    h%= 24;
    m%= 60;
    s%= 60;

    h = (h<10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;
    
    document.getElementById("days").textContent=d;
    document.getElementById("mins").textContent=m;
    document.getElementById("seconds").textContent=s;
    document.getElementById("hours").textContent=h;

}
setInterval(countdown, 1000);