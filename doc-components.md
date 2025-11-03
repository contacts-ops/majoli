# Documentation pour le développement de composants MajoliHub

---

> ⚠️ **Très important, à ABSOLUMENT SAVOIR et respecter**
>
> - **TOUS** les `props` doivent avoir des **data-attributes** (`data-editable`, `data-id`, `data-label` et `data-type`).
> - `data-id` doit **strictement** commencer par `"-"` (ex : `data-id="-titlePrefix"`).
> - **Un seul** `data-attribute` par **props** (pas de doublon).
> - **TOUT** vient des `{props}` (aucun hardcode).
> - **Liens** : importer `useSiteLink` et **obligatoirement** utiliser `transformLink(...)`.
> - **Google Fonts** : chargement dynamique dans les props de fonts (`fontFamily`, `secondaryFontFamily`, etc.) via l'API Google Fonts.

---

## page.tsx

Tout le code ci-dessous est le strict minimum pour chaque section afin de fonctionner au format MajoliHub. Vous pouvez ajouter tout le style et les fonctions que vous souhaitez.

### Définition des props

> 🎨
>
> ```typescript
> interface HeroLawyerProps {
>   primaryColor: string;
>   secondaryColor: string;
>   textColor: string;
>   backgroundColor: string;
> }
> ```
>
> L'interface est définie en premier pour spécifier le `type` des props.
>
> ```typescript
> const HeroLawyer: React.FC<HeroLawyerProps> = ({
>   primaryColor,
>   secondaryColor,
>   textColor,
>   backgroundColor,
> }) => {
>   /* ... code du composant ... */
> };
> ```
>
> Définition des props eux-mêmes.

---

### Textes

> 📝
>
> - Chaque texte est un `props`.
> - Un seul `data-id` par props unique.
>
> ```jsx
> {
>   /* Fonctionne évidement pour n'importe quelle balise contenant du texte */
> }
> <h1
>   data-editable="true"
>   data-id="-titlePrefix"
>   data-label="Titre du préfixe"
>   style={{ color: secondaryColor }}
> >
>   {titlePrefix}
> </h1>;
> ```

---

### Images

> 🖼️
>
> - Tout provient des `props` : `mediaUrl`, `mediaAlt`, `mediaType` (`"image"` | `"video"`).
> - On expose ces props dans des **éléments cachés** (pour l'éditeur), **une seule fois**.
> - On détecte aussi le type vidéo par extension si souhaité.
> - Les média type ne doivent pas avoir de data-editable
>
> **Éléments cachés pour les médias :**
>
> ```jsx
> <div
>   style={{ display: "none" }}
>   data-editable="true"
>   data-type="media"
>   data-id="-mediaUrl"
>   data-label="Média d'accueil"
> >
>   {mediaUrl}
> </div>
>
> <div
>   style={{ display: "none" }}
>   data-editable="true"
>   data-id="-mediaAlt"
>   data-label="Texte alternatif de l'image"
> >
>   {mediaAlt}
> </div>
> <div
>   style={{ display: "none" }}
>   data-editable="true"
>   data-id="-mediaType"
>   data-label="Type de média"
> >
>   {mediaType}
> </div>
> ```
>
> **Variables et utilisation :**
>
> ```javascript
> const isVideoFile = (url?: string) =>
>   !!url &&
>   [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv", ".gif"].some((ext) =>
>     url.toLowerCase().includes(ext)
>   );
>
> const displayMediaType =
>   mediaType === "video" || isVideoFile(mediaUrl) ? "video" : "image";
>
> {
>   /* Utilisation */
> }
> <div>
>   {mediaUrl &&
>     (displayMediaType === "video" ? (
>       <video autoPlay muted loop playsInline>
>         <source src={mediaUrl} type="video/mp4" />
>         <source src={mediaUrl} type="video/webm" />
>         <source src={mediaUrl} type="video/ogg" />
>         Votre navigateur ne supporte pas la lecture de vidéos.
>       </video>
>     ) : (
>       <img src={mediaUrl} alt={mediaAlt} />
>     ))}
> </div>;
> ```

---

### Liens

> 🔗
>
> ```jsx
> import { useSiteLink } from "@/hooks/use-site-link";
>
> const { transformLink } = useSiteLink();
>
> return (
>   <a
>     href={transformLink(ctaLink)}
>     data-editable="true"
>     data-type="link"
>     data-id="-ctaLink"
>     data-label="Lien du bouton"
>   >
>     <span
>       data-editable="true"
>       data-id="-ctaText"
>       data-label="Texte du bouton"
>     >
>       {ctaText}
>     </span>
>   </a>
> );
> ```

---

### Polices

> ✍️
>
> - Les noms de polices viennent des `props`.
> - On charge Google Fonts **dynamiquement** (et sans doublons).
> - On expose les polices via des **éléments cachés** (`data-type="font"`).
>
> **Composant de chargement :**
>
> ```javascript
> import { useEffect } from "react";
>
> const GoogleFontLoader = ({ fontName }: { fontName?: string }) => {
>   useEffect(() => {
>     if (!fontName) return;
>     const family = fontName.trim().replace(/\s+/g, "+");
>     const href = `https://fonts.googleapis.com/css2?family=${family}:wght@400;500;600;700&display=swap`;
>     if (document.querySelector(`link[href="${href}"]`)) return; // évite les doublons
>     const link = document.createElement("link");
>     link.rel = "stylesheet";
>     link.href = href;
>     document.head.appendChild(link);
>   }, [fontName]);
>
>   return null;
> };
> ```
>
> **Utilisation et exposition :**
>
> ```jsx
> {/* Chargement des polices depuis les props */}
> {/* À placer au tout début de la div racine */}
>
> <GoogleFontLoader fontName={props.fontFamily} />
> <GoogleFontLoader fontName={props.secondaryFontFamily} />
>
> {/* Exposition à l’éditeur (une seule fois chacune) : éléments cachés */}
>
> <div
>   style={{ display: "none" }}
>   data-editable="true"
>   data-type="font"
>   data-id="-fontFamily"
>   data-label="Couleur principale"
> >
>   {fontFamily}
> </div>
> <div
>   style={{ display: "none" }}
>   data-editable="true"
>   data-type="font"
>   data-id="-secondaryFontFamily"
>   data-label="Couleur secondaire"
> >
>   {secondaryFontFamily}
> </div>
>
> {/* Application */}
> <h1
>   style={{ fontFamily: fontFamily }}
> >
>   {titlePrefix}
> </h1>
> <p
>   style={{ fontFamily: secondaryFontFamily }}
> >
>   {slogan1}
> </p>
> ```

---

### Couleurs

> 🎨
>
> - **Aucune valeur en dur.**
> - On expose chaque couleur **une seule fois** via un **élément caché** pour que l'éditeur la détecte.
> - `data-id` = `"-primaryColor"`, `"-secondaryColor"`, etc.
>
> **Définition et exposition :**
>
> ```jsx
> {/* À placer au tout début de la div racine */}
> <div
>   style={{ display: "none" }}
>   data-editable="true"
>   data-id="-primaryColor"
> >
>   {primaryColor}
> </div>
> <div
>   style={{ display: "none" }}
>   data-editable="true"
>   data-id="-secondaryColor"
> >
>   {secondaryColor}
> </div>
> ```
>
> **Utilisation :**
>
> ```jsx
> <h1
>   style={{ color: textColor }}
> >
>   {titlePrefix}
> </h1>
>
> <p
>   style={{ backgroundColor: secondaryColor, color: textColor }}
> >
>   {descText}
> </p>
> ```

---

### Utilisation de `.map()` pour des listes d'éléments

Le `.map()` est essentiel pour créer des listes de composants dynamiques, comme des cartes de services ou des témoignages. Il vous évite de dupliquer du code et rend votre composant réutilisable.

#### 1. Pourquoi `.map()` ?

Dans votre composant, si vous avez plusieurs éléments similaires à afficher (titre, texte, bouton, etc.), vous pouvez utiliser `.map()` pour générer automatiquement ces éléments à partir d'un tableau de données. Chaque élément du tableau devient une instance de votre composant. Les **props** utilisés dans le `.map()` doivent évidemment être définis dans le `config.json`.

#### 2. Comment ça marche ? (Structure générale)

```javascript
{
  [objet1, objet2, objet3, objet4].map((card, index) => (
    <div key={index}>{/* contenu de la carte */}</div>
  ));
}
```

### # 3. Exemple concret :

```javascript
{
  [
    {
      titre: titre1,
      text: text1,
      buttonText: buttonText1,
      buttonUrl: buttonUrl1,
      id: 1,
    },
    {
      titre: titre2,
      text: text2,
      buttonText: buttonText2,
      buttonUrl: buttonUrl2,
      id: 2,
    },
    {
      titre: titre3,
      text: text3,
      buttonText: buttonText3,
      buttonUrl: buttonUrl3,
      id: 3,
    },
    {
      titre: titre4,
      text: text4,
      buttonText: buttonText4,
      buttonUrl: buttonUrl4,
      id: 4,
    },
  ].map((card, index) => (
    <div key={index}>
      <h3
        data-editable="true"
        data-id={`-titre${card.id}`}
        data-label={`Titre ${card.id}`}
      >
        {card.titre}
      </h3>
      <p
        data-editable="true"
        data-id={`-text${card.id}`}
        data-label={`Texte ${card.id}`}
      >
        {card.text}
      </p>
      <a
        href={card.buttonUrl}
        data-editable="true"
        data-id={`-buttonText${card.id}`}
        data-label={`Bouton ${card.id}`}
        data-type="link"
      >
        <span
          data-editable="true"
          data-id={`-buttonText${card.id}`}
          data-label={`Texte bouton ${card.id}`}
        >
          {card.buttonText}
        </span>
      </a>
    </div>
  ));
}
```
