create database ventas;
drop database ventas; 
use ventas;
CREATE TABLE cabecera_factura (
numero varchar(20) primary key,
fecha datetime not null,
codigo_cliente int not null
);
CREATE TABLE detalle_factura(
numero_factura varchar(20) not null,
linea int not null,
codigo_producto int not null,
cantidad decimal(10,2) not null,
precio decimal(10,2) not null,
total decimal(10,2) not null
);
CREATE TABLE producto(
codigo int not null primary key,
nombre varchar(100) not null,
precio_actual decimal(10,2) not null
);
CREATE TABLE cliente(
codigo int not null primary key,
primer_nombre varchar(100) not null,
primer_apellido varchar(100) not null,
direccion varchar(100) null,
nit varchar(20) not null
);

select * from cabecera_factura; 
insert into cabecera_factura ( numero, fecha, codigo_cliente)
values ('5317','2024-09-06 18:09;12 ','2343'),
 ('3531','2024-06-01 12:02:01','5322'),
 ('8654','2024-09-06 12:02:01','8654'),
 ('4259','2024-05-09 15:24:06','9790'),
 ('7543','2024-03-01 19:10:10','7543');

select * from detalle_factura; 
insert into detalle_factura (numero_factura, linea, codigo_producto, cantidad, precio, total)
values ('5317','3','0934','2','1929.09','3858.18'),
 ('3531','4','1837','3','504.99','1514.97'),
('8654','1','4534','4','250.99','1003.96'),
('4259','6','7668','1','1203.03','1203.03'),
 ('7543','6','6575','2','1344.99','2689.98');

select * from producto; 
insert into producto (codigo, nombre, precio_actual)
values ('0934','TV','1929.09'),
 ('1837','Teclado','504.99'),
 ('4534','Mouse','250.99'),
('7668','Monitor','1203.03'),
 ('6575','Silla','1344.99');


select * from cliente; 
insert into cliente (codigo, primer_nombre, primer_apellido, direccion, nit)
values ('2343','Juan','Perez','los laureles, jalapa','2520069-0'),
 ('5322','Lucas','Hernandez','los eucaliptos, jalapa','2363867-7'),
('8654','Marcos','lucindo','barrio san francisco, jalapa','8964357-5'),
 ('9790','Pablo','Fernandez','colonia los pinos, jalapa','1754478-1'),
 ('7543','Sergio','Valdez','barrio el porvenir, jalapa','7826382-6');
 
 ALTER TABLE cabecera_factura ADD CONSTRAINT FK_FACTURA_CLIENTE FOREIGN KEY
(codigo_cliente) REFERENCES cliente(codigo);

ALTER TABLE detalle_factura ADD CONSTRAINT FK_DETALLE_FACTURA_PRODUCTO FOREIGN KEY
(codigo_producto) REFERENCES producto(codigo);

ALTER TABLE detalle_factura ADD CONSTRAINT FK_DETALLE_ENCABEZADO_FACTURA FOREIGN
KEY (numero_factura) REFERENCES cabecera_factura(numero);

ALTER TABLE detalle_factura ADD CONSTRAINT PK_DETALLE_FACTURA PRIMARY KEY
(numero_factura,linea);

select numero from cabecera_factura;

SELECT cabecera_factura.numero, cabecera_factura.fecha, producto.nombre, detalle_factura.cantidad, detalle_factura.precio, detalle_factura.total
FROM cabecera_factura, detalle_factura, producto
WHERE cabecera_factura.numero = '3531'
AND cabecera_factura.numero = detalle_factura.numero_factura
AND detalle_factura.codigo_producto = producto.codigo;
  

SELECT cabecera_factura.numero, cliente.primer_nombre 
FROM cabecera_factura 
JOIN cliente ON cabecera_factura.codigo_cliente = cliente.codigo;
