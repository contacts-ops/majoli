"use client";

import type React from "react";
import { useSiteLink } from "@/hooks/use-site-link";
import { useEffect } from "react";

interface ArticleFigmaProps {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
  fontFamily: string;
  secondaryFontFamily: string;
  
  // Card 1 - Gerbeurs
  card1Title: string;
  card1Text: string;
  card1ButtonText: string;
  card1ButtonUrl: string;
  card1MediaUrl: string;
  card1MediaAlt: string;
  card1MediaType: string;
  
  // Card 2 - Transpalettes
  card2Title: string;
  card2Text: string;
  card2ButtonText: string;
  card2ButtonUrl: string;
  card2MediaUrl: string;
  card2MediaAlt: string;
  card2MediaType: string;
  
  // Card 3 - Tables Élévatrices
  card3Title: string;
  card3Text: string;
  card3ButtonText: string;
  card3ButtonUrl: string;
  card3MediaUrl: string;
  card3MediaAlt: string;
  card3MediaType: string;
  
  // Card 4 - Nacelles Élévatrices
  card4Title: string;
  card4Text: string;
  card4ButtonText: string;
  card4ButtonUrl: string;
  card4MediaUrl: string;
  card4MediaAlt: string;
  card4MediaType: string;
  
  // Card 5 - Levage
  card5Title: string;
  card5Text: string;
  card5ButtonText: string;
  card5ButtonUrl: string;
  card5MediaUrl: string;
  card5MediaAlt: string;
  card5MediaType: string;
  
  // Card 6 - Chariots et Manutention
  card6Title: string;
  card6Text: string;
  card6ButtonText: string;
  card6ButtonUrl: string;
  card6MediaUrl: string;
  card6MediaAlt: string;
  card6MediaType: string;
}

// Composant GoogleFontLoader
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

const ArticleFigma: React.FC<ArticleFigmaProps> = ({
  primaryColor = "#0066CC",
  secondaryColor = "#FFFFFF",
  backgroundColor = "#F5F5F5",
  textColor = "#333333",
  buttonColor = "#0066CC",
  buttonTextColor = "#FFFFFF",
  fontFamily = "Arial",
  secondaryFontFamily = "Arial",
  
  card1Title = "Gerbeurs",
  card1Text = "Indispensables pour le levage et le stockage en hauteur, nos gerbeurs manuels et électriques vous permettent d'organiser chaque mètre carré de votre entrepôt.\n\nGagnez en efficacité et en sécurité lors de vos opérations de mise en rayon et de chargement. Découvrez notre gamme complète de gerbeurs adaptés à toutes les cadences de travail.",
  card1ButtonText = "Explorez nos produits",
  card1ButtonUrl = "/gerbeurs",
  card1MediaUrl = "https://placehold.co/400x300",
  card1MediaAlt = "Gerbeurs",
  card1MediaType = "image",
  
  card2Title = "Transpalettes",
  card2Text = "L'outil indispensable pour le déplacement de charges lourdes sur palette. Nos transpalettes manuels et transpalettes vous permettent d'accélérer vos opérations de chargement et de transfert en entrepôt.\n\nExplorez notre sélection de modèles manuels, électriques ou peseurs pour trouver la solution adaptée à votre flux logistique.",
  card2ButtonText = "Explorez nos produits",
  card2ButtonUrl = "/transpalettes",
  card2MediaUrl = "https://placehold.co/400x300",
  card2MediaAlt = "Transpalettes",
  card2MediaType = "image",
  
  card3Title = "Tables Élévatrices",
  card3Text = "Améliorez l'ergonomie de vos postes de travail et prévenez les troubles musculosquelettiques. Nos tables élévatrices permettent de mettre à niveau vos charges pour une manipulation facile et une préparation en conformité.\n\nManuelles ou électriques, nos solutions s'adaptent à vos besoins pour un confort de travail optimal.",
  card3ButtonText = "Explorez nos produits",
  card3ButtonUrl = "/tables-elevatrices",
  card3MediaUrl = "https://placehold.co/400x300",
  card3MediaAlt = "Tables Élévatrices",
  card3MediaType = "image",
  
  card4Title = "Nacelles Élévatrices",
  card4Text = "Atteignez les zones de travail les plus inaccessibles en toute sécurité avec nos nacelles élévatrices. Idéales pour les travaux de maintenance, d'installation ou d'inventaire, elles offrent une plateforme stable et sécurisée.\n\nExplorez nos différents modèles – ciseaux, articulées ou télescopiques – pour trouver la solution d'élévation adaptée à la configuration de votre site.",
  card4ButtonText = "Explorez nos produits",
  card4ButtonUrl = "/nacelles-elevatrices",
  card4MediaUrl = "https://placehold.co/400x300",
  card4MediaAlt = "Nacelles Élévatrices",
  card4MediaType = "image",
  
  card5Title = "Levage",
  card5Text = "Pour la manutention verticale de charges lourdes et encombrantes, notre gamme de matériel de levage vous garantit fiabilité et sécurité. Que vous ayez besoin de palans, treuils, grues ou portiques conçus pour les applications industrielles les plus exigeantes.\n\nDécouvrez nos sélection de palans, treuils, grues et portiques conçus pour les applications industrielles les plus exigeantes.",
  card5ButtonText = "Explorez nos produits",
  card5ButtonUrl = "/levage",
  card5MediaUrl = "https://placehold.co/400x300",
  card5MediaAlt = "Levage",
  card5MediaType = "image",
  
  card6Title = "Chariots et Manutention",
  card6Text = "Facilitez le transport de vos outils, pièces et marchandises au quotidien. Nos chariots de manutention robustes et polyvalents sont conçus pour s'adapter à tous les environnements.\n\nDécouvrez nos plateformes roulantes, dessertes et chariots à plateau pour une organisation optimisée.",
  card6ButtonText = "Explorez nos produits",
  card6ButtonUrl = "/chariots-manutention",
  card6MediaUrl = "https://placehold.co/400x300",
  card6MediaAlt = "Chariots et Manutention",
  card6MediaType = "image",
}) => {
  const { transformLink } = useSiteLink();

  // Fonction pour détecter si c'est une vidéo
  const isVideoFile = (url?: string) =>
    !!url &&
    [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv", ".gif"].some((ext) =>
      url.toLowerCase().includes(ext)
    );

  // Données des cartes pour le .map()
  const cards = [
    {
      id: 1,
      title: card1Title,
      text: card1Text,
      buttonText: card1ButtonText,
      buttonUrl: card1ButtonUrl,
      mediaUrl: card1MediaUrl,
      mediaAlt: card1MediaAlt,
      mediaType: card1MediaType,
    },
    {
      id: 2,
      title: card2Title,
      text: card2Text,
      buttonText: card2ButtonText,
      buttonUrl: card2ButtonUrl,
      mediaUrl: card2MediaUrl,
      mediaAlt: card2MediaAlt,
      mediaType: card2MediaType,
    },
    {
      id: 3,
      title: card3Title,
      text: card3Text,
      buttonText: card3ButtonText,
      buttonUrl: card3ButtonUrl,
      mediaUrl: card3MediaUrl,
      mediaAlt: card3MediaAlt,
      mediaType: card3MediaType,
    },
    {
      id: 4,
      title: card4Title,
      text: card4Text,
      buttonText: card4ButtonText,
      buttonUrl: card4ButtonUrl,
      mediaUrl: card4MediaUrl,
      mediaAlt: card4MediaAlt,
      mediaType: card4MediaType,
    },
    {
      id: 5,
      title: card5Title,
      text: card5Text,
      buttonText: card5ButtonText,
      buttonUrl: card5ButtonUrl,
      mediaUrl: card5MediaUrl,
      mediaAlt: card5MediaAlt,
      mediaType: card5MediaType,
    },
    {
      id: 6,
      title: card6Title,
      text: card6Text,
      buttonText: card6ButtonText,
      buttonUrl: card6ButtonUrl,
      mediaUrl: card6MediaUrl,
      mediaAlt: card6MediaAlt,
      mediaType: card6MediaType,
    },
  ];

  return (
    <>
      <GoogleFontLoader fontName={fontFamily} />
      <GoogleFontLoader fontName={secondaryFontFamily} />
      
      <section
        className="w-full py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        style={{ 
          backgroundColor: backgroundColor,
          fontFamily: secondaryFontFamily 
        }}
        data-component="true"
        data-id="article-figma"
      >
        {/* Éléments cachés pour les couleurs */}
        <div
          style={{ display: "none" }}
          data-editable="true"
          data-id="-primaryColor"
          data-label="Couleur primaire (bordure)"
        >
          {primaryColor}
        </div>
        <div
          style={{ display: "none" }}
          data-editable="true"
          data-id="-secondaryColor"
          data-label="Couleur secondaire (fond cartes)"
        >
          {secondaryColor}
        </div>
        <div
          style={{ display: "none" }}
          data-editable="true"
          data-id="-backgroundColor"
          data-label="Couleur de fond"
        >
          {backgroundColor}
        </div>
        <div
          style={{ display: "none" }}
          data-editable="true"
          data-id="-textColor"
          data-label="Couleur du texte"
        >
          {textColor}
        </div>
        <div
          style={{ display: "none" }}
          data-editable="true"
          data-id="-buttonColor"
          data-label="Couleur du bouton"
        >
          {buttonColor}
        </div>
        <div
          style={{ display: "none" }}
          data-editable="true"
          data-id="-buttonTextColor"
          data-label="Couleur du texte du bouton"
        >
          {buttonTextColor}
        </div>

        {/* Éléments cachés pour les polices */}
        <div
          style={{ display: "none" }}
          data-editable="true"
          data-type="font"
          data-id="-fontFamily"
          data-label="Police principale (titres)"
        >
          {fontFamily}
        </div>
        <div
          style={{ display: "none" }}
          data-editable="true"
          data-type="font"
          data-id="-secondaryFontFamily"
          data-label="Police secondaire (textes)"
        >
          {secondaryFontFamily}
        </div>

        {/* Conteneur avec bordure bleue */}
        <div
          className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8"
          style={{
            border: `6px solid ${primaryColor}`,
            borderRadius: "8px",
          }}
        >
          {/* Grille de cartes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cards.map((card) => {
              const displayMediaType =
                card.mediaType === "video" || isVideoFile(card.mediaUrl)
                  ? "video"
                  : "image";

              return (
                <div
                  key={card.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                  style={{ backgroundColor: secondaryColor }}
                >
                  {/* Éléments cachés pour chaque carte - Médias */}
                  <div
                    style={{ display: "none" }}
                    data-editable="true"
                    data-type="media"
                    data-id={`-card${card.id}MediaUrl`}
                    data-label={`Carte ${card.id} - Image/Vidéo`}
                  >
                    {card.mediaUrl}
                  </div>
                  <div
                    style={{ display: "none" }}
                    data-editable="true"
                    data-id={`-card${card.id}MediaAlt`}
                    data-label={`Carte ${card.id} - Texte alternatif`}
                  >
                    {card.mediaAlt}
                  </div>
                  <div
                    style={{ display: "none" }}
                    data-id={`-card${card.id}MediaType`}
                    data-label={`Carte ${card.id} - Type de média`}
                  >
                    {card.mediaType}
                  </div>

                  {/* Image ou vidéo de la carte */}
                  <div className="w-full h-48 sm:h-56 overflow-hidden">
                    {card.mediaUrl &&
                      (displayMediaType === "video" ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={card.mediaUrl} type="video/mp4" />
                          <source src={card.mediaUrl} type="video/webm" />
                          <source src={card.mediaUrl} type="video/ogg" />
                          Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                      ) : (
                        <img
                          src={card.mediaUrl}
                          alt={card.mediaAlt}
                          className="w-full h-full object-cover"
                        />
                      ))}
                  </div>

                  {/* Contenu de la carte */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    {/* Titre */}
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                      style={{
                        color: textColor,
                        fontFamily: fontFamily,
                      }}
                      data-editable="true"
                      data-id={`-card${card.id}Title`}
                      data-label={`Carte ${card.id} - Titre`}
                    >
                      {card.title}
                    </h3>

                    {/* Texte descriptif */}
                    <p
                      className="text-sm sm:text-base mb-4 sm:mb-6 flex-grow"
                      style={{
                        color: textColor,
                        fontFamily: secondaryFontFamily,
                        lineHeight: "1.6",
                      }}
                      data-editable="true"
                      data-id={`-card${card.id}Text`}
                      data-label={`Carte ${card.id} - Description`}
                    >
                      {card.text}
                    </p>

                    {/* Bouton */}
                    <a
                      href={transformLink(card.buttonUrl)}
                      className="inline-block text-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold text-sm sm:text-base transition-opacity hover:opacity-90"
                      style={{
                        backgroundColor: buttonColor,
                        color: buttonTextColor,
                        fontFamily: secondaryFontFamily,
                      }}
                      data-editable="true"
                      data-type="link"
                      data-id={`-card${card.id}ButtonUrl`}
                      data-label={`Carte ${card.id} - Lien du bouton`}
                    >
                      <span
                        data-editable="true"
                        data-id={`-card${card.id}ButtonText`}
                        data-label={`Carte ${card.id} - Texte du bouton`}
                      >
                        {card.buttonText}
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleFigma;
