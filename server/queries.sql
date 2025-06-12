CREATE TABLE IF NOT EXISTS week07messages (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    message TEXT NOT NULL
);

INSERT INTO week07messages(name,message) VALUES ('Luke','hi all'),('Tom','hi back');