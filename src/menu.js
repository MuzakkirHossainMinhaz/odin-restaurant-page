export function createMenuPage() {
  const content = document.getElementById("content");
  content.textContent = ""; // Clear content

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const heading = document.createElement("h1");
  heading.textContent = "Our Exquisite Menu";

  const appetizers = document.createElement("section");
  appetizers.classList.add("menu-section");
  const appetizerTitle = document.createElement("h2");
  appetizerTitle.textContent = "Appetizers";
  const appetizerList = document.createElement("ul");
  appetizerList.innerHTML = `
        <li>Bruschetta -  $8</li>
        <li>French Onion Soup -  $7</li>
        <li>Crab Cakes - $12</li>
    `;
  appetizers.append(appetizerTitle, appetizerList);

  const mains = document.createElement("section");
  mains.classList.add("menu-section");
  const mainsTitle = document.createElement("h2");
  mainsTitle.textContent = "Main Courses";
  const mainsList = document.createElement("ul");
  mainsList.innerHTML = `
        <li>Grilled Salmon - $22</li>
        <li>Steak Fruits - $25</li>
        <li>Risotto Primavera - $18</li>
    `;
  mains.append(mainsTitle, mainsList);

  const desserts = document.createElement("section");
  desserts.classList.add("menu-section");
  const dessertsTitle = document.createElement("h2");
  dessertsTitle.textContent = "Desserts";
  const dessertsList = document.createElement("ul");
  dessertsList.innerHTML = `
        <li>Molten Chocolate Cake - $10</li>
        <li>New York Cheesecake - $9</li>
        <li>Tiramisu - $8</li>
    `;
  desserts.append(dessertsTitle, dessertsList);

  menuContainer.append(heading, appetizers, mains, desserts);
  content.appendChild(menuContainer);
}
