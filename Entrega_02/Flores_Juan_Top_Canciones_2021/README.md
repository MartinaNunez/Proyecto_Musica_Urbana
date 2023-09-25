# Lista de Fuentes
Las fuentes se sacaron de la página de [Spotify Charts](https://charts.spotify.com/charts/overview/global). Esta nos permite ver las 200 canciones más escuchadas por país o global, además de permitir seleccionar si es por semana o diario.
Nosotros consideramos el top semanal de la semana del 2 de julio pues es la mitad del año.
Consideramos principalmente países de Latinoamérica y habla hispana. Por ese motivo dejamos fuera a Brasil, pues al hablar un idioma distinto su top de música es totalmente opuesto a los demás países seleccionados, pues principalmente son artistas que hablan portugués. De Sudamérica se seleccionó a Argentina, Chile, Colombia y Perú. Todos, excluyendo Chile, fueron seleccionados por ser los países con más habitantes de la región. No se consideró Venezuela puesto que los datos solo están disponibles de 2022 en adelante. Chile fue seleccionado pues nos centraremos en artistas de este país y antes de ver si impactan en otros lugares es necesario comprobarlo nacionalmente.                            
De Centroamérica seleccionamos a Guatemala y Honduras por ser los dos países con más población de la zona. México fue el único de Norteamérica pues es el único lugar donde se habla español como idioma oficial, además se consideró por su población superior a los 100 millones de personas.                                                        
En adición, consideramos a España por ser un país hispano parlante en otro continente. Además, de un chart global que nos servirá para comparar

# Proceso de limpieza
Primero descargamos las 9 bases de datos por año que ibamos a utilizar, luego vimos que columnas ibamos a dejar. En este punto decidimos eliminar uri, pues solo nos entrega la identificación que le da Spotify a la lista, source pues la disquera del que viene la canción no es relevante, por último eliminamos previous rank pues nos queremos centrar solo en una semana. 
De esta forma nos quedamos con rank, artist names, track name, peak rank, weeks on chart y streams semanales.
Luego de hacer esta limpieza base a base decidimos unir todas las bases limpias en una sola. Para esto creamos una nueva columna llamada país donde aparece el archivo del que proviene cada columna. 
Lo anterior es de suma importancia para el paso 3. En este filtramos según los artistas chilenos que aparecen en  el top de Chile. De esta forma obtuvimos finalmente una base de datos solo con las canciones donde salen chilenos y el lugar de donde se escuchan.
# Ejemplos
*¿Cuáles son los artistas chilenos más escuchados en 2021?
*¿Qué canciones chilenas son las más populares en 2021?
*¿Hay alguna canción chilena que entre en el top de otro país o global?

