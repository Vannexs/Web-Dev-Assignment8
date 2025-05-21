# Simple Multi-Page Blog Website

A basic implementation of a multi-page blog website built purely with HTML, CSS, and vanilla JavaScript. This project demonstrates fundamental web development concepts including site navigation, responsive design, and dynamic UI updates with JavaScript. The example blog is named "My Awesome Blog".

## Features

*   **Multi-Page Structure:** Separate pages for Home, Blog (listing), About, Contact, and individual blog posts.
*   **Responsive Navigation:** Includes a hamburger menu for mobile and smaller screens, implemented with CSS and JavaScript.
*   **Dynamic Active Link:** JavaScript automatically highlights the current page in the navigation bar. It also correctly highlights "Blog" when viewing individual post pages.
*   **Static Content:** All content is hardcoded in HTML (no backend database).
*   **Basic Styling:** Uses a single CSS file (`css/style.css`) for consistent styling across all pages, including some basic responsive adjustments.
*   **Post Previews & Full Posts:** The blog page shows previews of posts, linking to their full content pages.
*   **Consistent Header & Footer:** Shared across all pages.

## Technologies Used

*   **HTML5:** For the structure and content of the web pages.
*   **CSS3:** For styling the appearance of the website, including layout (Flexbox used for some elements) and responsive design via Media Queries.
*   **Vanilla JavaScript (ES6+):** For client-side interactivity, specifically:
    *   Dynamically setting the "active" state of navigation links.
    *   Implementing the toggle functionality for the mobile hamburger menu.

## Project Structure
my-blog/
├── index.html # Home page
├── about.html # About page
├── blog.html # Blog listing page
├── contact.html # Contact page
├── posts/ # Folder for individual blog posts
│ ├── post1.html
│ └── post2.html
├── css/
│ └── style.css # Main stylesheet
├── js/
│ └── main.js # JavaScript for interactivity
└── README.md # This file

## Setup and Running

1.  **Clone the repository (or download the ZIP):**
    If this were a Git repository, you'd clone it. Since you have the files, ensure they are in the structure shown above.

2.  **Open in Browser:**
    Navigate to the `my-blog` directory on your local machine.
    Simply open the `index.html` file in your preferred web browser (e.g., Chrome, Firefox, Safari, Edge).

    *No build steps or local server (like Live Server extension in VS Code) are strictly required for this basic static site, though using a local server can prevent some minor issues with file paths if you decide to use more complex relative paths or JavaScript modules in the future.*

## Usage

*   Navigate between the "Home", "Blog", "About", and "Contact" pages using the links in the header navigation.
*   On the "Blog" page or the "Home" page (under "Latest Posts"), click on post titles or "Read More" buttons to view the full content of individual blog posts.
*   Resize your browser window to a smaller width (e.g., less than 768px, as defined in `style.css`) to see the mobile hamburger menu appear. Click it to toggle the navigation links.

## JavaScript Functionality (`js/main.js`)

The `main.js` file handles two main pieces of functionality:

1.  **Dynamic Active Navigation Link:**
    *   On page load (`DOMContentLoaded`), it identifies all navigation links.
    *   It compares the `href` of each link with the current page's URL.
    *   If a match is found, or if the user is on a post page and the link is for `blog.html`, it adds an `active` class to the parent `<li>` element. This class is styled in `style.css` to highlight the active link.

2.  **Mobile Hamburger Menu:**
    *   It listens for clicks on the `#mobile-menu-toggle` element (the hamburger icon).
    *   On click, it toggles an `active` class on the main navigation `<ul>` (to show/hide it) and an `is-active` class on the toggle button itself (for animating the hamburger icon).
    *   It also includes an optional feature to close the mobile menu when a navigation link within it is clicked, improving usability on mobile devices.

## Future Enhancements (Ideas)

*   Integrate a backend (e.g., Node.js/Express, Python/Flask, PHP) or a CMS (like WordPress headless) for dynamic content management (adding/editing posts without touching HTML).
*   Use a Static Site Generator (e.g., Jekyll, Hugo, Eleventy, Next.js, Gatsby) for easier content creation using Markdown and more optimized builds.
*   Add a search functionality.
*   Implement a working contact form (requires backend processing or a third-party service like Formspree).
*   Add features like categories, tags, and pagination for blog posts.
*   Improve accessibility further (e.g., more ARIA attributes, thorough keyboard navigation testing).
*   Write unit or integration tests for JavaScript functions.

## Contributing

This is a simple demonstration project. If you have suggestions or find issues, feel free to open an issue or propose changes if this were a collaborative project.

---

Feel free to adapt this README to better suit any specific details or goals you have for the project!