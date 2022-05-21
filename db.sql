-- public.dietas definition

-- Drop table

-- DROP TABLE public.dietas;

CREATE TABLE public.dietas (
	id_dieta serial4 NOT NULL,
	tipo varchar(250) NULL,
	calorias int4 NULL,
	descripcion varchar(700) NULL,
	dieta varchar(200) NULL,
	id_nutriologo int4 NULL,
	id_paciente int4 NULL,
	"createdAt" date NULL,
	"updatedAt" date NULL,
	CONSTRAINT dietas_pkey PRIMARY KEY (id_dieta)
);

-- public.historial definition

-- Drop table

-- DROP TABLE public.historial;

CREATE TABLE public.historial (
	id_historial serial4 NOT NULL,
	id_paciente int4 NULL,
	motivo varchar(500) NULL,
	actividades varchar(500) NULL,
	ejercicio varchar(500) NULL,
	signos varchar(500) NULL,
	peso int4 NULL,
	estatura int4 NULL,
	circunferencia_brazo int4 NULL,
	circunferencia_cintura int4 NULL,
	circunferencia_muñeca int4 NULL,
	"createdAt" date NULL,
	"updatedAt" date NULL,
	CONSTRAINT historial_pkey PRIMARY KEY (id_historial)
);

-- public.usuarios definition

-- Drop table

-- DROP TABLE public.usuarios;

CREATE TABLE public.usuarios (
	id serial4 NOT NULL,
	usuario varchar(100) NULL,
	"password" varchar(100) NULL,
	nombre varchar NULL,
	apellidos varchar NULL,
	edad int4 NULL,
	genero varchar(5) NULL,
	cedula_profesional varchar(50) NULL,
	id_rol int4 NULL,
	activo bool NULL,
	usuario_creacion varchar(100) NULL,
	"createdAt" date NULL,
	"updatedAt" date NULL,
	CONSTRAINT usuarios_pkey PRIMARY KEY (id)
);