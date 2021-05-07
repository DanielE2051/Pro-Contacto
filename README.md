El servidor se ejecuta con express.js, 
hace get y post, crearPersonas.html es donde esta el formulario,
MostrarPersonas.js es donde esta lo de request-promise 



EJERCICIO 2
Las siguientes preguntas están orientadas a la comprensión del protocolo HTTP. Son agnósticas al lenguaje de programación, la idea es comprender los conceptos del estándar:

1.	¿Qué es un servidor HTTP? 
•	Es una comunicación entre un servidor y sus clientes mediante el protocolo de transferencia de hipertexto o en su variante codificada HTTPS.
2.	¿Qué son los verbos HTTP? Mencionar los más conocidos
•	Son métodos que son utilizados en el protocolo http, los más conocidos son GET, POST, PUT HEAD.
3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers? 
•	Permite el acceso a toda la información que viaja desde el navegador del cliente al servidor.
•	Los heders son cabeceras de petición, que permiten que el cliente y el servidor se puedan enviar información adicional a una petición o a una respuesta.
4.	¿Qué es un queryString? (En el contexto de una url)
•	Es la parte de la URL que contiene los datos que deben pasar a las aplicaciones web.
5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
•	Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica.
6.	¿Cómo se envía data en un Get y cómo en un POST? 
•	El método GET envía la información codificada del usuario en el header del HTTP request, directamente en la URL.
•	El método POST también envía la información codificada del usuario pero esta vez en el body del HTTP request por lo que no aparece en la URL.
7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?
•	El verbo o método GET.
8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
•	XML: El formato de este estándar está basado en texto para representar información estructurada: datos, documentos, configuración, etc.
<pieza tipo="A">
    <nombre>Tornillo</nombre>
    <descripcion>Cilindro mecanico con una cabeza utilizado en la fijación temporal de unas piezas con otras 
    </descripcion>
    <caracateristica>
        <tipo>metal</tipo>
        <tamanyo>10</tamanyo>
    </caracateristica>
    <vacio></vacio>
</pieza>
•	JSON: Este estándar esta mantenido por ECMAInternational y está basado en un subconjunto del lenguaje de programación JavaScript (ECMA-262). Como el anterior estándar es independiente del lenguaje de programación y del sistema operativo que lo ejecute.
{
    “pieza”: {
        “tipo”: “A”
        “nombre”: “Tornillo”,
        “descripcion”: “Cilindro mecánico con una cabeza utilizado en la fijación temporal de unas piezas con otras”,
        “caracteristica”: {
            “tipo”: “metal”
            “tamanyo”: 10
        },
        “vacio”: “”
     }
}
9.	Explicar brevemente el estándar SOAP
•	Es un protocolo estándar que define cómo dos objetos en diferentes procesos pueden comunicarse por medio de intercambio de datos XML.
10.	Explicar brevemente el estándar REST Full
•	Es considerada una técnica de arquitectura de software, es decir, un conjunto de principios y patrones de comunicación que ayudan a crear una forma de pensar y construir las APIs.
11.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
•	Es un objeto tipo header, asociado a la petición.
•	Es la propiedad de cabecera (header) usada para indicar el media type  del recurso, dice al cliente que tipo de contenido será retornado. 
