# Ficha técnica - Martina Núñez

## Característica de los datos

* Los datos de [Spotify Charts](https://charts.spotify.com/charts/view/regional-global-weekly/2020-02-06) se obtienen inicialmente mediante __observación__, registrando el número de reproducciones que tienen las canciones entre los usuarios de la plataforma. Esto resulta en una base de datos que se presenta en forma numérica y se fundamenta en los datos de reproducción.
* Estos datos son igualmente clasificados como __estructurados__, ya que se encuentran organizados en un formato predefinido, en archivos con extensión ".csv".
* En cuanto a su naturaleza, son datos __cuantitativos__ y, al mismo tiempo, __discretos__, ya que pueden asumir valores específicos en números enteros.

## Alcance metodológico

Con respecto al alcance metodológico, los puntos clave son los siguientes:
__1. Métodos de recopilación de datos:__ Los datos se obtendrán a través de Spotify Charts y se descargarán directamente desde ese sitio.
__1. Población y muestra:__ La población y la muestra se basan en los usuarios de Spotify de los países seleccionados (Chile, Colombia, Argentina, Perú, Guatemala, Honduras, México, España y Top Global).
__1. Procedimientos:__
    1. Extraer la base de datos de cada país junto con el Top Global de forma individual.
    1. Luego de obtener cada una de estas bases de datos, revisar detenidamente las columnas utilizando "Google Colab" para identificar cuáles son relevantes para nuestro proyecto de investigación.
    1. Después de realizar esta revisión, proceder a limpiar cada base de datos de manera independiente, eliminando las columnas que no seran útiles para nuestro análisis.
    1. Una vez de tener las bases de datos limpias a mi disposición, proceder a fusionar las nueve en "Google Colab". Esta unión simplificara el proceso al consolidar todos los datos en una única base de datos, que considerare como mi base de datos original. Para mantener la trazabilidad de los datos sin perder de vista su origen por país, incorporar una nueva columna denominada "archivo".
    1. *Agregar los demás pasos*
__1. Análisis de datos:__ Una vez que tuvimos nuestra base de datos original, después de limpiarla, esperamos poder analizar los datos en función de las canciones urbanas chilenas más reproducidas en estos países.
__1. Etapas de investigación:__
    1. Definir nuestro tema de investigación, idea principal e hipótesis.
    1. Buscar datos e información correspondiente a nuestro tema de investigación.
    1. Determinar los datos que vamos a utilizar y buscar los más confiables y completos, en nuestro caso, Spotify Charts.
    1. Recopilar cada base de datos.
    1. Limpiar las bases de datos y conservar lo que nos resulta útil.
    1. Al tener las bases de datos limpias, llevar a cabo análisis en conjunto como grupo.

## Variable incorporadas: variable | descripción

* En la base de datos original, luego de limpiar las 9 bases de datos por separado, las unimos y añadimos una nueva columna llamada "archivo". Esta acción se llevó a cabo para mantener el orden y poder identificar el país de origen de los datos sin tener que revisar cada base de datos individualmente. La palabra "archivo" corresponde al archivo del cual se extrajeron los datos.
* *agregar explicación de otra variable si es que se agrego otra* 

## Observaciones que tengo sobre la base de datos

.
