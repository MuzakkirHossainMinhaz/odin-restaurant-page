export function createContactPage() {
  const content = document.getElementById("content");
  content.textContent = ""; // Clear content

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const address = document.createElement("p");
  address.innerHTML =
    "<strong>Address:</strong> 123 Fine Dine St, Gourmet City, 12345";

  const phone = document.createElement("p");
  phone.innerHTML = "<strong>Phone:</strong> (123) 456-7890";

  const email = document.createElement("p");
  email.innerHTML = "<strong>Email:</strong> info@finedinerestaurant.com";

  const contactForm = document.createElement("form");
  contactForm.classList.add("contact-form");
  contactForm.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
    `;

  contactContainer.append(heading, address, phone, email, contactForm);
  content.appendChild(contactContainer);
}
