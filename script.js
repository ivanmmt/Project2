document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
  
    hamburger.addEventListener('click', function() {
        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
            hamburger.innerHTML = '☰';
        } else {
            mobileMenu.style.display = 'block';
            hamburger.innerHTML = '✕';
        }
    });
  
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
            hamburger.innerHTML = '☰';
        });
    });
});
