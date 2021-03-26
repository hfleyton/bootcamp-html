// Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y. 
function mayorQueY(arr, y){
    var cont = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            cont++;
        }
    }
    console.log("cantidad Valores mayores que", y, ":", cont);
}
mayorQueY([4,2,3,50,-30,122], 0);

// Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. 
function maxMinProm(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++){
        sum += arr[i];
        if (arr[i] > max){
            max = arr[i];
        }else if (arr[i] < min){
            min = arr[i];
        }
    }
    console.log("Max:", max,"Min:", min,"Prom:", sum/arr.length);
}
maxMinProm([4,2,3,50,-30,122])

// Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].
function reemplazarNegativos(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}

var result = reemplazarNegativos([1,2,-3,-5,5]);
console.log(result); 

//Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].
function removervalores(arr, inicio, termino){
    var offset = termino-inicio+1;
    for (var i = inicio; i <= offset; i++){
        arr[i] = arr[i+offset];
    }
    console.log(arr);
    arr.length = arr.length - offset;
    return arr;
}
var result = removervalores([20,30,40,50,60,70],2,4);
console.log(result); 