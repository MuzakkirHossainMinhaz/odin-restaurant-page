export function createHomePage() {
  const content = document.getElementById("content");
  content.textContent = ""; // clear content

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Fine Dine Restaurant";

  const subheading = document.createElement("h2");
  subheading.textContent =
    "Experience the best gourmet dining in the heart of the city.";

  const description = document.createElement("p");
  description.textContent =
    "At Fine Dine, we craft our dishes with passion and love. Our chefs use the finest, locally sourced ingredients to prepare each dish to perfection. Join us for an unforgettable dining experience.";

  const image = document.createElement("img");
  image.src =
    "https://image.cnbcfm.com/api/v1/image/105989359-1561566296439gettyimages-492868234.jpg";
  image.alt = "A cozy dining setting at Fine Dine Restaurant";

  homeContainer.append(heading, subheading, description, image);
  content.appendChild(homeContainer);
}
