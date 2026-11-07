var nombre ="";
if(nombre=="Miguel")
{
    alert("Aun no nos ha dicho tu nombre");
}
else
{
    alert("Hemos guardado tu nombre");
}

var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
for(var i=0; i<7; i++){
    alert(dias[i]);
}
var parrafo = document.getElementById("mensajePrueba");

if (parrafo) {
    parrafo.addEventListener("click", function() {
        alert("un mensaje de prueba");
    });
}