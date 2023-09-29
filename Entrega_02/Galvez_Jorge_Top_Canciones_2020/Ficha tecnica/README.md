# Ficha técnica
---

## Caracteristicas de los datos

Los datos utilizados en la investigación pertenecen a la pagina [Spotify Charts](https://charts.spotify.com/charts) y son datos de los usuarios del servicio de streaming Spotify. 
El dato más importante recolectado es la cantidad de reproducciones, la cual se cuenta de la siguiente manera:
- La canción se escucho por más de 30 segundos.
- Si la canción aparece en más de un lanzamiento, se cuenta para una misma
- En el caso de las descargas, se aplica el mismo metodo verificando cada 30 días las veces que se reprodució la canción (al volver online)
Las extensión de las bases de datos es .csv.
En mi caso, los datos fueron extraidos en la fecha correspondiente al 2 de julio del año 2020, que marca la mitad del año.

## Alcance metodológico
1. Hipotesis: La música urbana chilena ha trasendido su alcance local para convertirse en un fenómeno de alcance internacional.
2. Recopilación de datos: Se descargan la base de datos de spotify charts correspondiente a la fecha.
3. Población y muestra: La población son los usuarios de spotify y la muestra elegida son los países hispanohablantes que formen parte de la recolección de datos de Spotify Charts(Chile, Colombia, Argentina, Perú, Guatemala, Honduras, México, España) y el Top Global como comparativa.
4. Metodología: 
		1. Se descargan de las bases de datos de Chile, Colombia, Argentina, Perú, Guatemala, Honduras, México, España y Top Global.
		2. Selección de la información utíl para la investigación para proceder a la limpieza de datos
		3. El programa limpieza recorre las bases de datos y elimina las filas no deseadas, agrega al archivo una nueva columna señalando el país de origen y renombra el archivo de la siguiente manera: "Origen"_limpio_"año".csv. Ejemplo: "Chile_limpio_2020.csv".
		4. El programa "unir archivos" toma las bases de datos ya limpias, recorre su contenido y lo copia a una lista. De esta forma, entrega un nuevo archivo de nombre "Base_datos_final.csv" que contiene todos los datos de las bases de datos limpias de todas las fuentes.
		5. Se aplica el filtro a "Base_datos_final.csv" para dejar solo los cantantes de musica urbana y sus canciones. Esto se realiza mediante el filtro en un nuevo programa utilizando los siguientes artistas: "Pailita", "Polimá Westcoast", "Paloma Mami", "Cris Mj", "Ak4:20", "Standly", "Julianno Sosa", "King Savagge", "Young Cister", "Nickoog Clk", "Sayian Jimmy", "Tunechikidd", "Marcianeke", "Simon la letra", "El Barto", "Gino Mella", "Bailbi el Chamako", "El Bai", "Jairo Vera", "Harry Nach", "Lleflight", "Pablo Chill-E", "Galee Galee", "Dainesitta", "ITHAN NY".
		6. Existe presencia de artistas chilenos en el top 200 mundial 
		Se concluye que el artista chileno urbano mas escuchado del año 2020 es XXX
		La canción chilena del genero urbano más escuchada del año 2020 es XXX

## Variables incorporadas: variable \| descripción

Cada base de dato se compone de nueve filas:
- rank: Indica la posición de la canción en la lista de las 200 más escuchadas. 
- uri: Link de la canción para ser escuchada en la app de Spotify
- artis_name: Nombre del artista de la canción y sus colaboradores (en el caso de existir)
- track_name: Nombre de la canción
- source: Sello discografico o productora de la canción
- peak_rank: Lugar más alto alcanzado por la canción en la lista de 200 canciones más escuchadas.
- previus_rank: Posición previa a la actual en la lista de las 200 canciones más escuchadas.
- week_on_chart: Cantidad de semanas que lleva en la lista de las 200 canciones más escuchadas.
- streams: Veces que la canción fue reproducida en el servicio de streaming.

## Observaciones sobre las bases de datos

La base de datos cuenta con la presencia de artistas chilenos probando nuestra hipotesis, aun así, puede que la cantidad de información no sea suficiente y sea necesario ampliar las fechas en que se recolectan datos. 