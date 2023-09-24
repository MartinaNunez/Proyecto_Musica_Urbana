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
    1. Como siguiente paso, se llevó a cabo la limpieza de la base de datos original. Para lograrlo, primero se revisaron los datos de Chile para identificar qué artistas urbanos estaban presentes. Luego, se hizo una lista de estos artistas para poder filtrar y limpiar la base de datos. Se utilizó "Google Colab" para filtrar los datos por artista y obtener la información de los siguientes: "Pailita", "Polimá Westcoast", "Paloma Mami", "Cris Mj", "Ak4:20" y "Marcianeke".
    
        La selección de estos artistas se basó en la base de datos en general, ya que en la sección de los datos de Chile se mencionaban los artistas urbanos presentes. La expectativa era que estos artistas se repitieran en los demás países y en el Top Global, y este resultado se confirmó en los datos obtenidos. En cuanto al artista Marcianeke, aunque no figuraba en la lista de Chile, se incluyó debido a las reproducciones que sus canciones tuvieron en el año 2021. Por ejemplo, "Canciones como 'Dímelo Ma' (50 millones de reproducciones), 'Los Malvekes' (50 millones) o '¿Qué pasa?' (23 millones) reflejan el fugaz ascenso del cantante, quien cuenta con 4,2 millones de oyentes mensuales en Spotify" (Duna. 2022). Sin embargo, los datos revelaron que no estaba presente en el Top de ningún país en el año 2022.
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

* En la base de datos original, luego de limpiar las 9 bases de datos por separado, las unimos y añadimos una nueva columna llamada "país". Esta acción se llevó a cabo para mantener el orden y poder identificar el país de origen de los datos sin tener que revisar cada base de datos individualmente. 
* Otra variable crucial en todo el trabajo es la de los "artistas urbanos chilenos". Esta variable estará presente en la mayoría de las etapas del proyecto, ya que estamos investigando y llevando a cabo la limpieza de la base de datos con el propósito de recopilar información relevante para nuestra hipótesis inicial, que incluye si o si esta variable.

## Observaciones que tengo sobre la base de datos

Con respecto a mi base de datos original, la primera fase de limpieza no resultó tan complicada. Durante este proceso, eliminé las columnas que no eran necesarias y las consolidé en un solo lugar, lo cual considero como la mejor decisión que tomé. Esto me permitió trabajar con todos los datos en un solo lugar, sin la necesidad de saltar entre múltiples bases de datos.

Inicialmente, la base de datos era extensa y contenía una gran cantidad de información, lo que la hacía voluminosa. Sin embargo, después de la limpieza completa, que involucró inicialmente casi 1801 datos, logramos reducirla a lo que estábamos buscando: los artistas y canciones urbanas chilenas más escuchadas, lo cual arrojó 46 datos. Esta reducción representa un cambio significativo, ya que los datos resultantes se pueden trabajar de manera mucho más eficiente. Además, estos datos son precisos y esenciales para nuestra investigación.

## Bibliografía

* [Duna, R. (2022, marzo 21). ¿Quién es Marcianeke?: El artista chileno más escuchado en Spotify en 2021](https://www.duna.cl/cultura/musica/2022/03/21/quien-es-marcianeke-el-artista-chileno-mas-escuchado-en-spotify-en-2021/) 
