let num = 1;
let imagen = document.getElementById("caja");
let text = document.getElementById("mostrar");
imagen.src = "P"+ num +".JPG";
let mostrar = new Array("T1","T2","T3","T4","T5","T6","T7","T8","T9","T10");

function cambioimagen(img, titulo){
	let imagengrande = document.getElementById("caja");
	imagengrande.src = img;
	text.innerHTML = titulo;
}
function cambiartexto(){
    let ocultar = document.getElementById("ocuinf"); 
    let ver = document.getElementById("verinf");
    let inf = document.getElementById("t"+num);
    //inf.style.display = "block";
    //ver.style.display = "none";
    //ocultar.style.display = "block";
	if(text.style.display == "block"){
		text.style.display = "none";
	}else{
		text.style.display = "block";
	}
	
	
}
function anterior(){
    let img = document.getElementById("caja");
    num--;
    if (num < 1) {
        num = 10;
    }
    img.src = "P"+ num +".JPG"; 
    console.log(img.src)
}

function siguiente(){
    let img = document.getElementById("caja");
    num++;
    if (num > 10) {
        num = 1;
    }
    img.src = "P"+ num +".JPG"; 
}
function noche(){
    document.body.style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("boton1").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("boton1").style.color = "white";
    document.getElementById("boton1").style.border = "2px solid #fff";

    document.getElementById("boton2").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("boton2").style.color = "white";
    document.getElementById("boton2").style.border = "2px solid #fff";

    document.getElementById("noche").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("noche").style.color = "white";
    document.getElementById("noche").style.border = "2px solid #fff";

    document.getElementById("red").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("red").style.color = "white";
    document.getElementById("red").style.border = "2px solid #fff";

    document.getElementById("normal").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("normal").style.color = "white";
    document.getElementById("normal").style.border = "2px solid #fff";

    document.getElementById("verinformacion").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("verinformacion").style.color = "white";
    document.getElementById("verinformacion").style.border = "2px solid #fff";

    document.getElementById("ocultarinf").style.backgroundColor = "rgb(24,24,24)";
    document.getElementById("ocultarinf").style.color = "white";
    document.getElementById("ocultarinf").style.border = "2px solid #fff";

    document.getElementById("showinf").style.color = "white";
}

function red(){
    document.body.style.backgroundColor = "rgb(255,0,0)";
    document.getElementById("boton1").style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("boton1").style.color = "rgb(24,24,24)";
    document.getElementById("boton1").style.border = "2px solid rgb(24,24,24)";

    document.getElementById("boton2").style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("boton2").style.color = "rgb(24,24,24)";
    document.getElementById("boton2").style.border = "2px solid rgb(24,24,24)";

    document.getElementById("noche").style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("noche").style.color = "rgb(24,24,24)";
    document.getElementById("noche").style.border = "2px solid rgb(24,24,24)";

    document.getElementById("red").style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("red").style.color = "rgb(24,24,24)";
    document.getElementById("red").style.border = "2px solid rgb(24,24,24)";

    document.getElementById("normal").style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("normal").style.color = "rgb(24,24,24)";
    document.getElementById("normal").style.border = "2px solid rgb(24,24,24)";

    document.getElementById("verinformacion").style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("verinformacion").style.color = "rgb(24,24,24)";
    document.getElementById("verinformacion").style.border = "2px solid rgb(24,24,24)";

    document.getElementById("ocultarinf").style.backgroundColor = "rgb(224,176,86)";
    document.getElementById("ocultarinf").style.color = "rgb(24,24,24)";
    document.getElementById("ocultarinf").style.border = "2px solid rgb(24,24,24)";

    document.getElementById("showinf").style.color = "rgb(24,24,24)";
}

function normal(){
    document.body.style.backgroundColor = "rgb(250,250,250)";
    document.getElementById("boton1").style.backgroundColor = "rgb(250,0,0)";
    document.getElementById("boton1").style.color = "white";
    document.getElementById("boton1").style.border = "2px solid #000";

    document.getElementById("boton2").style.backgroundColor = "rgb(250,0,0)";
    document.getElementById("boton2").style.color = "white";
    document.getElementById("boton2").style.border = "2px solid #000";

    document.getElementById("noche").style.backgroundColor = "rgb(250,0,0)";
    document.getElementById("noche").style.color = "white";
    document.getElementById("noche").style.border = "2px solid #000";

    document.getElementById("red").style.backgroundColor = "rgb(250,0,0)";
    document.getElementById("red").style.color = "white";
    document.getElementById("red").style.border = "2px solid #000";

    document.getElementById("normal").style.backgroundColor = "rgb(250,0,0)";
    document.getElementById("normal").style.color = "white";
    document.getElementById("normal").style.border = "2px solid #000";

    document.getElementById("verinformacion").style.backgroundColor = "rgb(250,0,0)";
    document.getElementById("verinformacion").style.color = "white";
    document.getElementById("verinformacion").style.border = "2px solid #000";

    document.getElementById("ocultarinf").style.backgroundColor = "rgb(250,0,0)";
    document.getElementById("ocultarinf").style.color = "white";
    document.getElementById("ocultarinf").style.border = "2px solid #000";

    document.getElementById("showinf").style.color = "rgb(24,24,24)";
}