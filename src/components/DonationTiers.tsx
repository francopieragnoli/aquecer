"use client";

import { useState } from "react";
import DonationCard from "./DonationCard";
import PixModal from "./PixModal";
import { DONATION_TIERS, PIX_CODE } from "@/lib/constants";

export default function DonationTiers() {
  const [selectedIndex, setSelectedIndex] = useState(1); // Default: R$50
  const [showModal, setShowModal] = useState(false);

  const selected = DONATION_TIERS[selectedIndex];

  function handleSelect(index: number) {
    setSelectedIndex(index);
    setShowModal(true);
  }

  return (
    <section id="doar" className="py-16 md:py-24 px-6 bg-amber-50/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 text-center mb-3">
          Escolha como ajudar
        </h2>
        <p className="text-stone-500 text-center mb-10 text-lg">
          Cada minuto conta. Selecione um valor e doe via PIX.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
          {DONATION_TIERS.map((tier, i) => (
            <DonationCard
              key={tier.amount}
              amount={tier.amount}
              blankets={tier.blankets}
              label={tier.label}
              isPopular={"isPopular" in tier && tier.isPopular === true}
              isSelected={selectedIndex === i}
              onSelect={() => handleSelect(i)}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <PixModal
          amount={selected.amount}
          blankets={selected.blankets}
          txId={PIX_CODE}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
