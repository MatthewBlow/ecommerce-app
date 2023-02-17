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
- NB: The Stripe payment system that is implemented is in test mode and won't take any real card information. You will need to input the following test data in order     for the payment to work properly
  Card No: 4242 4242 4242 4242
  Exp: 04/28
  CVC: 123

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
- Cors - 2.8.5
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
- Fully functional search bar 

## Setup

### Frontend Setup

Open 2 seperate terminals for the frontend and the backend, make sure you are you are in the main `ecommerce-app` directory for both. 
If the backend server crashes, it is most likely because it is inactive or you do not have the permissions.

type `cd frontend` to access frontend folder

type `npm install` to install the necessary packages 

type `npm start` to run the React frontend

### Backend Setup

type `cd backend` to access backend folder

type `npm install` to install the necessary packages 

type `npm start` to run the Express.js backend

## Project Status
Project is: Completed but addtional optimisations will be made for mobile in the future.

## Room for Improvement

Room for improvement:
- The design could be more responsive and work better with different resolutions 
- Could be optomised for mobile, as it currently has little mobile optimisation 
- Can't increase or decrease amount of items in cart

To do:
- Mobile optimisation
- Add increment and decrement of items in shopping cart
- Favourites/Wishlist
