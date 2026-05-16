document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLiens = document.getElementById('nav-liens');
  const entete = document.getElementById('entete');
  const formulaire = document.getElementById('formulaire-contact');
  const sectionCompetences = document.getElementById('competences');

  if (hamburger && navLiens) {
    hamburger.addEventListener('click', () => {
      const estOuvert = navLiens.classList.toggle('ouvert');
      hamburger.setAttribute('aria-expanded', estOuvert ? 'true' : 'false');
    });

    navLiens.querySelectorAll('a').forEach(lien => {
      lien.addEventListener('click', () => {
        navLiens.classList.remove('ouvert');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (entete) {
    window.addEventListener('scroll', () => {
      entete.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  const observerBarres = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.barre-remplissage').forEach(barre => {
          const width = barre.dataset.largeur || '0%';
          barre.style.width = width;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  if (sectionCompetences) observerBarres.observe(sectionCompetences);

  document.querySelectorAll('.competence-carte, .projet-carte').forEach((el, i) => {
    el.classList.add('apparition');
    el.style.transitionDelay = `${i * 0.1}s`;
  });

  const observerApparition = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observerApparition.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.apparition').forEach(el => observerApparition.observe(el));

  if (formulaire) {
    formulaire.addEventListener('submit', e => {
      e.preventDefault();
      const bouton = formulaire.querySelector('button[type="submit"]');
      if (!bouton) return;

      bouton.textContent = 'Message envoyé ✓';
      bouton.style.background = '#2d7a4f';
      bouton.disabled = true;

      setTimeout(() => {
        formulaire.reset();
        bouton.textContent = 'Envoyer le message';
        bouton.style.background = '';
        bouton.disabled = false;
      }, 3000);
    });
  }
});
