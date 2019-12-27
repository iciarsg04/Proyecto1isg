var time= new Date();
var color;

if (time== 12) {
    color='red';
}else if(time== 15) {
    color='green';
}else {
    color='yellow';
}

myElement = document.getElementById('timeColor');
myElement.style.backgroundcolor = color;


function names() { var nombres = []; 
    var cont = '';
     var x; for (i = 0; i <= 2; i++) {
          x = prompt("¿De dónde eres?:", ""); 
          nombres.push(x); } for (i = 0; i <= 2; i++)
           { cont += nombres[i] + " "; } document.getElementById("here").innerHTML = cont; }