CREATE DATABASE rest_api_ts;

CREATE TABLE USERS (
    ID SERIAL PRIMARY KEY,
    NAME VARCHAR (30),
    EMAIL VARCHAR (50)
)
INSERT INTO USERS(NAME,EMAIL) VALUES ('gabriel','gmorales@gmail.com'),('Pepito','pepito@gmail.com');