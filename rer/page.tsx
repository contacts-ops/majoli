"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSiteLink } from "@/hooks/use-site-link";
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

interface RerProps {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  ctaButtonColor: string;
  fontFamily: string;
  secondaryFontFamily: string;
  
  // Logo
  mediaUrl1: string;
  mediaAlt1: string;
  mediaType1: "image" | "video";
  
  // Background Hero Image
  mediaUrl2: string;
  mediaAlt2: string;
  mediaType2: "image" | "video";
  
  // Navigation Links
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
  
  // Contact Info
  phone: string;
  phoneIcon: string;
  email: string;
  emailIcon: string;
  
  // Header Icons
  profileIcon: string;
  favoritesIcon: string;
  cartIcon: string;
  
  // Search Bar
  searchPlaceholder: string;
  searchIcon: string;
  
  // Hero Content
  heroTitle: string;
  heroSubtitle: string;
  ctaText: string;
  ctaLink: string;
  
  // Mobile Menu
  mobileMenuIcon: string;
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
  return React.createElement(LucideIcons.AlertCircle, {
    size,
    style: { color },
  });
};

const Rer: React.FC<RerProps> = ({
  primaryColor,
  secondaryColor,
  backgroundColor,
  ctaButtonColor,
  fontFamily,
  secondaryFontFamily,
  mediaUrl1,
  mediaAlt1,
  mediaType1,
  mediaUrl2,
  mediaAlt2,
  mediaType2,
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
  phone,
  phoneIcon,
  email,
  emailIcon,
  profileIcon,
  favoritesIcon,
  cartIcon,
  searchPlaceholder,
  searchIcon,
  heroTitle,
  heroSubtitle,
  ctaText,
  ctaLink,
  mobileMenuIcon,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { transformLink } = useSiteLink();

  // Détection automatique du type de média par extension
  const isVideoFile = (url: string) => {
    if (!url) return false;
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv", ".gif"];
    return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  const displayMediaType1 = mediaType1 === "video" || isVideoFile(mediaUrl1) ? "video" : "image";
  const displayMediaType2 = mediaType2 === "video" || isVideoFile(mediaUrl2) ? "video" : "image";

  const navLinks = [
    { text: link1Text, href: link1Href, id: "link1" },
    { text: link2Text, href: link2Href, id: "link2" },
    { text: link3Text, href: link3Href, id: "link3" },
    { text: link4Text, href: link4Href, id: "link4" },
    { text: link5Text, href: link5Href, id: "link5" },
  ].filter((link) => link.text);

  return (
    <>
      <GoogleFontLoader fontName={fontFamily || ""} />
      <GoogleFontLoader fontName={secondaryFontFamily || ""} />
      
      <div
        className="w-full relative"
        style={{ fontFamily: secondaryFontFamily }}
        data-component="true"
        data-id="rer"
      >
        {/* Hidden elements for colors */}
        <div data-editable="true" data-id="-primaryColor" data-label="Couleur primaire" style={{ display: "none" }}>
          {primaryColor}
        </div>
        <div data-editable="true" data-id="-secondaryColor" data-label="Couleur secondaire" style={{ display: "none" }}>
          {secondaryColor}
        </div>
        <div data-editable="true" data-id="-backgroundColor" data-label="Couleur de fond" style={{ display: "none" }}>
          {backgroundColor}
        </div>
        <div data-editable="true" data-id="-ctaButtonColor" data-label="Couleur bouton CTA" style={{ display: "none" }}>
          {ctaButtonColor}
        </div>

        {/* Hidden elements for fonts */}
        <div data-editable="true" data-id="-fontFamily" data-label="Police principale" data-type="font" style={{ display: "none" }}>
          {fontFamily}
        </div>
        <div data-editable="true" data-id="-secondaryFontFamily" data-label="Police secondaire" data-type="font" style={{ display: "none" }}>
          {secondaryFontFamily}
        </div>

        {/* Hidden elements for icons */}
        <div data-editable="true" data-id="-phoneIcon" data-label="Icône téléphone" data-type="icon" style={{ display: "none" }}>
          {phoneIcon}
        </div>
        <div data-editable="true" data-id="-emailIcon" data-label="Icône email" data-type="icon" style={{ display: "none" }}>
          {emailIcon}
        </div>
        <div data-editable="true" data-id="-profileIcon" data-label="Icône profil" data-type="icon" style={{ display: "none" }}>
          {profileIcon}
        </div>
        <div data-editable="true" data-id="-favoritesIcon" data-label="Icône favoris" data-type="icon" style={{ display: "none" }}>
          {favoritesIcon}
        </div>
        <div data-editable="true" data-id="-cartIcon" data-label="Icône panier" data-type="icon" style={{ display: "none" }}>
          {cartIcon}
        </div>
        <div data-editable="true" data-id="-searchIcon" data-label="Icône recherche" data-type="icon" style={{ display: "none" }}>
          {searchIcon}
        </div>
        <div data-editable="true" data-id="-mobileMenuIcon" data-label="Icône menu mobile" data-type="icon" style={{ display: "none" }}>
          {mobileMenuIcon}
        </div>

        {/* Hidden elements for Logo media */}
        <div data-editable="true" data-id="-mediaUrl1" data-label="Logo (média)" data-type="media" style={{ display: "none" }}>
          {mediaUrl1}
        </div>
        <div data-editable="true" data-id="-mediaAlt1" data-label="Logo (texte alternatif)" style={{ display: "none" }}>
          {mediaAlt1}
        </div>
        <div data-id="-mediaType1" data-label="Logo (type)" style={{ display: "none" }}>
          {mediaType1}
        </div>

        {/* Hidden elements for Background Hero media */}
        <div data-editable="true" data-id="-mediaUrl2" data-label="Image de fond hero" data-type="media" style={{ display: "none" }}>
          {mediaUrl2}
        </div>
        <div data-editable="true" data-id="-mediaAlt2" data-label="Image de fond (texte alternatif)" style={{ display: "none" }}>
          {mediaAlt2}
        </div>
        <div data-id="-mediaType2" data-label="Image de fond (type)" style={{ display: "none" }}>
          {mediaType2}
        </div>

        {/* HEADER */}
        <header className="w-full" style={{ backgroundColor }}>
          {/* Top Bar - Contact & Icons */}
          <div className="hidden lg:flex justify-between items-center px-6 lg:px-12 py-3" style={{ backgroundColor }}>
            {/* Left Side - Logo */}
            <div className="flex items-center">
              {mediaUrl1 && (
                displayMediaType1 === "video" ? (
                  <video
                    src={mediaUrl1}
                    className="h-12 object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={mediaUrl1} type="video/mp4" />
                    <source src={mediaUrl1} type="video/webm" />
                  </video>
                ) : (
                  <img
                    src={mediaUrl1}
                    alt={mediaAlt1}
                    className="h-12 object-contain"
                  />
                )
              )}
            </div>

            {/* Center - Navigation */}
            <nav className="flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.id}
                  href={transformLink(link.href)}
                  className="text-base hover:opacity-80 transition-opacity"
                  style={{ color: secondaryColor, fontFamily }}
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
              ))}
            </nav>

            {/* Right Side - Contact & Icons */}
            <div className="flex items-center gap-6">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                style={{ color: secondaryColor, fontFamily }}
                data-editable="true"
                data-id="-phone"
                data-label="Téléphone"
              >
                {createIcon(phoneIcon, secondaryColor, 18)}
                <span>{phone}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                style={{ color: secondaryColor, fontFamily }}
                data-editable="true"
                data-id="-email"
                data-label="Email"
              >
                {createIcon(emailIcon, secondaryColor, 18)}
                <span>{email}</span>
              </a>
              <div className="flex items-center gap-4 ml-4">
                <button className="hover:opacity-80 transition-opacity">
                  {createIcon(profileIcon, secondaryColor, 20)}
                </button>
                <button className="hover:opacity-80 transition-opacity">
                  {createIcon(favoritesIcon, secondaryColor, 20)}
                </button>
                <button className="hover:opacity-80 transition-opacity">
                  {createIcon(cartIcon, secondaryColor, 20)}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden flex justify-between items-center px-4 py-4" style={{ backgroundColor }}>
            {/* Logo */}
            <div className="flex items-center">
              {mediaUrl1 && (
                displayMediaType1 === "video" ? (
                  <video
                    src={mediaUrl1}
                    className="h-10 object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img src={mediaUrl1} alt={mediaAlt1} className="h-10 object-contain" />
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: secondaryColor }}
            >
              {createIcon(mobileMenuIcon, secondaryColor, 28)}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden flex flex-col items-center py-6 gap-4" style={{ backgroundColor }}>
              {navLinks.map((link, index) => (
                <Link
                  key={`mobile-${link.id}`}
                  href={transformLink(link.href)}
                  className="text-base hover:opacity-80 transition-opacity"
                  style={{ color: secondaryColor, fontFamily }}
                  data-editable="true"
                  data-id={`-${link.id}Href-mobile`}
                  data-label={`Lien ${index + 1} - URL (mobile)`}
                  data-type="link"
                >
                  <span
                    data-editable="true"
                    data-id={`-${link.id}Text-mobile`}
                    data-label={`Lien ${index + 1} - Texte (mobile)`}
                  >
                    {link.text}
                  </span>
                </Link>
              ))}
              <div className="flex flex-col items-center gap-3 mt-4">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: secondaryColor }}
                >
                  {createIcon(phoneIcon, secondaryColor, 18)}
                  <span>{phone}</span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: secondaryColor }}
                >
                  {createIcon(emailIcon, secondaryColor, 18)}
                  <span>{email}</span>
                </a>
              </div>
            </div>
          )}
        </header>

        {/* HERO SECTION */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Background Image/Video */}
          <div className="absolute inset-0 z-0">
            {mediaUrl2 && (
              displayMediaType2 === "video" ? (
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
                </video>
              ) : (
                <img
                  src={mediaUrl2}
                  alt={mediaAlt2}
                  className="w-full h-full object-cover"
                />
              )
            )}
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          {/* Search Bar */}
          <div className="relative z-10 w-full max-w-3xl px-4 mb-12 mt-24 lg:mt-32">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full px-6 py-4 rounded-lg text-base border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ 
                  backgroundColor: secondaryColor,
                  borderColor: "#E0E0E0",
                  color: "#000000",
                  fontFamily: secondaryFontFamily
                }}
                data-editable="true"
                data-id="-searchPlaceholder"
                data-label="Placeholder de recherche"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                {createIcon(searchIcon, "#666666", 24)}
              </button>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-5xl mb-24">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ 
                color: secondaryColor,
                fontFamily: fontFamily
              }}
              data-editable="true"
              data-id="-heroTitle"
              data-label="Titre principal"
            >
              {heroTitle}
            </h1>
            
            <p
              className="text-base sm:text-lg md:text-xl mb-8"
              style={{ 
                color: secondaryColor,
                fontFamily: secondaryFontFamily
              }}
              data-editable="true"
              data-id="-heroSubtitle"
              data-label="Sous-titre"
            >
              {heroSubtitle}
            </p>

            <a
              href={transformLink(ctaLink)}
              className="inline-block px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: ctaButtonColor,
                color: secondaryColor,
                fontFamily: secondaryFontFamily
              }}
              data-editable="true"
              data-id="-ctaLink"
              data-label="Lien bouton CTA"
              data-type="link"
            >
              <span
                data-editable="true"
                data-id="-ctaText"
                data-label="Texte bouton CTA"
              >
                {ctaText}
              </span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Rer;
