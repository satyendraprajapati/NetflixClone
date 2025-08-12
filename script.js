document.addEventListener("DOMContentLoaded", () => {
  // Tab functionality
  const tabItems = document.querySelectorAll(".tab-item");
  const tabContentItems = document.querySelectorAll(".tab-content-item");

  // Select tab content item
  function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add("tab-border");

    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add("show");
  }

  function removeBorder() {
    tabItems.forEach((item) => item.classList.remove("tab-border"));
  }

  function removeShow() {
    tabContentItems.forEach((item) => item.classList.remove("show"));
  }

  // Listen for tab click
  tabItems.forEach((item) => item.addEventListener("click", selectItem));

  // Email form animation
  const emailInput = document.querySelector(".email-form input");
  const emailBtn = document.querySelector(".email-form button");

  emailInput.addEventListener("focus", () => {
    emailBtn.style.backgroundColor = "#e50914";
  });

  emailInput.addEventListener("blur", () => {
    emailBtn.style.backgroundColor = "";
  });

  // Smooth scrolling for footer links
  document.querySelectorAll("footer a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
