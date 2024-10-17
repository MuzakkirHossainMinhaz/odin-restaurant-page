import "./styles.css"; // Import the CSS file
import { createHomePage } from "./home";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";

// Event listeners for tab navigation
document.getElementById("home-btn").addEventListener("click", createHomePage);
document.getElementById("menu-btn").addEventListener("click", createMenuPage);
document
  .getElementById("contact-btn")
  .addEventListener("click", createContactPage);

// Load home page by default
createHomePage();
