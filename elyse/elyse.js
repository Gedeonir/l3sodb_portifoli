// burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  burger.classList.toggle('active');
});

// reveal sections on scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.1});

sections.forEach(section => {
  section.classList.add('scroll-reveal');
  observer.observe(section);
});

// animate title cycle
const title = document.querySelector('.animate-title');
let colors = ['#ff6b6b', '#6bffb8', '#6b6bff'];
let index = 0;
setInterval(() => {
  title.style.color = colors[index % colors.length];
  index++;
}, 2000);
