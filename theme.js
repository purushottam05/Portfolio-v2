// toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme")
//   : null;

// if (currentTheme) {
//   document.documentElement.setAttribute("data-theme", currentTheme);
// }

// function switchTheme(e) {
//   if (e.target.checked) {
//     document.documentElement.setAttribute("data-theme", "dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     document.documentElement.setAttribute("data-theme", "light");
//     localStorage.setItem("theme", "light");
//   }
// }


// JavaScript to highlight the current section in the navigation menu
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.body-container .nav-item');

  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((navLink) => {
    navLink.classList.remove('active');
    if (navLink.href.includes(current)) {
      navLink.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.filler').forEach(filler => {
    let width = filler.getAttribute('style').match(/width:(\d+)%/)[1];
    filler.style.width = '0%';
    
    setTimeout(() => {
      filler.style.width = width + '%';
    }, 500);
  });
});


