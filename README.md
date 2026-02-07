Sports Goods Store Management System
Course

Advanced Databases (NoSQL)

Project Type

Web Application (Backend + Frontend)

Topic

Sports Goods Store

Team Members

Abylay Dosymbek
Group: SE-2435

Sakenov Rassul
Group: SE-2435

Department: Software Engineering

Project Overview

This project is a web-based Sports Goods Store Management System developed as a final project for the Advanced Databases (NoSQL) course.

The main goal of the project is to demonstrate practical usage of MongoDB as a NoSQL database together with a RESTful backend and a simple frontend interface.

The system allows:

managing sports products and categories,

placing orders,

performing analytics using MongoDB aggregation pipelines,

demonstrating advanced MongoDB operations and indexing.

System Architecture

The project follows a client-server architecture:

Frontend

HTML

CSS

Vanilla JavaScript

Fetch API for HTTP requests

Backend

Node.js

Express.js

MongoDB

Mongoose ODM

Session-based authentication

Database

MongoDB (local instance)

Frontend and backend are deployed as separate services and communicate via REST API.

Database Design

The database consists of multiple collections:

Users

Stores user credentials and roles.

Fields:

username

password

role (admin / customer)

Categories

Stores product categories.

Fields:

name

Suppliers

Stores supplier information.

Fields:

name

country

Products

Stores product data.

Fields:

name

price

stock

category (ObjectId reference)

supplier (ObjectId reference)

reviews (embedded array)

This collection demonstrates both referenced and embedded data models.

Orders

Stores customer orders.

Fields:

user

items (array of products and quantities)

total

createdAt

MongoDB Features Used

CRUD operations across multiple collections

Embedded documents (reviews inside products)

Referenced documents (category and supplier references)

Advanced update operators:

$set

$inc

$push

$pull

Multi-stage aggregation pipelines

Compound indexes

Session storage in MongoDB

REST API Endpoints
Authentication

POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout

Products

POST /api/products

GET /api/products

GET /api/products/:id

PUT /api/products/:id

DELETE /api/products/:id

PATCH /api/products/:id/decrease-stock

PATCH /api/products/:id/review

PATCH /api/products/:id/review/remove

Orders

POST /api/orders

GET /api/orders

GET /api/orders/:id

DELETE /api/orders/:id

Analytics

GET /api/analytics/sales-by-category

GET /api/analytics/top-products

GET /api/analytics/monthly-revenue

Total number of endpoints exceeds the minimum requirement for a two-student project.

Aggregation Pipelines

The project uses MongoDB aggregation framework for analytics:

Total sales by category

Top selling products

Monthly revenue calculation

Each aggregation pipeline consists of multiple stages such as:

$unwind

$lookup

$group

$sort

These pipelines provide real business insights for the store.

Indexing and Optimization

Indexes were created to optimize frequent queries:

Compound index on products collection:

category + price

Index on orders.createdAt for analytics

Unique index on users.username for authentication

These indexes improve query performance and ensure data consistency.

Frontend Functionality

The frontend provides basic interaction with the backend:

Viewing products

Viewing orders

User authentication pages

Admin analytics page

All frontend pages use real HTTP requests via Fetch API to communicate with the backend.

How to Run the Project
Backend

Navigate to the backend folder

Install dependencies:

npm install


Start the server:

node server.js


Backend runs on:

http://localhost:3000

Frontend

Navigate to the frontend folder

Start a static server:

serve -l 5500


Open in browser:

http://localhost:5500

Contribution of Each Student

Abylay Dosymbek

Database design

MongoDB queries and aggregations

Backend logic and REST API

Sakenov Rassul

Frontend implementation

API integration

Testing and validation

Both students contributed equally to the project.

Conclusion

This project demonstrates practical usage of MongoDB NoSQL database together with a RESTful backend and a simple frontend interface.
All project requirements for the Advanced Databases (NoSQL) course have been fully implemented.