"use client";

import type React from "react";
import { useState } from "react";
import { ShoppingCart, Heart, Camera, Minus, Plus } from "lucide-react";
import {GoogleFontLoader} from "@/components/bande/google-font-loader";

interface ProductBandProps {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  grayColor: string;
  fontFamily: string;
  mainImageUrl: string;
  mainImageAlt: string;
  thumbnailImage1?: string;
  thumbnailImage2?: string;
  thumbnailImage3?: string;
  thumbnailImage4?: string;
  thumbnailImage5?: string;
  productReference: string;
  productName: string;
  productRating: string;
  productPrice: string;
  addToCartText: string;
  addToCartLink?: string;
  paddingTop: number;
  paddingBottom: number;
}

const ProductBand: React.FC<ProductBandProps> = ({
  primaryColor = "#3B82F6",
  secondaryColor = "#FFFFFF",
  textColor = "#000000",
  grayColor = "#9CA3AF",
  fontFamily = "Inter",
  mainImageUrl = "/placeholder-warehouse.jpg",
  mainImageAlt = "Entrepôt avec rayonnages et gerbeur électrique",
  thumbnailImage1 = "/placeholder.svg",
  thumbnailImage2 = "/placeholder.svg",
  thumbnailImage3 = "/placeholder.svg",
  thumbnailImage4 = "/placeholder.svg",
  thumbnailImage5 = "/placeholder.svg",
  productReference = "Réf : GEB100-PRX-22. Marque : Manulift",
  productName = "Gerbeur Électrique 1.5 Tonnes - Série Pro",
  productRating = "★★★★★ 22 avis",
  productPrice = "2 999,00 € HT",
  addToCartText = "Ajouter au panier",
  addToCartLink = "#",
  paddingTop = 0,
  paddingBottom = 0,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(mainImageUrl);
  const [isFavorite, setIsFavorite] = useState(false);

  const thumbnails = [
    thumbnailImage1,
    thumbnailImage2,
    thumbnailImage3,
    thumbnailImage4,
    thumbnailImage5,
  ].filter(Boolean);

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const textStyle = {
    fontFamily: fontFamily ? `'${fontFamily}', sans-serif` : undefined,
  };

  return (
    <>
      <GoogleFontLoader fontName={fontFamily || ""} />
      <section
        className="w-full py-8 px-4 sm:px-6 lg:px-8"
        style={{ 
          backgroundColor: secondaryColor, 
          paddingTop: `${paddingTop}px`, 
          paddingBottom: `${paddingBottom}px`,
          ...textStyle
        }}
        data-component="true"
        data-id="aaaa"
      >
        {/* Hidden elements for editable properties */}
        <div data-editable="true" data-id="-primaryColor" data-label="Couleur primaire" style={{ display: "none" }}>
          {primaryColor}
        </div>
        <div data-editable="true" data-id="-secondaryColor" data-label="Couleur secondaire" style={{ display: "none" }}>
          {secondaryColor}
        </div>
        <div data-editable="true" data-id="-textColor" data-label="Couleur du texte" style={{ display: "none" }}>
          {textColor}
        </div>
        <div data-editable="true" data-id="-grayColor" data-label="Couleur grise" style={{ display: "none" }}>
          {grayColor}
        </div>
        <div data-editable="true" data-id="-fontFamily" data-label="Police principale" data-type="font" style={{ display: "none" }}>
          {fontFamily}
        </div>
        <div data-editable="true" data-id="-mainImageUrl" data-label="Image principale" data-type="media" style={{ display: "none" }}>
          {mainImageUrl}
        </div>
        <div data-editable="true" data-id="-mainImageAlt" data-label="Texte alternatif image" style={{ display: "none" }}>
          {mainImageAlt}
        </div>
        <div data-editable="true" data-id="-paddingTop" data-label="Padding top" style={{ display: "none" }}>
          {paddingTop}
        </div>
        <div data-editable="true" data-id="-paddingBottom" data-label="Padding bottom" style={{ display: "none" }}>
          {paddingBottom}
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Layout principal responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Section images (image principale + vignettes) */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                
                {/* Image principale */}
                <div className="md:col-span-4 order-2 md:order-1">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border-2" style={{ borderColor: grayColor }}>
                    <img
                      src={selectedImage}
                      alt={mainImageAlt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Galerie de vignettes */}
                <div className="md:col-span-1 order-1 md:order-2">
                  <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                    {/* Vignette de l'image principale */}
                    <button
                      onClick={() => setSelectedImage(mainImageUrl)}
                      className={`flex-shrink-0 aspect-square w-16 md:w-full rounded border-2 overflow-hidden transition-all duration-200 ${
                        selectedImage === mainImageUrl ? 'ring-2' : ''
                      }`}
                      style={{ 
                        borderColor: grayColor,
                        ringColor: selectedImage === mainImageUrl ? primaryColor : 'transparent'
                      }}
                    >
                      <img
                        src={mainImageUrl}
                        alt={mainImageAlt}
                        className="w-full h-full object-cover"
                      />
                    </button>

                    {/* Vignettes grises avec icône photo */}
                    {thumbnails.map((thumb, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(thumb || mainImageUrl)}
                        className="flex-shrink-0 aspect-square w-16 md:w-full rounded border-2 overflow-hidden transition-all duration-200 flex items-center justify-center"
                        style={{ 
                          borderColor: grayColor,
                          backgroundColor: '#F3F4F6',
                        }}
                      >
                        {thumb && thumb !== "/placeholder.svg" ? (
                          <img
                            src={thumb}
                            alt={`Vignette ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Camera className="w-6 h-6" style={{ color: grayColor }} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section informations produit */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="space-y-4">
                
                {/* Référence produit */}
                <div className="text-sm" style={{ color: grayColor }}>
                  <span
                    data-editable="true"
                    data-id="-productReference"
                    data-label="Référence produit"
                  >
                    {productReference}
                  </span>
                </div>

                {/* Nom du produit */}
                <h1 
                  className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight"
                  style={{ color: textColor }}
                  data-editable="true"
                  data-id="-productName"
                  data-label="Nom du produit"
                >
                  {productName}
                </h1>

                {/* Évaluations */}
                <div className="flex items-center gap-2">
                  <span 
                    className="text-sm sm:text-base"
                    style={{ color: textColor }}
                    data-editable="true"
                    data-id="-productRating"
                    data-label="Évaluations produit"
                  >
                    {productRating}
                  </span>
                </div>

                {/* Prix */}
                <div className="text-2xl sm:text-3xl font-bold" style={{ color: textColor }}>
                  <span
                    data-editable="true"
                    data-id="-productPrice"
                    data-label="Prix du produit"
                  >
                    {productPrice}
                  </span>
                </div>

                {/* Contrôles quantité et actions */}
                <div className="space-y-4 pt-4">
                  
                  {/* Sélecteur de quantité */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium" style={{ color: textColor }}>
                      Quantité :
                    </span>
                    <div className="flex items-center border rounded-lg" style={{ borderColor: grayColor }}>
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="p-2 hover:bg-gray-100 transition-colors duration-200"
                        disabled={quantity <= 1}
                        style={{ color: quantity <= 1 ? grayColor : textColor }}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span 
                        className="px-4 py-2 min-w-[3rem] text-center font-medium"
                        style={{ color: textColor }}
                      >
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="p-2 hover:bg-gray-100 transition-colors duration-200"
                        style={{ color: textColor }}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex items-center gap-3">
                    {/* Bouton ajouter au panier */}
                    <button
                      onClick={() => addToCartLink && addToCartLink !== "#" && (window.location.href = addToCartLink)}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                      style={{ backgroundColor: primaryColor }}
                      data-editable="true"
                      data-id="-addToCartLink"
                      data-label="Lien bouton panier"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span
                        data-editable="true"
                        data-id="-addToCartText"
                        data-label="Texte bouton panier"
                      >
                        {addToCartText}
                      </span>
                    </button>

                    {/* Bouton favoris */}
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className="p-3 rounded-lg border-2 hover:shadow-md transition-all duration-200 transform hover:scale-105"
                      style={{ 
                        borderColor: grayColor,
                        backgroundColor: isFavorite ? primaryColor : 'transparent',
                        color: isFavorite ? 'white' : grayColor
                      }}
                    >
                      <Heart 
                        className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Éléments cachés pour les vignettes */}
        <div data-editable="true" data-id="-thumbnailImage1" data-label="Vignette 1" data-type="media" style={{ display: "none" }}>
          {thumbnailImage1}
        </div>
        <div data-editable="true" data-id="-thumbnailImage2" data-label="Vignette 2" data-type="media" style={{ display: "none" }}>
          {thumbnailImage2}
        </div>
        <div data-editable="true" data-id="-thumbnailImage3" data-label="Vignette 3" data-type="media" style={{ display: "none" }}>
          {thumbnailImage3}
        </div>
        <div data-editable="true" data-id="-thumbnailImage4" data-label="Vignette 4" data-type="media" style={{ display: "none" }}>
          {thumbnailImage4}
        </div>
        <div data-editable="true" data-id="-thumbnailImage5" data-label="Vignette 5" data-type="media" style={{ display: "none" }}>
          {thumbnailImage5}
        </div>
      </section>
    </>
  );
};

export default ProductBand;