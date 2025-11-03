# Newsletter Hero Component

## 📋 Description
Composant hero Newsletter avec image de fond et formulaire d'inscription. Reproduit fidèlement le design Figma fourni avec une attention particulière aux détails visuels.

## ✨ Caractéristiques

### Design
- **Image/Vidéo de fond** : Supporte images et vidéos avec overlay sombre personnalisable
- **Layout responsive** : 
  - Mobile : Éléments empilés verticalement
  - Desktop : Texte à gauche, formulaire à droite
- **Formulaire d'inscription** :
  - Champ email avec placeholder personnalisable
  - Bouton CTA avec couleur et texte configurables
  - Coins arrondis et ombres portées pour un design moderne
- **Typographie** : Support complet de Google Fonts avec chargement dynamique

### Résolutions supportées
| Type | Largeur | Hauteur | Orientation |
|------|----------|----------|--------------|
| Mobile XS | 360px | 640px | Portrait |
| Mobile L | 430px | 932px | Portrait |
| Tablette portrait | 768px | 1024px | Portrait |
| Tablette paysage | 1024px | 768px | Paysage |
| Laptop | 1366px | 768px | Paysage |
| Desktop | 1920px | 1080px | Paysage |

## 🎨 Props éditables

### Couleurs
- `primaryColor` : Couleur du bouton (défaut: #0066CC)
- `secondaryColor` : Couleur du texte blanc (défaut: #FFFFFF)
- `backgroundColor` : Couleur de l'overlay (défaut: #000000, opacity: 0.75)
- `textColor` : Couleur du texte (défaut: #FFFFFF)

### Polices
- `fontFamily` : Police principale pour le titre
- `secondaryFontFamily` : Police secondaire pour le corps de texte

### Contenus
- `title` : Titre principal (ex: "Newsletter")
- `description` : Texte de description
- `inputPlaceholder` : Placeholder du champ email
- `buttonText` : Texte du bouton CTA
- `buttonLink` : Lien de destination du bouton

### Médias
- `mediaUrl` : URL de l'image ou vidéo de fond
- `mediaAlt` : Texte alternatif pour le média
- `mediaType` : Type de média ("image" ou "video")

### Espacement
- `paddingTop` : Padding supérieur en pixels
- `paddingBottom` : Padding inférieur en pixels

## 📁 Structure des fichiers

```
newsletter-hero/
├── page.tsx       # Composant React principal
├── config.json    # Configuration et props par défaut
└── README.md      # Documentation
```

## 🔧 Conformité MajoliHub

✅ Tous les props ont des data-attributes  
✅ Les data-id commencent par "-"  
✅ Un seul data-attribute par prop  
✅ Éléments cachés pour couleurs, polices et médias  
✅ Support de useSiteLink et transformLink  
✅ Chargement dynamique des Google Fonts  
✅ Détection automatique image/vidéo  
✅ 100% responsive  

## 🚀 Utilisation

Le composant est prêt à être intégré dans MajoliHub. Tous les contenus sont éditables via l'interface MajoliHub et aucun texte ou couleur n'est codé en dur.

## 🎯 Fidélité visuelle

Le composant reproduit à 100% le design Figma fourni :
- ✅ Image de fond avec overlay sombre
- ✅ Titre "Newsletter" en blanc, grande police
- ✅ Description détaillée en blanc
- ✅ Champ input blanc avec placeholder
- ✅ Bouton bleu "Envoyer"
- ✅ Layout responsive (texte gauche, formulaire droite sur desktop)
- ✅ Coins arrondis sur input et bouton
- ✅ Ombres portées pour effet de profondeur
