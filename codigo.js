/* CURSO DE JS COMPLETO */

// Comentarios 

    let Definicion = /* Los comentarios son líneas de código que JavaScript ignorará intencionalmente. Los comentarios son una excelente manera de dejar notas para usted mismo y para otras personas que luego necesitarán descubrir qué hace ese código. */

    let uso = // tenemos dos tipos de comentarios 

        // con las dos barras "//" se comenta unicamente una linea 

        /* de esta manera se pueden 
        comentar de dos o mas lineas */

// DECLARAR VARIABLES

    // Tipos de datos:

    Undefined:
    null: 
    boolean:
    string : Para poder escribir texto o numeros, pero se muestra siempre de como un texto.
    symbol:
    bigint:
    number: Para poder colocar unicamente numeros.
    object :

    let uso = // Las variables permiten que las computadoras almacenen y manipulen datos de forma dinámica.Cualquiera de los ocho tipos de datos puede almacenarse en una variable.

    // como declarar una variable

    /* para decirle a js que cree o declare una variable se coloca la palabra var delante del nombre de la variable */

        var variableName;

// Almacenar valores en una variable 

    /* a una variable se le puede dar un valor definido */

    var variableName= 10;

    /* con esto lo que pasa es que variableName desde este momento su valor comienza a ser 10 y de esta manera se puede cambiar las veces que queramos y con el valor que necesitemos y con el tipo de valor que necesitemos. */

    /* tambien podemos crear la variable y luego darle un valor */

    var variableName;
    variableName= 10;

// Asignar el valor de una variable a otra

    /* Cuando nosotros tenemos otra variable ya definida podemos darle el mismo valor que tiene la anterior simplemente colocando el nombre de la variable como resultado de la siguiente */

    var variableName= 10; 

    var variableName2= variableName;

    /* de esta manera lo que pasa es que ambas variables pasan a tener el valor de 10, la primera porque nosotros se la definimos y la segunda porque al tener como valor el nombre de la variable que su valor es 10 automaticamente esta vale o tiene el mismo valor */

// Inicializar variables 

    /* en este caso no hace falta que primero creemos una variable y que luego le demos un valor (inicializar), sino que directamente le damos el valor en la misma linea */

    var variableName= 10;

    /* de esta manera directamente tenemos el valor directamente declarado e inicializado en la variable y no tenemos que hacer algun paso de mas. */

// Declarables variables de cadena

    /* las variable una variable de cadena se utiliza un string como valor, lo que hacemos es darle par ejemplo "hola como estas" la que pasa en este caso es que "hola cama estas" es el valor de nuestra variable*/

    var Saludo = "Hola como estas";

// Comprender las variables no inicializadas

    /* en este caso tenemos que saber que cuando declaramos variables en js y no le colocamos ningun valor o no las inicialezamos, estas contienen  un valor inicial llamado UNDEFINED */

    var nada;// <- el valor de esta variable sin inicializar en este momento es undefined.

// Buenas practicas de escritura es js 

    /* En este caso para escribir de una buena manera en js tenemos que usar lo que se le llama "camelCase". Esto es cuando tenemos dos palabras por ejemplo "hola pedro" y queremos hacer una variable para esto, Para escribir con camelCase lo que se hace es escribir la primer palabra en minuscula y luego cada palabra nueva comenzarla can la letra inicial en mayuscula, en este caso seria "holaPedro", si queremos seguir alargando los nombres tenemos que seguir esta regla aunque por una cuestion de practicidad no se recomienda hacer nombres tan grandes de las variables. */

// diferencias entre var y let 

 var /* Cuando declaramos 2 variable con var, que contiene el mismo nombre y le colocamos dististo contenido, estas se anulan y nos muestra en consola unicamente el nombre de la ultima variable definida,esto es malo porque en la practica esto no se muestra como un error y se va a hacer muy dificil el porque no funciona el codigo que hicimos */

 var hola= tutu;
 var hola= nariznariz; // <- En este ejemplo aunque nosotros queramos utilizar la primera variable no se puede, ya que la opcion var las anula, pero no las muestra como un error de codigo



 let /* Visto lo que sucede con var js se actualizo y ahora contiene el elemento "let" para declarar variables, y lo que hace es siempre y cuando existan variables iguales, osea con el mismo nombre nos muestra un error */

 let hola1= tutu;
 let hola2= nariznariz; 

 /* De esta manera se ve y es mas practico para trabajar, con variables de distinto nombre para tener el la estuctura ordenada y que se minimicen lo errores */

 const /* Este tipo de variable cuenta con las mismas caracteristicas que let, pero se le agrega el poder de que las variables que lo contengan son solo de lectura, esto quiere decir que la variable definida con const no puede ser redefinida en con otro resultado en otro momento, siembre tiene el mismo valor definido
 */

// agregar numeros a js

Number /* Este es un tipo de dato que tenemos en js, que como su nombre lo indica es para colocar numeros */

  //sumar 

  + //<- para sumar se utiliza este simbolo como operador de suma cuando lo colocamos etre dos numeros.

   // ejemplo:
  
    let suma= 10 + 2;

 // restar 
 
  // de la misma manera que vimos como sumar se hace para restar, pero se utiliza solamente con el operador de la resta (-)

  let resta= 10 - 2;

  // Multiplicar 

    // de la misma manera que sumamos o restamos lo que hacemos es utilizar el operador (*) para multiplicar 

    let multiplicacion= 10*2;

  //dividir 

  // con el simbolo / se divide

  let dividir= 12 / 3;

  //sumar 1

   /* Si queremos sumar 1 a la variable, en vez de tener que hacer var + 1, lo que se utiliza es el operador (++) esto cumple la funcion de sumar o agregar 1 */

   // ejemplo

        let suma1= 23;

        suma1 ++ // <- de esta manera la variable de arriba pasa a valer 24

   // restar 1 
   
   /*  de la misma manera que el anterior, pero en este caso se utiliza el operador (--) */

   let resta1= 23;

   resta1 -- // <- esto lo que hace es que la variable pase a valer 22, de esta manera se le resta facilmente 1 a cualquier variable.

// numeros decimales

    /* Estos se pueden utilizar para dar valor a las variables,estos se pueden multiplicar, dividir, sumar, etc*/

// Resto 

/* Este nos da como resultado el resto de la division se utiliza el operador (%) */

// ejemplo

    5 % 2 = 1 // porque
    Math.floor(5 / 2) = 2 // (Cociente)
    2 * 2 = 4
    5 - 4 = 1 // (Resto)























