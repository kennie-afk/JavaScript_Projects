document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a[data-page]");
    const contentDiv = document.getElementById("content");

    // Function to load content dynamically
    function loadPage(page) {
        fetch(`/pages/${page}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Page not found");
                }
                return response.text();
            })
            .then(data => {
                contentDiv.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading page:", error);
                contentDiv.innerHTML = "<h2>Page Not Found</h2><p>The page you're looking for doesn't exist.</p>";
            });
    }

    // Add event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent full page reload
            const page = this.getAttribute("data-page");
            loadPage(page);
        });
    });

    // Load default page (About)
    loadPage("about");
});
