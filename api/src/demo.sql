CREATE DATABASE dogs;

[ ] Raza con las siguientes propiedades:
ID *
Nombre *
Altura *
Peso *
Años de vida

CREATE TABLE Raza(
id serial PRIMARY KEY,
Nombre varchar(70) UNIQUE,
Altura character(4) NOT NULL, 
Peso character(10) NOT NULL,
AñosDeVida character(2) NOT NULL,
TemperamentoID integer REFERENCES Temperamento (id)
);

[ ] Temperamento con las siguientes propiedades:
ID
Nombre

CREATE TABLE Temperamento(
id serial PRIMARY KEY,
Nombre varchar(70) NOT NULL
);