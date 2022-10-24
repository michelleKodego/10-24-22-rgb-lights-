
p.style.fontWeight = "bold";
p.style.fontSize = "3rem";

pasko.style.width = "15rem";
pasko.style.height = "50%";
pasko.style.fontFamily = "sans-serif";
pasko.style.border = "solid 2px black";
pasko.style.padding = "2rem";

current.style.fontWeight = "bold";

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
