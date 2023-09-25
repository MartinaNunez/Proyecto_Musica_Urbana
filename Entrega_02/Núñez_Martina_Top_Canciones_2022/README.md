# Documentación del proceso de limpieza de datos - Martina Núñez

## Explicación del proceso de limpieza, cada paso y decisión tomada

Primeramente, con mis compañeros cambiamos el enfoque de nuestro proyecto, eligiendo uno que se adaptara mejor a los datos que teníamos disponibles. Cambiamos nuestra idea principal y nuestra hipótesis (pueden encontrar una explicación detallada en el archivo README.md principal de la entrega 02). Después de tomar esta decisión, acordamos trabajar con la base de datos de las 200 canciones más reproducidas a nivel global (desde 2020 hasta 2022) en la [plataforma de Spotify](https://charts.spotify.com/charts/view/regional-global-weekly/2020-02-06), ya que la consideramos la más completa y confiable a nuestra disposición. Además, seleccionamos 8 países además del Top Global para trabajar con ello.

Para asegurar un reparto equitativo de trabajo, cada uno de nosotros se encargó de un año en particular, y a mí me tocó el año __2022__.

* En cuanto al año que me correspondió, realicé lo siguiente:

1. Extraje la base de datos de cada país junto con el Top Global de forma individual. Estos datos corresponden a la semana del 2 de julio, tal como acordamos con mis compañeros.
1. Luego de obtener cada una de estas bases de datos, revisé detenidamente las columnas utilizando "Google Colab" para identificar cuáles eran relevantes para nuestro proyecto de investigación.
1. Después de realizar esta revisión, procedí a limpiar cada base de datos de manera independiente, eliminando las columnas que no serían útiles para nuestro análisis.
1. Una vez que tuve las bases de datos limpias a mi disposición, procedí a fusionar las nueve en "Google Colab". Esta unión simplificó el proceso al consolidar todos los datos en una única base de datos, que considero como mi base de datos original. Para mantener la trazabilidad de los datos sin perder de vista su origen por país, incorporé una nueva columna denominada "país".
1. Como siguiente paso, lo que hice fue limpiar mi base de datos original. Para lograrlo, primero revisé los datos de Chile para identificar qué artistas urbanos estaban presentes. Luego, hice una lista de estos artistas para poder filtrar y limpiar mi base de datos. Utilicé "Google Colab" para filtrar los datos por artista y obtener la información de los siguientes:  "Pailita", "Polimá Westcoast", "Paloma Mami", "Cris Mj", "Ak4:20", "Standly", "Julianno Sosa", "King Savagge", "Young Cister", "Nickoog Clk", "Sayian Jimmy", "Tunechikidd", "Marcianeke", "Simon la letra", "El Barto", "Gino Mella", "Bailbi el Chamako", "El Bai", "Jairo Vera", "Harry Nach", "Lleflight", "Pablo Chill-E", "Galee Galee", "Dainesitta", y "ITHAN NY". 

    La selección de estos artistas se basó en la base de datos en general, ya que en la sección de los datos de Chile se mencionaban los artistas urbanos presentes. Mi expectativa era que estos artistas se repitieran en los demás países y en el Top Global, y este resultado se confirmó en los datos obtenidos. 
1. Con eso, la base de datos me arrojó lo que necesitaba, los artistas urbanos chilenos más escuchados en la plataforma de Spotify en los países seleccionados.
1. Por último, al tener la base de datos limpia, utilicé "Google Colab" para formular algunas preguntas que pudiera responder con los datos y adentrarme un poco más en nuestra investigación. Al obtener los resultados, quedó claro que la limpieza de datos se había realizado correctamente.

## Lista de las fuentes de datos utilizadas y explicación de por qué las elegimos

La fuente original de la cual obtuvimos los datos fue [Spotify Charts.](https://charts.spotify.com/charts/view/regional-global-weekly/2020-02-06) Elegimos esta fuente original porque, en conjunto con mis compañeros, consideramos que era la más completa y confiable a nuestra disposición.

De esta fuente original, extrajimos la base de datos de los países que seleccionamos (Chile, Colombia, Argentina, Perú, Guatemala, Honduras, México, España y Top Global). Respecto a esta elección, la justificamos de la siguiente manera:

* Principalmente, nos enfocamos en países de habla hispana en Latinoamérica. Por lo tanto, excluimos a Brasil debido a su idioma distinto, lo que genera una lista de música completamente diferente, con predominancia de artistas que hablan portugués.

* De Sudamérica, seleccionamos Argentina, Colombia y Perú, destacando su alta población. No consideramos a Venezuela debido a la disponibilidad de datos a partir de 2022.

* Chile fue seleccionado porque nos enfocaremos en artistas de este país, y consideramos fundamental verificar su impacto a nivel nacional antes de explorar su influencia en otros lugares.

* En Centroamérica, elegimos a Guatemala y Honduras debido a su población considerable.

* México fue nuestra única selección de Norteamérica, ya que es el único país donde se habla español como idioma oficial y debido a su población superior a los 100 millones de personas.

* También consideramos a España, un país de habla hispana en otro continente.

Basándonos en todos estos elementos, esperamos que, con nuestro trabajo por separado, podamos identificar cuál es la canción urbana chilena más reproducida dentro de estos países y continuar nuestra investigación a partir de ese punto.

## Preguntas que se le pueden hacer a la base de datos limpia

1. ¿Cuál es la canción más popular de un artista específico?
1. ¿Cuál es la canción de música urbana chilena más popular en un país específico?
1. ¿Cuál es el artista con más canciones en la lista?

## Bibliografía

* [Spotify Charts - Spotify Charts are made by fans. (s/f-b). Spotify.com. Recuperado el 24 de septiembre de 2023](https://charts.spotify.com/charts/view/regional-global-weekly/2020-02-06)