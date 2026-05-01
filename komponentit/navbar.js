fetch('komponentit/navbar.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load header');
    }
    return response.text();
  })
  .then(html => {
    document.getElementById("navbar").innerHTML = html;
  })
  .catch(error => {
    console.error('Error loading header:', error);
  });