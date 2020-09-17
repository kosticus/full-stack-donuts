DROP DATABASE IF EXISTS doughnuts; 
-- if a doughnuts database exists, drop it so we can start from scratch

CREATE DATABASE doughnuts;
USE doughnuts;

-- type: string
-- doughFlavor: string
-- glazed: boolean
-- glazeFlavor: string
CREATE TABLE donuts (
  id INTEGER AUTO_INCREMENT UNIQUE PRIMARY KEY,
  type VARCHAR(255),
  doughFlavor VARCHAR(255),
  glazed BOOLEAN,
  glazeFlavor VARCHAR(255)
);

-- INSERT INTO <table> (columns) VALUES (values)
INSERT INTO donuts (type, doughFlavor, glazed, glazeFlavor) VALUES ("regular", "regular", true, "lemon");
INSERT INTO donuts (type, doughFlavor, glazed, glazeFlavor) VALUES ("fritter", "cinnamon", true, "plain");
INSERT INTO donuts (type, doughFlavor, glazed) VALUES ("jelly", "vanilla", false);