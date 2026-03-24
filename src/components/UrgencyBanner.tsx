"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { CAMPAIGN_END_DATE, CAMPAIGN_GOAL, CAMPAIGN_DONATED } from "@/lib/constants";
import { Clock } from "lucide-react";

export default function UrgencyBanner() {
  const { days, hours, minutes, seconds } = useCountdown(CAMPAIGN_END_DATE);
  const remaining = CAMPAIGN_GOAL - CAMPAIGN_DONATED;
  const progress = (CAMPAIGN_DONATED / CAMPAIGN_GOAL) * 100;

  return (
    <div className="bg-amber-900 text-amber-50 py-3 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-300" />
          <span>
            Campanha encerra em{" "}
            <strong>
              {days}d {String(hours).padStart(2, "0")}h{" "}
              {String(minutes).padStart(2, "0")}m{" "}
              {String(seconds).padStart(2, "0")}s
            </strong>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-amber-200">
            Faltam <strong className="text-white">{remaining}</strong> cobertores para a meta!
          </span>
          <div className="w-24 h-2 bg-amber-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-400 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
