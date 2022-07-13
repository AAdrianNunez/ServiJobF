-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-07-2022 a las 01:50:40
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bddservijob`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificacion`
--

CREATE TABLE `calificacion` (
  `IDCalificacion` bigint(20) NOT NULL,
  `IDCliente` bigint(20) NOT NULL,
  `IDTrabajador` bigint(20) NOT NULL,
  `Puntaje` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `calificacion`
--

INSERT INTO `calificacion` (`IDCalificacion`, `IDCliente`, `IDTrabajador`, `Puntaje`) VALUES
(1, 1, 1, 2),
(2, 2, 1, 2),
(3, 1, 2, 4),
(4, 2, 2, 5),
(5, 1, 3, 3),
(6, 2, 3, 3),
(7, 1, 4, 5),
(8, 2, 4, 5),
(9, 1, 5, 2),
(10, 1, 5, 5),
(13, 1, 1, 5),
(14, 1, 7, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `IDCliente` bigint(20) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Apellido` varchar(100) NOT NULL,
  `Telefono` varchar(9) NOT NULL,
  `Password` varchar(64) NOT NULL,
  `TipoDocumento` int(11) NOT NULL,
  `NumeroDocumento` char(12) NOT NULL,
  `Email` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`IDCliente`, `Nombre`, `Apellido`, `Telefono`, `Password`, `TipoDocumento`, `NumeroDocumento`, `Email`) VALUES
(1, 'Pepex', 'Lopez', '999999999', '12345678', 2, '963159753852', 'Pepe@hotmail.com'),
(2, 'Jose', 'Ramirez', '123456789', '123', 1, '62357458', 'Jose@hotmail.com'),
(4, 'Adrian', 'Nuñez', '974158400', '12345678', 1, '90675340', 'adrian_ng02@hotmail.com'),
(5, 'Keyller', 'Pepe', '999999999', '12345678', 1, '12345678', 'pepiton_ng02@hotmail.com'),
(6, 'Adriano', 'Nuñez', '974158400', '12345678', 1, '90675340', 'adri@hotmail.com'),
(7, 'Adrianos', 'Nuñez', '974158400', '12345678', 1, '10679843', 'adrian@hotmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `IDComentario` bigint(20) NOT NULL,
  `IDCliente` bigint(20) NOT NULL,
  `IDTrabajador` bigint(20) NOT NULL,
  `Comentario` varchar(1000) NOT NULL,
  `Fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`IDComentario`, `IDCliente`, `IDTrabajador`, `Comentario`, `Fecha`) VALUES
(1, 1, 1, 'El resultado continua fallando', '2022-05-06 20:00:00'),
(2, 2, 1, 'El trabajador es impuntual', '2022-05-06 20:00:00'),
(3, 1, 2, 'Conforme con el trabajo realizado', '2022-05-06 20:00:00'),
(4, 2, 2, 'Excelente servicio', '2022-05-06 20:00:00'),
(5, 1, 3, 'Realizó un buen trabajo', '2022-05-06 20:00:00'),
(6, 2, 3, 'Realizó un buen trabajo', '2022-05-06 20:00:00'),
(7, 1, 4, 'Excelente servicio', '2022-05-06 20:00:00'),
(8, 2, 4, 'Excelente servicio', '2022-05-06 20:00:00'),
(9, 1, 5, 'Impuntual trabajador', '2022-05-06 20:00:00'),
(10, 2, 5, 'Excelente resultado', '2022-05-06 20:00:00'),
(11, 1, 1, 'Buen trabajador', '2022-05-27 11:44:00'),
(12, 1, 1, 'ASas', '2022-05-27 13:09:51'),
(13, 1, 1, 'hola', '2022-05-27 13:51:44'),
(14, 1, 2, 'buena', '2022-05-27 19:39:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

CREATE TABLE `servicio` (
  `IDServicio` bigint(20) NOT NULL,
  `Oficio` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `servicio`
--

INSERT INTO `servicio` (`IDServicio`, `Oficio`) VALUES
(1, 'Gasfiteria'),
(2, 'Electricista'),
(3, 'Reparaciones');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `serviciotrabajador`
--

CREATE TABLE `serviciotrabajador` (
  `IDServicioTrabajador` bigint(20) NOT NULL,
  `IDServicio` bigint(20) NOT NULL,
  `IDTrabajador` bigint(20) NOT NULL,
  `Descripcion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `serviciotrabajador`
--

INSERT INTO `serviciotrabajador` (`IDServicioTrabajador`, `IDServicio`, `IDTrabajador`, `Descripcion`) VALUES
(1, 1, 1, 'Experta en gasfiteria'),
(2, 2, 2, 'Especialista en cambio de toma corrientes'),
(3, 3, 3, 'Reparaciones de muebles'),
(4, 1, 4, 'asdasd'),
(5, 3, 5, 'wqerew'),
(6, 1, 2, 'qwe'),
(7, 2, 7, 'sda');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitud`
--

CREATE TABLE `solicitud` (
  `IDSolicitud` bigint(20) NOT NULL,
  `IDCliente` bigint(20) NOT NULL,
  `IDTrabajador` bigint(20) NOT NULL,
  `Estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `solicitud`
--

INSERT INTO `solicitud` (`IDSolicitud`, `IDCliente`, `IDTrabajador`, `Estado`) VALUES
(1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajador`
--

CREATE TABLE `trabajador` (
  `IDTrabajador` bigint(20) NOT NULL,
  `IDUbigeoDistrito` char(6) NOT NULL,
  `Tipo` int(11) NOT NULL DEFAULT 1,
  `Nombre` varchar(100) NOT NULL,
  `Apellido` varchar(100) NOT NULL,
  `Telefono` varchar(9) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `TipoDocumento` int(11) NOT NULL,
  `NumeroDocumento` char(12) NOT NULL,
  `Presentacion` varchar(64) NOT NULL,
  `FechaNacimiento` date DEFAULT NULL,
  `Contraseña` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `trabajador`
--

INSERT INTO `trabajador` (`IDTrabajador`, `IDUbigeoDistrito`, `Tipo`, `Nombre`, `Apellido`, `Telefono`, `Email`, `TipoDocumento`, `NumeroDocumento`, `Presentacion`, `FechaNacimiento`, `Contraseña`) VALUES
(1, '070104', 1, 'Maria', 'Fernandez', '123456789', 'Maria@hotmail.com', 1, '45871236', 'Buenas', '2000-10-08', '12345678'),
(2, '150102', 1, 'Bob', 'Ramirez', '123456789', 'Bob@hotmail.com', 1, '45615987', 'Hola que tal', '1995-05-03', '12345678'),
(3, '150102', 1, 'Manuel', 'Garcia', '123456789', 'Thor@hotmail.com', 2, '789456159862', 'Estudiante de Ingeniería', '1990-07-14', '12345678'),
(4, '070101', 1, 'Walter', 'Quispe', '123456789', 'Walter@hotmail.com', 1, '96375342', 'Buenas tardes', '2000-11-22', '12345678'),
(5, '150101', 1, 'Ollanta', 'Humala', '123456789', 'Ollanta@hotmail.com', 1, '98523614', 'Buenas noches', '2000-08-09', '12345678'),
(6, '070103', 2, 'Juan', 'Acuña', '968754123', 'juan@hotmail.com', 1, '56852416', 'Admin', '1999-08-06', '12345678'),
(7, '150102', 2, 'Luciana', 'Ramirez', '999464582', 'Luciana@hotmail.com', 1, '90675340', 'gaa', '2002-06-10', '12345678');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubigeodistrito`
--

CREATE TABLE `ubigeodistrito` (
  `IDUbigeoDistrito` char(6) NOT NULL,
  `Nombre` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ubigeodistrito`
--

INSERT INTO `ubigeodistrito` (`IDUbigeoDistrito`, `Nombre`) VALUES
('070101', 'Callao'),
('070102', 'Bellavista'),
('070103', 'Carmen de la Legua Reynoso'),
('070104', 'La Perla'),
('070105', 'La Punta'),
('070106', 'Ventanilla'),
('070107', 'Mi Perú'),
('150101', 'Lima'),
('150102', 'Ancón'),
('150103', 'Ate'),
('150104', 'Barranco'),
('150105', 'Breña'),
('150106', 'Carabayllo'),
('150107', 'Chaclacayo'),
('150108', 'Chorrillos'),
('150109', 'Cieneguilla'),
('150110', 'Comas'),
('150111', 'El Agustino'),
('150112', 'Independencia'),
('150113', 'Jesús María'),
('150114', 'La Molina'),
('150115', 'La Victoria'),
('150116', 'Lince'),
('150117', 'Los Olivos'),
('150118', 'Lurigancho'),
('150119', 'Lurin'),
('150120', 'Magdalena del Mar'),
('150121', 'Pueblo Libre'),
('150122', 'Miraflores'),
('150123', 'Pachacamac'),
('150124', 'Pucusana'),
('150125', 'Puente Piedra'),
('150126', 'Punta Hermosa'),
('150127', 'Punta Negra'),
('150128', 'Rímac'),
('150129', 'San Bartolo'),
('150130', 'San Borja'),
('150131', 'San Isidro'),
('150132', 'San Juan de Lurigancho'),
('150133', 'San Juan de Miraflores'),
('150134', 'San Luis'),
('150135', 'San Martín de Porres'),
('150136', 'San Miguel'),
('150137', 'Santa Anita'),
('150138', 'Santa María del Mar'),
('150139', 'Santa Rosa'),
('150140', 'Santiago de Surco'),
('150141', 'Surquillo'),
('150142', 'Villa El Salvador'),
('150143', 'Villa María del Triunfo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `calificacion`
--
ALTER TABLE `calificacion`
  ADD PRIMARY KEY (`IDCalificacion`),
  ADD KEY `IDCliente` (`IDCliente`),
  ADD KEY `IDTrabajador` (`IDTrabajador`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`IDCliente`);

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`IDComentario`),
  ADD KEY `IDCliente` (`IDCliente`),
  ADD KEY `IDTrabajador` (`IDTrabajador`);

--
-- Indices de la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD PRIMARY KEY (`IDServicio`);

--
-- Indices de la tabla `serviciotrabajador`
--
ALTER TABLE `serviciotrabajador`
  ADD PRIMARY KEY (`IDServicioTrabajador`),
  ADD KEY `IDServicio` (`IDServicio`),
  ADD KEY `IDTrabajador` (`IDTrabajador`);

--
-- Indices de la tabla `solicitud`
--
ALTER TABLE `solicitud`
  ADD PRIMARY KEY (`IDSolicitud`),
  ADD KEY `IDCliente` (`IDCliente`),
  ADD KEY `IDTrabajador` (`IDTrabajador`);

--
-- Indices de la tabla `trabajador`
--
ALTER TABLE `trabajador`
  ADD PRIMARY KEY (`IDTrabajador`),
  ADD KEY `IDUbigeoDistrito` (`IDUbigeoDistrito`);

--
-- Indices de la tabla `ubigeodistrito`
--
ALTER TABLE `ubigeodistrito`
  ADD PRIMARY KEY (`IDUbigeoDistrito`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `calificacion`
--
ALTER TABLE `calificacion`
  MODIFY `IDCalificacion` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `IDCliente` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `IDComentario` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `servicio`
--
ALTER TABLE `servicio`
  MODIFY `IDServicio` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `serviciotrabajador`
--
ALTER TABLE `serviciotrabajador`
  MODIFY `IDServicioTrabajador` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `solicitud`
--
ALTER TABLE `solicitud`
  MODIFY `IDSolicitud` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `trabajador`
--
ALTER TABLE `trabajador`
  MODIFY `IDTrabajador` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `calificacion`
--
ALTER TABLE `calificacion`
  ADD CONSTRAINT `calificacion_ibfk_1` FOREIGN KEY (`IDCliente`) REFERENCES `cliente` (`IDCliente`),
  ADD CONSTRAINT `calificacion_ibfk_2` FOREIGN KEY (`IDTrabajador`) REFERENCES `trabajador` (`IDTrabajador`);

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`IDCliente`) REFERENCES `cliente` (`IDCliente`),
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`IDTrabajador`) REFERENCES `trabajador` (`IDTrabajador`);

--
-- Filtros para la tabla `serviciotrabajador`
--
ALTER TABLE `serviciotrabajador`
  ADD CONSTRAINT `serviciotrabajador_ibfk_1` FOREIGN KEY (`IDServicio`) REFERENCES `servicio` (`IDServicio`),
  ADD CONSTRAINT `serviciotrabajador_ibfk_2` FOREIGN KEY (`IDTrabajador`) REFERENCES `trabajador` (`IDTrabajador`);

--
-- Filtros para la tabla `solicitud`
--
ALTER TABLE `solicitud`
  ADD CONSTRAINT `solicitud_ibfk_1` FOREIGN KEY (`IDCliente`) REFERENCES `cliente` (`IDCliente`),
  ADD CONSTRAINT `solicitud_ibfk_2` FOREIGN KEY (`IDTrabajador`) REFERENCES `trabajador` (`IDTrabajador`);

--
-- Filtros para la tabla `trabajador`
--
ALTER TABLE `trabajador`
  ADD CONSTRAINT `trabajador_ibfk_1` FOREIGN KEY (`IDUbigeoDistrito`) REFERENCES `ubigeodistrito` (`IDUbigeoDistrito`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
