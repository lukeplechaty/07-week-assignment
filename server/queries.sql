CREATE TABLE IF NOT EXISTS week07messages (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    likes INT NOT NULL
);

INSERT INTO week07messages(name,message) VALUES ('Luke','hi all');

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

CREATE TABLE IF NOT EXISTS week07logs (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message_id INT REFERENCES week07messages(id) NOT NULL,
    user_id INT REFERENCES week07users(id) NOT NULL
);

INSERT INTO week07logs (message_id, user_id) VALUES (1, 1)

SELECT * FROM week07messages JOIN week07logs ON week07logs.message_id = week07messages.id ORDER BY week07messages.id DESC