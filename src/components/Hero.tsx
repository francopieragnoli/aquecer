"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

export default function Hero() {
  function scrollToDonate() {
    document.getElementById("doar")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-stone-950" />

      {/* Imagem de fundo */}
      <Image
        src="/images/rua.jpg"
        alt="Pessoa em situação de rua no frio"
        fill
        className="object-cover object-center opacity-50"
        priority
      />

      {/* Overlay gradiente para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/30" />
      <div className="absolute inset-0 bg-amber-950/30" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
          Aquecer
        </h1>
        <p className="text-xl md:text-2xl text-amber-100 font-medium mb-6 drop-shadow-md">
          Ajude a aquecer quem mais precisa!
        </p>
        <p className="text-amber-200/90 text-base md:text-lg mb-10 max-w-xl mx-auto drop-shadow-md">
          Mais de <strong className="text-white">2.000 pessoas</strong> ainda
          precisam de calor esta noite. Cada cobertor faz a diferença.
        </p>
        <button
          onClick={scrollToDonate}
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg shadow-amber-500/30"
        >
          <Heart className="w-5 h-5" />
          Doe agora
        </button>
      </div>
    </section>
  );
}
