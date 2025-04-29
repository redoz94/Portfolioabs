document.addEventListener('DOMContentLoaded', () => { const navMenu = document.querySelector('.nav-menu'); const navItems = document.querySelectorAll('.nav-item'); const navToggle = document.getElementById('nav-toggle'); 
   const toggleActiveClass = (element) => { if (element) { element.classList.toggle('is-active'); } }; 
    const handleNavItemClick = () => { if (navMenu && navMenu.classList.contains('is-active')) { toggleActiveClass(navMenu); } }; 
     if (navToggle) { navToggle.addEventListener('click', () => { toggleActiveClass(navMenu); }); } 
      navItems.forEach((navItem) => { navItem.addEventListener('click', handleNavItemClick); }); 
      function enlargeImage(img) { const newWidth = img.width * 2; const newHeight = img.height * 2; img.style.width = `${newWidth}px`; 
       img.style.height = `${newHeight}px`; } 
       function myFunction() { const myLinks = document.getElementById('myLinks'); if (myLinks) {
         if (myLinks.style.display === 'block') { myLinks.style.display = 'none'; } else { myLinks.style.display = 'block'; } } } });