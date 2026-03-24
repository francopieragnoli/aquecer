"use client";

import { Shirt } from "lucide-react";

interface DonationCardProps {
  amount: number;
  blankets: number;
  label: string;
  isPopular?: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

export default function DonationCard({
  amount,
  blankets,
  label,
  isPopular,
  isSelected,
  onSelect,
}: DonationCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`relative flex flex-col items-center gap-3 p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer w-full ${
        isPopular ? "md:scale-105 md:-my-2" : ""
      } ${
        isSelected
          ? "border-amber-500 bg-amber-50 shadow-xl shadow-amber-500/20"
          : "border-stone-200 bg-white hover:border-amber-300 hover:shadow-lg"
      }`}
    >
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
          Mais escolhido
        </span>
      )}

      <div
        className={`flex items-center gap-1 ${
          isSelected ? "text-amber-600" : "text-stone-400"
        }`}
      >
        {Array.from({ length: blankets }).map((_, i) => (
          <Shirt key={i} className="w-5 h-5" />
        ))}
      </div>

      <span className="text-3xl md:text-4xl font-extrabold text-stone-800">
        R${amount}
      </span>

      <span
        className={`text-sm font-medium ${
          isSelected ? "text-amber-700" : "text-stone-500"
        }`}
      >
        = {label} para quem precisa
      </span>
    </button>
  );
}
