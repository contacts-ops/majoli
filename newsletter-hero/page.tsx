"use client";

import type React from "react";
import { useState } from "react";
import { useSiteLink } from "@/hooks/use-site-link";
import { GoogleFontLoader } from "@/components/bande/google-font-loader";

interface NewsletterHeroProps {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  secondaryFontFamily: string;
  title: string;
  description: string;
  inputPlaceholder: string;
  buttonText: string;
  buttonLink: string;
  mediaUrl?: string;
  mediaAlt?: string;
  mediaType?: "image" | "video";
  paddingTop: number;
  paddingBottom: number;
}

const NewsletterHero: React.FC<NewsletterHeroProps> = ({
  primaryColor = "#0066CC",
  secondaryColor = "#FFFFFF",
  backgroundColor = "#000000",
  textColor = "#FFFFFF",
  fontFamily = "Inter",
  secondaryFontFamily = "Inter",
  title = "Newsletter",
  description = "Recevez nos conseils d'experts, nos offres exclusives et les nouveautés produits en avant-première directement dans votre boîte mail.",
  inputPlaceholder = "Votre adresse e-mail",
  buttonText = "Envoyer",
  buttonLink = "#",
  mediaUrl = "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920",
  mediaAlt = "Entrepôt industriel",
  mediaType = "image",
  paddingTop = 0,
  paddingBottom = 0,
}) => {
  const [email, setEmail] = useState("");
  const { transformLink } = useSiteLink();

  // Détection automatique du type de média
  const isVideoFile = (url: string) => {
    if (!url) return false;
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv"];
    return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  const displayMediaType =
    mediaType === "video" || isVideoFile(mediaUrl || "") ? "video" : "image";

  const titleStyle = {
    fontFamily: fontFamily ? `'${fontFamily}', sans-serif` : undefined,
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
        className="relative w-full overflow-hidden"
        style={{
          fontFamily: secondaryFontFamily,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
        }}
        data-component="true"
        data-id="newsletter-hero"
      >
        {/* Éléments cachés pour les couleurs */}
        <div
          data-editable="true"
          data-id="-primaryColor"
          data-label="Couleur primaire (bouton)"
          style={{ display: "none" }}
        >
          {primaryColor}
        </div>
        <div
          data-editable="true"
          data-id="-secondaryColor"
          data-label="Couleur secondaire (texte)"
          style={{ display: "none" }}
        >
          {secondaryColor}
        </div>
        <div
          data-editable="true"
          data-id="-backgroundColor"
          data-label="Couleur de fond (overlay)"
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

        {/* Éléments cachés pour les médias */}
        <div
          data-editable="true"
          data-id="-mediaUrl"
          data-label="Image ou vidéo de fond"
          data-type="media"
          style={{ display: "none" }}
        >
          {mediaUrl}
        </div>
        <div
          data-editable="true"
          data-id="-mediaAlt"
          data-label="Texte alternatif du média"
          style={{ display: "none" }}
        >
          {mediaAlt}
        </div>
        <div
          data-editable="true"
          data-id="-mediaType"
          data-label="Type de média"
          style={{ display: "none" }}
        >
          {mediaType}
        </div>

        {/* Éléments cachés pour padding */}
        <div
          data-editable="true"
          data-id="-paddingTop"
          data-label="Padding haut"
          style={{ display: "none" }}
        >
          {paddingTop}
        </div>
        <div
          data-editable="true"
          data-id="-paddingBottom"
          data-label="Padding bas"
          style={{ display: "none" }}
        >
          {paddingBottom}
        </div>

        {/* Image ou vidéo de fond */}
        <div className="absolute inset-0 z-0">
          {mediaUrl && (
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
                  <source src={mediaUrl} type="video/mp4" />
                  <source src={mediaUrl} type="video/webm" />
                  <source src={mediaUrl} type="video/ogg" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              ) : (
                <img
                  src={mediaUrl}
                  alt={mediaAlt}
                  className="w-full h-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              )}
            </>
          )}

          {/* Overlay sombre */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: backgroundColor,
              opacity: 0.75,
            }}
          />
        </div>

        {/* Contenu */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Colonne gauche - Texte */}
            <div className="space-y-4 lg:space-y-6">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ ...titleStyle, color: textColor }}
                data-editable="true"
                data-id="-title"
                data-label="Titre"
              >
                {title}
              </h2>
              <p
                className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-95"
                style={{ ...textStyle, color: textColor }}
                data-editable="true"
                data-id="-description"
                data-label="Description"
              >
                {description}
              </p>
            </div>

            {/* Colonne droite - Formulaire */}
            <div className="w-full max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={inputPlaceholder}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-gray-800 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                  style={{
                    backgroundColor: secondaryColor,
                    fontFamily: secondaryFontFamily,
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                  data-editable="true"
                  data-id="-inputPlaceholder"
                  data-label="Placeholder du champ email"
                />
                <a
                  href={transformLink(buttonLink)}
                  onClick={(e) => {
                    e.preventDefault();
                    if (email) {
                      const finalLink = transformLink(buttonLink);
                      window.location.href = `${finalLink}${finalLink.includes('?') ? '&' : '?'}email=${encodeURIComponent(email)}`;
                    }
                  }}
                  className="block w-full px-6 py-3 sm:py-4 rounded-lg text-center font-semibold text-base sm:text-lg transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50"
                  style={{
                    backgroundColor: primaryColor,
                    color: secondaryColor,
                    fontFamily: secondaryFontFamily,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                  data-editable="true"
                  data-type="link"
                  data-id="-buttonLink"
                  data-label="Lien du bouton"
                >
                  <span
                    data-editable="true"
                    data-id="-buttonText"
                    data-label="Texte du bouton"
                  >
                    {buttonText}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterHero;
