//Ejercicio 1
let notaMayor = 0;
let notaMenor = 0;
let notas = parseInt(prompt('Ingrese la cantidad de notas a revisar'));
let arrayNotas = new Array(notas);

for (let i = 0; i < arrayNotas.length; i++) {
    notas = prompt('Ingrese la ' + (i+1) + 'ª nota.');

    if (notas>=7) {
        console.log(notas);
        alert('La nota es mayor o igual a 7');
        notaMayor++;
    }else{
        console.log(notas);
        alert('La nota es menor que 7');
        notaMenor++;
    }
}
console.log('Notas mayores o iguales a 7: ' + notaMayor);
alert('Notas mayores o iguales a 7: ' + notaMayor);
console.log('Notas menores a 7: ' + notaMenor);
alert('Notas menores a 7: ' + notaMenor);

//Ejercicio 2
let altura = 0;
let totalAlturas = 0;
let personas = parseInt(prompt('Ingrese la cantidad de personas a medir'));
let arrayPersonas = new Array(personas);

for (let i = 0; i < arrayPersonas.length; i++) {
    altura = parseInt(prompt('Introduzca la altura de la ' + (i+1) + 'ª persona.'));
    console.log(altura);
    totalAlturas += altura;
    
}

let media = totalAlturas/personas;

console.log('Cantidad de personas talladas: ' + personas);
console.log('El total de las alturas es: ' + totalAlturas);
console.log('La media de las alturas es: ' + media);

//Ejercicio 3
let sueldo;
let mas300 = 0;
let menos300 = 0;
let sueldoTotal = 0;
let otroSueldo = 0;
let empleados = parseInt(prompt('Ingrese la cantidad de empleados'));
let arrayEmpleados = new Array(empleados);

 for (let i = 0; i < empleados; i++) {
     sueldo = parseInt(prompt('Introduzca el sueldo del empleado ' + (i+1)));

     if (sueldo >=100 && sueldo <=500) {
         
        if (sueldo >= 100 && sueldo <= 300)  {
            alert('El empleado cobra entre 100€ y 300€');
            console.log(sueldo);
            menos300 ++;
        }else{
            alert('El empleado cobra entre 300€ y 500€');
            console.log(sueldo);
            mas300 ++;
        }
     }else{
         alert('Ha introducido un sueldo que no está entre 100€ y 500€');
         console.log(sueldo);
         otroSueldo ++;
     }
     
     sueldoTotal += sueldo;
     console.log(sueldoTotal);
 }

 alert('Empleados que cobran entre 100€ y 300€: ' + menos300)
 alert("Empleados que cobran entre 300€ y 500€: " + mas300)
 alert("Empleados que cobran otros sueldos: " + otroSueldo)
 alert("Sueldo total del personal: " + sueldoTotal)
