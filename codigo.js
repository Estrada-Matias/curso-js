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






