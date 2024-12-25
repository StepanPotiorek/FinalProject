class TravelGuide {
    constructor() {
        this.menuIcon = document.querySelector(".menu-icon");
        this.menuList = document.querySelector("nav");
        this.hamburgerIcon = document.querySelector(".fa-solid");
        this.images = document.querySelectorAll(".image-item img");
        this.imageInteraction();

        this.switcher = document.querySelector(".switch input");
        this.themeText = document.querySelector(".switcher-description p");
        this.themeIcon = document.querySelector(".switcher-description i");

        this.titleElement = document.getElementById("dynamic-title");
        this.title = "Philippines";

        this.initializeEventListeners();
        this.renderTitle();
    }

    // Initialize event listeners
    initializeEventListeners() {
        this.menuIcon.addEventListener("click", () => this.toggleMenu());
        this.switcher.addEventListener("change", (event) => this.switchTheme(event));
    }

    // Toggle menu icon and visibility
    toggleMenu() {
        if (this.hamburgerIcon.classList[1] === "fa-bars") {
            this.hamburgerIcon.classList.add("fa-plane")
            this.hamburgerIcon.classList.remove("fa-bars")
            this.menuList.style.display = "block" 
        } else {
            this.hamburgerIcon.classList.add("fa-bars")
            this.hamburgerIcon.classList.remove("fa-plane")
            this.menuList.style.display = "none"  
        }
    }

    // Dark mode settings
    darkMode() {
        this.themeText.textContent = "Dark Mode";
        this.themeIcon.classList.replace("fa-sun", "fa-moon");
        document.documentElement.setAttribute("data-theme", "dark"); // Ensure the data-theme attribute is set
    }

    // Light mode settings
    lightMode() {
        this.themeText.textContent = "Light Mode";
        this.themeIcon.classList.replace("fa-moon", "fa-sun");
        document.documentElement.setAttribute("data-theme", "light"); // Ensure the data-theme attribute is set
    }

    // Switch theme based on toggle
    switchTheme(event) {
        if (event.target.checked) {
            this.darkMode();
        } else {
            this.lightMode();
        }
        // Re-render title to adapt to new theme
        this.renderTitle();
    }

    // Generate a random color
    getRandomColor() {
        return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }

    // Generate a random font size
    getRandomFontSize() {
        return `${Math.floor(Math.random() * 30) + 50}px`;
    }

    // Render the styled title
    renderTitle() {
        this.titleElement.innerHTML = ""; // Clear existing content

        for (let i = 0; i < this.title.length; i++) {
            const span = document.createElement("span");
            span.innerText = this.title[i];
            span.style.color = this.getRandomColor();
            span.style.fontSize = this.getRandomFontSize();
            span.style.display = "inline-block";
            span.style.transition = "all 0.3s ease";
            this.titleElement.appendChild(span);
        }
    }

    imageInteraction() {
        // Check if `this.images` is a single element or a collection
        if (this.images instanceof NodeList) {
            this.images.forEach((image) => {
                image.addEventListener("mouseenter", (event) => {
                    event.target.style.transform = "scale(1.1)";
                });
    
                image.addEventListener("mouseleave", (event) => {
                    event.target.style.transform = "scale(1)";
                });
            });
        } else if (this.images instanceof HTMLElement) {
            this.images.addEventListener("mouseenter", (event) => {
                event.target.style.transform = "scale(1.1)";
            });
    
            this.images.addEventListener("mouseleave", (event) => {
                event.target.style.transform = "scale(1)";
            });
        }
    }
    
}


  
// Instantiate the class to activate the functionality
const travelGuideApp = new TravelGuide();

class RegistrationForm {
    constructor() {
      this.form = document.getElementById("registration-form");
      this.passwordInput = document.getElementById("password");
      this.confirmPasswordInput = document.getElementById("confirm-password");
      this.emailInput = document.getElementById("email");
      this.passwordErrorMessage = document.getElementById("password-error-message");
      this.emailErrorMessage = document.getElementById("email-error-message");
  
      this.addEventListeners();
    }
    // Event listeners
    addEventListeners() {
      this.form.addEventListener("submit", (event) => this.handleSubmit(event));
      this.confirmPasswordInput.addEventListener("input", () => this.clearPasswordError());
      this.emailInput.addEventListener("input", () => this.clearEmailError());
    }
  
    handleSubmit(event) {
      event.preventDefault();
  
      if (!this.validateEmail(this.emailInput.value)) {
        this.showEmailError("Invalid email address");
        return;
      }
  
      if (this.passwordInput.value !== this.confirmPasswordInput.value) {
        this.showPasswordError("Passwords do not match");
        return;
      }
  
      alert("Form submitted successfully!");
      this.form.reset();
    }
  
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    showEmailError(message) {
      this.emailErrorMessage.textContent = message;
      this.emailInput.style.border = "1px solid #e74c3c";
    }
  
    clearEmailError() {
      this.emailErrorMessage.textContent = "";
      this.emailInput.style.border = "1px solid #ccc";
    }
  
    showPasswordError(message) {
      this.passwordErrorMessage.textContent = message;
      this.confirmPasswordInput.style.border = "1px solid #e74c3c";
    }
  
    clearPasswordError() {
      this.passwordErrorMessage.textContent = "";
      this.confirmPasswordInput.style.border = "1px solid #ccc";
    }
  }
  
  // Initialize RegistrationForm functionality
  document.addEventListener("DOMContentLoaded", () => {
    new RegistrationForm();
  });

  class BackToTop {
    constructor() {
      this.button = document.getElementById("back-to-top");
      this.init();
    }
  
    init() {
      // Show button after scrolling down a certain percentage of the page
      window.addEventListener("scroll", this.toggleButtonVisibility.bind(this));
      // Scroll back to top on click
      this.button.addEventListener("click", this.scrollToTop.bind(this));
    }
  
    toggleButtonVisibility() {
      const scrollThreshold = document.documentElement.scrollHeight / 2; // Show button after halfway
      if (window.scrollY > scrollThreshold) {
        this.button.style.display = "block";
      } else {
        this.button.style.display = "none";
      }
    }
  
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
  
  // Initialize BackToTop functionality
  document.addEventListener("DOMContentLoaded", () => {
    new BackToTop();
  });
  
  
