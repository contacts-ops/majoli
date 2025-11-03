"use client";

import type React from "react";
import { useSiteLink } from "@/hooks/use-site-link";
import { GoogleFontLoader } from "@/components/bande/google-font-loader";
import { useEffect } from "react";

interface T3Props {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  secondaryFontFamily: string;
  
  // Contenu principal
  titlePrefix: string;
  mainTitle: string;
  subtitle: string;
  description: string;
  
  // CTA principal
  ctaText: string;
  ctaLink: string;
  
  // Carte 1
  card1Title: string;
  card1Description: string;
  card1Icon: string;
  
  // Carte 2
  card2Title: string;
  card2Description: string;
  card2Icon: string;
  
  // Carte 3
  card3Title: string;
  card3Description: string;
  card3Icon: string;
  
  // Médias
  mediaUrl1?: string;
  mediaAlt1?: string;
  mediaType1?: "image" | "video";
  
  // Padding
  paddingTop: number;
  paddingBottom: number;
}

// Composant GoogleFontLoader intégré si pas disponible globalement
const LocalGoogleFontLoader = ({ fontName }: { fontName?: string }) => {
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

const T3: React.FC<T3Props> = ({
  primaryColor = "#3B82F6",
  secondaryColor = "#1E40AF",
  backgroundColor = "#F9FAFB",
  textColor = "#1F2937",
  fontFamily = "Inter",
  secondaryFontFamily = "Poppins",
  
  titlePrefix = "Découvrez",
  mainTitle = "Nos Solutions Innovantes",
  subtitle = "Transformez votre entreprise avec nos services",
  description = "Nous proposons des solutions sur mesure adaptées à vos besoins pour vous aider à atteindre vos objectifs avec excellence et efficacité.",
  
  ctaText = "Commencer maintenant",
  ctaLink = "/contact",
  
  card1Title = "Performance",
  card1Description = "Optimisez vos processus pour une efficacité maximale",
  card1Icon = "Zap",
  
  card2Title = "Innovation",
  card2Description = "Adoptez les dernières technologies pour rester compétitif",
  card2Icon = "Sparkles",
  
  card3Title = "Support",
  card3Description = "Bénéficiez d'un accompagnement personnalisé 24/7",
  card3Icon = "Shield",
  
  mediaUrl1,
  mediaAlt1 = "Image principale",
  mediaType1 = "image",
  
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

  const titleStyle = {
    fontFamily: fontFamily ? `'${fontFamily}', sans-serif` : undefined,
  };

  const textStyle = {
    fontFamily: secondaryFontFamily
      ? `'${secondaryFontFamily}', sans-serif`
      : undefined,
  };

  // Données des cartes pour .map()
  const cards = [
    {
      id: 1,
      title: card1Title,
      description: card1Description,
      icon: card1Icon,
    },
    {
      id: 2,
      title: card2Title,
      description: card2Description,
      icon: card2Icon,
    },
    {
      id: 3,
      title: card3Title,
      description: card3Description,
      icon: card3Icon,
    },
  ];

  return (
    <>
      <LocalGoogleFontLoader fontName={fontFamily || ""} />
      <LocalGoogleFontLoader fontName={secondaryFontFamily || ""} />
      
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundColor,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          fontFamily: secondaryFontFamily,
        }}
        data-component="true"
        data-id="t3"
      >
        {/* Éléments cachés pour les couleurs */}
        <div
          data-editable="true"
          data-id="-primaryColor"
          data-label="Couleur principale"
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
          data-id="-mediaUrl1"
          data-label="Média principal"
          data-type="media"
          style={{ display: "none" }}
        >
          {mediaUrl1}
        </div>
        <div
          data-editable="true"
          data-id="-mediaAlt1"
          data-label="Texte alternatif média"
          style={{ display: "none" }}
        >
          {mediaAlt1}
        </div>
        <div
          style={{ display: "none" }}
          data-id="-mediaType1"
          data-label="Type de média"
        >
          {mediaType1}
        </div>

        {/* Éléments cachés pour le padding */}
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

        {/* Éléments cachés pour les icônes */}
        <div
          data-editable="true"
          data-id="-card1Icon"
          data-label="Icône carte 1"
          data-type="icon"
          style={{ display: "none" }}
        >
          {card1Icon}
        </div>
        <div
          data-editable="true"
          data-id="-card2Icon"
          data-label="Icône carte 2"
          data-type="icon"
          style={{ display: "none" }}
        >
          {card2Icon}
        </div>
        <div
          data-editable="true"
          data-id="-card3Icon"
          data-label="Icône carte 3"
          data-type="icon"
          style={{ display: "none" }}
        >
          {card3Icon}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Colonne gauche - Contenu */}
            <div className="space-y-6 lg:space-y-8">
              {/* Titre avec préfixe */}
              <div className="space-y-3">
                <p
                  className="text-sm sm:text-base font-semibold uppercase tracking-wider"
                  style={{ color: primaryColor, ...titleStyle }}
                  data-editable="true"
                  data-id="-titlePrefix"
                  data-label="Préfixe du titre"
                >
                  {titlePrefix}
                </p>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ color: textColor, ...titleStyle }}
                  data-editable="true"
                  data-id="-mainTitle"
                  data-label="Titre principal"
                >
                  {mainTitle}
                </h1>
                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-medium"
                  style={{ color: secondaryColor, ...textStyle }}
                  data-editable="true"
                  data-id="-subtitle"
                  data-label="Sous-titre"
                >
                  {subtitle}
                </h2>
              </div>

              {/* Description */}
              <p
                className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90"
                style={{ color: textColor, ...textStyle }}
                data-editable="true"
                data-id="-description"
                data-label="Description"
              >
                {description}
              </p>

              {/* Cartes de fonctionnalités */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col items-start p-4 sm:p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderLeft: `4px solid ${primaryColor}`,
                    }}
                  >
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4"
                      style={{
                        backgroundColor: `${primaryColor}15`,
                        color: primaryColor,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 sm:w-7 sm:h-7"
                      >
                        {card.icon === "Zap" && (
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        )}
                        {card.icon === "Sparkles" && (
                          <>
                            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                            <path d="M5 3v4" />
                            <path d="M19 17v4" />
                            <path d="M3 5h4" />
                            <path d="M17 19h4" />
                          </>
                        )}
                        {card.icon === "Shield" && (
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        )}
                      </svg>
                    </div>
                    <h3
                      className="text-base sm:text-lg font-semibold mb-2"
                      style={{ color: textColor, ...titleStyle }}
                      data-editable="true"
                      data-id={`-card${card.id}Title`}
                      data-label={`Titre carte ${card.id}`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base leading-relaxed opacity-80"
                      style={{ color: textColor, ...textStyle }}
                      data-editable="true"
                      data-id={`-card${card.id}Description`}
                      data-label={`Description carte ${card.id}`}
                    >
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bouton CTA */}
              <div className="pt-4">
                <a
                  href={transformLink(ctaLink)}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
                  style={{
                    backgroundColor: primaryColor,
                    color: "#FFFFFF",
                    ...textStyle,
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Colonne droite - Média */}
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {mediaUrl1 && (
                  <>
                    {displayMediaType1 === "video" ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto object-cover rounded-2xl"
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
                        className="w-full h-auto object-cover rounded-2xl"
                      />
                    )}
                  </>
                )}
                {!mediaUrl1 && (
                  <div
                    className="w-full aspect-square flex items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${primaryColor}20` }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={primaryColor}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-30"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                )}
                
                {/* Effet décoratif */}
                <div
                  className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-48 sm:h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default T3;
