import React from "react";

const CheckIcon = ({ size = 64 }: { size?: number }) => {
  // Définir une valeur par défaut de 64
  return (
    <svg
      width={size} // Utiliser directement 'size'
      height={size} // Utiliser directement 'size'
      viewBox="0 0 64 64" // Définir la vue pour permettre le redimensionnement proportionnel
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <circle
          fill="#D87D4A"
          cx="32" // Utiliser les valeurs originales, la vue s'adapte
          cy="32" // Utiliser les valeurs originales, la vue s'adapte
          r="32" // Utiliser les valeurs originales, la vue s'adapte
        />
        <path
          stroke="#FFF"
          strokeWidth={size >= 64 ? "4" : `${10 * (size / 64)}`} // Ajuster dynamiquement la largeur du trait
          d="M20.754 33.333 l6.751 6.751 15.804-15.803" // Utiliser une forme simplifiée
        />
      </g>
    </svg>
  );
};

export default CheckIcon;
