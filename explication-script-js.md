# Explication ligne par ligne de `script.js`

Ce document explique le code JavaScript de `script.js` comme si tu étais débutant.

## 1. Attendre que la page soit chargée

```js
document.addEventListener('DOMContentLoaded', () => {
```

- Le navigateur attend que tout le HTML soit prêt.
- Ensuite, il exécute le code à l'intérieur de la fonction.
- Cela évite les erreurs quand on cherche des éléments qui n'existent pas encore.

## 2. Récupérer les éléments du HTML

```js
  const hamburger = document.getElementById('hamburger');
  const navLiens = document.getElementById('nav-liens');
  const entete = document.getElementById('entete');
  const formulaire = document.getElementById('formulaire-contact');
  const sectionCompetences = document.getElementById('competences');
```

- `const` crée une variable qui ne sera pas réassignée.
- `getElementById` cherche un élément HTML avec l'attribut `id` correspondant.
- On récupère ici :
  - le bouton hamburger du menu mobile,
  - la liste des liens de navigation,
  - l'en-tête fixe en haut de page,
  - le formulaire de contact,
  - la section compétences.

## 3. Gérer le menu hamburger sur mobile

```js
  if (hamburger && navLiens) {
```

- Cette condition vérifie que le bouton et la liste existent.
- Si un élément manque, on ne fait rien pour éviter les erreurs.

```js
    hamburger.addEventListener('click', () => {
```

- Quand on clique sur le bouton hamburger, on fait une action.

```js
      const estOuvert = navLiens.classList.toggle('ouvert');
```

- `classList.toggle` ajoute la classe `ouvert` si elle n'existe pas, sinon il la retire.
- `estOuvert` devient `true` quand le menu s'ouvre et `false` quand il se ferme.

```js
      hamburger.setAttribute('aria-expanded', estOuvert ? 'true' : 'false');
```

- On met à jour l'attribut `aria-expanded` pour l'accessibilité.
- Cela aide les lecteurs d'écran à comprendre si le menu est ouvert ou fermé.

```js
    navLiens.querySelectorAll('a').forEach(lien => {
      lien.addEventListener('click', () => {
        navLiens.classList.remove('ouvert');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
```

- On sélectionne tous les liens à l'intérieur du menu.
- Pour chaque lien, on ajoute un clic qui ferme le menu.
- Cela évite que le menu reste ouvert après un clic.

## 4. Changer le style du header pendant le scroll

```js
  if (entete) {
    window.addEventListener('scroll', () => {
      entete.classList.toggle('scrolled', window.scrollY > 50);
    });
  }
```

- Si l'en-tête existe, on écoute l'événement de défilement de la page.
- `window.scrollY` donne le nombre de pixels défilés verticalement.
- Quand on dépasse 50 pixels, on ajoute la classe `scrolled`.
- Sinon, on retire cette classe.
- Cela permet d'ajouter une ombre ou un style différent au header après défilement.

## 5. Animer les barres de compétences

```js
  const observerBarres = new IntersectionObserver((entries, observer) => {
```

- `IntersectionObserver` observe quand un élément arrive dans la zone visible de l'écran.
- Cela permet de déclencher une animation au bon moment.

```js
    entries.forEach(entry => {
      if (entry.isIntersecting) {
```

- Pour chaque élément observé : on vérifie s'il est visible.

```js
        entry.target.querySelectorAll('.barre-remplissage').forEach(barre => {
          const width = barre.dataset.largeur || '0%';
          barre.style.width = width;
        });
```

- On recherche toutes les barres de remplissage à l'intérieur de cet élément.
- `data-largeur` est un attribut personnalisé qui contient la largeur souhaitée.
- On applique cette largeur à la barre.
- Les barres se remplissent donc au moment où la section apparaît.

```js
        observer.unobserve(entry.target);
```

- On arrête d'observer cette section après l'avoir animée.
- Cela évite de relancer la même animation plusieurs fois.

```js
  }, { threshold: 0.3 });

  if (sectionCompetences) observerBarres.observe(sectionCompetences);
```

- Le seuil `threshold: 0.3` signifie que l'animation commence quand 30% de la section est visible.
- Si la section des compétences existe, on la place sous observation.

## 6. Préparer les cartes pour l'animation d'apparition

```js
  document.querySelectorAll('.competence-carte, .projet-carte').forEach((el, i) => {
    el.classList.add('apparition');
    el.style.transitionDelay = `${i * 0.1}s`;
  });
```

- On sélectionne toutes les cartes de compétences et de projets.
- On ajoute la classe `apparition` pour que le CSS puisse les animer.
- On définit un délai de transition différent pour chaque carte.
- Ainsi, l'apparition se fait par petites vagues plutôt qu'en même temps.

## 7. Afficher les cartes quand elles entrent dans la vue

```js
  const observerApparition = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observerApparition.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.apparition').forEach(el => observerApparition.observe(el));
```

- Un second observateur regarde les éléments avec la classe `apparition`.
- Quand une carte devient visible, il ajoute la classe `visible`.
- Le CSS utilise cette classe pour faire apparaître la carte.
- L'observation s'arrête ensuite pour éviter les répétitions.
- Le seuil `0.1` déclenche l'effet quand 10% de la carte est visible.

## 8. Gérer l'envoi du formulaire de contact

```js
  if (formulaire) {
    formulaire.addEventListener('submit', e => {
      e.preventDefault();
      const nom = formulaire.querySelector('#nom')?.value.trim() || '';
      const email = formulaire.querySelector('#email')?.value.trim() || '';
      const message = formulaire.querySelector('#message')?.value.trim() || '';

      const subject = encodeURIComponent(`Message de ${nom || 'contact'}`);
      const body = encodeURIComponent(`Nom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`);
      window.location.href = `mailto:samakeamadou2006@gmail.com?subject=${subject}&body=${body}`;
```

- Si le formulaire existe, on écoute l'événement d'envoi.
- `preventDefault()` empêche le navigateur de recharger la page.
- On récupère les valeurs des champs `nom`, `email` et `message`.
- On construit un lien `mailto:` avec ces informations.
- `window.location.href = 'mailto:...'` ouvre le client de messagerie de l'utilisateur.
- Cela permet d'envoyer le message via l'application mail installée sur l'ordinateur ou le téléphone.

## 9. Fin du script

```js
  }
});
```

- Cela ferme la condition et la fonction principale.
- Tout le code est maintenant prêt à fonctionner après le chargement de la page.

---

### En résumé pour un débutant

- Le script attend que la page soit prête avant de manipuler le HTML.
- Il contrôle le menu mobile, le style du header au scroll, et les animations.
- Il utilise des observateurs pour animer les éléments quand ils sont visibles à l'écran.
- Il gère aussi le formulaire pour afficher un retour visuel après l'envoi.

Si tu veux, je peux aussi t'expliquer chaque mot-clé JavaScript (`const`, `=>`, `querySelectorAll`, etc.) avec des exemples simples.