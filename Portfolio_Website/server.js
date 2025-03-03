import express from "express";
import open from "open";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Default route: Redirect to /pages/home
app.get("/", (req, res) => {
    res.redirect("/pages/home"); // Redirects to home page
});

// Serve dynamic pages from /public/pages/
app.get("/pages/:page", (req, res) => {
    const page = req.params.page;
    const filePath = path.join(__dirname, "public", "pages", `${page}.html`);
    
    // Check if the file exists before sending
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send("❌ Page not found");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
    open(`http://localhost:${PORT}`).catch(err => console.error("Failed to open browser:", err));
});
