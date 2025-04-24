const Express = require('express');
const portfolioApp = Express();
const PORT = 8080;

// Serve static files from the "public" folder
portfolioApp.use(Express.static('public'));

// Start the server
portfolioApp.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
