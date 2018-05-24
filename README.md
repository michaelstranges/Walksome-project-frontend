# "WALKSOME" - Final Project (Lighthouse Labs Web Development Bootcamp)
### Main Contributors:

A joint operation between:

- Michael Stranges - GitHub: https://github.com/michaelstranges
- Mateus Braga - GitHub: https://github.com/bragamat

## Overview

A path sharing app, built for locals and tourists to find paths through the city of Toronto to walk along and discover new neighbourhoods or sites in the city. The goal of the app was to create a full community which users could create and share maps of their choice, and registered users could view, save, comment and rate the routes.   

## Final Product

Screenshot of the Homepage:
!["Screenshot of URLs page"](https://github.com/michaelstranges/final-project-frontend/blob/master/public/ReadMe%20Photos/WalksomeHome.png)

Screenshot of a path profile:
!["Screenshot of URLs page"](https://github.com/michaelstranges/final-project-frontend/blob/master/public/ReadMe%20Photos/WalkProfile.png)

## Getting Started

BACK-END

You will need the backend files from this link here:
https://github.com/michaelstranges/final-project-backend

Setting up the database (DB) using PostgreSQL

1. type, psql -U vagrant -d template1
2. CREATE ROLE 'labber' WITH LOGIN password 'labber'
3. CREATE DATABASE finalproject OWNER labber
4. Update your .env file with options from the step before.
5. Run npm install to install packaged
6. Run migrations - knex migrate:latest
7. Run seeds - knex seed:run
8. Start Server (will be on Port 8080) - node server.js

FRONT-END

1. Run npm install to download all packages
2. Once installed, use npm start to begin the app.
3. The application will be running on port 3000.

## Tech Stack

- Axios
- Express
- Google Maps / Google Routes API
- Knex
- Node
- PostgreSQL
- React
- React Router
- React-Google-Maps

## Future Goals

- Implement the path create option
- Implement user profile pages
- Implement path rating

## Contact the Contributors
Michael Stranges - strangesm@gmail.com

*Last updated May 24, 2018*
