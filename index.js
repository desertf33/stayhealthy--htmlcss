
  function loadNavbar() {
    // Fetch the navigation bar HTML from navbar.html
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        // Insert the navigation bar HTML into the container div
        document.getElementById('navbar-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading navigation bar:', error));
  }

 
  window.addEventListener('load', loadNavbar);
 