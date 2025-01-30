import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import path from "path";
import moment from "moment";

dotenv.config();

const app = express();
const port = 3000;
const apiKey = process.env.OPENUV_API_KEY;

// Set EJS as the view engine and configure the views directory
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));

app.use(express.static("public"));
app.use(express.json());

// Route to render the homepage (with empty UV data initially)
app.get("/", (req, res) => {
    res.render("index", { uvData: null, error: null });
});

// Route to fetch and display UV data based on user input (lat and long)
app.get("/uv", async (req, res) => {
    try {
        const { lat, lng } = req.query;

        if (!lat || !lng) {
            return res.render("index", { uvData: null, error: "Please provide latitude and longitude." });
        }
        // Fetch UV data from OpenUV API
        const response = await axios.get(`https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lng}`, {
            headers: {
                "x-access-token": apiKey,
            },
        });

        let uvData = response.data.result;
        // Format solar noon time using moment.js if it's available
        if (uvData.sun_info && uvData.sun_info.sun_times.solarNoon) {
            uvData.solarNoonFormatted = moment.utc(uvData.sun_info.sun_times.solarNoon).format("MMMM Do YYYY, h:mm A") + " UTC";
        }
        // Render the result page with fetched UV data
        res.render("index", { uvData, error: null });
    } catch (error) {
        console.error(error);
        res.render("index", { uvData: null, error: "Failed to fetch UV data. Please try again." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
