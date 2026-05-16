# Explication ligne par ligne de `index.html`

Ce document explique le fichier HTML du portfolio pour un débutant.

## 1. Déclaration du document

```html
<!DOCTYPE html>
<html lang="fr">
```

- `<!DOCTYPE html>` dit au navigateur que le document utilise HTML5.
- `<html lang="fr">` indique que le contenu est en français.

## 2. En-tête du document

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Samaké Amadou — Développeur Web</title>
```

- `<meta charset="UTF-8" />` indique l’encodage des caractères, pour afficher correctement les accents.
- `<meta name="viewport" ... />` permet d’adapter la page aux écrans mobiles.
- `<title>` définit le nom de l’onglet du navigateur.

## 3. Liens vers les polices et les styles

```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <link rel="stylesheet" href="style.css" />
</head>
```

- Le premier `<link>` optimise le chargement des polices Google.
- Le deuxième charge les polices `Playfair Display` et `DM Sans`.
- Le troisième charge les icônes Font Awesome.
- Le dernier charge le fichier CSS local `style.css`.

## 4. Début du corps de la page

```html
<body>
  <header id="entete">
    <nav role="navigation" aria-label="Navigation principale">
```

- `<body>` contient tout ce qui est affiché dans le navigateur.
- `<header>` est la partie supérieure de la page, le header fixe.
- `<nav>` contient le menu de navigation et indique sa fonction.

## 5. Logo et liens de navigation

```html
      <a href="#hero" class="nav-logo">S.<span>Amadou</span></a>
      <ul class="nav-liens" id="nav-liens">
        <li><a href="#a-propos">À propos</a></li>
        <li><a href="#competences">Compétences</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
```

- Le lien logo renvoie en haut de la page (`#hero`).
- La liste de liens `<ul>` constitue le menu.
- Chaque lien `<a>` renvoie vers une section de la page grâce aux ancres (`#id`).

## 6. Bouton hamburger mobile

```html
      <button class="nav-hamburger" id="hamburger" aria-label="Ouvrir le menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </header>
```

- Ce bouton sert à afficher le menu sur mobile.
- Les trois `<span>` créent les trois barres du menu.
- `aria-label` rend le bouton compréhensible pour les lecteurs d’écran.

## 7. Section HERO

```html
  <main>
    <section id="hero" aria-label="Introduction">
      <div class="container">
        <div class="hero-contenu">
          <p class="hero-salutation">Bonjour, je suis</p>
          <h1 class="hero-nom">Samaké Amadou</h1>
          <p class="hero-titre">Étudiant en <span>Développement Web</span></p>
```

- `<main>` regroupe le contenu principal de la page.
- `<section id="hero">` est la première section, celle de présentation.
- `<p>` et `<h1>` affichent le texte principal.
- Le `<span>` permet de styliser une partie du titre différemment.

```html
          <p class="hero-description">
            Passionné par la création d'interfaces web modernes et fonctionnelles.
            Je construis des expériences numériques soignées, du code propre et des projets concrets.
          </p>
          <div class="hero-boutons">
            <a href="#projets" class="btn btn-primaire">Voir mes projets</a>
            <a href="#contact" class="btn btn-contour">Me contacter</a>
          </div>
```

- Le paragraphe décrit l'auteur.
- Les deux boutons sont des liens vers d'autres sections de la page.
- Les classes `.btn`, `.btn-primaire` et `.btn-contour` servent à styliser les boutons.

## 8. Section À propos

```html
    <section id="a-propos" class="section" aria-label="À propos de moi">
      <div class="container">
        <div class="a-propos-grille">
          <div class="a-propos-image">
            <img src="amadou.jpeg" alt="Samaké Amadou, développeur web" class="photo-profil">
          </div>
```

- Cette section présente l'auteur.
- `a-propos-image` contient l’image de profil.
- La balise `<img>` affiche la photo.
- `alt` décrit l’image pour les utilisateurs qui ne la voient pas.

```html
          <div class="a-propos-texte">
            <h2 class="section-titre">À propos de moi</h2>
            <div class="ligne-accent"></div>
            <p>Je suis Samaké Amadou, étudiant en développement web basé à Abidjan. Motivé par la création de solutions numériques utiles et accessibles, j'apprends chaque jour à maîtriser les fondamentaux du web.</p>
            <p>Mon parcours m'a permis de construire des bases solides en HTML, CSS et JavaScript. Je suis particulièrement attentif à la qualité du code, au design responsive et à l'expérience utilisateur.</p>
            <p>Disponible pour des stages, collaborations ou projets freelance.</p>
```

- Le texte présente le parcours et les objectifs.
- La classe `.ligne-accent` ajoute une décoration sous le titre.

```html
            <div class="a-propos-infos">
              <div class="info-item">
                <p class="label">Localisation</p>
                <p class="valeur">Samo (Bonoua), Côte d'Ivoire</p>
              </div>
```

- Cette partie affiche des informations clés dans des petites cartes.
- Chaque `info-item` contient un label et une valeur.

## 9. Section compétences

```html
    <section id="competences" class="section" aria-label="Mes compétences">
      <div class="container">
        <h2 class="section-titre">Compétences</h2>
        <p class="section-sous-titre">Les technologies que je maîtrise actuellement</p>
        <div class="ligne-accent"></div>
        <div class="competences-grille">
```

- `section-titre` et `section-sous-titre` présentent la section.
- `competences-grille` contient des cartes de compétences organisées en grille.

```html
          <article class="competence-carte">
            <div class="competence-icone" aria-hidden="true"><i class="fa-brands fa-html5"></i></div>
            <h3 class="competence-nom">HTML5</h3>
            <p class="competence-desc">Structure sémantique, accessibilité, formulaires, balises modernes.</p>
            <div class="barre-fond" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" aria-label="Niveau HTML : 85%">
              <div class="barre-remplissage" data-largeur="85%"></div>
            </div>
          </article>
```

- Chaque compétence est dans une `<article>`.
- `competence-icone` affiche une icône.
- `role="progressbar"` et les attributs `aria-*` aident à l'accessibilité.
- `data-largeur` stocke la valeur de la barre de progression.

- Les autres compétences suivent le même modèle.

## 10. Section projets

```html
    <section id="projets" class="section" aria-label="Mes projets">
      <div class="container">
        <h2 class="section-titre">Projets</h2>
        <p class="section-sous-titre">Ce que je suis en train de construire</p>
        <div class="ligne-accent"></div>
        <div class="projets-grille">
```

- Cette section montre des projets avec des cartes.
- `projets-grille` place les cartes côte à côte sur grand écran.

```html
          <article class="projet-carte">
            <div class="projet-image" aria-hidden="true">
              <i class="fa-solid fa-laptop-code"></i>
              <span class="projet-tag">En cours</span>
            </div>
            <div class="projet-corps">
              <h3 class="projet-titre">Portfolio Personnel</h3>
              <p class="projet-description">Ce portfolio que tu consultes actuellement. Conception et développement from scratch avec HTML, CSS et JavaScript vanilla.</p>
```

- `projet-image` est la zone visuelle de la carte.
- `projet-tag` indique l’état du projet.
- Le corps contient le titre, la description et les technologies.

```html
              <ul class="projet-technologies" aria-label="Technologies utilisées">
                <li class="tech-badge">HTML5</li>
                <li class="tech-badge">CSS3</li>
                <li class="tech-badge">JavaScript</li>
              </ul>
              <div class="projet-liens">
                <a href="#" class="projet-lien"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub</a>
                <a href="#" class="projet-lien"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Démo</a>
              </div>
            </div>
          </article>
```

- La liste de technologies utilise `<ul>` et `<li>`.
- Les liens du projet peuvent pointer vers GitHub ou une démo.
- Le second projet suit la même organisation.

## 11. Section contact

```html
    <section id="contact" class="section" aria-label="Contactez-moi">
      <div class="container">
        <h2 class="section-titre">Contact</h2>
        <p class="section-sous-titre">Discutons de votre projet</p>
        <div class="ligne-accent"></div>
        <div class="contact-grille">
```

- Cette section propose un formulaire de contact et des liens vers les réseaux.

```html
          <div class="contact-info">
            <h3>Travaillons ensemble</h3>
            <p>Disponible pour des stages, des projets collaboratifs ou simplement pour échanger sur le développement web.</p>
            <nav class="contact-reseaux" aria-label="Réseaux sociaux">
              <a href="https://github.com/samakeamadou2006" target="_blank" rel="noopener" class="reseau-lien">
                <i class="fa-brands fa-github" aria-hidden="true"></i> Samaké Amadou sur GitHub
              </a>
```

- Les liens externes utilisent `target="_blank"` pour s’ouvrir dans un nouvel onglet.
- `rel="noopener"` est une bonne pratique de sécurité.

```html
          <form class="formulaire" id="formulaire-contact" novalidate>
            <div class="champ-groupe">
              <label for="nom">Nom complet</label>
              <input type="text" id="nom" name="nom" placeholder="Donald Trump" required />
            </div>
```

- Le formulaire contient des champs texte, email et message.
- `label` est lié à l’`input` avec `for` et `id`.
- `placeholder` affiche un exemple dans le champ.
- `required` oblige à remplir le champ.

```html
            <button type="submit" class="btn btn-primaire">
              Envoyer le message <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
            </button>
          </form>
```

- Le bouton envoie le formulaire.
- Il utilise les mêmes classes de style que les autres boutons.

## 12. Pied de page et script

```html
  <footer>
    <p>© 2026 <span>Samaké Amadou</span> — Tous droits réservés. </p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

- `<footer>` contient le copyright.
- `<script>` charge le fichier JavaScript qui ajoute les interactions.
- Le script est placé à la fin du `body` pour s’assurer que le HTML est déjà chargé.
