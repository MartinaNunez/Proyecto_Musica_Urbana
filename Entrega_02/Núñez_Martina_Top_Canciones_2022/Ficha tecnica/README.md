# Ficha técnica (año 2022) - Martina Núñez

## Característica de los datos

* Los datos de [Spotify Charts](https://charts.spotify.com/charts/view/regional-global-weekly/2020-02-06) se obtienen inicialmente mediante __observación__, registrando el número de reproducciones que tienen las canciones entre los usuarios de la plataforma. Esto resulta en una base de datos que se presenta en forma numérica y se fundamenta en los datos de reproducción.
* Estos datos son igualmente clasificados como __estructurados__, ya que se encuentran organizados en un formato predefinido, en archivos con extensión ".csv".
* En cuanto a su naturaleza, son datos __cuantitativos__ y, al mismo tiempo, __discretos__, ya que pueden asumir valores específicos en números enteros.

## Alcance metodológico

Con respecto al alcance metodológico, los puntos clave son los siguientes:
1. __Métodos de recopilación de datos:__ Los datos se obtendrán a través de Spotify Charts y se descargarán directamente desde ese sitio.
1. __Población y muestra:__ La población y la muestra se basan en los usuarios de Spotify de los países seleccionados (Chile, Colombia, Argentina, Perú, Guatemala, Honduras, México, España y Top Global).
1. __Procedimientos:__
    1. Se extrajo la base de datos de cada país junto con el Top Global de forma individual.
    1. Luego de obtener cada una de estas bases de datos, se revisaron detenidamente las columnas utilizando "Google Colab" para identificar cuáles eran relevantes para el proyecto de investigación.
    1. Después de realizar esta revisión, se procedió a limpiar cada base de datos de manera independiente, eliminando las columnas que no serían útiles para el análisis.
    1. Una vez que se tuvieron las bases de datos limpias a disposición, se procedió a fusionar las nueve en "Google Colab". Esta unión simplificó el proceso al consolidar todos los datos en una única base de datos, que se consideró como la base de datos original. Para mantener la trazabilidad de los datos sin perder de vista su origen por país, se incorporó una nueva columna denominada "país".
    1. Como siguiente paso, se llevó a cabo la limpieza de la base de datos original. Para lograrlo, primero se revisaron los datos de Chile para identificar qué artistas urbanos estaban presentes. Luego, se hizo una lista de estos artistas para poder filtrar y limpiar la base de datos. Se utilizó "Google Colab" para filtrar los datos por artista y obtener la información de los siguientes:  "Pailita", "Polimá Westcoast", "Paloma Mami", "Cris Mj", "Ak4:20", "Standly", "Julianno Sosa", "King Savagge", "Young Cister", "Nickoog Clk", "Sayian Jimmy", "Tunechikidd", "Marcianeke", "Simon la letra", "El Barto", "Gino Mella", "Bailbi el Chamako", "El Bai", "Jairo Vera", "Harry Nach", "Lleflight", "Pablo Chill-E", "Galee Galee", "Dainesitta", y "ITHAN NY". 
    
        La selección de estos artistas se basó en la base de datos en general, ya que en la sección de los datos de Chile se mencionaban los artistas urbanos presentes. La expectativa era que estos artistas se repitieran en los demás países y en el Top Global, y este resultado se confirmó en los datos obtenidos. 
    1. Con eso, la base de datos arrojó lo necesario: los artistas urbanos chilenos más escuchados en la plataforma de Spotify en los países seleccionados.
    1. Por último, al tener la base de datos limpia, se utilizó "Google Colab" para formular algunas preguntas que pudieran responderse con los datos y adentrarse un poco más en la investigación. Al obtener los resultados, quedó claro que la limpieza de datos se había realizado correctamente.
1. __Análisis de datos:__ Una vez que tuvimos nuestra base de datos original, después de limpiarla, esperamos poder analizar los datos en función de las canciones urbanas chilenas más reproducidas en estos países.
1. __Etapas de investigación:__
    1. Definir nuestro tema de investigación, idea principal e hipótesis.
    1. Buscar datos e información correspondiente a nuestro tema de investigación.
    1. Determinar los datos que vamos a utilizar y buscar los más confiables y completos, en nuestro caso, Spotify Charts.
    1. Recopilar cada base de datos.
    1. Limpiar las bases de datos y conservar lo que nos resulta útil.
    1. Al tener las bases de datos limpias, llevar a cabo análisis en conjunto como grupo.

## Variable incorporadas: variable | descripción

* __Rank:__ Se refiere al puesto (del 1 al 200) que ocupa esa canción en el país seleccionado.
* __Artist_Names:__ Es el nombre del o los artistas que participan en la canción.
* __Peak_rank:__ Es el puesto más alto que alcanzó la canción hasta la fecha de recolección de datos.
* __Weeks_on_chart:__ Indica el número de semanas que la canción ha estado en el top.
* __Streams:__ Representa el número de reproducciones que la canción tuvo en esa semana.
* __País:__ Hace referencia al país en el que esa canción se encuentra en el top. Esta categoría se incorporó porque no estaba presente en la base de datos original, con el fin de mantener la información sobre la procedencia de los datos.

## Observaciones que tengo sobre la base de datos

Con respecto a mi base de datos original, la primera fase de limpieza no resultó tan complicada. Durante este proceso, eliminé las columnas que no eran necesarias y las consolidé en un solo lugar, lo cual considero como la mejor decisión que tomé. Esto me permitió trabajar con todos los datos en un solo lugar, sin la necesidad de saltar entre múltiples bases de datos.

Inicialmente, la base de datos era extensa y contenía una gran cantidad de información, lo que la hacía voluminosa. Sin embargo, después de la limpieza completa, que involucró inicialmente casi 1800 datos, logramos reducirla a lo que estábamos buscando: los artistas y canciones urbanas chilenas más escuchadas, lo cual arrojó 86 datos. Esta reducción representa un cambio significativo, ya que los datos resultantes se pueden trabajar de manera mucho más eficiente. Además, estos datos son precisos y esenciales para nuestra investigación.