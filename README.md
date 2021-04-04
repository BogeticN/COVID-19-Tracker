# COVID-19 Tracker

http://bogeticn.github.io/COVID-19-Tracker

## Instructions to start COVID-19-Tracker application:

You need to install:

1. NodeJS (v14.15.1) - https://nodejs.org/en/
2. npm - package manager for NodeJS

Next,you should clone the repo

1. `git clone` https://github.com/BogeticN/COVID-19-Tracker.git
2. Go to project root directory and start `npm install`
3. After that, `npm start` to start the app

This application has its own server

1. `git clone` https://github.com/BogeticN/COVID-19-tracker-server.git
2. `npm install` in root directory
3. `npm start` as well in root directory (or `npm run dev` to start with nodemon)

## Project description

Goal of this project was to create an application that shows world(and for each country) statistics about corona virus.All data was taken from https://disease.sh/ and it's being updated on a daily basis.

All data about registered users is saved at https://www.mongodb.com/ 

## Functionality

- There is an option to register and log in.
- There is a search input field to look for a specific country,as well as a filter to show 20,50 or 100 countries 
- By clicking on any country in the table,we can access more detailed information about it
- Graphs that show certain statistics
- There are also graphs showing certain statistics (e.g. total number of cases since the beginning of the pandemic)

## ToDo functionality

- Option to sort countries in the table by total number of reported cases / deaths / recovered
- World map showing total cases

## Technologies used for project

- VSCode
- JavaScript
- ReactJS
    - styled-components
    - react-router-dom
- Git
- ChartJS
- Bootstrap
- Google Fonts
- Heroku
- MongoDB