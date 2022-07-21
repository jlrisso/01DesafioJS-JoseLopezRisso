
/**
 * 
 * @Author: JOSE LOPEZ RISSO 
 * @Email: jal.risso@gmail.com
 * @Date: 18-07-2022 
 * @License: 
 * 
 * 
 **/



let myNumber = Number(prompt("Escribi cualquier numero distinto de 0: "));
console.log(myNumber);

while(myNumber){  //Mientras sea un numero -> EJECUTAR 
    
    //Checkear condicion de PAR
    if (myNumber %2 === 0) console.log("El numero: "+myNumber+" es par");
    else console.log("El numero: "+myNumber+" no es par");

    //Checkear condicion de POSITIVO
    if (myNumber > 0) console.log("El numero: "+myNumber+" es positivo (+)");
    else console.log("El numero: "+myNumber+" es negativo (-)");

    //Pedir numero nuevamente
    myNumber = Number(prompt("Escribi un numero: "));

}

