"use client";

import type React from "react";
import Link from "next/link";
import { useSiteLink } from "@/hooks/use-site-link";
import { GoogleFontLoader } from "@/components/bande/google-font-loader";

interface GerbProps {
  backgroundColor: string;
  labelBackgroundColor: string;
  labelTextColor: string;
  fontFamily: string;
  paddingTop: number;
  paddingBottom: number;
  mediaUrl1: string;
  mediaAlt1: string;
  mediaType1: "image" | "video";
  label1: string;
  link1: string;
  mediaUrl2: string;
  mediaAlt2: string;
  mediaType2: "image" | "video";
  label2: string;
  link2: string;
  mediaUrl3: string;
  mediaAlt3: string;
  mediaType3: "image" | "video";
  label3: string;
  link3: string;
  mediaUrl4: string;
  mediaAlt4: string;
  mediaType4: "image" | "video";
  label4: string;
  link4: string;
  mediaUrl5: string;
  mediaAlt5: string;
  mediaType5: "image" | "video";
  label5: string;
  link5: string;
  mediaUrl6: string;
  mediaAlt6: string;
  mediaType6: "image" | "video";
  label6: string;
  link6: string;
}

const Gerb: React.FC<GerbProps> = ({
  backgroundColor = "#FFFFFF",
  labelBackgroundColor = "#0073e6",
  labelTextColor = "#FFFFFF",
  fontFamily = "Arial",
  paddingTop = 40,
  paddingBottom = 40,
  mediaUrl1 = "/placeholder.svg",
  mediaAlt1 = "Transpalettes",
  mediaType1 = "image",
  label1 = "Transpalettes",
  link1 = "/transpalettes",
  mediaUrl2 = "/placeholder.svg",
  mediaAlt2 = "Gerbeurs",
  mediaType2 = "image",
  label2 = "Gerbeurs",
  link2 = "/gerbeurs",
  mediaUrl3 = "/placeholder.svg",
  mediaAlt3 = "Tables Élévatrices",
  mediaType3 = "image",
  label3 = "Tables Élévatrices",
  link3 = "/tables-elevatrices",
  mediaUrl4 = "/placeholder.svg",
  mediaAlt4 = "Nacelles Élévatrices",
  mediaType4 = "image",
  label4 = "Nacelles Élévatrices",
  link4 = "/nacelles-elevatrices",
  mediaUrl5 = "/placeholder.svg",
  mediaAlt5 = "Levage",
  mediaType5 = "image",
  label5 = "Levage",
  link5 = "/levage",
  mediaUrl6 = "/placeholder.svg",
  mediaAlt6 = "Chariots et Manutention",
  mediaType6 = "image",
  label6 = "Chariots et Manutention",
  link6 = "/chariots-manutention",
}) => {
  const { transformLink } = useSiteLink();

  // Fonction pour détecter si une URL est une vidéo
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

  // Données des 6 cartes
  const cards = [
    {
      id: 1,
      mediaUrl: mediaUrl1,
      mediaAlt: mediaAlt1,
      mediaType: mediaType1,
      label: label1,
      link: link1,
    },
    {
      id: 2,
      mediaUrl: mediaUrl2,
      mediaAlt: mediaAlt2,
      mediaType: mediaType2,
      label: label2,
      link: link2,
    },
    {
      id: 3,
      mediaUrl: mediaUrl3,
      mediaAlt: mediaAlt3,
      mediaType: mediaType3,
      label: label3,
      link: link3,
    },
    {
      id: 4,
      mediaUrl: mediaUrl4,
      mediaAlt: mediaAlt4,
      mediaType: mediaType4,
      label: label4,
      link: link4,
    },
    {
      id: 5,
      mediaUrl: mediaUrl5,
      mediaAlt: mediaAlt5,
      mediaType: mediaType5,
      label: label5,
      link: link5,
    },
    {
      id: 6,
      mediaUrl: mediaUrl6,
      mediaAlt: mediaAlt6,
      mediaType: mediaType6,
      label: label6,
      link: link6,
    },
  ];

  return (
    <>
      <GoogleFontLoader fontName={fontFamily || ""} />
      <section
        className="w-full"
        style={{
          backgroundColor,
          fontFamily,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
        }}
        data-component="true"
        data-id="gerb"
      >
        {/* Éléments cachés pour les couleurs éditables */}
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
          data-id="-labelBackgroundColor"
          data-label="Couleur de fond des étiquettes"
          style={{ display: "none" }}
        >
          {labelBackgroundColor}
        </div>
        <div
          data-editable="true"
          data-id="-labelTextColor"
          data-label="Couleur du texte des étiquettes"
          style={{ display: "none" }}
        >
          {labelTextColor}
        </div>

        {/* Élément caché pour la police */}
        <div
          data-editable="true"
          data-id="-fontFamily"
          data-label="Police principale"
          data-type="font"
          style={{ display: "none" }}
        >
          {fontFamily}
        </div>

        {/* Éléments cachés pour le padding */}
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

        {/* Éléments cachés pour les médias */}
        {cards.map((card) => (
          <div key={`media-hidden-${card.id}`}>
            <div
              data-editable="true"
              data-id={`-mediaUrl${card.id}`}
              data-label={`Média ${card.id}`}
              data-type="media"
              style={{ display: "none" }}
            >
              {card.mediaUrl}
            </div>
            <div
              data-editable="true"
              data-id={`-mediaAlt${card.id}`}
              data-label={`Texte alternatif ${card.id}`}
              style={{ display: "none" }}
            >
              {card.mediaAlt}
            </div>
            <div
              data-editable="true"
              data-id={`-mediaType${card.id}`}
              data-label={`Type de média ${card.id}`}
              style={{ display: "none" }}
            >
              {card.mediaType}
            </div>
          </div>
        ))}

        {/* Grille de cartes */}
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
            {cards.map((card) => {
              const displayMediaType =
                card.mediaType === "video" || isVideoFile(card.mediaUrl)
                  ? "video"
                  : "image";

              return (
                <Link
                  key={card.id}
                  href={transformLink(card.link)}
                  className="relative w-full max-w-[300px] h-[400px] rounded-lg overflow-hidden group cursor-pointer"
                  data-editable="true"
                  data-id={`-link${card.id}`}
                  data-label={`Lien ${card.id}`}
                  data-type="link"
                >
                  {/* Image ou Vidéo en arrière-plan */}
                  <div className="absolute inset-0 w-full h-full">
                    {displayMediaType === "video" ? (
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
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                  </div>

                  {/* Overlay sombre au hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                  {/* Étiquette de texte centrée */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="px-8 py-3 rounded-md"
                      style={{
                        backgroundColor: labelBackgroundColor,
                      }}
                    >
                      <span
                        className="text-lg font-bold text-center"
                        style={{
                          color: labelTextColor,
                          fontFamily,
                        }}
                        data-editable="true"
                        data-id={`-label${card.id}`}
                        data-label={`Étiquette ${card.id}`}
                      >
                        {card.label}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gerb;
