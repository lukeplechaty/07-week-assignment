CREATE TABLE IF NOT EXISTS week07messages (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    message TEXT NOT NULL
);

INSERT INTO week07messages(name,message) VALUES ('Luke','hi all'),('Tom','hi back');




CREATE TABLE IF NOT EXISTS week07passwords (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS week07users (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    password_id INT REFERENCES week07passwords(id) NOT NULL
);

SELECT * FROM week07users JOIN week07passwords ON week07users.password_id = week07passwords.id WHERE week07users.name='Luke' AND week07passwords.password='letmein'