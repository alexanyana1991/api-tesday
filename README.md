# API testday 

## Table of Contents

-   [Intro](#intro)
-   [API](#api)
-   [Features Overview](#features-overview)
-   [Getting Started](#getting-started)
-   [What to add](#what-to-add)

# API

Current version of API is (v1).

# Features Overview

-  Get the list of all shops.

-  Create a new user.

-  Delete all shops.

-  Find shop by id.

-  Update shop by id.

-  Delete sho by id.

# Getting Started

Make sure **Node.js** is installed on your local machine by hitting `node -v` on the command line (please follow the instructions from the [Node.js website](http://nodejs.org) to install it)

## Running Locally

Install the application and all the required dependencies by hitting the following commands on the command line:

`git clone https://github.com/alexanyana1991/api-tesday.git`

`npm install`

Create file **.env** and copy environment variables from **.env.example**

Run `docker-compose up db` command, to run docker container with db

Run `npx prisma db pull` command to make introspection of the database which is running in docker container

Run `npx prisma generate`

Once you finish installation process you should run the `npm run dev` command

To use Prisma GUI, open another terminal and hit `npx prisma studio`

## Running in Container

Copy the repository by hitting the following command on the command line:

`git clone https://github.com/alexanyana1991/api-tesday.git`

Create file **.env** and copy environment variables from **.env.example**

Change the DATABASE_URL="mysql://api_testday:test123@localhost:3306/api_testday" to `DATABASE_URL="mysql://api_testday:test123@172.17.0.1:3306/api_testday"`

Make sure you Docker application is running, then hit:

`docker-compose up`

Once server is up and running, open **api-testday-api** container's CLI and hit the following command:

`npm prisma db pull`

## Requests

To create testing request i would recommend you to download Postman desctop application (`https://www.postman.com/downloads/`)

# What to add

I would recomend to implement several things for this application.

1. Authorization through **JWT**  in header of the client or server requests also add cookies
2. Implement logger
3. Implement automated testing (unit/integration tests)
4. Implement CI/CD using 
5. Implement Cross-Origin Resource Sharing (CORS) policy
6. If developers have plans to expand the project i would like to recommend use TypeScript instead of JavaScript
   because TS helps to developers to avoid some logical error during the development.
7. Wether developers decide to make only primitive queries and won't do some sofisticated computation into database i would like to recommend use MongoDB istead MariaDB.
8. It would be good idea to add frontend to this project wether this api would be used on the client side
9. In case of Shop table which is inside of the MariaDB i would recomend to change several fields rules.
