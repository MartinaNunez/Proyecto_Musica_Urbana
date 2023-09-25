# Ficha técnica 
## Característcas de los datos
Trabajamos con datos estructurados, es decir que poseen cierto orden puesto que estos en un primer momento iban colocados desde la canción más esuchada, top 1, a la menos escuchada de las 200 más reproducidas. 
Estos tienen parte de datos cuantitativos como son el número en el ranking, el puesto más alto en este, las semanas que estuvo dentro de las 200 más escuchadas y las reproducciones. Hay dos datos cualitativos que son el nombre del artista y el nombre de la canción.
Los datos cuantitativos son discretos puesto que solo pueden tomar valores enteros.
## Alcance metodológioc
Los datos los obtuvimos a través de Spotify Charts y se descargarán directamente desde ese sitio.
Población y muestra: La población y la muestra se basan en los usuarios de Spotify de los países seleccionados (Chile, Colombia, Argentina, Perú, Guatemala, Honduras, México, España y Top Global).

Se descargaron las  bases de datos de cada país junto con el Top Global de forma individual. Luego se revisaron que columnas nos eran utiles y cuales no. Las que no se eliminaron con python en Google Colab

Luego juntamos todas las bases de datos, se mantuvo el orden de las canciones para saber cuales eran las más escuchadas.  Para mantener la trazabilidad de los datos sin perder de vista su origen por país, se incorporó una nueva columna denominada "país".

Luego limpiamos esa base de datos para dejarla solo con artistas chilenao. Para lograrlo, primero se revisaron los datos de Chile para identificar qué artistas urbanos estaban presentes. Luego, se hizo una lista de estos artistas para poder filtrar y limpiar la base de datos. Se utilizó "Google Colab" para filtrar los datos por artista y obtener la información de los siguientes: "Pailita", "Polimá Westcoast", "Paloma Mami", "Cris Mj", "Ak4:20", "Marcianeke", "Harry Nach", "Pablo Chill-E", "Julianno Sosa", "Balbi El Chamako", "Drago200", "Simon la Letra", "Galee Galee". Estos eran todos los chilenos presentes en el top Chile de 2021

Análisis de datos: Una vez que tuvimos nuestra base de datos original, después de limpiarla, esperamos poder analizar los datos en función de las canciones urbanas chilenas más reproducidas en estos países.
Etapas de investigación:
Definir nuestro tema de investigación, idea principal e hipótesis.
Buscar datos e información correspondiente a nuestro tema de investigación.
Determinar los datos que vamos a utilizar y buscar los más confiables y completos, en nuestro caso, Spotify Charts.
Recopilar cada base de datos.
Limpiar las bases de datos y conservar lo que nos resulta útil.
Al tener las bases de datos limpias, llevar a cabo análisis en conjunto como grupo.

## Variables incorporadas
1. Rank: Se refiere al puesto (Del 1 al 200) que tiene esa canción en el país seleccionado
2. Artist_Names: Es el nombre del o los artistas que participan en la canción
3. Peak_rank: Es el puesto más alto en el que estuvo la canción hasta la fecha de recolección de datos
4. weeks_on_chart: Se refiere a las semanas que lleva en el top
5. Streams: Es el número de reproducciones que tuvo la canción esa semana
6. País: Se refiere al país donde esa canción está dentro del top

## Observaciones
Al menos en 2021 los artistas chilenos no aparecen en el top de otros países. 
Ak4:20 y Marcianeke son los artistas que más se repiten este año
