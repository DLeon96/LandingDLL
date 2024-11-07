'use client'

import Image from 'next/image';

export default function InteractiveImage(): JSX.Element {
  return (
    <div 
      className="relative w-[650px] h-[650px] overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
    >
      {/* Contenedor para la imagen con propiedades de ajuste */}
      <Image
        src="/images/hero/Landing.png"
        alt="Ejemplo de Landing Page Empresarial"
        fill
        className="object-cover w-full h-full rounded-lg shadow-2xl"
        sizes="(max-width: 650px) 100vw, 650px" // Opcional: mejora el rendimiento
      />
    </div>
  );
}
