-- create the database
-- create the schema

DROP DATABASE IF EXISTS doughnuts;
CREATE DATABASE doughnuts;

USE doughnuts;

-- id (autoincrementing and unique): primary key
-- flavor
-- glazed
-- type
-- calories (?)
CREATE TABLE donuts (
  id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
  flavor VARCHAR(255),
  glazed TINYINT,
  type VARCHAR(255),
  calories INT
);

INSERT INTO donuts (flavor, glazed, type, calories) VALUES ("regular", 1, "regular", 300);
INSERT INTO donuts (flavor, glazed, type, calories) VALUES ("lemon", 0, "regular", 200);
INSERT INTO donuts (flavor, glazed, type, calories) VALUES ("strawberry", 1, "maple", 500);
INSERT INTO donuts (flavor, glazed, type, calories) VALUES ("apple", 1, "bearclaw", 500);

-- CREATE TABLE "table_name"
-- ("column_1" "data_type_for_column_1",
-- "column_2" "data_type_for_column_2",
-- ... )