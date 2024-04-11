
document.addEventListener("DOMContentLoaded", function () {
  var loginBtn = document.querySelector(".login-btn");
  var signupBtn = document.querySelector(".signup-btn");
  var openModalBtn = document.getElementById("open-modal-btn");
  var loginModal = document.getElementById("login-modal");
  var signupModal = document.getElementById("signup-modal");
  var loginCloseBtn = document.getElementById("close-login");
  var signupCloseBtn = document.getElementById("close-signup");
  var navIcon = document.querySelector('.bi-list');  // Add this line
  var nav = document.querySelector('.nav');  // Add this line
  var highlightingEnabled = false; // Track whether highlighting is enabled
  var loginFormVisible = false; // Track whether login form is visible
  var signupFormVisible = false; // Track whether signup form is visible

  

  openModalBtn.addEventListener("click", function () {
    if (highlightingEnabled) {
      disableHighlighting(); // Disable highlighting if it's enabled
    } else {
      enableHighlighting(); // Enable highlighting if it's disabled
    }
    toggleFontSize(); // Toggle font size
  });

  function showLoginModal() {
    if (signupFormVisible) {
      hideSignupModal(); // Close signup modal if open
    }
    loginModal.style.display = "block";
    loginFormVisible = true;
  }

  function showSignupModal() {
    if (loginFormVisible) {
      hideLoginModal(); // Close login modal if open
    }
    signupModal.style.display = "block";
    signupFormVisible = true;
  }

  function hideLoginModal() {
    loginModal.style.display = "none";
    loginFormVisible = false;
  }

  function hideSignupModal() {
    signupModal.style.display = "none";
    signupFormVisible = false;
  }

  loginBtn.addEventListener("click", function () {
    if (loginFormVisible) {
      hideLoginModal();
    } else {
      showLoginModal();
    }
  });

  signupBtn.addEventListener("click", function () {
    if (signupFormVisible) {
      hideSignupModal();
    } else {
      showSignupModal();
    }

    
  });
  

  

  loginCloseBtn.addEventListener("click", hideLoginModal);
  signupCloseBtn.addEventListener("click", hideSignupModal);

  window.addEventListener("click", function (event) {
    if (event.target == loginModal) {
      hideLoginModal();
    }
    if (event.target == signupModal) {
      hideSignupModal();
    }
  });

  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });

  document
    .getElementById("signup-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });

  var body = document.querySelector("body");

  function toggleFontSize() {
    if (body.style.fontSize === "20px") {
      body.style.fontSize = "16px";
    } else {
      body.style.fontSize = "20px";
    }
    body.style.overflow = "auto";
  }

  loginCloseBtn.addEventListener("click", function () {
    body.style.fontSize = "16px";
    body.style.overflow = "auto";
  });

  signupCloseBtn.addEventListener("click", function () {
    body.style.fontSize = "16px";
    body.style.overflow = "auto";
  });

  function enableHighlighting() {
    highlightingEnabled = true;
    addHighlightingListeners();
  }

  function disableHighlighting() {
    highlightingEnabled = false;
    removeHighlightingListeners();
  }

  // Event handler function for mouseenter
  function handleMouseEnter() {
    this.classList.add("text-highlighted");
  }

  // Event handler function for mouseleave
  function handleMouseLeave() {
    this.classList.remove("text-highlighted");
  }

  function addHighlightingListeners() {
    document
      .querySelectorAll("p, h1, h2, h3, h4, h5, h6, a")
      .forEach(function (element) {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });
  }

  function removeHighlightingListeners() {
    document
      .querySelectorAll("p, h1, h2, h3, h4, h5, h6, a")
      .forEach(function (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
  }

  // Event listener for the menu icon
  navIcon.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
  });
  
  // Additional function to close the navigation when a link is clicked
  function closeNav() {
    var nav = document.querySelector('.nav');
    nav.classList.remove('nav-active');
  }
});

//restrict right click and copy content
document.addEventListener('copy', function(e) {
  e.preventDefault(); // Prevents the default copy behavior
  alert('Copying is restricted on this website.'); // Display a message to the user
});

document.addEventListener('contextmenu', function(e) {
  e.preventDefault(); // Prevents the default context menu from appearing
  
  // Display a confirmation dialog
  var confirmation = confirm('Right-click is restricted on this website. Do you want to proceed?');
  
  // If the user clicks OK, allow the context menu to appear
  if (confirmation) {
      e.stopPropagation(); // Stop further propagation of the event
      return true;
  } else {
      return false; // Prevent the context menu from appearing
  }
});
