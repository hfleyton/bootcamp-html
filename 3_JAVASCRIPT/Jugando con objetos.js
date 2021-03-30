var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

/* ¿Cómo harías print/log de la edad de John? */
for(var i=0; i < users.length; i++){
    var obj = users[i];
    if(obj.name == "John"){ 
        console.log("La edad de John es " + obj.age + " años")
    }
}

/* ¿Cómo harías print/log del nombre del primer objeto? */
for(var i=0; i < users.length; i++){
    var obj = users[i];
    if(i == 0){ 
        console.log("El nombre es " + obj.name)
    }
}

/* ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto*/
for(var i=0; i < users.length; i++){
    var obj = users[i]; 
    console.log(obj.name + " - "+obj.age);
}

/* ¿Cómo harías para imprimir el nombre de los mayores de edad? */
for(var i=0; i < users.length; i++){
    var obj = users[i];
    if(obj.age >= 18){ 
        console.log("El nombre es " + obj.name)
    }
}