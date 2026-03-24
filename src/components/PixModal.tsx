"use client";

import { useEffect, useState, useCallback } from "react";
import { PixSVG, payload } from "react-qrcode-pix";
import { X, Heart } from "lucide-react";
import { PIX_KEY, MERCHANT_NAME, MERCHANT_CITY } from "@/lib/constants";
import CopyButton from "./CopyButton";

interface PixModalProps {
  amount: number;
  blankets: number;
  txId: string;
  onClose: () => void;
}

export default function PixModal({
  amount,
  blankets,
  txId,
  onClose,
}: PixModalProps) {
  const [pixCode, setPixCode] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const pixProps = {
    pixkey: PIX_KEY,
    merchant: MERCHANT_NAME,
    city: MERCHANT_CITY,
    code: txId,
    amount,
  };

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    setPixCode(payload(pixProps));
  }, [amount, txId]);

  // Trigger enter animation
  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [handleClose]);

  const show = isVisible && !isClosing;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: show ? 1 : 0 }}
      />

      {/* Modal panel */}
      <div
        className="relative bg-white w-full md:max-w-md md:rounded-2xl rounded-t-3xl p-6 md:p-8 max-h-[90vh] overflow-y-auto transition-all duration-300 ease-out"
        style={{
          transform: show
            ? "translateY(0) scale(1)"
            : "translateY(100%) scale(0.95)",
          opacity: show ? 1 : 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div
            className="inline-flex items-center gap-2 text-amber-600 mb-2 transition-all duration-500 delay-100"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(10px)",
            }}
          >
            <Heart className="w-5 h-5 fill-amber-600" />
            <span className="text-sm font-bold">Obrigado!</span>
          </div>

          <h3
            className="text-2xl font-extrabold text-stone-800 mb-1 transition-all duration-500 delay-150"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(10px)",
            }}
          >
            R${amount},00
          </h3>
          <p
            className="text-stone-500 text-sm mb-6 transition-all duration-500 delay-200"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(10px)",
            }}
          >
            Você está doando{" "}
            <strong className="text-amber-700">
              {blankets} cobertor{blankets > 1 ? "es" : ""}
            </strong>{" "}
            para quem precisa
          </p>

          <div
            className="bg-stone-50 rounded-xl p-6 mb-4 flex justify-center transition-all duration-500 delay-250"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "scale(1)" : "scale(0.9)",
            }}
          >
            <PixSVG {...pixProps} />
          </div>

          <p
            className="text-xs text-stone-400 mb-3 transition-opacity duration-500 delay-300"
            style={{ opacity: show ? 1 : 0 }}
          >
            Escaneie o QR Code ou copie o código PIX abaixo
          </p>

          <div
            className="bg-stone-100 rounded-lg p-3 mb-4 transition-all duration-500 delay-300"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(10px)",
            }}
          >
            <p className="text-xs text-stone-600 break-all font-mono leading-relaxed select-all">
              {pixCode}
            </p>
          </div>

          <div
            className="transition-all duration-500 delay-[350ms]"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(10px)",
            }}
          >
            <CopyButton text={pixCode} />
          </div>

          <p
            className="text-xs text-stone-400 mt-4 transition-opacity duration-500 delay-[400ms]"
            style={{ opacity: show ? 1 : 0 }}
          >
            Abra o app do seu banco → Pix → Copia e Cola
          </p>
        </div>
      </div>
    </div>
  );
}
