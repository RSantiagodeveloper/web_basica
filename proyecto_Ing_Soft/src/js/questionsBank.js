/**
 * En este script se declaran los arreglos y variables globales que usara el controlador
 * de script para operar el Quiz
 */

//Arreglo de que almacena las preguntas posibles que se mostraran en el cuestionario
var preguntas = [
    /*1*/
    "una prueba se define prueba como:",
    /*2*/
    "El conjunto de actividades previamente planteadas y que se van realizando de manera sistem&aacute;tica se define como:",
    /*3*/
    "Las pruebas de software son parte de:",
    /*4*/
    "Realizan las pruebas de software:",
    /*5*/
    "Es el objetivo fundamental de las pruebas de software",
    /*6*/
    "&iquest;Qu&eacute; incluye un plan de pruebas?",
    /*7*/
    "&iquest;Cu&aacute;l es la funci&oacute;n de una estrategia de prueba?",
    /*8*/
    "Es una caracter&iacute;stica de las estrategias de prueba",
    /*9*/
    "Es una caracter&iacute;stica de las estrategia de prueba",
    /*10*/
    "Son los enfoques fundamentales en el dise&ntilde;o de casos de prueba del software",
    /*11*/
    "Realiza pruebas exhaustivas a nivel de c&oacute;digo probando cada posible entrada y salida de cada instrucci&oacute;n",
    /*12*/
    "Aqu&iacute; las pruebas se realizan para verificar el correcto funcionamiento del sistema",
    /*13*/
    "Realiza pruebas utilizando entradas basadas en modelos regularmente estad&iacute;sticos, y se analizan todas las posibles salidas producidas.",
    /*14*/
    "Las pruebas de unidad...",
    /*15*/
    "Es el objetivo fundamental de las pruebas de unidad.",
    /*16*/
    "Son programas adicionales que se utilizan para realizar pruebas de unidad",
    /*17*/
    "Es el principal funcionamiento de un controlador",
    /*18*/
    "Es el principal funcionamiento de un programa asistente",
    /*19*/
    "&iquest;El controlador y el programa asistente son parte del sistema?",
    /*20*/
    "Las pruebas de integraci&oacute;n...",
    /*21*/
    "Problem&aacute;tica principal en los sistemas que genera la necesidad de una prueba de integraci&oacute;n.",
    /*22*/
    "Ventajas de crear un sistema incremental",
    /*23*/
    "Es uno de los pasos para realizar las pruebas de integraci&oacute;n",
    /*24*/
    "Es uno de los pasos para realizar las pruebas de integraci&oacute;n",
    /*25*/
    "En la integraci&oacute;n descendente...",
    /*26*/
    "Los componentes se prueban desde el m&aacute;s alto en la jerarqu&iacute;a (principal) hasta el m&aacute;s bajo (subordinado).",
    /*27*/
    "Verifica los principales puntos de control o de decisi&oacute;n al principio en el proceso de prueba",
    /*28*/
    "Son utilizados para realizar las pruebas de integraci&oacute;n descendente",
    /*29*/
    "Son los principales problemas que enfrenta una integraci&oacute;n descendente",
    /*30*/
    "En la integraci&oacute;n ascendente...",
    /*31*/
    "Los componentes se prueban desde el m&aacute;s bajo en la jerarqu&iacute;a hasta el m&aacute;s alto.",
    /*32*/
    "Son utilizados para realizar pruebas de integraci&oacute;n ascendente.",
    /*33*/
    "&iquest;Qu&eacute; es la prueba de regresi&oacute;n?",
    /*34*/
    "Para que se usa una prueba de regresi&oacute;n",
    /*35*/
    "Crean la necesidad de una prueba de regresi&oacute;n",
    /*36*/
    "&iquest;Qu&eacute; es la prueba de humo?",
    /*37*/
    "&iquest;D&oacute;nde se utilizan las pruebas de humo?",
    /*38*/
    "Son el mecanismo de ritmo para proyectos cr&iacute;ticos en el tiempo",
    /*39*/
    "Es una ventaja de las pruebas de Humo",
    /*40*/
    "Es una ventaja de las pruebas de Humo",
    /*41*/
    "Es fundamental para la eficacia en la detecci&oacute;n y correcci&oacute;n de defectos (Errores), as&iacute; como como para dejar constancia de los resultados de las pruebas.",
    /*42*/
    "El Reporte de Pruebas…",
    /*43*/
    "Son los documentos que se deben de incluir en la documentaci&oacute;n de las pruebas",
    /*44*/
    "Constituyen los especificaciones de los casos de prueba, que se van a usar y las especificaciones de los procedimientos de pruebas",
    /*45*/
    "Recoge un resumen de las pruebas realizadas",
    /*46*/
    "El historial de pruebas...",
    /*47*/
    "Es el registro de todos los eventos relevantes ocurridos durante el proceso de prueba",
    /*48*/
    "Registra cada uno de los incidentes ocurridos durante la prueba",
    /*49*/
    "Resume resultados tras las pruebas realizadas al mismo tiempo que le da una evaluaci&oacute;n al producto final",
    /*50*/
    "Felicidedes encontrste el Comodin por un punto, selecciona aqui",
];


//Arreglo con el conjunto de respuestas que conrresponden a la i-esima pregunta mostrada
//las respuestas correctas estan ubicadas en la posicion 0 de cada arreglo
var respuestas = [
    /*1*/
    ["un conjunto de actividades previamente planteadas y que se van realizando de manera sistem&aacute;tica", "actividad exhaustiva", "una verificaci&oacute;n", "una comprobaci&oacute;n"], //1
    /*2*/
    ["prueba", "actividad exhaustiva", "una verificaci&oacute;n", "una comprobaci&oacute;n"], //2
    /*3*/
    ["El Control De Calidad", "la documentaci&oacute;n", "los errores", "la depuraci&oacute;n"], //3
    /*4*/
    ["Un grupo de prueba independiente o el dise&ntilde;ador de software", "el cliente", "La calidad del producto final mejora", "plan de pruebas"], //4
    /*5*/
    ["comprobar el correcto funcionamiento del proyecto, es decir, si cumple con todos los requerimientos que se ten&iacute;an desde el inicio.", "Satisfacer al cliente", "Actividad Ociosa", "plan de pruebas"], //5
    /*6*/
    ["el dise&ntilde;o de las estrategias de caso de prueba y las estrategias de aplicaci&oacute;n de las pruebas", "Un grupo de prueba independiente o el dise&ntilde;ador de software", "Instructivo de pruebas", "plan de pruebas"], //6
    /*7*/
    ["proporcionar una gu&iacute;a que describe los pasos que deben realizarse como parte de la prueba", "comprobar el correcto funcionamiento del proyecto, es decir, si cumple con todos los requerimientos que se ten&iacute;an desde el inicio.", "La calidad del producto final mejora", "plan de pruebas"], //7
    /*8*/
    ["Empiezan en los componentes y operan hacia afuera, es decir, hacia la integraci&oacute;n total del sistema", "proporcionar informcion de entrada al componente", "La calidad del producto final mejora", "plan de pruebas"], //8
    ["var&iacute;an seg&uacute;n el enfoque de ingenier&iacute;a de software y el tiempo en el que se emplean", "comprobar el correcto funcionamiento del proyecto, es decir, si cumple con todos los requerimientos que se ten&iacute;an desde el inicio", "La calidad del producto final mejora", "plan de pruebas"], //9
    ["Estructural, Funcionaly aleatorio", "proporcionar informcion de entrada al componente", "La calidad del producto final mejora", "plan de pruebas"], //10
    ["Pruebas estructurales", "proporcionar informcion de entrada al componente", "La calidad del producto final mejora", "plan de pruebas"], //11
    ["Pruebas Funcionales", "proporcionar informcion de entrada al componente", "La calidad del producto final mejora", "plan de pruebas"], //12
    ["Pruebas aleatorias", "proporcionar informcion de entrada al componente", "La calidad del producto final mejora", "plan de pruebas"], //13
    ["Enfocan los esfuerzos de verificaci&oacute;n en la unidad m&aacute;s peque&ntilde;a del dise&ntilde;o de software: el componente o m&oacute;dulo de software", "proporcionar informcion de entrada al componente", "La calidad del producto final mejora", "plan de pruebas"], //14
    ["Comprobar el Funcionamiento de Cada Componente", "proporcionar informcion de entrada al componente", "La calidad del producto final mejora", "plan de pruebas"], //15
    ["Controladores y Asistentes", "proporcionar informcion de entrada al componente", "La calidad del producto final mejora", "plan de pruebas"], //16
    ["proporcionar informcion de entrada al componente", "informacion de salida", "La calidad del producto final mejora", "plan de pruebas"], //17
    ["sirven para sustituir m&oacute;dulos que est&aacute;n subordinados ", "proporcionar informcion de entrada al componente", "La calidad del producto final mejora", "plan de pruebas"], //18
    ["no se incluyen", "proporcionar informcion de entrada al componente", "La calidad del producto final mejora", "plan de pruebas"], //19
    ["son una t&eacute;cnica sistem&aacute;tica para construir la arquitectura del software mientras se llevan a cabo pruebas para descubrir errores asociados con la interfaz.", "comprobar el correcto funcionamiento del proyecto, es decir, si cumple con todos los requerimientos que se ten&iacute;an desde el inicio.", "La calidad del producto final mejora", "plan de pruebas"], //20
    ["La posibilidad de Nuevos Errores tras integrar los componentes al sistema", "proporcionar informcion de entrada al componente", "La calidad del producto final mejora", "plan de pruebas"], //21
    ["los errores son m&aacute;s f&aacute;ciles de aislar y corregir", "proporcionar informcion de entrada al componente", "La calidad del producto final mejora", "plan de pruebas"], //22
    ["Las pruebas se llevan a cabo conforme se integra cada componente", "proporcionar informcion de entrada al componente", "La calidad del producto final mejora", "plan de pruebas"], //23
    ["Dependiendo del enfoque de integraci&oacute;n seleccionado, los representantes subordinados se sustituyen uno a la vez con componentes reales", "proporcionar informcion de entrada al componente", "La calidad del producto final mejora", "plan de pruebas"], //24
    ["Los m&oacute;dulos se integran al moverse hacia abajo a trav&eacute;s de la jerarqu&iacute;a de control", "Hacia Arriba", "Empiezan en los componentes y operan hacia afuera, es decir, hacia la integraci&oacute;n total del sistema", "ningnuna"], //25
    ["integracion descendente", "Control de Calidad", "Otros Programas", "plan de pruebas"], //26
    ["integracion descendente", "Controladores", "Asistentes", "plan de pruebas"], //27
    ["Controladores", "Asistentes", "Otros Programas", "plan de pruebas"], //28
    ["problema logistico", "Controladores", "Asistentes", "plan de pruebas"], //29
    ["comienza la construcci&oacute;n y la prueba con m&oacute;dulos m&aacute;s subordinados", "Controladores", "Asistentes", "plan de pruebas"], //30
    ["prueba ascendente", "Controladores", "Asistentes", "plan de pruebas"], //31
    ["programa asistente", "Controladores", "Empiezan en los componentes y operan hacia afuera, es decir, hacia la integraci&oacute;n total del sistema", "plan de pruebas"], //32
    ["es la nueva ejecuci&oacute;n de alg&uacute;n subconjunto de pruebas que ya se realizaron a fin de asegurar que los cambios no propagaron efectos colaterales no deseados", "Controladores", "Asistentes", "plan de pruebas"], //33
    ["para asegurar que los cambios no propagaron efectos colaterales no deseados", "Controladores", "Asistentes", "plan de pruebas"], //34
    ["Nuevos errores tras la integracion", "los errores son m&aacute;s f&aacute;ciles de aislar y corregir", "Asistentes", "plan de pruebas"], //35
    ["es un enfoque de prueba de integraci&oacute;n que se usa cuando se desarrollan sistemas criticos en el tiempo", "Empiezan en los componentes y operan hacia afuera, es decir, hacia la integraci&oacute;n total del sistema", "Asistentes", "los errores son m&aacute;s f&aacute;ciles de aislar y corregir"], //36
    ["En sistemas Criticos en el tiempo", "Controladores", "Asistentes", "plan de pruebas"], //37
    ["pruebas de humo", "Controladores", "Asistentes", "plan de pruebas"], //38
    ["La calidad del producto final mejora", "Controladores", "Asistentes", "plan de pruebas"], //39
    ["El diagn&oacute;stico y la correcci&oacute;n de errores se simplifican", "Controladores", "Asistentes", "plan de pruebas"], //40
    ["Reporte de pruebas", "Controladores", "Asistentes", "plan de pruebas"], //41
    ["Es fundamental para la eficacia en la detecci&oacute;n y correcci&oacute;n de defectos (Errores), as&iacute; como como para dejar constancia de los resultados de las pruebas", "Controladores", "Asistentes", "plan de pruebas"], //42
    ["historial de pruebas e incidentes, resumen", "comprobar el correcto funcionamiento del proyecto, es decir, si cumple con todos los requerimientos que se ten&iacute;an desde el inicio", "Asistentes", "plan de pruebas"], //43
    ["Documentacion de entrada", "Controladores", "Asistentes", "plan de pruebas"], //44
    ["Resumen de Pruebas", "Controladores", "En sistemas Criticos en el tiempo", "plan de pruebas"], //45
    ["documenta todos los hechos relevantes ocurridos durante la ejecuci&oacute;n de pruebas", "Historial de Pruebas", "El diagn&oacute;stico y la correcci&oacute;n de errores se simplifican", "plan de pruebas"], //46
    ["Historial de Pruebas", "Controladores", "Asistentes", "plan de pruebas"], //47
    ["Historial de Incidentes", "Controladores", "Historial de Pruebas", "plan de pruebas"], //48
    ["Resumen de Pruebas", "Historial de Pruebas", "Asistentes", "plan de pruebas"], //49
    ["Aqui", "aqui no es", "Aqui no toques", "leiste bien?"], //50
];

var indice_respuesta_correcta;
var contador_de_Progreso = 0;
var contador_Aciertos = 0;