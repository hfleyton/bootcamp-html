/* 1_Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255. */
function uno(){
    array = [];
    for(var i=0; i<= 255; i++){
        array.push(i)
    }
    return array;
 }

/* 2_Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.*/

function dos(){
    array = [];
    for(var i=1; i<= 1000; i++){
        if(i%2 == 0){
            array.push(i)
        }
    }
    return array;
 }

/* 3_Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).*/
function tres(){
    sum = 0;
    for(var i=1; i<= 5000; i++){
        if(i%2 == 1){
            sum += i
        }
    }
    return sum;
 }

/* 4_Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). */
function cuatro(x){
    sum = 0;
    for(var i=0; i <x.length; i++){
        sum += x[i];
    }
    return sum;
 }

/* 5_Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). */
function cinco(x){
    num = 0;
    for(var i=0; i<x.length; i++){
        if(num < x[i]){
            num = x[i];
        }
    }
    return num;
 }

/* 6_Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).*/
function seis(x){
    sum = 0;
    for(var i=0; i<x.length; i++){
            sum += x[i];
    }
    result = sum / x.length;
    return result;
 }

/* 7_Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.*/
function siete(){
    array = [];
    for(var i=1; i<= 50; i++){
        if(i%2 == 1){
            array.push(i);
        }
    }
    return array;
 }


/* 8_Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). */
function ocho(arr,y){
    salida = [];
    for(var i=0; i<arr.length; i++){
        if(y < arr[i]){
            salida.push(arr[i]);
        }
    }
    return salida;
 }

/* 9_Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).*/
function nueve(x){
    for(var i=0; i<x.length; i++){
        x[i] = x[i] * x[i];
    }
    return x;
 }

/* 10_Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).*/
function diez(x){
    for(var i=0; i<=x.length; i++){
        if(x[i] < 0){
            x[i] = 0;
        }
    }
    return x;
 }

/* 11_Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).*/
function once(x){
    array = [];
    min = 0;
    max = 0;
    sum = 0;
    for(var i=0; i<=x.length; i++){
        sum += x[i];
        if(x[i] > max){
            max = x[i];
        }
        if(x[i] < min){
            min = x[i];
        }
    }
    avg = sum/x.length;
    array.push(max);
    array.push(min);
    array.push(avg);
    return array;
 }

/* 12_Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). */
function doce(x){
    var temp = x[x.length-1];
    x[x.length-1] = x[0];
    x[0] = temp;
    return x;
}

/* 13_De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2] */
function trece(x){
    for (var i=0; i<x.length; i++){
        if (x[i] < 0){
            x[i] = "Dojo";
        }
    }
    return x;
}