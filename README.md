# Blog Web App

This is a Node.js and Express-based web application that displays 7-day weather forecasts for the capitals of selected countries.

The app works by:

Fetching the latitude and longitude of a country’s capital using a public API.

Using those coordinates with another API to retrieve the 7-day temperature forecast (including max/min temperatures and rain status).

It also includes an **About** page and a **Contact** page.

---

## Features
--Display 7-day weather forecasts with:

     --Maximum and minimum temperature per day

     --Rain status for each day

--Simple and clean interface

--Informative About and Contact pages
---

## Installation

### Prerequisites
- Node.js (v14+ recommended)
- npm (comes with Node.js)
- Express.js (installed automatically when running `npm install`)
- Axios (for making API requests)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/YOOOOUSSEF/wheatherAppUsingAPI.git
   cd api_project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Running the Development Server
```bash
node index.js
```
The server will start at:
```
http://localhost:3000/
```

---

## Project Structure
```
weather-web/
├── index.js           # Main application entry point
├── package.json       # Project metadata and dependencies
├── public/            # Static assets (CSS, JS, images)
├── views/             # Template files (EJS)
│   ├── index.ejs      # Home page
│   ├── about.ejs      # About page
│   ├── contact.ejs    # Contact page
└── node_modules/      # Installed dependencies
```

---

## Author
**Youssef Hassan** – Developer & Owner of the weather App  
[GitHub](https://github.com/YOOOOUSSEF)
