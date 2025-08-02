/* Toggle mobile nav */
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* Close nav on link click (mobile) */
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => navLinks.classList.remove('open'))
);
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const link = document.querySelector(`a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) link.classList.add('active');
      else                       link.classList.remove('active');
    });
  },
  {rootMargin:'-30% 0px -70% 0px'}  // triggers a bit before centre
);

sections.forEach(sec => observer.observe(sec));