🌞 UV Index Checker

A simple web application running on a server to check the UV index based on latitude and longitude input.

📌 Features

Enter latitude and longitude to get real-time UV data.

Displays:

• 🌡️ Current UV Index

• 📈 Max UV Index Today

• 🧴 Ozone Level (in Dobson Units)

• 🕰️ Solar Noon Time (UTC format)


🛠️ Installation

Clone the repository:

• git clone <your-repo-url>

• Ensure you have Node.js installed

• Install project depencies by running:
    npm install

• Create a .env file in the root directory of the project to store your OpenUV API key.

    1. Create a new file called .env in the root of your project.

    2. Add the following content to the .env file: OPENUV_API_KEY=your_api_key_here

    3. Replace your_api_key_here with your actual OpenUV API key. You can get an API key from: https://www.openuv.io/dashboard

• Open the project in VS Code.

• After the dependencies are installed and the .env file is set up, start the server by running: npm start


🚀 How to Use

• Open your browser and navigate to http://localhost:3000 (or your configured server address).

• Enter latitude and longitude values.

• Click "Get UV Data" to fetch the UV index information from the server.

• View the results, including the current UV index, max UV index, ozone level, and solar noon time.

🖥️ Example Output

🌞 UV Index Checker
Latitude: 65.03  Longitude: 25.49

☀️ UV Index Data

🌡️ Current UV Index: 0

📈 Max UV Index Today: 0.1233

🧴 Ozone Level: 364.8 DU

🕰️ Solar Noon Time: Thu, 30 Jan 2025 10:32:33 GMT

🏗️ Technologies Used

HTML

CSS

JavaScript (for dynamic data fetching)

Node.js / Express.js (server-side API requests)
