//Comentario
/*Comentarios
en
Bloques
*/
//Condicionales
//Condiciones simples
let miEdad = 20;
if (miEdad >= 18) {
    console.log('Bienvenid@');
}

//Condicones compuestas
let fruta = 'manzana';
if (fruta == 'pera') {
    console.log('Veo que te gustan las peras');
} else {
    console.log('Veo que no te gustan las frutas');
}

//Condiciones anidadas - multiples
let color = 'violeta';
if (color == 'rojo') {
    console.log('Veo que te gusta el color rojo');
} else if (color == 'azul') {
    console.log('Veo que te gusta el color azul');
} else if (color == 'amarillo') {
    console.log('Veo que te gusta el color amarillo');
} else if (color == 'verde') {
    console.log('Veo que te gusta el color verde');
} else {
    console.log('Debes indicar un color: rojo - azul - amarillo - verde');
}

// if...else if...else
let edad = 10;
if (edad < 18) {
 console.log('Menor de edad');
} else if (edad === 18) {
 console.log('Exactamente 18 años');
} else {
 console.log('Mayor de edad');
}


//if ternario
let valor1 = 10;
let valor2 = 20;
(valor1 >= valor2) ? console.log(valor1 + valor2): console.log(valor1 * valor2);

//Switch
let dia = 'domingo';
switch (dia) {
    case 'lunes':
        console.log('Iniciando la semana');
        break;
    case 'martes':
        console.log('Vamos de a poco');
        break;
    case 'miercoles':
        console.log('Vamos a mitad de semana');
        break;
    default:
        console.log('Debes especificar un día de la semana: lunes a viernes');
        break;
}


