function calcularPuntuacion() {
    // Puedes agregar aquí la lógica JavaScript para calcular la puntuación total.
    // Por ejemplo, actualiza la columna 'Total' con la suma de todas las puntuaciones.
     // Obtener los valores de los inputs

var score11 = Number(document.getElementById("score11").value);
var score12 = Number(document.getElementById("score12").value);
var score13 = Number(document.getElementById("score13").value);
var score14 = Number(document.getElementById("score14").value);
var score15 = Number(document.getElementById("score15").value);
var score16 = Number(document.getElementById("score16").value);
var score17 = Number(document.getElementById("score17").value);
var score172 = Number(document.getElementById("score172").value);
var score18 = Number(document.getElementById("score18").value);
var score19 = Number(document.getElementById("score19").value);
var score110 = Number(document.getElementById("score110").value);
var score111 = Number(document.getElementById("score111").value);
var score112 = Number(document.getElementById("score112").value);
var score113 = Number(document.getElementById("score113").value);
var score114 = Number(document.getElementById("score114").value);

var score21 = Number(document.getElementById("score21").value);
var score22 = Number(document.getElementById("score22").value);
var score23 = Number(document.getElementById("score23").value);
var score24 = Number(document.getElementById("score24").value);
var score25 = Number(document.getElementById("score25").value);
var score26 = Number(document.getElementById("score26").value);
var score27 = Number(document.getElementById("score27").value);
var score272 = Number(document.getElementById("score272").value);
var score28 = Number(document.getElementById("score28").value);
var score29 = Number(document.getElementById("score29").value);
var score210 = Number(document.getElementById("score210").value);
var score211 = Number(document.getElementById("score211").value);
var score212 = Number(document.getElementById("score212").value);
var score213 = Number(document.getElementById("score213").value);
var score214 = Number(document.getElementById("score214").value);

var score31 = Number(document.getElementById("score31").value);
var score32 = Number(document.getElementById("score32").value);
var score33 = Number(document.getElementById("score33").value);
var score34 = Number(document.getElementById("score34").value);
var score35 = Number(document.getElementById("score35").value);
var score36 = Number(document.getElementById("score36").value);
var score37 = Number(document.getElementById("score37").value);
var score372 = Number(document.getElementById("score372").value);
var score38 = Number(document.getElementById("score38").value);
var score39 = Number(document.getElementById("score39").value);
var score310 = Number(document.getElementById("score310").value);
var score311 = Number(document.getElementById("score311").value);
var score312 = Number(document.getElementById("score312").value);
var score313 = Number(document.getElementById("score313").value);
var score314 = Number(document.getElementById("score314").value);

var score41 = Number(document.getElementById("score41").value);
var score42 = Number(document.getElementById("score42").value);
var score43 = Number(document.getElementById("score43").value);
var score44 = Number(document.getElementById("score44").value);
var score45 = Number(document.getElementById("score45").value);
var score46 = Number(document.getElementById("score46").value);
var score47 = Number(document.getElementById("score47").value);
var score472 = Number(document.getElementById("score472").value);
var score48 = Number(document.getElementById("score48").value);
var score49 = Number(document.getElementById("score49").value);
var score410 = Number(document.getElementById("score410").value);
var score411 = Number(document.getElementById("score411").value);
var score412 = Number(document.getElementById("score412").value);
var score413 = Number(document.getElementById("score413").value);
var score414 = Number(document.getElementById("score414").value);

var score51 = Number(document.getElementById("score51").value);
var score52 = Number(document.getElementById("score52").value);
var score53 = Number(document.getElementById("score53").value);
var score54 = Number(document.getElementById("score54").value);
var score55 = Number(document.getElementById("score55").value);
var score56 = Number(document.getElementById("score56").value);
var score57 = Number(document.getElementById("score57").value);
var score572 = Number(document.getElementById("score572").value);
var score58 = Number(document.getElementById("score58").value);
var score59 = Number(document.getElementById("score59").value);
var score510 = Number(document.getElementById("score510").value);
var score511 = Number(document.getElementById("score511").value);
var score512 = Number(document.getElementById("score512").value);
var score513 = Number(document.getElementById("score513").value);
var score514 = Number(document.getElementById("score514").value);

var score61 = Number(document.getElementById("score61").value);
var score62 = Number(document.getElementById("score62").value);
var score63 = Number(document.getElementById("score63").value);
var score64 = Number(document.getElementById("score64").value);
var score65 = Number(document.getElementById("score65").value);
var score66 = Number(document.getElementById("score66").value);
var score67 = Number(document.getElementById("score67").value);
var score672 = Number(document.getElementById("score672").value);
var score68 = Number(document.getElementById("score68").value);
var score69 = Number(document.getElementById("score69").value);
var score610 = Number(document.getElementById("score610").value);
var score611 = Number(document.getElementById("score611").value);
var score612 = Number(document.getElementById("score612").value);
var score613 = Number(document.getElementById("score613").value);
var score614 = Number(document.getElementById("score614").value);


// Agrega más variables para los demás números
// Calcular el total de la primera fila
var total1 = score11 + score12 + score13 + score14 + score15 + score16;  // Agrega más sumas para los demás números
document.getElementById("total1").value = total1;
// Calcular la bonificación
var bonus1 = total1 >= 63 ? 25 : 0;
document.getElementById("bonus1").value = bonus1;
// Calcular el total final
var finalTotal1 = total1 + bonus1 + score17+ score172 + score18 + score19 + score110 + score111 + score112 + score113 + score114;
document.getElementById("finalTotal1").value = finalTotal1;

// Sumar todos los valores de los inputs y mostrar el resultado en el último input deshabilitado
//var sumaTotal = score11 + score12 /* Agrega más sumas para los demás números */;
// document.getElementById("totalGeneral").value = sumaTotal;


var total2 = score21 + score22 + score23 + score24 + score25 + score26;  // Agrega más sumas para los demás números
document.getElementById("total2").value = total2;
// Calcular la bonificación
var bonus2 = total2 >= 63 ? 25 : 0;
document.getElementById("bonus2").value = bonus2;
// Calcular el total final
var finalTotal2 = total2 + bonus2 + score27 + score272 + score28 + score29 + score210 + score211 + score212 + score213 + score214;
document.getElementById("finalTotal2").value = finalTotal2;


var total3 = score31 + score32 + score33 + score34 + score35 + score36;  // Agrega más sumas para los demás números
document.getElementById("total3").value = total3;
// Calcular la bonificación
var bonus3 = total3 >= 63 ? 25 : 0;
document.getElementById("bonus3").value = bonus3;
// Calcular el total final
var finalTotal3 = total3 + bonus3 + score37 + score372 + score38 + score39 + score310 + score311 + score312 + score313 + score314;
document.getElementById("finalTotal3").value = finalTotal3;



var total4 = score41 + score42 + score43 + score44 + score45 + score46;  // Agrega más sumas para los demás números
document.getElementById("total4").value = total4;
// Calcular la bonificación
var bonus4 = total4 >= 63 ? 25 : 0;
document.getElementById("bonus4").value = bonus4;
// Calcular el total final
var finalTotal4 = total4 + bonus4 + score47 + score472 + score48 + score49 + score410 + score411 + score412 + score413 + score414;
document.getElementById("finalTotal4").value = finalTotal4;



var total5 = score51 + score52 + score53 + score54 + score55 + score56;  // Agrega más sumas para los demás números
document.getElementById("total5").value = total5;
// Calcular la bonificación
var bonus5 = total5 >= 63 ? 25 : 0;
document.getElementById("bonus5").value = bonus5;
// Calcular el total final
var finalTotal5 = total5 + bonus5 + score57 + score572 + score58 + score59 + score510 + score511 + score512 + score513 + score514;
document.getElementById("finalTotal5").value = finalTotal5;



var total6 = score61 + score62 + score63 + score64 + score65 + score66;  // Agrega más sumas para los demás números
document.getElementById("total6").value = total6;
// Calcular la bonificación
var bonus6 = total6 >= 63 ? 25 : 0;
document.getElementById("bonus6").value = bonus6;
// Calcular el total final
var finalTotal6 = total6 + bonus6 + score67 + score672 + score68 + score69 + score610 + score611 + score612 + score613 + score614;
document.getElementById("finalTotal6").value = finalTotal6;
}

function iniciarSiguienteJuego() {
    // Puedes agregar aquí la lógica para reiniciar el siguiente juego.
    
    // Por ejemplo, cambia automáticamente la posición de los jugadores.
    location.reload();

}

function reiniciarPosiciones() {
    var table = document.getElementById('yatzyTable');
    var rows = table.getElementsByTagName('tr');

    // Variables para rastrear al ganador
    var maxTotal = 0;
    var ganadorNombre = '';

    for (let i = 1; i < rows.length; i++) {
        var playerName = rows[i].querySelector('td:first-child input').value;
        var totalScore = parseInt(rows[i].querySelector('td:last-child input').value) || 0;

        // Comparar los totales para determinar al ganador
        if (totalScore > maxTotal) {
            maxTotal = totalScore;
            ganadorNombre = playerName;
        }

        // Actualizar las clases CSS según la lógica previa
        if (totalScore > 100) {
            rows[i].classList.add('ganador');
        } else {
            rows[i].classList.remove('ganador');
        }
    }

    // Mostrar al ganador en la ventana emergente
    document.getElementById('ganadorNombre').textContent = ganadorNombre;
    openForm();
}

// Función para abrir la ventana emergente
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Función para cerrar la ventana emergente
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

 // Función para mostrar las reglas al hacer clic en el botón
 document.getElementById("mostrarReglas").addEventListener("click", function() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "block"; // Cambia "none" a "block" para mostrar las reglas
});