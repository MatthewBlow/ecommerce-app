# ecommerce-app
> Online computer parts shop.
> Live demo [_here_](https://taupe-bublanina-2943f1.netlify.app/).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)

## General Information
- It is an ecommerce website for computers and components. In the website you are able to browse through a collection of items and add them to your cart. Once all       items have been added, you can purchase the items from your cart and recieve the invoice for that purchase
- I made this project to improve my skills as a developer and to showcase my ability to create a robust web application that makes use of different technologies to       provide a completed solution  

## Technologies Used
- React - 18.2.0
- Redux - 7.2.5
- Stripe - 10.1.0
- Styled Components - 5.3.5
- Material UI - 5.9.2
- Redux ToolKit - 1.6.1
- Axios - 0.27.2
- Bootstrap - 5.2.0
- Bcrypt - 5.0.1
- Cors 2.8.5
- Dotenv - 16.0.2
- Express - 4.18.1
- Express Async Handler - 1.2.0
- Heroku - 7.63.0
- JWT - 8.5.1
- Mongoose - 6.5.0
- Nodemon - 2.0.19

## Features
- Homepage slider for promotional content 
- List of available products 
- View product pages by category
- View a single product and add it to cart
- Register a user
- Login/Logout a user
- Ability to save items to cart 
- Ability to purchase cart items using Stripe
- Receive an invoice of the purchase 

## Setup

### Frontend Setup

Make sure you are in the main `ecommerce-app` directory 

type `cd frontend` to access frontend folder

type `npm install` to install the necessary packages 

type `npm start` to run the React frontend

### Backend Setup

type `cd frontend` to access frontend folder

type `npm install` to install the necessary packages 

type `npm start` to run the React frontend

## Project Status
Project is: _currently not being worked on but could be fully completed in the future

## Room for Improvement

Room for improvement:
- The design could be more responsive and work better with different resolutions 
- Could be optomised for mobile, as it currently has no proper mobile optimisation 
- Registering a new user currently doesn't have any Regex validation
- Search bar has partial functionality but none of it visual (search suggestions are created but not shown to client)
- Can't increase or decrease amount of items in cart

To do:
- Mobile optimisation
- RegEx validation 
- Search Bar
- Add increment and decrement of items in shopping cart
- Favourites/Wishlist
