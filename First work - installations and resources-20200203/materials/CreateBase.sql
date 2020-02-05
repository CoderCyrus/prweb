
-- #########################################################################################
--  PRWEB
--  SQL File
--  This is written for PostgreSQL.
-- #########################################################################################

-- #########################################################################################
--  Table Schema

create sequence category_id_seq;
create table category (
	id integer not null default nextval('category_id_seq') primary key,
	name character varying(255)
);

create sequence item_id_seq;
create table item (
	id integer not null default nextval('item_id_seq')  primary key,
	title character varying(255),
	author character varying(255),
	body character varying(255),
	category_id integer references category(id)
);

ALTER TABLE category OWNER TO prweb;
ALTER TABLE item OWNER TO prweb;

ALTER SEQUENCE category_id_seq OWNER TO prweb;
ALTER SEQUENCE item_id_seq OWNER TO prweb;

-- #########################################################################################
--  data

truncate item;
truncate category cascade;

insert into category(id, name) values
(1, 'electronics'),
(2, 'appartment'),
(3, 'pets'),
(4, 'books'),
(5, 'smartphone');

SELECT pg_catalog.setval('category_id_seq', 5, true);

insert into item(id, title, author, body, category_id) values
(1, 'Computer', 'JY Martin', 'I sell my old computer. 3 years old', 1),
(2, 'Anime', 'JY Martin', 'Looking for the end of the Fairy Tail manga ( > 126)', 4),
(3, 'Elenium', 'JY Martin', 'I am looking for the french version of the The Elenium series By David Eddings', 4),
(4, 'Kinect', 'JM Normand', 'I sell my new kinect that I can''t connect to my computer', 1),
(5, 'Kikou', 'M Servieres', 'My dog Kikou gave me plenty of little dogs, who wants one?', 3),
(6, 'Mangas', 'M Magnin', 'I am looking for the first Alabator Mangas. Anyone get it?', 4);

SELECT pg_catalog.setval('item_id_seq', 6, true);

-- #########################################################################################
