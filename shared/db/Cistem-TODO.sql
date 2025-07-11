/*                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
	///// BASE DE DATOS PARA EJEMPLO DE REFRESH TOKEN /////
*/

CREATE DATABASE [Cistem-TODO];
USE [Cistem-TODO];

-- CREAR TABLA DE ESTADOS INTERNOS EN LA APLICACIÓN
CREATE TABLE Estado (
    EstadoID INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(30) NOT NULL,
    FechaAlta DATETIME NOT NULL DEFAULT GETDATE(),
    FechaEdicion DATETIME NOT NULL DEFAULT GETDATE()
);
GO

-- REGISTRO DE ESTADOS POR DEFECTO
INSERT INTO Estado (Nombre) VALUES ('PENDIENTE');
INSERT INTO Estado (Nombre) VALUES ('ACTIVO');
INSERT INTO Estado (Nombre) VALUES ('INACTIVO');
INSERT INTO Estado (Nombre) VALUES ('ELIMINADO');
INSERT INTO Estado (Nombre) VALUES ('BLOQUEADO');
GO

-- CREAR TABLA DE ESTADOS INTERNOS EN LA APLICACIÓN
CREATE TABLE EstadoTarea (
    EstadoTareaID INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(30) NOT NULL,
    FechaAlta DATETIME NOT NULL DEFAULT GETDATE(),
    FechaEdicion DATETIME NOT NULL DEFAULT GETDATE()
);
GO

-- REGISTRO DE ESTADOS POR DEFECTO
INSERT INTO EstadoTarea (Nombre) VALUES ('POR HACER');
INSERT INTO EstadoTarea (Nombre) VALUES ('EN PROCESO');
INSERT INTO EstadoTarea (Nombre) VALUES ('EN PRUEBAS');
INSERT INTO EstadoTarea (Nombre) VALUES ('FINALIZADO');
INSERT INTO EstadoTarea (Nombre) VALUES ('CANCELADO');

-- CREAR TABLA DE USUARIOS
CREATE TABLE Usuario (
	UsuarioID INT PRIMARY KEY IDENTITY(1,1),
	Correo VARCHAR(150) NOT NULL,
	Contrasena VARCHAR(255) NOT NULL,
	UltimaIP VARCHAR(20) NULL,
	UltimoAcceso DATETIME NULL,
	UltimasContrasenas TEXT NOT NULL DEFAULT '{"passwords":[]}',
	EstadoID INT NOT NULL DEFAULT 2,
	FechaAlta DATETIME NOT NULL DEFAULT GETDATE(),
    FechaEdicion DATETIME NOT NULL DEFAULT GETDATE(),
	
	FOREIGN KEY (EstadoID) REFERENCES Estado (EstadoID),
);

-- CREAR TABLA DE TAREAS
CREATE TABLE Tarea (
	TareaID INT PRIMARY KEY IDENTITY(1,1),
	UsuarioID INT NOT NULL,
	Titulo VARCHAR(100) NOT NULL,
	Descripcion VARCHAR(255) NOT NULL,
	FechaAlta DATETIME NOT NULL DEFAULT GETDATE(),
	FechaEdicion DATETIME NOT NULL DEFAULT GETDATE(),
	FechaEliminado DATETIME NULL,
	EstadoTareaID INT NOT NULL DEFAULT 1,

	FOREIGN KEY (UsuarioID) REFERENCES Usuario (UsuarioID),
	FOREIGN KEY (EstadoTareaID) REFERENCES EstadoTarea (EstadoTareaID)
);

-- CREAR TABLA DE SESIONES
CREATE TABLE Sesion (
	SesionID INT PRIMARY KEY IDENTITY(1,1),
	UsuarioID INT NOT NULL,
	TokenAcceso VARCHAR(255) NOT NULL,
	TokenRefresco VARCHAR(255) NOT NULL,
	FechaAlta DATETIME NOT NULL DEFAULT GETDATE(),
	FechaExpiracionTokenAcceso DATETIME NOT NULL,
	FechaExpiracionTokenRefresco DATETIME NOT NULL,
	FechaEdicion DATETIME NOT NULL DEFAULT GETDATE(),

	FOREIGN KEY (UsuarioID) REFERENCES Usuario (UsuarioID)
);