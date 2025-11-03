"use client";

import type React from "react";
import {GoogleFontLoader} from "@/components/bande/google-font-loader";

interface BlogHeroProps {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  titleColor: string;
  fontFamily: string;
  secondaryFontFamily: string;
  title: string;
  subtitle: string;
  paddingTop: number;
  paddingBottom: number;
  // Nouvelles props unifiées pour les médias
  mediaUrl?: string;
  mediaAlt?: string;
  mediaType?: "image" | "video";
  // Anciennes props pour compatibilité
  videoUrl: string;
  backgroundPaintBrushImage: string;
}


// Composant BrushTitle pour effet peinture dynamique
const BrushTitle = ({
  title = "Mes Services",
  textColor = "#000000",
  className = "",
  titleFont = "Playfair Display",
}) => (
  <div
    className={`relative w-full max-w-[540px] text-center mx-auto ${className}`}
  >
    <div
      data-editable="true"
      data-id="-titleFont"
      data-label="Police de titre"
      data-type="font"
      style={{ display: "none" }}
    >
      {titleFont || ""}
    </div>
    {/* Brush PNG en fond */}
    <img
      src="/componentsImage/blog-hero/paint-brush-stroke.png"
      alt=""
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none"
      style={{
        width: "120%", // Agrandit la largeur du brush
        maxWidth: 700,
        height: 20, // Agrandit la hauteur du brush
        objectFit: "contain",
        opacity: 0,
      }}
    />
    {/* Titre dynamique */}
    <span
      className="relative z-10 text-4xl md:text-5xl"
      style={{ color: "#000000", fontFamily: titleFont }}
    >
      {title}
    </span>
  </div>
);

const BlogHero: React.FC<BlogHeroProps> = ({
  primaryColor = "#096352",
  secondaryColor = "#FFFFFF",
  textColor = "#000000",
  titleColor = "#FFFFFF",
  fontFamily = "serif",
  secondaryFontFamily = "Poppins",
  title = "Blog",
  subtitle = "Je partage avec vous des conseils juridiques, des actualités et des analyses pour mieux comprendre vos droits.",
  // Nouvelles props unifiées
  mediaUrl,
  mediaAlt,
  mediaType = "video",
  // Anciennes props pour compatibilité
  videoUrl = "/componentsImage/blog-hero/hero-vedio-blog.mp4",
  backgroundPaintBrushImage = "/componentsImage/blog-hero/paint-brush-stroke.png",
  paddingTop = 0,
  paddingBottom = 0,
}) => {
  // Déterminer l'URL et l'alt à utiliser (nouveau système en priorité, ancien en fallback)
  const finalMediaUrl = mediaUrl || videoUrl || "";
  const finalMediaAlt = mediaAlt || "";

  // Détecter automatiquement le type de média basé sur l'extension du fichier
  const isVideoFile = (url: string) => {
    if (!url) return false;
    const videoExtensions = [
      ".mp4",
      ".webm",
      ".ogg",
      ".mov",
      ".avi",
      ".mkv",
    ];
    return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  const isImageFile = (url: string) => {
    if (!url) return false;
    const imageExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".webp",
      ".svg",
      ".bmp",
    ];
    return imageExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  // Déterminer le type de média à afficher (priorité à la détection automatique par extension)
  const displayMediaType = isVideoFile(finalMediaUrl) 
    ? "video" 
    : isImageFile(finalMediaUrl)
      ? "image"
      : mediaType === "video" && !finalMediaUrl 
        ? "video" 
        : "image";


  const titleStyle = {
    fontFamily: fontFamily ? `'${fontFamily}', serif` : undefined,
  };

  const textStyle = {
    fontFamily: secondaryFontFamily
      ? `'${secondaryFontFamily}', sans-serif`
      : undefined,
  };

  return (
    <>
      <GoogleFontLoader fontName={fontFamily || ""} />
      <GoogleFontLoader fontName={secondaryFontFamily || ""} />
      <section
        className="relative flex items-center justify-center overflow-hidden w-full py-12 "
        style={{ fontFamily: secondaryFontFamily, backgroundColor: "#F9FAFB", paddingTop: `${paddingTop}px`, paddingBottom: `${paddingBottom}px` }}
        data-component="true"
        data-id="blog-hero"
      >
        {/* Hidden elements for editable colors */}
        <div
          data-editable="true"
          data-id="-primaryColor"
          data-label="Primary Color"
          style={{ display: "none" }}
        >
          {primaryColor}
        </div>
        <div
          data-editable="true"
          data-id="-secondaryColor"
          data-label="Secondary color"
          style={{ display: "none" }}
        >
          {secondaryColor}
        </div>
        <div
          data-editable="true"
          data-id="-textColor"
          data-label="Text color"
          style={{ display: "none" }}
        >
          {textColor}
        </div>
        <div
          data-editable="true"
          data-id="-titleColor"
          data-label="Title color"
          style={{ display: "none" }}
        >
          {titleColor}
        </div>

        {/* Éléments cachés pour les médias unifiés */}
        <div
          data-editable="true"
          data-id="-mediaUrl"
          data-label="Média (Image ou Vidéo)"
          data-type="media"
          style={{ display: "none" }}
        >
          {finalMediaUrl}
        </div>
        <div
          data-editable="true"
          data-id="-mediaAlt"
          data-label="Texte alternatif média"
          style={{ display: "none" }}
        >
          {finalMediaAlt}
        </div>
        <div
          data-editable="true"
          data-id="-mediaType"
          data-label="Type de média"
          style={{ display: "none" }}
        >
          {mediaType}
        </div>
        <div
          data-editable="true"
          data-id="-paddingTop"
          data-label="Padding top"
          style={{ display: "none" }}
        >
          {paddingTop}
        </div>
        <div
          data-editable="true"
          data-id="-paddingBottom"
          data-label="Padding bottom"
          style={{ display: "none" }}
        >
          {paddingBottom}
        </div>
        <div
          data-editable="true"
          data-id="-title"
          data-label="Titre principal"
          style={{ display: "none" }}
        >
          {title}
        </div>

        <div className="absolute inset-0 z-0">
          {/* Affichage du média (image ou vidéo) */}
          {finalMediaUrl && (
            <>
              {displayMediaType === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ objectFit: "cover" }}
                >
                  <source src={finalMediaUrl} type="video/mp4" />
                  <source src={finalMediaUrl} type="video/webm" />
                  <source src={finalMediaUrl} type="video/ogg" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              ) : (
                <img
                  src={finalMediaUrl}
                  alt={finalMediaAlt}
                  className="w-full h-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              )}
            </>
          )}

          {/* Overlay vert sur la vidéo */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: primaryColor,
              opacity: 0.00,
              pointerEvents: "none",
            }}
          />

          <div
            className="absolute inset-0"
            style={{ backgroundColor: `#FF00` }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/80 to-transparent opacity-60 blur-2xl z-10 pointer-events-none"></div>
        </div>

        <div className="mt-6 relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-10 sm:space-y-8">
            <div className="relative mb-2">
              {/* Utilisation du BrushTitle avec trait blanc */}
              <BrushTitle title={title} textColor={primaryColor} />
            </div>

            <p
              className="text-[24px] max-w-[40rem] mx-auto px-2 sm:px-0 opacity-90"
              style={{ ...textStyle, color: titleColor }}
              data-editable="true"
              data-id="-subtitle"
              data-label="Subtitle"
            >
              {subtitle}
            </p>
          </div>
        </div>

        {/* Hidden elements for editable fonts */}
        <div
          data-editable="true"
          data-id="-fontFamily"
          data-label="Police principale"
          data-type="font"
          style={{ display: "none" }}
        >
          {fontFamily || ""}
        </div>
        <div
          data-editable="true"
          data-id="-secondaryFontFamily"
          data-label="Police secondaire"
          data-type="font"
          style={{ display: "none" }}
        >
          {secondaryFontFamily || ""}
        </div>
      </section>
    </>
  );
};

export default BlogHero;