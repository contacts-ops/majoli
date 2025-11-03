"use client";

import React from "react";
import { GoogleFontLoader } from "@/components/bande/google-font-loader";
import * as LucideIcons from "lucide-react";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import * as TbIcons from "react-icons/tb";

interface ContProps {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  placeholderColor: string;
  fontFamily: string;
  
  // Titre principal
  mainTitle: string;
  
  // Champs du formulaire
  fieldNamePlaceholder: string;
  fieldPhonePlaceholder: string;
  fieldEmailPlaceholder: string;
  fieldMessagePlaceholder: string;
  
  // Bouton
  buttonText: string;
  buttonColor: string;
  buttonTextColor: string;
  
  // Carte 1
  card1Icon: string;
  card1Text: string;
  
  // Carte 2
  card2Icon: string;
  card2Text: string;
  
  // Carte 3
  card3Icon: string;
  card3Text: string;
  
  // Carte de localisation (map)
  mediaUrl1?: string;
  mediaAlt1?: string;
  mediaType1?: "image" | "video";
  
  // Padding
  paddingTop: number;
  paddingBottom: number;
}

// Fonction pour créer une icône dynamiquement
const createIcon = (iconType: string, color: string, size: number = 24) => {
  const LucideComponent = (LucideIcons as any)[iconType];
  const reactIconPacks = [
    FaIcons,
    Fa6Icons,
    FiIcons,
    AiIcons,
    MdIcons,
    BsIcons,
    BiIcons,
    IoIcons,
    RiIcons,
    TbIcons,
  ];
  const ReactIconComponent = reactIconPacks.reduce<any>((found, pack) => {
    return found || (pack as any)[iconType];
  }, null);

  const IconComponent = LucideComponent || ReactIconComponent;
  if (IconComponent) {
    return React.createElement(IconComponent, {
      size,
      style: { color },
    });
  }
  // Fallback si l'icône n'existe pas
  return React.createElement(LucideIcons.AlertCircle, {
    size,
    style: { color },
  });
};

const Cont: React.FC<ContProps> = ({
  backgroundColor = "#F7F7F7",
  primaryColor = "#007BFF",
  secondaryColor = "#FFFFFF",
  textColor = "#000000",
  placeholderColor = "#B0B0B0",
  fontFamily = "Arial",
  mainTitle = "Contactez-Nous",
  fieldNamePlaceholder = "Nom",
  fieldPhonePlaceholder = "+33",
  fieldEmailPlaceholder = "E-mail",
  fieldMessagePlaceholder = "Message",
  buttonText = "Envoyer",
  buttonColor = "#007BFF",
  buttonTextColor = "#FFFFFF",
  card1Icon = "Phone",
  card1Text = "+33 1 23 45 67 89",
  card2Icon = "Mail",
  card2Text = "contact@example.com",
  card3Icon = "MapPin",
  card3Text = "123 Rue Example, Paris",
  mediaUrl1 = "",
  mediaAlt1 = "Carte de localisation",
  mediaType1 = "image",
  paddingTop = 60,
  paddingBottom = 60,
}) => {
  // Détection du type de média
  const isVideoFile = (url?: string) => {
    if (!url) return false;
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv"];
    return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  const displayMediaType =
    mediaType1 === "video" || isVideoFile(mediaUrl1) ? "video" : "image";

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
        data-id="cont"
      >
        {/* Éléments cachés pour les couleurs */}
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
          data-id="-textColor"
          data-label="Couleur du texte"
          style={{ display: "none" }}
        >
          {textColor}
        </div>
        <div
          data-editable="true"
          data-id="-placeholderColor"
          data-label="Couleur des placeholders"
          style={{ display: "none" }}
        >
          {placeholderColor}
        </div>
        <div
          data-editable="true"
          data-id="-buttonColor"
          data-label="Couleur du bouton"
          style={{ display: "none" }}
        >
          {buttonColor}
        </div>
        <div
          data-editable="true"
          data-id="-buttonTextColor"
          data-label="Couleur du texte du bouton"
          style={{ display: "none" }}
        >
          {buttonTextColor}
        </div>

        {/* Éléments cachés pour la police */}
        <div
          data-editable="true"
          data-id="-fontFamily"
          data-label="Police principale"
          data-type="font"
          style={{ display: "none" }}
        >
          {fontFamily}
        </div>

        {/* Éléments cachés pour les padding */}
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

        {/* Éléments cachés pour les médias */}
        <div
          data-editable="true"
          data-id="-mediaUrl1"
          data-label="Image/Vidéo de la carte"
          data-type="media"
          style={{ display: "none" }}
        >
          {mediaUrl1}
        </div>
        <div
          data-editable="true"
          data-id="-mediaAlt1"
          data-label="Texte alternatif de la carte"
          style={{ display: "none" }}
        >
          {mediaAlt1}
        </div>
        <div
          data-id="-mediaType1"
          data-label="Type de média 1"
          style={{ display: "none" }}
        >
          {mediaType1}
        </div>

        {/* Contenu principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Section gauche - Formulaire */}
            <div className="w-full">
              {/* Titre */}
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: textColor, fontFamily }}
                data-editable="true"
                data-id="-mainTitle"
                data-label="Titre principal"
              >
                {mainTitle}
              </h2>

              {/* Formulaire */}
              <form className="space-y-5">
                {/* Ligne Nom et Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Champ Nom */}
                  <input
                    type="text"
                    placeholder={fieldNamePlaceholder}
                    className="w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 transition-all"
                    style={{
                      backgroundColor: secondaryColor,
                      color: textColor,
                      borderRadius: "5px",
                    }}
                    data-editable="true"
                    data-id="-fieldNamePlaceholder"
                    data-label="Placeholder du champ Nom"
                  />

                  {/* Champ Téléphone */}
                  <input
                    type="tel"
                    placeholder={fieldPhonePlaceholder}
                    className="w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 transition-all"
                    style={{
                      backgroundColor: secondaryColor,
                      color: textColor,
                      borderRadius: "5px",
                    }}
                    data-editable="true"
                    data-id="-fieldPhonePlaceholder"
                    data-label="Placeholder du champ Téléphone"
                  />
                </div>

                {/* Champ E-mail */}
                <input
                  type="email"
                  placeholder={fieldEmailPlaceholder}
                  className="w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: secondaryColor,
                    color: textColor,
                    borderRadius: "5px",
                  }}
                  data-editable="true"
                  data-id="-fieldEmailPlaceholder"
                  data-label="Placeholder du champ E-mail"
                />

                {/* Champ Message */}
                <textarea
                  placeholder={fieldMessagePlaceholder}
                  rows={5}
                  className="w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{
                    backgroundColor: secondaryColor,
                    color: textColor,
                    borderRadius: "5px",
                  }}
                  data-editable="true"
                  data-id="-fieldMessagePlaceholder"
                  data-label="Placeholder du champ Message"
                />

                {/* Bouton Envoyer */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: buttonColor,
                      color: buttonTextColor,
                      fontFamily,
                    }}
                    data-editable="true"
                    data-id="-buttonText"
                    data-label="Texte du bouton"
                  >
                    {buttonText}
                  </button>
                </div>
              </form>
            </div>

            {/* Section droite - Informations de contact */}
            <div className="w-full space-y-5">
              {/* Cartes d'information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Carte 1 */}
                <div
                  className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md"
                  style={{ backgroundColor: secondaryColor, minHeight: "80px" }}
                >
                  <div className="mb-2">
                    {createIcon(card1Icon, primaryColor, 24)}
                  </div>
                  <p
                    className="text-sm text-center"
                    style={{ color: textColor, fontFamily }}
                    data-editable="true"
                    data-id="-card1Text"
                    data-label="Texte carte 1"
                  >
                    {card1Text}
                  </p>
                </div>

                {/* Carte 2 */}
                <div
                  className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md"
                  style={{ backgroundColor: secondaryColor, minHeight: "80px" }}
                >
                  <div className="mb-2">
                    {createIcon(card2Icon, primaryColor, 24)}
                  </div>
                  <p
                    className="text-sm text-center"
                    style={{ color: textColor, fontFamily }}
                    data-editable="true"
                    data-id="-card2Text"
                    data-label="Texte carte 2"
                  >
                    {card2Text}
                  </p>
                </div>

                {/* Carte 3 */}
                <div
                  className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md"
                  style={{ backgroundColor: secondaryColor, minHeight: "80px" }}
                >
                  <div className="mb-2">
                    {createIcon(card3Icon, primaryColor, 24)}
                  </div>
                  <p
                    className="text-sm text-center"
                    style={{ color: textColor, fontFamily }}
                    data-editable="true"
                    data-id="-card3Text"
                    data-label="Texte carte 3"
                  >
                    {card3Text}
                  </p>
                </div>
              </div>

              {/* Carte de localisation */}
              <div
                className="w-full rounded-lg overflow-hidden shadow-md"
                style={{ height: "200px" }}
              >
                {mediaUrl1 && mediaUrl1.trim() !== "" ? (
                  displayMediaType === "video" ? (
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
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: "#E5E7EB", color: "#9CA3AF" }}
                  >
                    <span className="text-sm">Carte de localisation</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Style pour les placeholders */}
        <style jsx>{`
          input::placeholder,
          textarea::placeholder {
            color: ${placeholderColor};
            opacity: 1;
          }
          input:focus,
          textarea:focus {
            ring-color: ${primaryColor};
          }
        `}</style>
      </section>
    </>
  );
};

export default Cont;
