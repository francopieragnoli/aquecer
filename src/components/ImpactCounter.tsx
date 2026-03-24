"use client";

import { useEffect, useState } from "react";
import { Users, Shirt } from "lucide-react";
import { TOTAL_DONORS, CAMPAIGN_DONATED } from "@/lib/constants";

function useAnimatedNumber(target: number, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return value;
}

export default function ImpactCounter() {
  const donors = useAnimatedNumber(TOTAL_DONORS);
  const blankets = useAnimatedNumber(CAMPAIGN_DONATED);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-2xl mx-auto grid grid-cols-2 gap-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-3">
            <Users className="w-6 h-6" />
          </div>
          <p className="text-4xl md:text-5xl font-extrabold text-stone-800">
            {donors}+
          </p>
          <p className="text-stone-500 font-medium mt-1">
            doadores já ajudaram
          </p>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-3">
            <Shirt className="w-6 h-6" />
          </div>
          <p className="text-4xl md:text-5xl font-extrabold text-stone-800">
            {blankets}
          </p>
          <p className="text-stone-500 font-medium mt-1">cobertores doados</p>
        </div>
      </div>
    </section>
  );
}
