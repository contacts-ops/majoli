"use client";

import type React from "react";
import { useState } from "react";
import { GoogleFontLoader } from "@/components/bande/google-font-loader";
import { ChevronDown, ChevronRight } from "lucide-react";

interface ArtProps {
  // Couleurs
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  secondaryTextColor: string;
  linkColor: string;
  borderColor: string;
  activePageColor: string;
  
  // Polices
  fontFamily: string;
  
  // Textes généraux
  productsFoundText: string;
  sortByLabel: string;
  sortByValue: string;
  
  // Sous-catégories
  subcategoriesTitle: string;
  subcategory1: string;
  subcategory2: string;
  subcategory3: string;
  seeMoreText: string;
  
  // Filtres - Disponibilité
  availabilityTitle: string;
  availabilityOption1: string;
  availabilityOption2: string;
  
  // Filtres - Marques
  brandsTitle: string;
  brand1: string;
  brand2: string;
  
  // Filtres - Prix
  priceTitle: string;
  priceOption1: string;
  priceOption2: string;
  priceOption3: string;
  
  // Filtres - Capacité
  capacityTitle: string;
  capacityOption1: string;
  capacityOption2: string;
  capacityOption3: string;
  
  // Filtres - Hauteur
  heightTitle: string;
  heightOption1: string;
  heightOption2: string;
  heightOption3: string;
  
  // Produits (8 produits pour 2 lignes x 4 colonnes)
  mediaUrl1?: string;
  mediaAlt1?: string;
  mediaType1?: string;
  productName1: string;
  productPrice1: string;
  
  mediaUrl2?: string;
  mediaAlt2?: string;
  mediaType2?: string;
  productName2: string;
  productPrice2: string;
  
  mediaUrl3?: string;
  mediaAlt3?: string;
  mediaType3?: string;
  productName3: string;
  productPrice3: string;
  
  mediaUrl4?: string;
  mediaAlt4?: string;
  mediaType4?: string;
  productName4: string;
  productPrice4: string;
  
  mediaUrl5?: string;
  mediaAlt5?: string;
  mediaType5?: string;
  productName5: string;
  productPrice5: string;
  
  mediaUrl6?: string;
  mediaAlt6?: string;
  mediaType6?: string;
  productName6: string;
  productPrice6: string;
  
  mediaUrl7?: string;
  mediaAlt7?: string;
  mediaType7?: string;
  productName7: string;
  productPrice7: string;
  
  mediaUrl8?: string;
  mediaAlt8?: string;
  mediaType8?: string;
  productName8: string;
  productPrice8: string;
  
  // Pagination
  page1: string;
  page2: string;
  page3: string;
  page4: string;
  page5: string;
}

const Art: React.FC<ArtProps> = ({
  primaryColor = "#000000",
  backgroundColor = "#FFFFFF",
  textColor = "#000000",
  secondaryTextColor = "#666666",
  linkColor = "#007BFF",
  borderColor = "#D1D1D1",
  activePageColor = "#007BFF",
  fontFamily = "Arial, Helvetica, sans-serif",
  productsFoundText = "150 produits trouvés",
  sortByLabel = "Trier par :",
  sortByValue = "Pertinence",
  subcategoriesTitle = "Sous-catégories",
  subcategory1 = "Gerbeurs Manuels",
  subcategory2 = "Gerbeurs Électriques",
  subcategory3 = "Gerbeurs Semi-Électriques",
  seeMoreText = "Voir plus",
  availabilityTitle = "Disponibilité",
  availabilityOption1 = "En stock",
  availabilityOption2 = "En promotion",
  brandsTitle = "Marques",
  brand1 = "Heli",
  brand2 = "Motrise",
  priceTitle = "Prix (€ HT)",
  priceOption1 = "Moins de 1000 €",
  priceOption2 = "1000 € - 2000 €",
  priceOption3 = "Plus de 2000 €",
  capacityTitle = "Capacité de charge (kg)",
  capacityOption1 = "Moins de 500 kg",
  capacityOption2 = "500 kg - 1000 kg",
  capacityOption3 = "Plus de 1000 kg",
  heightTitle = "Hauteur de levée (mm)",
  heightOption1 = "Moins de 2000 mm",
  heightOption2 = "2000 - 3000 mm",
  heightOption3 = "Plus de 3000 mm",
  mediaUrl1 = "",
  mediaAlt1 = "Produit 1",
  mediaType1 = "image",
  productName1 = "Gerbeur Manuel 1",
  productPrice1 = "999 € HT",
  mediaUrl2 = "",
  mediaAlt2 = "Produit 2",
  mediaType2 = "image",
  productName2 = "Gerbeur Manuel 2",
  productPrice2 = "1299 € HT",
  mediaUrl3 = "",
  mediaAlt3 = "Produit 3",
  mediaType3 = "image",
  productName3 = "Gerbeur Électrique 1",
  productPrice3 = "1599 € HT",
  mediaUrl4 = "",
  mediaAlt4 = "Produit 4",
  mediaType4 = "image",
  productName4 = "Gerbeur Électrique 2",
  productPrice4 = "1899 € HT",
  mediaUrl5 = "",
  mediaAlt5 = "Produit 5",
  mediaType5 = "image",
  productName5 = "Gerbeur Semi-Électrique 1",
  productPrice5 = "2199 € HT",
  mediaUrl6 = "",
  mediaAlt6 = "Produit 6",
  mediaType6 = "image",
  productName6 = "Gerbeur Semi-Électrique 2",
  productPrice6 = "2499 € HT",
  mediaUrl7 = "",
  mediaAlt7 = "Produit 7",
  mediaType7 = "image",
  productName7 = "Gerbeur Manuel 3",
  productPrice7 = "899 € HT",
  mediaUrl8 = "",
  mediaAlt8 = "Produit 8",
  mediaType8 = "image",
  productName8 = "Gerbeur Électrique 3",
  productPrice8 = "1799 € HT",
  page1 = "1",
  page2 = "2",
  page3 = "3",
  page4 = "4",
  page5 = "5",
}) => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    availability: true,
    brands: true,
    price: true,
    capacity: true,
    height: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const products = [
    { mediaUrl: mediaUrl1, mediaAlt: mediaAlt1, mediaType: mediaType1, name: productName1, price: productPrice1, id: 1 },
    { mediaUrl: mediaUrl2, mediaAlt: mediaAlt2, mediaType: mediaType2, name: productName2, price: productPrice2, id: 2 },
    { mediaUrl: mediaUrl3, mediaAlt: mediaAlt3, mediaType: mediaType3, name: productName3, price: productPrice3, id: 3 },
    { mediaUrl: mediaUrl4, mediaAlt: mediaAlt4, mediaType: mediaType4, name: productName4, price: productPrice4, id: 4 },
    { mediaUrl: mediaUrl5, mediaAlt: mediaAlt5, mediaType: mediaType5, name: productName5, price: productPrice5, id: 5 },
    { mediaUrl: mediaUrl6, mediaAlt: mediaAlt6, mediaType: mediaType6, name: productName6, price: productPrice6, id: 6 },
    { mediaUrl: mediaUrl7, mediaAlt: mediaAlt7, mediaType: mediaType7, name: productName7, price: productPrice7, id: 7 },
    { mediaUrl: mediaUrl8, mediaAlt: mediaAlt8, mediaType: mediaType8, name: productName8, price: productPrice8, id: 8 },
  ];

  return (
    <>
      <GoogleFontLoader fontName={fontFamily || ""} />
      <section
        className="w-full py-6 px-4"
        style={{ fontFamily, backgroundColor }}
        data-component="true"
        data-id="art"
      >
        {/* Hidden elements for colors */}
        <div data-editable="true" data-id="-primaryColor" data-label="Couleur principale" style={{ display: "none" }}>{primaryColor}</div>
        <div data-editable="true" data-id="-backgroundColor" data-label="Couleur de fond" style={{ display: "none" }}>{backgroundColor}</div>
        <div data-editable="true" data-id="-textColor" data-label="Couleur du texte" style={{ display: "none" }}>{textColor}</div>
        <div data-editable="true" data-id="-secondaryTextColor" data-label="Couleur du texte secondaire" style={{ display: "none" }}>{secondaryTextColor}</div>
        <div data-editable="true" data-id="-linkColor" data-label="Couleur des liens" style={{ display: "none" }}>{linkColor}</div>
        <div data-editable="true" data-id="-borderColor" data-label="Couleur des bordures" style={{ display: "none" }}>{borderColor}</div>
        <div data-editable="true" data-id="-activePageColor" data-label="Couleur page active" style={{ display: "none" }}>{activePageColor}</div>
        <div data-editable="true" data-id="-fontFamily" data-label="Police" data-type="font" style={{ display: "none" }}>{fontFamily}</div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
          {/* Panneau latéral - 25% sur desktop */}
          <aside className="w-full lg:w-1/4 space-y-6">
            {/* Sous-catégories */}
            <div className="space-y-3">
              <h3 className="text-base font-bold" style={{ color: primaryColor }} data-editable="true" data-id="-subcategoriesTitle" data-label="Titre Sous-catégories">
                {subcategoriesTitle}
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                  <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                  <span data-editable="true" data-id="-subcategory1" data-label="Sous-catégorie 1">{subcategory1}</span>
                </label>
                <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                  <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                  <span data-editable="true" data-id="-subcategory2" data-label="Sous-catégorie 2">{subcategory2}</span>
                </label>
                <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                  <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                  <span data-editable="true" data-id="-subcategory3" data-label="Sous-catégorie 3">{subcategory3}</span>
                </label>
              </div>
              <a href="#" className="text-sm inline-block" style={{ color: linkColor }} data-editable="true" data-id="-seeMoreText" data-label="Texte Voir plus">
                {seeMoreText}
              </a>
            </div>

            {/* Disponibilité */}
            <div className="space-y-3 border-t pt-4" style={{ borderColor }}>
              <button
                onClick={() => toggleSection('availability')}
                className="w-full flex items-center justify-between text-base font-bold"
                style={{ color: primaryColor }}
              >
                <span data-editable="true" data-id="-availabilityTitle" data-label="Titre Disponibilité">{availabilityTitle}</span>
                {expandedSections.availability ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              {expandedSections.availability && (
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                    <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                    <span data-editable="true" data-id="-availabilityOption1" data-label="Disponibilité option 1">{availabilityOption1}</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                    <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                    <span data-editable="true" data-id="-availabilityOption2" data-label="Disponibilité option 2">{availabilityOption2}</span>
                  </label>
                </div>
              )}
            </div>

            {/* Marques */}
            <div className="space-y-3 border-t pt-4" style={{ borderColor }}>
              <button
                onClick={() => toggleSection('brands')}
                className="w-full flex items-center justify-between text-base font-bold"
                style={{ color: primaryColor }}
              >
                <span data-editable="true" data-id="-brandsTitle" data-label="Titre Marques">{brandsTitle}</span>
                {expandedSections.brands ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              {expandedSections.brands && (
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                    <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                    <span data-editable="true" data-id="-brand1" data-label="Marque 1">{brand1}</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                    <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                    <span data-editable="true" data-id="-brand2" data-label="Marque 2">{brand2}</span>
                  </label>
                </div>
              )}
            </div>

            {/* Prix */}
            <div className="space-y-3 border-t pt-4" style={{ borderColor }}>
              <button
                onClick={() => toggleSection('price')}
                className="w-full flex items-center justify-between text-base font-bold"
                style={{ color: primaryColor }}
              >
                <span data-editable="true" data-id="-priceTitle" data-label="Titre Prix">{priceTitle}</span>
                {expandedSections.price ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              {expandedSections.price && (
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                    <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                    <span data-editable="true" data-id="-priceOption1" data-label="Prix option 1">{priceOption1}</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                    <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                    <span data-editable="true" data-id="-priceOption2" data-label="Prix option 2">{priceOption2}</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                    <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                    <span data-editable="true" data-id="-priceOption3" data-label="Prix option 3">{priceOption3}</span>
                  </label>
                </div>
              )}
            </div>

            {/* Capacité */}
            <div className="space-y-3 border-t pt-4" style={{ borderColor }}>
              <button
                onClick={() => toggleSection('capacity')}
                className="w-full flex items-center justify-between text-base font-bold"
                style={{ color: primaryColor }}
              >
                <span data-editable="true" data-id="-capacityTitle" data-label="Titre Capacité">{capacityTitle}</span>
                {expandedSections.capacity ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              {expandedSections.capacity && (
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                    <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                    <span data-editable="true" data-id="-capacityOption1" data-label="Capacité option 1">{capacityOption1}</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                    <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                    <span data-editable="true" data-id="-capacityOption2" data-label="Capacité option 2">{capacityOption2}</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                    <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                    <span data-editable="true" data-id="-capacityOption3" data-label="Capacité option 3">{capacityOption3}</span>
                  </label>
                </div>
              )}
            </div>

            {/* Hauteur */}
            <div className="space-y-3 border-t pt-4" style={{ borderColor }}>
              <button
                onClick={() => toggleSection('height')}
                className="w-full flex items-center justify-between text-base font-bold"
                style={{ color: primaryColor }}
              >
                <span data-editable="true" data-id="-heightTitle" data-label="Titre Hauteur">{heightTitle}</span>
                {expandedSections.height ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              {expandedSections.height && (
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                    <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                    <span data-editable="true" data-id="-heightOption1" data-label="Hauteur option 1">{heightOption1}</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                    <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                    <span data-editable="true" data-id="-heightOption2" data-label="Hauteur option 2">{heightOption2}</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                    <input type="checkbox" className="w-4 h-4" style={{ borderColor }} />
                    <span data-editable="true" data-id="-heightOption3" data-label="Hauteur option 3">{heightOption3}</span>
                  </label>
                </div>
              )}
            </div>
          </aside>

          {/* Zone principale des produits - 75% sur desktop */}
          <main className="w-full lg:w-3/4 space-y-4">
            {/* Barre supérieure avec nombre de produits et tri */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-xs" style={{ color: secondaryTextColor }} data-editable="true" data-id="-productsFoundText" data-label="Texte produits trouvés">
                {productsFoundText}
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span style={{ color: textColor }} data-editable="true" data-id="-sortByLabel" data-label="Label Trier par">{sortByLabel}</span>
                <select
                  className="px-3 py-1 text-xs"
                  style={{ color: textColor, backgroundColor, borderColor, borderWidth: '1px' }}
                >
                  <option data-editable="true" data-id="-sortByValue" data-label="Valeur de tri">{sortByValue}</option>
                </select>
              </div>
            </div>

            {/* Grille de produits - 2 lignes x 4 colonnes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center p-4"
                  style={{ borderColor, borderWidth: '1px' }}
                >
                  {/* Image produit */}
                  <div className="w-full aspect-square flex items-center justify-center mb-3">
                    {product.mediaUrl ? (
                      product.mediaType === "video" ? (
                        <video
                          src={product.mediaUrl}
                          className="w-full h-full object-contain"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <img
                          src={product.mediaUrl}
                          alt={product.mediaAlt}
                          className="w-full h-full object-contain"
                        />
                      )
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
                        <span className="text-xs" style={{ color: secondaryTextColor }}>Image</span>
                      </div>
                    )}
                  </div>

                  {/* Informations produit */}
                  <div className="w-full text-center space-y-1">
                    <h4
                      className="text-sm"
                      style={{ color: textColor }}
                      data-editable="true"
                      data-id={`-productName${product.id}`}
                      data-label={`Nom produit ${product.id}`}
                    >
                      {product.name}
                    </h4>
                    <p
                      className="text-xs"
                      style={{ color: secondaryTextColor }}
                      data-editable="true"
                      data-id={`-productPrice${product.id}`}
                      data-label={`Prix produit ${product.id}`}
                    >
                      {product.price}
                    </p>
                  </div>

                  {/* Hidden media props */}
                  <div data-editable="true" data-id={`-mediaUrl${product.id}`} data-label={`Image produit ${product.id}`} data-type="media" style={{ display: "none" }}>
                    {product.mediaUrl}
                  </div>
                  <div data-editable="true" data-id={`-mediaAlt${product.id}`} data-label={`Alt produit ${product.id}`} style={{ display: "none" }}>
                    {product.mediaAlt}
                  </div>
                  <div data-editable="true" data-id={`-mediaType${product.id}`} data-label={`Type média produit ${product.id}`} style={{ display: "none" }}>
                    {product.mediaType}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 pt-6">
              <button
                className="w-8 h-8 flex items-center justify-center text-sm"
                style={{ color: activePageColor, backgroundColor, borderColor, borderWidth: '1px' }}
                data-editable="true"
                data-id="-page1"
                data-label="Page 1"
              >
                {page1}
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center text-sm"
                style={{ color: secondaryTextColor, backgroundColor, borderColor, borderWidth: '1px' }}
                data-editable="true"
                data-id="-page2"
                data-label="Page 2"
              >
                {page2}
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center text-sm"
                style={{ color: secondaryTextColor, backgroundColor, borderColor, borderWidth: '1px' }}
                data-editable="true"
                data-id="-page3"
                data-label="Page 3"
              >
                {page3}
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center text-sm"
                style={{ color: secondaryTextColor, backgroundColor, borderColor, borderWidth: '1px' }}
                data-editable="true"
                data-id="-page4"
                data-label="Page 4"
              >
                {page4}
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center text-sm"
                style={{ color: secondaryTextColor, backgroundColor, borderColor, borderWidth: '1px' }}
                data-editable="true"
                data-id="-page5"
                data-label="Page 5"
              >
                {page5}
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center text-sm"
                style={{ color: secondaryTextColor, backgroundColor, borderColor, borderWidth: '1px' }}
              >
                →
              </button>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Art;
