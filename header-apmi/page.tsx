"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSiteLink } from "@/hooks/use-site-link";
import config from "./config.json";
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
import Link from "next/link";
import { GoogleFontLoader } from "@/components/bande/google-font-loader";

interface HeaderApmiProps {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  fontFamily: string;
  mediaUrl?: string;
  mediaAlt?: string;
  mediaType?: "image" | "video";
  phone: string;
  address: string;
  phoneIcon?: string;
  addressIcon?: string;
  link1Text: string;
  link1Href: string;
  link2Text: string;
  link2Href: string;
  link3Text: string;
  link3Href: string;
  link4Text: string;
  link4Href: string;
  link5Text: string;
  link5Href: string;
  link6Text: string;
  link6Href: string;

  magasinageSubLink1Text: string;
  magasinageSubLink1Href: string;
  magasinageSubLink2Text: string;
  magasinageSubLink2Href: string;

  chariotsSubLink1Text: string;
  chariotsSubLink1Href: string;
  chariotsSubLink2Text: string;
  chariotsSubLink2Href: string;
  chariotsSubLink3Text: string;
  chariotsSubLink3Href: string;

  dropdownIcon: string;
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

// Fonction utilitaire pour retirer les emojis téléphone et localisation
function removePhoneAndLocationEmojis(str: string) {
  if (!str) return str;
  // Supprime les emojis téléphone et localisation courants
  return str.replace(
    /[\u{1F4DE}\u{1F4CD}\u{1F4CC}\u{1F4CE}\u{260E}\u{1F3E0}\u{1F3E2}\u{1F3E3}\u{1F3E5}\u{1F3E6}\u{1F3EA}\u{1F3EB}\u{1F3EC}\u{1F3EF}\u{1F3F0}\u{1F5FA}\u{1F5FB}\u{1F5FC}\u{1F5FD}\u{1F5FE}\u{1F5FF}\u{1F6A9}\u{1F6A7}\u{1F6A6}\u{1F6A5}\u{1F6A4}\u{1F6A3}\u{1F6A2}\u{1F6A1}\u{1F6A0}\u{1F6AF}\u{1F6B0}\u{1F6B1}\u{1F6B2}\u{1F6B3}\u{1F6B4}\u{1F6B5}\u{1F6B6}\u{1F6B7}\u{1F6B8}\u{1F6B9}\u{1F6BA}\u{1F6BB}\u{1F6BC}\u{1F6BD}\u{1F6BE}\u{1F6BF}\u{1F6C0}\u{1F6C1}\u{1F6C2}\u{1F6C3}\u{1F6C4}\u{1F6C5}\u{1F6CB}\u{1F6CC}\u{1F6CD}\u{1F6CE}\u{1F6CF}\u{1F6D0}\u{1F6D1}\u{1F6D2}\u{1F6D5}\u{1F6E0}\u{1F6E1}\u{1F6E2}\u{1F6E3}\u{1F6E4}\u{1F6E5}\u{1F6E9}\u{1F6EB}\u{1F6EC}\u{1F6F0}\u{1F6F3}\u{1F6F4}\u{1F6F5}\u{1F6F6}\u{1F6F7}\u{1F6F8}\u{1F6F9}\u{1F6FA}\u{1F6FB}\u{1F6FC}\u{1F7E0}\u{1F7E1}\u{1F7E2}\u{1F7E3}\u{1F7E4}\u{1F7E5}\u{1F7E6}\u{1F7E7}\u{1F7E8}\u{1F7E9}\u{1F7EA}\u{1F7EB}\u{1F90D}\u{1F90E}\u{1F90F}\u{1F910}\u{1F911}\u{1F912}\u{1F913}\u{1F914}\u{1F915}\u{1F916}\u{1F917}\u{1F918}\u{1F919}\u{1F91A}\u{1F91B}\u{1F91C}\u{1F91D}\u{1F91E}\u{1F91F}\u{1F920}\u{1F921}\u{1F922}\u{1F923}\u{1F924}\u{1F925}\u{1F926}\u{1F927}\u{1F928}\u{1F929}\u{1F92A}\u{1F92B}\u{1F92C}\u{1F92D}\u{1F92E}\u{1F92F}\u{1F930}\u{1F931}\u{1F932}\u{1F933}\u{1F934}\u{1F935}\u{1F936}\u{1F937}\u{1F938}\u{1F939}\u{1F93A}\u{1F93C}\u{1F93D}\u{1F93E}\u{1F940}\u{1F941}\u{1F942}\u{1F943}\u{1F944}\u{1F945}\u{1F947}\u{1F948}\u{1F949}\u{1F94A}\u{1F94B}\u{1F94C}\u{1F94D}\u{1F94E}\u{1F94F}\u{1F950}\u{1F951}\u{1F952}\u{1F953}\u{1F954}\u{1F955}\u{1F956}\u{1F957}\u{1F958}\u{1F959}\u{1F95A}\u{1F95B}\u{1F95C}\u{1F95D}\u{1F95E}\u{1F95F}\u{1F960}\u{1F961}\u{1F962}\u{1F963}\u{1F964}\u{1F965}\u{1F966}\u{1F967}\u{1F968}\u{1F969}\u{1F96A}\u{1F96B}\u{1F96C}\u{1F96D}\u{1F96E}\u{1F96F}\u{1F970}\u{1F971}\u{1F972}\u{1F973}\u{1F974}\u{1F975}\u{1F976}\u{1F977}\u{1F978}\u{1F979}\u{1F97A}\u{1F97B}\u{1F97C}\u{1F97D}\u{1F97E}\u{1F97F}\u{1F980}\u{1F981}\u{1F982}\u{1F983}\u{1F984}\u{1F985}\u{1F986}\u{1F987}\u{1F988}\u{1F989}\u{1F98A}\u{1F98B}\u{1F98C}\u{1F98D}\u{1F98E}\u{1F98F}\u{1F990}\u{1F991}\u{1F992}\u{1F993}\u{1F994}\u{1F995}\u{1F996}\u{1F997}\u{1F998}\u{1F999}\u{1F99A}\u{1F99B}\u{1F99C}\u{1F99D}\u{1F99E}\u{1F99F}\u{1F9A0}\u{1F9A1}\u{1F9A2}\u{1F9A3}\u{1F9A4}\u{1F9A5}\u{1F9A6}\u{1F9A7}\u{1F9A8}\u{1F9A9}\u{1F9AA}\u{1F9AB}\u{1F9AC}\u{1F9AD}\u{1FAAE}\u{1FAAF}\u{1FAB0}\u{1FAB1}\u{1FAB2}\u{1FAB3}\u{1FAB4}\u{1FAB5}\u{1FAB6}\u{1FAB7}\u{1FAB8}\u{1FAB9}\u{1FABA}\u{1FABB}\u{1FABC}\u{1FABD}\u{1FABE}\u{1FABF}\u{1FAC0}\u{1FAC1}\u{1FAC2}\u{1FAC3}\u{1FAC4}\u{1FAC5}\u{1FAC6}\u{1FAC7}\u{1FAD0}\u{1FAD1}\u{1FAD2}\u{1FAD3}\u{1FAD4}\u{1FAD5}\u{1FAD6}\u{1FAD7}\u{1FAD8}\u{1FAD9}\u{1FADA}\u{1FADB}\u{1FADC}\u{1FADD}\u{1FADE}\u{1FADF}\u{1FAE0}\u{1FAE1}\u{1FAE2}\u{1FAE3}\u{1FAE4}\u{1FAE5}\u{1FAE6}\u{1FAE7}\u{1FAE8}\u{1FAE9}\u{1FAEA}\u{1FAEB}\u{1FAEC}\u{1FAED}\u{1FAEE}\u{1FAEF}\u{1FAF0}\u{1FAF1}\u{1FAF2}\u{1FAF3}\u{1FAF4}\u{1FAF5}\u{1FAF6}\u{1FAF7}\u{1FAF8}\u{1FAF9}\u{1FAFA}\u{1FAFB}\u{1FAFC}\u{1FAFD}\u{1FAFE}\u{1FAFF}]/gu,
    ""
  );
}


const HeaderApmi: React.FC<HeaderApmiProps> = ({
  primaryColor,
  secondaryColor,
  backgroundColor,
  fontFamily,
  mediaUrl = "/componentsImage/header-apmi/logo-apmi.png",
  mediaAlt = "Logo APMI Lyon",
  mediaType = "image",
  phone,
  address,
  phoneIcon = "Phone",
  addressIcon = "MapPin",
  link1Text,
  link1Href,
  link2Text,
  link2Href,
  link3Text,
  link3Href,
  link4Text,
  link4Href,
  link5Text,
  link5Href,
  link6Text,
  link6Href,
  magasinageSubLink1Text,
  magasinageSubLink1Href,
  magasinageSubLink2Text,
  magasinageSubLink2Href,
  chariotsSubLink1Text,
  chariotsSubLink1Href,
  chariotsSubLink2Text,
  chariotsSubLink2Href,
  chariotsSubLink3Text,
  chariotsSubLink3Href,
  dropdownIcon,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { transformLink } = useSiteLink();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isEmail = (str: string) => str && str.includes("@");

  const addressLink = isEmail(address)
    ? `mailto:${removePhoneAndLocationEmojis(address)}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        removePhoneAndLocationEmojis(address)
      )}`;

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
      ".gif",
    ];
    return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  // Déterminer le type de média à afficher
  const displayMediaType =
    mediaType === "video" || isVideoFile(mediaUrl) ? "video" : "image";

  const navLinks = [
    { text: link1Text, href: link1Href, id: "link1" },
    {
      text: link2Text,
      href: link2Href,
      id: "link2",
      subLinks: [
        { text: magasinageSubLink1Text, href: magasinageSubLink1Href, id: "magasinageSubLink1" },
        { text: magasinageSubLink2Text, href: magasinageSubLink2Href, id: "magasinageSubLink2" },
      ].filter((link) => link.text && link.href),
    },
    {
      text: link3Text,
      href: link3Href,
      id: "link3",
      subLinks: [
        { text: chariotsSubLink1Text, href: chariotsSubLink1Href, id: "chariotsSubLink1" },
        { text: chariotsSubLink2Text, href: chariotsSubLink2Href, id: "chariotsSubLink2" },
        { text: chariotsSubLink3Text, href: chariotsSubLink3Href, id: "chariotsSubLink3" },
      ].filter((link) => link.text && link.href),
    },
    { text: link4Text, href: link4Href, id: "link4" },
    { text: link5Text, href: link5Href, id: "link5" },
    { text: link6Text, href: link6Href, id: "link6" },
  ].filter((link) => link.text);

  // Fonction pour extraire le nom du fichier depuis l'URL
  const getFileName = (url: string): string => {
    if (!url) return "Image";
    const fileName = url.split("/").pop()?.split(".")[0] || "Image";
    return fileName.charAt(0).toUpperCase() + fileName.slice(1);
  };

  return (
    <>
      <GoogleFontLoader fontName={fontFamily || ""} />
      <header
        className="w-full"
        style={{ fontFamily }}
        data-component="true"
        data-id="header-apmi"
      >
        {/* Éléments cachés pour les couleurs éditables */}
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
          data-id="-phoneIcon"
          data-label="Icône téléphone"
          data-type="icon"
          style={{ display: "none" }}
        >
          {phoneIcon}
        </div>
        <div
          data-editable="true"
          data-id="-addressIcon"
          data-label="Icône adresse"
          data-type="icon"
          style={{ display: "none" }}
        >
          {addressIcon}
        </div>
        <div
          data-editable="true"
          data-id="-dropdownIcon"
          data-label="Icône du menu déroulant"
          data-type="icon"
          style={{ display: "none" }}
        >
          {dropdownIcon}
        </div>

        {/* Éléments cachés pour les polices */}
        <div
          data-editable="true"
          data-id="-fontFamily"
          data-label="Police principale"
          data-type="font"
          style={{ display: "none" }}
        >
          {fontFamily}
        </div>

        {/* Éléments cachés pour les médias */}
        <div
          data-editable="true"
          data-id="-mediaUrl"
          data-label="Média (Image ou Vidéo)"
          data-type="media"
          style={{ display: "none" }}
        >
          {mediaUrl}
        </div>
        <div
          data-editable="true"
          data-id="-mediaAlt"
          data-label="Texte alternatif média"
          data-type="text"
          style={{ display: "none" }}
        >
          {mediaAlt}
        </div>
        <div
          style={{ display: "none" }}
          data-id="-mediaType"
          data-label="Type de média"
        >
          {mediaType}
        </div>

        {/* Barre de contact */}
        <div className="py-2 px-4" style={{ backgroundColor: primaryColor }}>
          {/* Desktop - Barre de contact */}
          <div className="hidden md:flex justify-end items-center text-sm pr-14" >
            <div className="flex items-center space-x-20" >
                
              <a
                href={`tel:${removePhoneAndLocationEmojis(phone)}`}
                className="flex items-center hover:opacity-80 transition-opacity duration-200"
                style={{ color: secondaryColor, fontFamily: fontFamily,  }}
                data-editable="true"
                data-id="-phone"
                data-label="Numéro de téléphone"
              >
                {createIcon(phoneIcon, secondaryColor, 18)}
                <span className="ml-2">{removePhoneAndLocationEmojis(phone)}</span>
              </a>
              <a
                href={addressLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80 transition-opacity duration-200"
                style={{ color: secondaryColor, fontFamily: fontFamily, }}
                data-editable="true"
                data-id="-address"
                data-label="Adresse"
              >
                {createIcon(addressIcon, secondaryColor, 18)}
                <span className="ml-2">{removePhoneAndLocationEmojis(address)}</span>
              </a>
            </div>
          </div>

          {/* Mobile - Barre de contact */}
          <div className="md:hidden flex flex-col items-center space-y-4 py-2">
            <a
              href={`tel:${removePhoneAndLocationEmojis(phone)}`}
              className="flex items-center text-base hover:opacity-80 transition-opacity duration-200"
              style={{ color: secondaryColor }}
              data-editable="true"
              data-id="-phone-mobile"
              data-label="Numéro de téléphone (mobile)"
            >
              {createIcon(phoneIcon, secondaryColor, 14)}
              <span className="ml-2">{removePhoneAndLocationEmojis(phone)}</span>
            </a>
            <a
              href={addressLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-base hover:opacity-80 transition-opacity duration-200"
              style={{ color: secondaryColor }}
              data-editable="true"
              data-id="-address-mobile"
              data-label="Adresse (mobile)"
            >
              {createIcon(addressIcon, secondaryColor, 14)}
              <span className="ml-2">{removePhoneAndLocationEmojis(address)}</span>
            </a>
          </div>
        </div>

        {/* Navigation principale */}
        <nav className="px-4 py-4 pl-6 md:pl-12" style={{ backgroundColor: backgroundColor }}>
          <div className="flex justify-between items-center pr-4 md:pr-10">
            {/* Logo */}
            <a className="flex items-center gap-3 text-[16px]">
              {mediaUrl && mediaUrl.trim() !== "" ? (
                displayMediaType === "video" ? (
                  <video
                    src={mediaUrl}
                    className="min-w-[140px] min-h-[45px] max-w-[190px] md:min-w-[160px] md:min-h-[85px] md:max-w-[210px] md:pl-0 object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={mediaUrl} type="video/mp4" />
                    <source src={mediaUrl} type="video/webm" />
                    <source src={mediaUrl} type="video/ogg" />
                    <source src={mediaUrl} type="video/avi" />
                    <source src={mediaUrl} type="video/x-msvideo" />
                    <source src={mediaUrl} type="image/gif" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                ) : (
                  <img
                    src={mediaUrl}
                    alt={mediaAlt || getFileName(mediaUrl || "")}
                    className="min-w-[140px] min-h-[45px] max-w-[190px] md:min-w-[160px] md:min-h-[85px] md:max-w-[210px] md:pl-0 object-contain"
                  />
                )
              ) : null}
            </a>

            {/* Desktop Navigation Links */}
            <div
              ref={navRef}
              className="hidden md:flex items-center text-[17px] gap-6"
              style={{ fontFamily }}
            >
              {navLinks.map((link, index) => (
                <div
                  key={link.id}
                  className="relative"
                >
                  <button
                    onClick={() => {
                      if (link.subLinks && link.subLinks.length > 0) {
                        setOpenDropdown(openDropdown === link.id ? null : link.id);
                      }
                    }}
                    className="relative px-4 py-2 transition-colors duration-200 flex items-center gap-2 bg-transparent border-none"
                    style={{ color: secondaryColor, fontFamily: fontFamily, cursor: 'pointer' }}
                  >
                    {link.subLinks && link.subLinks.length > 0 ? (
                      <>
                        <span
                          data-editable="true"
                          data-id={`-${link.id}Text`}
                          data-label={`Lien ${index + 1} - Texte`}
                        >
                          {link.text}
                        </span>
                        {createIcon(dropdownIcon, secondaryColor, 16)}
                      </>
                    ) : (
                      <Link
                        href={transformLink(link.href)}
                        className="flex items-center gap-2"
                        style={{ color: "inherit", textDecoration: "none" }}
                        data-editable="true"
                        data-id={`-${link.id}Href`}
                        data-label={`Lien ${index + 1} - URL`}
                        data-type="link"
                      >
                        <span
                          data-editable="true"
                          data-id={`-${link.id}Text`}
                          data-label={`Lien ${index + 1} - Texte`}
                        >
                          {link.text}
                        </span>
                      </Link>
                    )}
                  </button>

                  {link.subLinks && link.subLinks.length > 0 && openDropdown === link.id && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md z-20 w-max">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.id}
                          href={transformLink(subLink.href)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          data-editable="true"
                          data-id={`-${subLink.id}Href`}
                          data-label={`Sous-lien ${subLink.id} - URL`}
                          data-type="link"
                        >
                          <span
                            data-editable="true"
                            data-id={`-${subLink.id}Text`}
                            data-label={`Sous-lien ${subLink.id} - Texte`}
                          >
                            {subLink.text}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: primaryColor }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-16 gap-4 pb-4 text-[17px] flex flex-col items-center" style={{ fontFamily }}>
              {navLinks.map((link) => {
                const hasSubmenu = link.subLinks && link.subLinks.length > 0;
                const isOpen = mobileOpenId === link.id;
                return (
                  <div key={`m-${link.id}`} className="w-full text-center">
                    <div
                      className="flex items-center justify-center gap-2"
                      onClick={() => hasSubmenu && setMobileOpenId(isOpen ? null : link.id)}
                    >
                       <Link
                        href={transformLink(link.href)}
                        className="block px-4 py-3 text-[17px] transition-colors duration-200"
                        style={{ color: secondaryColor, fontFamily: fontFamily }}
                         data-editable="true"
                         data-id={`-${link.id}Href-mobile`}
                         data-label={`Lien ${link.id} - URL (mobile)`}
                         data-type="link"
                      >
                        <span
                           data-editable="true"
                           data-id={`-${link.id}Text-mobile`}
                           data-label={`Lien ${link.id} - Texte (mobile)`}
                        >
                          {link.text}
                        </span>
                      </Link>
                      {hasSubmenu && (
                        <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                          {createIcon(dropdownIcon, secondaryColor, 16)}
                        </span>
                      )}
                    </div>
                    {hasSubmenu && (
                       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        {link.subLinks?.map((subLink) => (
                           <Link
                            key={`m-${subLink.id}`}
                            href={transformLink(subLink.href)}
                            className="block px-4 py-2 text-sm"
                            style={{ color: secondaryColor }}
                             data-editable="true"
                             data-id={`-${subLink.id}Href-mobile`}
                             data-label={`Sous-lien ${subLink.id} - URL (mobile)`}
                             data-type="link"
                          >
                            <span
                               data-editable="true"
                               data-id={`-${subLink.id}Text-mobile`}
                               data-label={`Sous-lien ${subLink.id} - Texte (mobile)`}
                            >
                              {subLink.text}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default HeaderApmi;
