import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-10 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-stone-300 font-bold text-lg mb-2 flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
          Campanha Aquecer
        </p>
        <p className="text-sm mb-4">
          100% das doações são convertidas em cobertores para pessoas em
          situação de vulnerabilidade.
        </p>
        <p className="text-xs text-stone-500">
          Campanha independente sem fins lucrativos. Transparência total na
          prestação de contas.
        </p>
      </div>
    </footer>
  );
}
