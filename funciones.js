/* const edad = prompt("Captura tu edad");

const calculoEdad = (edad) => {
    if(edad < 0 || edad > 100) {
        console.log('error. Edad erronea');
    }else if (edad < 18) {
        console.log('eres mayor de edad');
    }else if (edad > 18 ) {console.log('eres mayor de edad');}
}
calculoEdad(edad);
 */
const num = prompt("Dia de la semana");

const dia = (num) => {
    if(num == 1){console.log("es Lunes");}
    if(num == 2){console.log("es Martes");}
    if(num == 3){console.log("es Miercoles");}
    if(num == 4){console.log("es Jueves");}
    if(num == 5){console.log("es Viernes");}
    if(num == 6){console.log("es Sabado");}
    if(num == 7){console.log("es Domingo");}
    else {console.log("no es un numero de la semana");}
}
dia(num);