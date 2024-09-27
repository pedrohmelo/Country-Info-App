# Country Information App

This project is a test assessment involving the creation of two small applications: one backend and another frontend, which together provide information about countries. The backend is built using Node.js (with Express.js), while the frontend is built using React.js and Next.js. 

## Project Overview

### Backend

#### Tech Stack
- Node.js (Express.js)

#### Endpoints
1. **Get Available Countries**
   - API: `GET /countries`
   - Fetches a list of available countries from the [Nager.Date API](https://date.nager.at/api/v3/AvailableCountries).

2. **Get Country Info**
   - API: `GET /countries/:code`
   - Fetches detailed information about a specific country, including:
     - Border countries (from [Nager.Date API](https://date.nager.at/api/v3/CountryInfo/UA))
     - Historical population data (from [CountriesNow API](https://countriesnow.space/api/v0.1/countries/population))
     - Flag image URL (from [CountriesNow API](https://countriesnow.space/api/v0.1/countries/flag/images))

### Frontend

#### Tech Stack
- React.js
- Next.js (preferred)

#### Features
1. **Country List Page**
   - Displays a list of countries fetched from the backend.
   - Clicking on a country navigates to its info page.

2. **Country Info Page**
   - Displays detailed country information:
     - **Country Name** and **Flag**
     - **Border Countries Widget**: A list of border countries (with clickable names).
     - **Population Chart**: A graph showing historical population data.

### Installation & Setup

#### Prerequisites
- Node.js
- npm or yarn

#### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/pedrohmelo/country-info-app.git
   cd country-info-app/backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the backend server:
  ```bash
  node server.js
  ```
4. After these steps the the server should be running smoothly.

   #### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/pedrohmelo/country-info-app.git
   cd country-info-app/frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the frontend application:
  ```bash
  npm run dev
  ```
4. Remember the frontend application should be running simultaneously with the server.


Demo:

https://github.com/user-attachments/assets/c5cd5f3b-501e-40e1-9458-38baf306bc00


