# 🌴 Hôtel Esperanza — Design Tripce (Angular 17)

Site web de l'Hôtel Esperanza basé sur la maquette Tripce.

## 🚀 Lancer

```bash
npm install && npm start
# → http://localhost:4200
```

## 📦 Build production

```bash
npm run build:prod
# → dist/hotel-esperanza/browser/
```

## 📋 Sections

| Section | Description |
|---|---|
| **Navbar** | Fixée, transparente → blanche au scroll |
| **Hero** | Fond image, titre, widget de recherche avec onglets |
| **Popular Place** | 4 cartes espaces populaires avec badges |
| **Features** | 3 étapes + image + cartes avis flottantes |
| **Explore More** | 12 destinations, filtres, "Afficher plus" |
| **Adventure Slider** | Slider 5 aventures interactif |
| **Book CTA** | Bannière + image panoramique |
| **Footer** | 5 colonnes + newsletter |

## 🖼️ Ajouter les vraies photos

Place tes photos Facebook dans `src/assets/images/gallery/` :
- `piscine-01.jpg` à `piscine-06.jpg`
- `chambre-01.jpg` à `chambre-04.jpg`
- `restaurant-01.jpg` à `restaurant-03.jpg`
- `exterieur-01.jpg` à `exterieur-03.jpg`

## 🌐 Déploiement Netlify

- Build: `npm run build:prod`
- Publish: `dist/hotel-esperanza/browser`
- Fichier `_redirects` déjà inclus
