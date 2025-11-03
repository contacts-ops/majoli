"use client";

import React, { useState } from "react";
import { useSiteLink } from "@/hooks/use-site-link";
import { GoogleFontLoader } from "@/components/bande/google-font-loader";

interface Test4Props {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  secondaryFontFamily: string;
  title: string;
  formNameLabel: string;
  formNamePlaceholder: string;
  formPhoneLabel: string;
  formPhonePlaceholder: string;
  formEmailLabel: string;
  formEmailPlaceholder: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  submitButtonText: string;
  phoneCountryCode: string;
  
  // Info cards
  infoCard1Icon: string;
  infoCard1Title: string;
  infoCard1Link: string;
  
  infoCard2Icon: string;
  infoCard2Title: string;
  infoCard2Link: string;
  
  infoCard3Icon: string;
  infoCard3Title: string;
  infoCard3Subtitle: string;
  infoCard3Link: string;
  
  // Map
  mapEmbedUrl: string;
  
  paddingTop: number;
  paddingBottom: number;
}

const Test4: React.FC<Test4Props> = ({
  primaryColor = "#0066FF",
  secondaryColor = "#FFFFFF",
  backgroundColor = "#F9FAFB",
  textColor = "#1F2937",
  fontFamily = "Inter",
  secondaryFontFamily = "Inter",
  title = "Contactez-Nous",
  formNameLabel = "Nom",
  formNamePlaceholder = "Nom",
  formPhoneLabel = "Téléphone",
  formPhonePlaceholder = "",
  formEmailLabel = "E-mail",
  formEmailPlaceholder = "E-mail",
  formMessageLabel = "Message",
  formMessagePlaceholder = "Message",
  submitButtonText = "Envoyer",
  phoneCountryCode = "+33",
  
  infoCard1Icon = "Mail",
  infoCard1Title = "contact@nomdumail.fr",
  infoCard1Link = "mailto:contact@nomdumail.fr",
  
  infoCard2Icon = "Phone",
  infoCard2Title = "09 73 38 30 77",
  infoCard2Link = "tel:0973383077",
  
  infoCard3Icon = "MapPin",
  infoCard3Title = "63 Rue Paul Testé,",
  infoCard3Subtitle = "69120 Vaulx-en-Velin",
  infoCard3Link = "https://www.google.com/maps/search/?api=1&query=63+Rue+Paul+Testé+69120+Vaulx-en-Velin",
  
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.8662524871234!2d4.920684615534445!3d45.78350597910568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c02c8c8c8c8d%3A0x0!2zNDXCsDQ3JzAwLjYiTiA0wrA1NSczNS4wIkU!5e0!3m2!1sen!2sfr!4v1234567890123",
  
  paddingTop = 60,
  paddingBottom = 60,
}) => {
  const { transformLink } = useSiteLink();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const infoCards = [
    {
      icon: infoCard1Icon,
      title: infoCard1Title,
      subtitle: "",
      link: infoCard1Link,
      id: 1,
    },
    {
      icon: infoCard2Icon,
      title: infoCard2Title,
      subtitle: "",
      link: infoCard2Link,
      id: 2,
    },
    {
      icon: infoCard3Icon,
      title: infoCard3Title,
      subtitle: infoCard3Subtitle,
      link: infoCard3Link,
      id: 3,
    },
  ];

  // Icon mapping component
  const IconComponent = ({ iconName, className = "", color = primaryColor }: { iconName: string; className?: string; color?: string }) => {
    const iconMap: { [key: string]: JSX.Element } = {
      Mail: (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      Phone: (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      MapPin: (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    };
    return iconMap[iconName] || iconMap.Mail;
  };

  return (
    <>
      <GoogleFontLoader fontName={fontFamily} />
      <GoogleFontLoader fontName={secondaryFontFamily} />
      
      <section
        className="w-full"
        style={{
          backgroundColor,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          fontFamily: secondaryFontFamily,
        }}
        data-component="true"
        data-id="test4"
      >
        {/* Hidden elements for colors */}
        <div style={{ display: "none" }} data-editable="true" data-id="-primaryColor">
          {primaryColor}
        </div>
        <div style={{ display: "none" }} data-editable="true" data-id="-secondaryColor">
          {secondaryColor}
        </div>
        <div style={{ display: "none" }} data-editable="true" data-id="-backgroundColor">
          {backgroundColor}
        </div>
        <div style={{ display: "none" }} data-editable="true" data-id="-textColor">
          {textColor}
        </div>

        {/* Hidden elements for fonts */}
        <div style={{ display: "none" }} data-editable="true" data-type="font" data-id="-fontFamily" data-label="Police principale">
          {fontFamily}
        </div>
        <div style={{ display: "none" }} data-editable="true" data-type="font" data-id="-secondaryFontFamily" data-label="Police secondaire">
          {secondaryFontFamily}
        </div>

        {/* Hidden elements for padding */}
        <div style={{ display: "none" }} data-editable="true" data-id="-paddingTop">
          {paddingTop}
        </div>
        <div style={{ display: "none" }} data-editable="true" data-id="-paddingBottom">
          {paddingBottom}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h1
            className="text-3xl md:text-4xl font-bold text-left mb-8 md:mb-12"
            style={{ color: textColor, fontFamily }}
            data-editable="true"
            data-id="-title"
            data-label="Titre principal"
          >
            {title}
          </h1>

          {/* Form and Info Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
            {/* Form Section */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                {/* Name and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: textColor, fontFamily: secondaryFontFamily }}
                      data-editable="true"
                      data-id="-formNameLabel"
                      data-label="Label champ nom"
                    >
                      {formNameLabel}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={formNamePlaceholder}
                      data-editable="true"
                      data-id="-formNamePlaceholder"
                      data-label="Placeholder champ nom"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      style={{
                        borderColor: "#E5E7EB",
                        fontFamily: secondaryFontFamily,
                      }}
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: textColor, fontFamily: secondaryFontFamily }}
                      data-editable="true"
                      data-id="-formPhoneLabel"
                      data-label="Label champ téléphone"
                    >
                      {formPhoneLabel}
                    </label>
                    <div className="flex gap-2">
                      <div
                        className="flex items-center px-3 py-3 border border-gray-300 rounded-lg bg-white"
                        style={{ borderColor: "#E5E7EB" }}
                      >
                        <span
                          className="text-sm"
                          style={{ color: textColor, fontFamily: secondaryFontFamily }}
                          data-editable="true"
                          data-id="-phoneCountryCode"
                          data-label="Code pays téléphone"
                        >
                          {phoneCountryCode}
                        </span>
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={formPhonePlaceholder}
                        data-editable="true"
                        data-id="-formPhonePlaceholder"
                        data-label="Placeholder champ téléphone"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        style={{
                          borderColor: "#E5E7EB",
                          fontFamily: secondaryFontFamily,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: textColor, fontFamily: secondaryFontFamily }}
                    data-editable="true"
                    data-id="-formEmailLabel"
                    data-label="Label champ email"
                  >
                    {formEmailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={formEmailPlaceholder}
                    data-editable="true"
                    data-id="-formEmailPlaceholder"
                    data-label="Placeholder champ email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                    style={{
                      borderColor: "#E5E7EB",
                      fontFamily: secondaryFontFamily,
                    }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: textColor, fontFamily: secondaryFontFamily }}
                    data-editable="true"
                    data-id="-formMessageLabel"
                    data-label="Label champ message"
                  >
                    {formMessageLabel}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={formMessagePlaceholder}
                    data-editable="true"
                    data-id="-formMessagePlaceholder"
                    data-label="Placeholder champ message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-none"
                    style={{
                      borderColor: "#E5E7EB",
                      fontFamily: secondaryFontFamily,
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="px-8 py-3 rounded-lg font-medium transition-opacity hover:opacity-90 text-base"
                  style={{
                    backgroundColor: primaryColor,
                    color: secondaryColor,
                    fontFamily: secondaryFontFamily,
                  }}
                  data-editable="true"
                  data-id="-submitButtonText"
                  data-label="Texte bouton envoyer"
                >
                  {submitButtonText}
                </button>
              </form>
            </div>

            {/* Info Cards Section */}
            <div className="space-y-4">
              {infoCards.map((card) => (
                <a
                  key={card.id}
                  href={transformLink(card.link)}
                  target={card.id === 3 ? "_blank" : undefined}
                  rel={card.id === 3 ? "noopener noreferrer" : undefined}
                  className="block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  data-editable="true"
                  data-type="link"
                  data-id={`-infoCard${card.id}Link`}
                  data-label={`Lien carte info ${card.id}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor + "15" }}
                    >
                      <div
                        style={{ display: "none" }}
                        data-editable="true"
                        data-id={`-infoCard${card.id}Icon`}
                        data-label={`Icône carte info ${card.id}`}
                        data-type="icon"
                      >
                        {card.icon}
                      </div>
                      <IconComponent iconName={card.icon} className="w-6 h-6" color={primaryColor} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-base font-medium break-words"
                        style={{ color: textColor, fontFamily: secondaryFontFamily }}
                        data-editable="true"
                        data-id={`-infoCard${card.id}Title`}
                        data-label={`Titre carte info ${card.id}`}
                      >
                        {card.title}
                      </p>
                      {card.subtitle && (
                        <p
                          className="text-base font-medium break-words"
                          style={{ color: textColor, fontFamily: secondaryFontFamily }}
                          data-editable="true"
                          data-id={`-infoCard${card.id}Subtitle`}
                          data-label={`Sous-titre carte info ${card.id}`}
                        >
                          {card.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-sm">
            <div
              style={{ display: "none" }}
              data-editable="true"
              data-id="-mapEmbedUrl"
              data-label="URL embed Google Maps"
            >
              {mapEmbedUrl}
            </div>
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Test4;
