##########################################################################################
# PRWEB
# SQL File
# Comment the version you do not need using #
##########################################################################################

##########################################################################################
# version MYSQL
create table category (
	id int not null AUTO_INCREMENT primary key,
	name varchar(255)
);

create table item (
	id int not null AUTO_INCREMENT primary key,
	title varchar(255),
	author varchar(255),
	body varchar(255),
	category_id int references category(id)
);

##########################################################################################
# version PostgresQL
create sequence category_seq;
create table category (
	id integer not null default nextval('category_seq') primary key,
	name character varying(255)
);

create sequence item_seq;
create table item (
	id integer not null default nextval('item_seq')  primary key,
	title character varying(255),
	author character varying(255),
	body character varying(255),
	category_id integer references category(id)
);

##########################################################################################
# data
insert into category(name) values
('electronics'),
('appartment'),
('pets'),
('books'),
('smartphone');

insert into item(title, author, body, category_id) values
('Computer', 'JY Martin', 'I sell my old computer. 3 years old', 1),
('Anime', 'JY Martin', 'Looking for the end of the Fairy Tail manga ( > 126)', 4),
('Elenium', 'JY Martin', 'I am looking for the french version of the The Elenium series By David Eddings', 4),
('Kinect', 'JM Normand', 'I sell my new kinect that I can''t connect to my computer', 1),
('Kikou', 'M Servieres', 'My dog Kikou gave me plenty of little dogs, who wants one?', 3),
('Mangas', 'M Magnin', 'I am looking for the first Alabator Mangas. Anyone get it?', 4);
