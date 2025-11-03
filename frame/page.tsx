"use client";

import type React from "react";
import { useEffect } from "react";
import { useSiteLink } from "@/hooks/use-site-link";

interface FrameProps {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  secondaryFontFamily: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  mediaUrl1?: string;
  mediaAlt1?: string;
  mediaType1?: "image" | "video";
  mediaUrl2?: string;
  mediaAlt2?: string;
  mediaType2?: "image" | "video";
  paddingTop: number;
  paddingBottom: number;
}

// Composant de chargement Google Fonts
const GoogleFontLoader = ({ fontName }: { fontName?: string }) => {
  useEffect(() => {
    if (!fontName) return;
    const family = fontName.trim().replace(/\s+/g, "+");
    const href = `https://fonts.googleapis.com/css2?family=${family}:wght@400;500;600;700&display=swap`;
    if (document.querySelector(`link[href="${href}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }, [fontName]);

  return null;
};

const Frame: React.FC<FrameProps> = ({
  primaryColor = "#2563EB",
  secondaryColor = "#F97316",
  backgroundColor = "#FFFFFF",
  textColor = "#1F2937",
  fontFamily = "Inter",
  secondaryFontFamily = "Poppins",
  title = "Titre du Composant Frame",
  subtitle = "Sous-titre élégant et professionnel",
  description = "Cette section frame est conçue pour présenter votre contenu de manière élégante et professionnelle. Personnalisez tous les éléments selon vos besoins.",
  ctaText = "Découvrir plus",
  ctaLink = "/contact",
  mediaUrl1 = "/placeholder.svg",
  mediaAlt1 = "Image principale",
  mediaType1 = "image",
  mediaUrl2,
  mediaAlt2 = "Image secondaire",
  mediaType2 = "image",
  paddingTop = 80,
  paddingBottom = 80,
}) => {
  const { transformLink } = useSiteLink();

  // Détection automatique du type de média
  const isVideoFile = (url?: string) =>
    !!url &&
    [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv", ".gif"].some((ext) =>
      url.toLowerCase().includes(ext)
    );

  const displayMediaType1 =
    mediaType1 === "video" || isVideoFile(mediaUrl1) ? "video" : "image";
  const displayMediaType2 =
    mediaType2 === "video" || isVideoFile(mediaUrl2) ? "video" : "image";

  return (
    <>
      <GoogleFontLoader fontName={fontFamily} />
      <GoogleFontLoader fontName={secondaryFontFamily} />
      
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundColor,
          fontFamily: secondaryFontFamily,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
        }}
        data-component="true"
        data-id="frame"
      >
        {/* Éléments cachés pour les couleurs */}
        <div
          data-editable="true"
          data-id="-primaryColor"
          data-label="Couleur primaire"
          style={{ display: "none" }}
        >
          {primaryColor}
        </div>
        <div
          data-editable="true"
          data-id="-secondaryColor"
          data-label="Couleur secondaire"
          style={{ display: "none" }}
        >
          {secondaryColor}
        </div>
        <div
          data-editable="true"
          data-id="-backgroundColor"
          data-label="Couleur de fond"
          style={{ display: "none" }}
        >
          {backgroundColor}
        </div>
        <div
          data-editable="true"
          data-id="-textColor"
          data-label="Couleur du texte"
          style={{ display: "none" }}
        >
          {textColor}
        </div>

        {/* Éléments cachés pour les polices */}
        <div
          data-editable="true"
          data-type="font"
          data-id="-fontFamily"
          data-label="Police principale"
          style={{ display: "none" }}
        >
          {fontFamily}
        </div>
        <div
          data-editable="true"
          data-type="font"
          data-id="-secondaryFontFamily"
          data-label="Police secondaire"
          style={{ display: "none" }}
        >
          {secondaryFontFamily}
        </div>

        {/* Éléments cachés pour les médias 1 */}
        <div
          data-editable="true"
          data-type="media"
          data-id="-mediaUrl1"
          data-label="Média principal"
          style={{ display: "none" }}
        >
          {mediaUrl1}
        </div>
        <div
          data-editable="true"
          data-id="-mediaAlt1"
          data-label="Texte alternatif média 1"
          style={{ display: "none" }}
        >
          {mediaAlt1}
        </div>
        <div
          style={{ display: "none" }}
          data-id="-mediaType1"
          data-label="Type de média 1"
        >
          {mediaType1}
        </div>

        {/* Éléments cachés pour les médias 2 */}
        <div
          data-editable="true"
          data-type="media"
          data-id="-mediaUrl2"
          data-label="Média secondaire"
          style={{ display: "none" }}
        >
          {mediaUrl2}
        </div>
        <div
          data-editable="true"
          data-id="-mediaAlt2"
          data-label="Texte alternatif média 2"
          style={{ display: "none" }}
        >
          {mediaAlt2}
        </div>
        <div
          style={{ display: "none" }}
          data-id="-mediaType2"
          data-label="Type de média 2"
        >
          {mediaType2}
        </div>

        {/* Padding controls */}
        <div
          data-editable="true"
          data-id="-paddingTop"
          data-label="Espacement haut"
          style={{ display: "none" }}
        >
          {paddingTop}
        </div>
        <div
          data-editable="true"
          data-id="-paddingBottom"
          data-label="Espacement bas"
          style={{ display: "none" }}
        >
          {paddingBottom}
        </div>

        {/* Contenu principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Frame avec bordure décorative */}
          <div
            className="relative rounded-2xl shadow-2xl overflow-hidden"
            style={{
              border: `4px solid ${primaryColor}`,
              backgroundColor: "#FFFFFF",
            }}
          >
            {/* Décoration d'angle */}
            <div
              className="absolute top-0 left-0 w-32 h-32"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, transparent 100%)`,
                opacity: 0.1,
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-32 h-32"
              style={{
                background: `linear-gradient(-45deg, ${secondaryColor} 0%, transparent 100%)`,
                opacity: 0.1,
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12">
              {/* Colonne gauche - Contenu textuel */}
              <div className="flex flex-col justify-center space-y-6">
                {/* Sous-titre */}
                <div
                  className="inline-block text-sm font-semibold tracking-wider uppercase"
                  style={{
                    color: secondaryColor,
                    fontFamily: secondaryFontFamily,
                  }}
                  data-editable="true"
                  data-id="-subtitle"
                  data-label="Sous-titre"
                >
                  {subtitle}
                </div>

                {/* Titre principal */}
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                  style={{
                    color: primaryColor,
                    fontFamily: fontFamily,
                  }}
                  data-editable="true"
                  data-id="-title"
                  data-label="Titre principal"
                >
                  {title}
                </h2>

                {/* Description */}
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{
                    color: textColor,
                    fontFamily: secondaryFontFamily,
                  }}
                  data-editable="true"
                  data-id="-description"
                  data-label="Description"
                >
                  {description}
                </p>

                {/* Call to Action */}
                <div className="pt-4">
                  <a
                    href={transformLink(ctaLink)}
                    className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    style={{
                      backgroundColor: primaryColor,
                      fontFamily: secondaryFontFamily,
                    }}
                    data-editable="true"
                    data-type="link"
                    data-id="-ctaLink"
                    data-label="Lien du bouton"
                  >
                    <span
                      data-editable="true"
                      data-id="-ctaText"
                      data-label="Texte du bouton"
                    >
                      {ctaText}
                    </span>
                  </a>
                </div>
              </div>

              {/* Colonne droite - Médias */}
              <div className="flex flex-col gap-4">
                {/* Média principal */}
                {mediaUrl1 && (
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    {displayMediaType1 === "video" ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={mediaUrl1} type="video/mp4" />
                        <source src={mediaUrl1} type="video/webm" />
                        <source src={mediaUrl1} type="video/ogg" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                      </video>
                    ) : (
                      <img
                        src={mediaUrl1}
                        alt={mediaAlt1}
                        className="w-full h-auto object-cover"
                      />
                    )}
                  </div>
                )}

                {/* Média secondaire optionnel */}
                {mediaUrl2 && (
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    {displayMediaType2 === "video" ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={mediaUrl2} type="video/mp4" />
                        <source src={mediaUrl2} type="video/webm" />
                        <source src={mediaUrl2} type="video/ogg" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                      </video>
                    ) : (
                      <img
                        src={mediaUrl2}
                        alt={mediaAlt2}
                        className="w-full h-auto object-cover"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Frame;
