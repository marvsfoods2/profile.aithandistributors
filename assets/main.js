const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) link.setAttribute('aria-current','page');
});
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
