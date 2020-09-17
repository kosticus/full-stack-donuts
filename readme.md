# Code-Along Workshops

## Introduction

Quickly work through all major areas of the full stack so you can see it all come together:

- Client-side a.k.a. Frontend (React)
- Server-side a.k.a Backend (Express, and Database (MySQL).

## Goal

After working through this practice repo, you should be able to quickly build and work in any ExpressJS application.

Building a basic CRUD app should be mostly muscle memory.

## Getting started

**How to perform this activity:**

In class, we will work through parts 1-2 in the back-end workshop, and parts 3-4 in the front-end workshop.

**_NOTE_**: The code written in class has many different styles (ES5 functions, ES6 functions, async callbacks, promises, etc) to show a variety of ways to handle the same functionality.

Once we have finished, you should delete everything and start over for yourself!

On the second rebuild: Do not reference code you already wrote for this assignment! Instead, rely on DOCUMENTATION and your CHEATSHEET. If you have completed part 4 in a timely manner, proceed to part 5.

## Part 1: Server API

Objectives _(read this carefully)_:

- Create a server that responds to the specified RESTful routes
- Each route should respond back with **dummy data for now**

Technologies:

- Node
- Express
- NPM
- Git

_ROUTES (PART 1)_

| METHOD | PATH               | DESCRIPTION                             |
| ------ | ------------------ | --------------------------------------- |
| GET    | /api/donuts     | respond with string "all the donuts" |
| GET    | /api/donuts/:id | respond with string "single donut"   |

## Part 2: MySQL Queries

- Connect your server to your database using MySQLJS (mysql javascript)
- Complete the server routes outlined in the route table below (use the queries.js helper functions)

Technologies:

- MySQL
- MySQLJS
- Postman

_ROUTES:_

| METHOD | PATH               | DESCRIPTION                                          |
| ------ | ------------------ | ---------------------------------------------------- |
| GET    | /api/donuts     | respond with all the donuts from the database     |
| GET    | /api/donuts/:id | respond with single donut, based on req.params.id |

## Part 3: ReactJS (Using Dummy Data)

In your frontend folder:

**Using the given donuts dummy data (exampleDonuts.js):**

- Refactor the given React code to do the following:
  - Dynamically view all the donuts (using the provided React components during rep 1 and creating your own during rep 2)
  - Enter a donut id to the form and view that selected donut

## Part 4: ReactJS (Refactor using Data From Your Server API)

In your frontend folder:

**Using the donut data from your server API routes:**

- Update your React app to:
  - View all donuts from the server
  - View a specific donut from the server

**HINT: You will need to use AJAX (Fetch, Axios, etc) to allow your client side code to talk to your server.**

You've already created the endpoints below, now you need to use AJAX to communicate to them and get the info you need to the client-side code:

| METHOD | PATH               | DESCRIPTION                                          |
| ------ | ------------------ | ---------------------------------------------------- |
| GET    | /api/donuts     | respond with all the donuts                       |
| GET    | /api/donuts/:id | respond with single donut, based on req.params.id |

## Part 5: Bonus - Full CRUD

**(DO THIS ONLY ON THE SECOND RUN)**

Handle these additional routes in your server, they should modify the database accordingly:

| METHOD | PATH               | DESCRIPTION                                |
| ------ | ------------------ | ------------------------------------------ |
| POST   | /api/donuts     | inserts new donut record from req.body |
| PATCH  | /api/donuts/:id | update a donut record from req.body    |
| DELETE | /api/donuts/:id | delete a donut record                  |

Create the appropriate interface in your React app so that users can make AJAX (e.g. Axios, Fetch, \$.Ajax, etc) requests to the routes above and then see the changes render in their web browser.
