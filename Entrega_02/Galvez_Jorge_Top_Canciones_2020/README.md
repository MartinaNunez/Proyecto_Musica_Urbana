# Documentación Jorge Ignacio Gálvez Palacios
---

## Selección de las bases
Para el proyecto utilizamos las bases de datos provenientes de Spotify Chart, que contienen la información del top 200 de las canciones más escuchadas, en un periodo de tiempo determinado y segmentadas por país.
La canción más escuchada se define por la cantidad de veces que esta fue escuchada en el sistema de streaming (vease metodología).
De todas estas bases de datos seleccionamos las de ocho países y el top global, pertenecientes al fecha del 2 de julio del año 2020, 2021 y 2022 respectivamente.

Los países fueron escogidos debido a que:
+ Son hispanohablantes.
+ Tienen una población considerable.
+ La información se encuentra disponible en el periodo entre el año 2020 y 2022.

Estos ocho países son: Argentina, Chile, Colombia, España, Guatemala, Honduras, Mexico y Perú. 
Ademas de estos países se agregó el top 200 global de la semana del 2 de julio del año 2020, 2021 y 2022 respectivamente, para ser utilizado como comparativa. 

Respecto a la fecha, se eligió el 2 de julio de cada año porque marca la mitad del año a modo de poder tomar una muestra lo más representativa posible.

### Sobre las bases de datos
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

## Limpieza de bases de datos
De todas las categorías que se encuentran en la base de datos, solo utilizaremos los siguientes datos:
- rank
- artist_name
- track_name
- peak_name
- weeks_on_chart
- stream
Ademas de estos datos, agregaremos una fila correspondiente al país de origen con el nombre "país", para poder separar los datos de los distintos origenes. Seguimos evaluando la necesidad de agregar una fila correspondiente al año, lo cual dependera de como trabajemos los datos a futuro.

### Artistas seleccionados
Los artistas que buscaremos en el top son: Pailita, Polimá Westcoast, Paloma Mami, Cris Mj, Ak4:20, Standly, Julianno Sosa, King Savagge, Young Cister, Nickoog Clk, Sayian Jimmy, Tunechikidd, Marcianeke, Simon la letra, El Barto, Gino Mella, Bailbi el Chamako, El Bai, Jairo Vera, Harry Nach, Lleflight, Pablo Chill-E, Galee Galee, Dainesitta, ITHAN NY.
Todos estos artistas fueron seleccionados por pertenecer al genero urbano chileno, con una trayectora consolidada en el país.

## Algunas preguntas respondidas
1. ¿Existe presencia de artistas chilenos en el top 200 fuera de Chile?
		Es posible buscar en las bases de datos nombres de artistas chilenos y como estos datos estan asociados al país de origen se confirma su presencia.
2. ¿La presencia de artistas chilenos en el top 200 fuera del Chile ha aumentado? 
		Al tener la comparativa historica de los años (bases de datos del año 2020, 2021 y 2022) y filtrar por artista en cada una de ellas, podemos ver como no solo la cantidad de canciones aumenta, sino que tambien suben la posicion de este ranking.
3. ¿Cuál es el artista chileno más escuchado en Spotify?
		Es posible visualizar cuál es el artista chileno más escuchado al tener la cantidad total de reproducciones, no solo de una cancion sino de todas las que se encuentren con su nombre.
