let contador = 0;
function generaraleatorio(){
    var numero=Math.floor(Math.random()*5)+1;
    document.getElementById("n").innerHTML= "Elegimos la img: #" + numero;
    if (numero == 1) {
        document.getElementById('img').src='ranpopato.png', document.getElementById('fondo').style.backgroundColor='#ffca4e';
        contador++;
    }
    else if (numero == 2){
        document.getElementById('img').src='ranpogato.png', document.getElementById('fondo').style.backgroundColor='#e180ac';
        contador++;
    }
    else if (numero == 3){
        document.getElementById('img').src='ranpocel.png', document.getElementById('fondo').style.backgroundColor='#c1afc6';
        contador++;
    }
    else if (numero == 4){
        document.getElementById('img').src='ranpojoven.png', document.getElementById('fondo').style.backgroundColor='#a5d8dc';
        contador++;
    }
    else if (numero == 5){
        document.getElementById('img').src='ranpoog.png', document.getElementById('fondo').style.backgroundColor='#c4d69e';
        contador++;
    }
    document.getElementById("c").innerHTML= "# clicks= " + contador;
}