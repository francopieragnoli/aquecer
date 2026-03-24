"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 cursor-pointer ${
        copied
          ? "bg-green-500 text-white"
          : "bg-amber-600 hover:bg-amber-700 text-white"
      }`}
    >
      {copied ? (
        <>
          <Check className="w-5 h-5" />
          Copiado!
        </>
      ) : (
        <>
          <Copy className="w-5 h-5" />
          Copiar código PIX
        </>
      )}
    </button>
  );
}
