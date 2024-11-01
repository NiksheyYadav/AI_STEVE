# AI Assistent STEVE
 
We recently created an innovative voice-guided robot from scratch for the Synergy techfest held in Gurugram! 🎉 This project was coded primarily in JavaScript, with every aspect — from designing an interactive GUI to incorporating advanced voice processing — built by hand. 🖥️🔊 Our goal was to create a seamless user experience and showcase cutting-edge voice-guided technology.

Proud of this accomplishment and excited to see how far we can take this concept in the future!

A simple Express.js server that proxies requests to the [Wolfram Alpha API](https://www.wolframalpha.com/), enabling users to send a question and receive a response directly from Wolfram Alpha.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/WIZARD3022/AI_STEVE.git
   cd AI_STEVE
   ```

2. **Install dependencies:**

Make sure you have Node.js installed, then run:

   ```
   npm install
   ```
3. **Set up environment variables:**

Obtain an API key from Wolfram Alpha here.
Replace the placeholder API key in index.js or create a .env file and store your key securely:

   ```
   WOLFRAM_API_KEY=YOUR_ACTUAL_WOLFRAM_API_KEY
   ```

## Usage

1. Start the server:
   ```
   node server.js
   ```

2.Access the API:

Open your browser or a tool like Postman and go to:

```
http://localhost:3000
```

3.Frontend Files:

Any static frontend files can be placed in the public folder. These will be served automatically.

## Project Structure
Here’s a breakdown of the main files and folders:

```
AI_STEVE/
│
├── public/                   # Static frontend files (HTML, CSS, JS)
│
├── server.js                  # Main server file with Express setup
│
├── .gitignore                # Files/folders to ignore in version control
│
└── README.md                 # Project documentation
```

## Configuration
Replace the `WOLFRAM_API_KEY` variable in index.js with your API key. If using `.env`, make sure you load the environment variables using dotenv:

```
require('dotenv').config();
const WOLFRAM_API_KEY = process.env.WOLFRAM_API_KEY;
```

## API Endpoints

### /api

- **Method**: GET

- **Query Parameters**:
question (required): The query to send to Wolfram Alpha.

- **Example Request**:

```
http://localhost:3000/api?question=What is the capital of France?
```

- **Response**: Returns the answer from Wolfram Alpha as plain text.

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js
- **node-fetch**: Used to make HTTP requests to Wolfram Alpha API

## License
This project is licensed under the MIT License - see the LICENSE file for details.

This code is ready for use in VS Code as your `README.md` file. Just replace placeholders like `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.
