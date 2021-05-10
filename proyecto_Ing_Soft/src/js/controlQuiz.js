/**
 * funciones que permitiran mostrar las preguntas en la pantalla del Quiz
 * junto a sus respectivas respuestas y ademas realizan la validacion
 */
addEventListener("load", getQuestion())

/**
 * funcion que realiza la exploracion aleatoria del banco de preguntas para extraer
 * la pregunta y su respetivo arreglo de respuestas, para posteriormente reordenar dicho arreglo
 * y preparar el despliegue en pantalla
 */

function getQuestion() {
    //extraccion de la pregunta y sus respuestas
    var indice_aleatorio = Math.floor(Math.random() * preguntas.length);
    var respuestas_posibles = respuestas[indice_aleatorio];

    var posiciones_iniciales = [0, 1, 2, 3]; //representa la posicion inicial del arreglo de respuetas
    var respuestas_reordenadas = [];

    var dentro = false;

    for (i in respuestas_posibles) {
        var posicion_aleatoria = Math.floor(Math.random() * posiciones_iniciales.length); //valor aleatorio entre 0 y 3
        //si la seleccion aleatoria eligio a la posicion donde se ubica la respuesta correcta
        if (posicion_aleatoria == 0 && dentro == false) {
            indice_respuesta_correcta = i; //indicamos el indice de esa respuesta correcta y la guardamos
            dentro = true; //señalamos que ya identificamos a la respuesta correcta
        }
        //agregamos a un nuevo arreglo las respuestas del conjunto, solo que ya en un nuevo orden
        //eliminamos del arreglo posiciones_iniciales el valor que ya se eligio para asegurarnos que no se repetira
        respuestas_reordenadas[i] = respuestas_posibles[posiciones_iniciales[posicion_aleatoria]];
        posiciones_iniciales.splice(posicion_aleatoria, 1);
    }
    deployElements(indice_aleatorio, respuestas_reordenadas)
    cleanQuestion(indice_aleatorio)
}

/**
 * Función dedicada a mostrar los elementos del formulario en pantalla
 * Recibe el un arreglo de Strings donde estan las respuestas correspondientes a la pregunta actual
 */
function deployElements(questionIndex, resp_Array) {

    contador_de_Progreso = contador_de_Progreso + 1
    var txt_respuestas = ""
    document.getElementById("displayCounter").innerHTML = contador_de_Progreso + '/10'
    document.getElementById('indicador_de_progreso').innerHTML = '<div class="progress-bar progress-bar-striped progress-bar-animated" style="width:' + contador_de_Progreso * 10 + '%"></div>'
    for (i in resp_Array) {
        txt_respuestas += '<p><input type="radio" name="optionQuiz" value="r' + i + '" checked>' + ' ' + resp_Array[i] + '</p>'
    }

    document.getElementById("display_quiz").innerHTML = preguntas[questionIndex];
    document.getElementById("_options").innerHTML = txt_respuestas;
    clearIndicator()
}

/**
 * Funcion que quita las preguntas ya resueltas de la lista  
 */
function cleanQuestion(questionIndex) {
    preguntas.splice(questionIndex, 1);
    respuestas.splice(questionIndex, 1);
}

/**
 * Funcion que comprueba el radiobuton que fue seleccionado
 * retorna el indice de ese boton
 */
function checkseleccion(radio) {
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return i;
        }
    }
    return false
}

/**
 * Funcion dedicada a monitorear el status del cuestionario
 */

function chackStatus() {
    console.log(contador_de_Progreso);
    if (contador_de_Progreso < 10) {
        setTimeout(getQuestion, 500);
    } else {
        if (contador_Aciertos < 6) {
            alert("Se termino, tu calificacion es: " + contador_Aciertos + "\nEstudia más")
        } else {
            alert("Se termino, tu calificacion es: " + contador_Aciertos + "\nBuen trabajo")
        }
    }
}


function clearIndicator() {
    document.getElementById("success_container").setAttribute("style", "background-color: ghostwhite;")
    document.getElementById("success_img").setAttribute("src", "../../resources/icons/done-24px.svg")
    document.getElementById("fail_container").setAttribute("style", "background-color: ghostwhite;")
    document.getElementById("fail_img").setAttribute("src", "../../resources/icons/close-24px.svg")
}

/**
 * Funcion que se activa al pulsar el boton de calificar
 * Activa al resto de funciones para comprobar la respuesta
 * del usuario y actualiza los estatus mostrados en pantalla
 */
function checkQuestion() {
    //referencia al formulario con el nombre _optionsQuiz para traer todos los
    //radio_buttons de con el nombre de optionQuiz 
    var respuesta = checkseleccion(document._optionsQuiz.optionQuiz)

    if (respuesta == indice_respuesta_correcta) {
        contador_Aciertos += 1;
        document.getElementById("success_container").setAttribute("style", "background-color: green;")
        document.getElementById("success_img").setAttribute("src", "../../resources/icons/done_outline-24px.svg")

    } else {
        document.getElementById("fail_container").setAttribute("style", "background-color: red;")
        document.getElementById("fail_img").setAttribute("src", "../../resources/icons/cancel-24px.svg")
    }
    chackStatus()
}

function leftQuestion() {
    document.getElementById("fail_container").setAttribute("style", "background-color: red;")
    document.getElementById("fail_img").setAttribute("src", "../../resources/icons/cancel-24px.svg")
    chackStatus()
}