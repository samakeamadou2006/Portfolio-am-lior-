# Explication ligne par ligne de `style.css`

Ce document explique le fichier CSS du portfolio pour un débutant.

## 1. Variables CSS

```css
:root {
  --couleur-primaire: #1a1a2e;
  --couleur-secondaire: #16213e;
  --couleur-accent: #c9a84c;
  --couleur-accent-clair: #e8c97a;
  --couleur-texte: #2d2d2d;
  --couleur-texte-clair: #666;
  --couleur-fond: #f8f7f4;
  --couleur-blanc: #ffffff;
  --couleur-bordure: #e5e0d8;
  --police-titre: 'Playfair Display', Georgia, serif;
  --police-corps: 'DM Sans', sans-serif;
  --ombre-douce: 0 4px 20px rgba(0, 0, 0, 0.08);
  --ombre-forte: 0 8px 40px rgba(0, 0, 0, 0.15);
  --rayon: 8px;
  --transition: all 0.3s ease;
}
```

- `:root` est l’élément racine de la page.
- Les variables commencent par `--` et peuvent être réutilisées partout.
- Cela rend le style plus facile à modifier.

## 2. Reset de base

```css
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- Cette règle enlève les marges et les paddings par défaut des éléments.
- `box-sizing: border-box;` fait en sorte que la largeur inclut la bordure et le padding.

```css
html {
  scroll-behavior: smooth;
}
```

- Rend le défilement de page fluide quand on clique sur un lien ancres.

```css
body {
  font-family: var(--police-corps);
  background-color: var(--couleur-fond);
  color: var(--couleur-texte);
  line-height: 1.7;
  font-size: 16px;
}
```

- Définit la police, la couleur de fond et la couleur du texte pour toute la page.
- `line-height` améliore la lisibilité.

## 3. Styles généraux

```css
img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
```

- Les images ne dépassent pas de leur conteneur.
- Les liens n’ont pas de soulignement et gardent la couleur du texte.
- Les listes n’affichent plus les puces par défaut.

## 4. Utilitaires

```css
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}
.section { padding: 6rem 0; }
```

- `.container` centre le contenu et limite sa largeur.
- `.section` ajoute de l’espace en haut et en bas des sections.

```css
.section-titre {
  font-family: var(--police-titre);
  font-size: 2.5rem;
  color: var(--couleur-primaire);
  margin-bottom: 0.5rem;
}
```

- `section-titre` stylise les titres principaux des sections.

```css
.section-sous-titre {
  color: var(--couleur-texte-clair);
  font-size: 1rem;
  margin-bottom: 3rem;
}
```

- `section-sous-titre` est un petit texte explicatif sous le titre.

```css
.ligne-accent {
  width: 50px;
  height: 3px;
  background: var(--couleur-accent);
  margin: 1rem 0 3rem;
}
```

- `ligne-accent` est une ligne décorative sous les titres.

## 5. Boutons

```css
.btn {
  display: inline-block;
  padding: 0.85rem 2rem;
  border-radius: var(--rayon);
  font-family: var(--police-corps);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  border: none;
}
```

- `.btn` définit l’apparence de base de tous les boutons.

```css
.btn-primaire {
  background: var(--couleur-accent);
  color: var(--couleur-primaire);
}

.btn-primaire:hover {
  background: var(--couleur-accent-clair);
  transform: translateY(-2px);
  box-shadow: var(--ombre-forte);
}
```

- `.btn-primaire` est un bouton rempli.
- La pseudo-classe `:hover` ajoute un effet quand la souris passe dessus.

```css
.btn-contour {
  background: transparent;
  color: var(--couleur-blanc);
  border: 2px solid var(--couleur-accent);
}

.btn-contour:hover {
  background: var(--couleur-accent);
  color: var(--couleur-primaire);
  transform: translateY(-2px);
}
```

- `.btn-contour` est un bouton avec bordure.
- Au survol, il change de couleur.

## 6. Navigation

```css
header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: var(--couleur-primaire);
  transition: var(--transition);
}
```

- Le header reste fixé en haut de l’écran.
- `z-index` le place au-dessus des autres éléments.

```css
header.scrolled { box-shadow: var(--ombre-forte); }
```

- Quand la page est scrollée, une ombre apparaît sous le header.

```css
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}
```

- `nav` organise son contenu en ligne.
- Les éléments sont espacés entre eux.

```css
.nav-logo {
  font-family: var(--police-titre);
  font-size: 1.4rem;
  color: var(--couleur-blanc);
  letter-spacing: 0.5px;
}

.nav-logo span { color: var(--couleur-accent); }
```

- Le logo utilise la police de titre.
- La partie `<span>` est colorée différemment.

```css
.nav-liens { display: flex; gap: 2.5rem; }

.nav-liens a {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 400;
  transition: var(--transition);
  position: relative;
}
```

- Le menu est en ligne avec de l’espace entre les liens.
- Chaque lien est stylisé et prêt pour l’animation.

```css
.nav-liens a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 2px;
  background: var(--couleur-accent);
  transition: var(--transition);
}

.nav-liens a:hover { color: var(--couleur-blanc); }
.nav-liens a:hover::after { width: 100%; }
```

- Cette partie crée une ligne sous les liens au survol.
- La ligne grandit doucement grâce à la transition.

```css
.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px;
}

.nav-hamburger span {
  display: block;
  width: 24px; height: 2px;
  background: var(--couleur-blanc);
  transition: var(--transition);
}
```

- Le bouton hamburger est caché par défaut.
- Les trois barres sont créées avec des `<span>`.

## 7. Section HERO

```css
#hero {
  min-height: 100vh;
  background: var(--couleur-primaire);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
```

- `#hero` occupe toute la hauteur de l’écran.
- Le contenu est centré verticalement.

```css
#hero::before,
#hero::after {
  content: '';
  position: absolute;
  border: 1px solid rgba(201, 168, 76, 0.15);
  border-radius: 50%;
}
```

- Les pseudo-éléments dessinent des cercles décoratifs.

```css
.hero-contenu { position: relative; z-index: 1; }
```

- Permet de placer le texte devant les décorations.

```css
.hero-salutation {
  color: var(--couleur-accent);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
```

- Le texte d’introduction est stylisé en majuscules.

```css
.hero-nom {
  font-family: var(--police-titre);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--couleur-blanc);
  line-height: 1.1;
  margin-bottom: 1rem;
}
```

- `clamp()` adapte la taille du titre selon la largeur de l’écran.

```css
.hero-titre { color: rgba(255, 255, 255, 0.6); }
.hero-titre span { color: var(--couleur-accent); font-weight: 500; }
```

- Le mot important est mis en évidence.

```css
.hero-description {
  max-width: 520px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.8;
}

.hero-boutons { display: flex; gap: 1rem; flex-wrap: wrap; }
```

- Le texte est facile à lire.
- Les boutons s’alignent côte à côte et peuvent se placer sur plusieurs lignes.

## 8. Section À propos

```css
#a-propos { background: var(--couleur-blanc); }

.a-propos-grille {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  align-items: center;
}
```

- La section a un fond blanc.
- La grille place l’image et le texte côte à côte.

```css
.a-propos-image { position: relative; }

.a-propos-image::before {
  content: '';
  position: absolute;
  top: 20px; left: 20px;
  right: -20px; bottom: -20px;
  border: 2px solid var(--couleur-accent);
  border-radius: var(--rayon);
  z-index: 0;
}
```

- Cette bordure décorative encadre l’image.

```css
.photo-profil {
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  border-radius: var(--rayon);
  display: block;
}
```

- `aspect-ratio` garde l’image dans un format fixe.
- `object-fit: cover` remplit le cadre sans déformer l’image.

```css
.a-propos-texte p {
  color: var(--couleur-texte-clair);
  margin-bottom: 1.2rem;
}
```

- Les paragraphes sont gris clair et espacés.

```css
.a-propos-infos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
}
```

- Les informations sont alignées en deux colonnes.

```css
.info-item {
  padding: 1rem;
  background: var(--couleur-fond);
  border-radius: var(--rayon);
  border-left: 3px solid var(--couleur-accent);
}
```

- Chaque carte d’information est bien visible grâce à la bordure colorée.

## 9. Section compétences

```css
#competences { background: var(--couleur-fond); }

.competences-grille {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

- La section a un fond plus clair.
- Les cartes prennent au moins 300px, puis se répartissent.

```css
.competence-carte {
  background: var(--couleur-blanc);
  border-radius: var(--rayon);
  padding: 2rem;
  box-shadow: var(--ombre-douce);
  transition: var(--transition);
}
```

- Chaque carte ressemble à une carte propre et flottante.

```css
.competence-carte:hover {
  transform: translateY(-5px);
  box-shadow: var(--ombre-forte);
}
```

- L’effet hover soulève légèrement la carte.

```css
.competence-icone {
  width: 50px; height: 50px;
  background: var(--couleur-primaire);
  border-radius: var(--rayon);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
}
```

- L’icône est centrée dans un carré.

```css
.barre-fond {
  background: var(--couleur-fond);
  border-radius: 99px;
  height: 6px;
  overflow: hidden;
}

.barre-remplissage {
  height: 100%;
  background: linear-gradient(90deg, var(--couleur-accent), var(--couleur-accent-clair));
  width: 0;
  transition: width 1s ease;
}
```

- La barre de progression est cachée par défaut.
- Le JavaScript animera la largeur de `.barre-remplissage`.

## 10. Section projets

```css
#projets { background: var(--couleur-blanc); }

.projets-grille {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}
```

- Les cartes projets sont aussi en grille.

```css
.projet-carte {
  border-radius: var(--rayon);
  overflow: hidden;
  box-shadow: var(--ombre-douce);
  transition: var(--transition);
  background: var(--couleur-blanc);
  border: 1px solid var(--couleur-bordure);
}
```

- Chaque carte possède une bordure et une ombre.

```css
.projet-carte:hover {
  transform: translateY(-6px);
  box-shadow: var(--ombre-forte);
}
```

- L’effet hover soulève aussi ces cartes.

```css
.projet-image {
  height: 200px;
  background: linear-gradient(135deg, var(--couleur-primaire), var(--couleur-secondaire));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
```

- La zone image utilise un dégradé et centre l’icône.

```css
.projet-tag {
  position: absolute;
  top: 1rem; left: 1rem;
  background: var(--couleur-accent);
  color: var(--couleur-primaire);
  padding: 4px 10px;
  border-radius: 99px;
}
```

- Le tag indique l’état du projet.

```css
.projet-corps { padding: 1.5rem; }
.projet-titre { font-family: var(--police-titre); font-size: 1.3rem; }
```

- Le texte du projet est espacé et lisible.

## 11. Section contact

```css
#contact { background: var(--couleur-primaire); }
#contact .section-titre { color: var(--couleur-blanc); }
#contact .section-sous-titre { color: rgba(255,255,255,0.5); }
```

- Cette section a un fond sombre.
- Les titres sont blancs pour contraster.

```css
.contact-grille {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  align-items: start;
}
```

- Le contenu est divisé en deux colonnes.

```css
.reseau-lien {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255,255,255,0.7);
}

.reseau-lien:hover { color: var(--couleur-accent); transform: translateX(5px); }
```

- Les liens réseaux sont alignés et bougent au survol.

```css
.champ-groupe input,
.champ-groupe textarea {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--couleur-blanc);
}
```

- Les champs du formulaire ont un style sombre et lisible.

```css
.champ-groupe textarea { resize: vertical; min-height: 140px; }
```

- L’utilisateur peut redimensionner le champ message verticalement.

## 12. Pied de page

```css
footer {
  background: #0f0f1e;
  padding: 2rem;
  text-align: center;
  color: rgba(255,255,255,0.3);
  font-size: 0.85rem;
}

footer span { color: var(--couleur-accent); }
```

- Le footer est sombre et centré.
- Le nom est mis en évidence par une couleur accent.

## 13. Animations et responsive

```css
.apparition {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.apparition.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- Ces règles permettent aux éléments d’apparaître doucement.
- Le JavaScript ajoute la classe `visible` pour déclencher l’animation.

```css
@media (max-width: 768px) {
  .nav-liens {
    display: none;
    position: absolute;
    top: 100%; left: 0; right: 0;
    background: var(--couleur-primaire);
    flex-direction: column;
    padding: 1.5rem 2rem;
    gap: 1.5rem;
    border-top: 1px solid rgba(255,255,255,0.08);
  }

  .nav-liens.ouvert { display: flex; }
  .nav-hamburger { display: flex; }

  .a-propos-grille,
  .contact-grille { grid-template-columns: 1fr; gap: 2.5rem; }

  .a-propos-image { max-width: 300px; margin: 0 auto; }
  .hero-nom { font-size: 2.5rem; }
}
```

- Cette règle s’applique aux écrans de largeur inférieure à 768px.
- Le menu devient un menu caché qui s’ouvre avec le hamburger.
- Les grilles deviennent une colonne unique pour s’adapter aux petits écrans.
- L’image de profil est centrée et le titre est un peu plus petit.
