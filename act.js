
p.style.fontWeight = "bold";
p.style.fontSize = "80pt";

pasko.style.width = "50%";
pasko.style.height = "500px";
pasko.style.fontFamily = "sans-serif";
pasko.style.margin = "50px";
p.style.padding = "50px";

const text = document.getElementById("pasko");
function sparkling(){
    //kinuha yung text
    let red = Math.floor(Math.random() *256); 
    let green = Math.floor(Math.random() *256); 
    let blue = Math.floor(Math.random() *256); 
    let zz = "rgb(" +red +"," +green+","+blue  +   ")";
    //alert(zz);
    pasko.style.backgroundColor =  zz ;
    document.getElementById("current").textContent = zz;
    
}

function start(){
    start_color = setInterval(sparkling, 100);
}

function stop(){
    clearInterval(start_color);
}
