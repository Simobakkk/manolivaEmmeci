/*header cambio testo*/
const testi = [
  "Un'eccellenza MADE IN ITALY",
  "Esplora i nostri servizi",
  "Scopri le ultime novità",
  "Contattaci per maggiori informazioni"
];

let indice = 0;

function cambiaTesto(direzione) {
  const h1 = document.getElementById("testo-header");

  h1.style.opacity = 0;

  setTimeout(() => {
    indice = (indice + direzione + testi.length) % testi.length;
    h1.textContent = testi[indice];

    h1.style.opacity = 1;
  }, 300);
}

function animateCounter(element, start, end, duration) {
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(start + (end - start) * progress);
    element.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      if (entry.target.classList.contains("counter")) {
        const el = entry.target;
        const endValue = parseInt(el.dataset.target, 10);
        animateCounter(el, 0, endValue, 2000);
        observer.unobserve(el);
      }
    }
  });
});

document.querySelectorAll(".counter").forEach(el => observer.observe(el));
document.querySelectorAll('.hidden-element').forEach(el => observer.observe(el));

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const texts = ["Stile e raffinatezza", "Precisione", "Affidabilità", "Innovazione"];
let index = 1;

const textElement = document.getElementById("changing-text");
const bar = document.querySelector(".timer-bar");

function changeText() {

  
  textElement.classList.add("fade-out");

  setTimeout(() => {
   
    textElement.textContent = texts[index];

    textElement.classList.remove("fade-out");

    bar.style.transition = "none";
    bar.style.width = "0%";
    void bar.offsetWidth;

   
    bar.style.transition = "width 8s linear";
    bar.style.width = "100%";

   
    index = (index + 1) % texts.length;

  }, 500); 
}

bar.style.width = "100%"; // prima animazione barra
setTimeout(changeText, 8000); // dopo 8s cambia testo
  setInterval(changeText, 8000);






