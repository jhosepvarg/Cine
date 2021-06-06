CREATE DATABAS cinemark USE cinemark;

/*Table structure for table banners */
CREATE TABLE banners (
  id int(11) NOT NULL AUTO_INCREMENT,
  descripcion varchar(150) DEFAULT NULL,
  imagen varchar(250) DEFAULT NULL,
  PRIMARY KEY (id)
)
/*Data for the table banners */
insert into
  banners(id, descripcion, imagen)
values
  (
    1,
    'cualquier cosa',
    'https://assets.cinemark-core.com/5db771be04daec00076df3f5/content/covers/6067788d77b425000947de25/desktop/despedida-cable-plaza-1622562805038.jpg'
  ),
  (
    2,
    'banner 2',
    'https://assets.cinemark-core.com/5db771be04daec00076df3f5/content/covers/5fb554fbd4d7aa0007ed83c2/desktop/protocolos-de-seguridad-1605719291935.jpg'
  );

/*Table structure for table categorias_edades */
CREATE TABLE categorias_edades (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(45) DEFAULT NULL,
  PRIMARY KEY (id)
)
/*Data for the table categorias_edades */
insert into
  categorias_edades(id, nombre)
values
  (1, 'menores de 7 annos'),
  (2, 'mayores de 14 annos');

/*Table structure for table ciudades */
CREATE TABLE ciudades (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(100) DEFAULT NULL,
  PRIMARY KEY (id)
)
/*Data for the table ciudades */
insert into
  ciudades(id, nombre)
values
  (1, 'a'),
  (2, 'b'),
  (3, 'c'),
  (4, 'd'),
  (5, 'e'),
  (6, 'f');

/*Table structure for table generos */
CREATE TABLE generos (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(45) DEFAULT NULL,
  PRIMARY KEY (id)
)
/*Data for the table generos */
insert into
  generos(id, nombre)
values
  (1, 'masculino'),
  (2, 'femenino');

/*Table structure for table peliculas */
CREATE TABLE peliculas (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(150) DEFAULT NULL,
  imagen_principal varchar(250) DEFAULT NULL,
  descripcion varchar(250) DEFAULT NULL,
  fecha_estreno date DEFAULT NULL,
  id_categoria_edad int(11) DEFAULT NULL,
  reparto varchar(250) DEFAULT NULL,
  PRIMARY KEY (id)
)
/*Data for the table peliculas */
insert into
  peliculas(
    id,
    nombre,
    imagen_principal,
    descripcion,
    fecha_estreno,
    id_categoria_edad,
    reparto
  )
values
  (
    1,
    'Pelicula 1',
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'esto es una pelicula',
    '2021-03-11',
    1,
    'william smith'
  ),
  (
    8,
    'Pelicula 2',
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'pelicula',
    '2021-05-05',
    1,
    'smith'
  ),
  (
    9,
    'Pelicula 3',
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'pelicula',
    '2021-03-09',
    2,
    'Halo'
  ),
  (
    10,
    'pelicula 4',
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'pelicula',
    '2021-09-16',
    1,
    'pruebas'
  ),
  (
    11,
    'pelicula 5',
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'pelicula',
    '2021-10-13',
    2,
    'Pruebas'
  ),
  (
    12,
    'Pelicula 6',
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'asdasds',
    '2021-07-10',
    2,
    'Nadie'
  );

/*Table structure for table teatros */
CREATE TABLE teatros (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(100) DEFAULT NULL,
  direccion varchar(150) DEFAULT NULL,
  id_ciudad int(11) DEFAULT NULL,
  PRIMARY KEY (id)
)
/*Data for the table teatros */
insert into
  teatros(id, nombre, direccion, id_ciudad)
values
  (1, 'Teatro 1', 'direccion teatro 1', 1),
  (2, 'Teatro 2', 'direccion teatro 2', 1),
  (3, 'Teatro 3', 'direccion teatro 3', 2),
  (4, 'Teatro 4', 'direccion teatro 4', 2);

/*Table structure for table usuarios */
CREATE TABLE usuarios (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(100) DEFAULT NULL,
  apellido varchar(100) DEFAULT NULL,
  id_genero int(11) DEFAULT NULL,
  numero_documento varchar(100) DEFAULT NULL,
  fecha_nacimiento date DEFAULT NULL,
  correo_electronico varchar(150) DEFAULT NULL,
  contrasena varchar(50) DEFAULT NULL,
  PRIMARY KEY (id)
);