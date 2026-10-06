"use client";
import toast from "react-hot-toast";
import { CheckCircle2, XCircle, Info, AlertTriangle } from "lucide-react";

// ⭐ Custom Success Toast with Progress Bar
export const showSuccess = (message, subtitle = "") => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-toast-in" : "animate-toast-out"
        } max-w-md w-full bg-gradient-to-br from-brand-dark to-brand-green shadow-2xl rounded-2xl pointer-events-auto flex ring-1 ring-brand-gold/30 overflow-hidden relative`}
      >
        {/* Left accent bar */}
        <div className="w-1.5 bg-green-500 shrink-0" />

        <div className="flex-1 p-4 flex items-start gap-3">
          {/* Icon */}
          <div className="shrink-0 w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center ring-2 ring-green-500/30">
            <CheckCircle2
              size={22}
              className="text-green-400"
              strokeWidth={2.5}
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-brand-cream text-sm sm:text-base leading-tight">
              {message}
            </p>
            {subtitle && (
              <p className="text-xs text-brand-cream/70 mt-1 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={() => toast.dismiss(t.id)}
            className="shrink-0 w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center text-brand-cream/60 hover:text-brand-cream transition"
            aria-label="Close"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/20">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-green-500"
            style={{
              animation: `progress 5s linear forwards`,
            }}
          />
        </div>
      </div>
    ),
    {
      duration: 5000,
      position: "top-right",
    }
  );
};

// ⭐ Custom Error Toast
export const showError = (message, subtitle = "") => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-toast-in" : "animate-toast-out"
        } max-w-md w-full bg-gradient-to-br from-red-900 to-red-800 shadow-2xl rounded-2xl pointer-events-auto flex ring-1 ring-red-500/30 overflow-hidden relative`}
      >
        <div className="w-1.5 bg-red-500 shrink-0" />

        <div className="flex-1 p-4 flex items-start gap-3">
          <div className="shrink-0 w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center ring-2 ring-red-500/30">
            <XCircle size={22} className="text-red-400" strokeWidth={2.5} />
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-red-50 text-sm sm:text-base leading-tight">
              {message}
            </p>
            {subtitle && (
              <p className="text-xs text-red-100/70 mt-1 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <button
            onClick={() => toast.dismiss(t.id)}
            className="shrink-0 w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center text-red-100/60 hover:text-red-50 transition"
            aria-label="Close"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/20">
          <div
            className="h-full bg-gradient-to-r from-red-400 to-red-500"
            style={{
              animation: `progress 6s linear forwards`,
            }}
          />
        </div>
      </div>
    ),
    {
      duration: 6000,
      position: "top-right",
    }
  );
};

// ⭐ Info Toast
export const showInfo = (message, subtitle = "") => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-toast-in" : "animate-toast-out"
        } max-w-md w-full bg-gradient-to-br from-brand-dark to-brand-green shadow-2xl rounded-2xl pointer-events-auto flex ring-1 ring-brand-gold/40 overflow-hidden relative`}
      >
        <div className="w-1.5 bg-brand-gold shrink-0" />

        <div className="flex-1 p-4 flex items-start gap-3">
          <div className="shrink-0 w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center ring-2 ring-brand-gold/40">
            <Info size={22} className="text-brand-gold" strokeWidth={2.5} />
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-brand-cream text-sm sm:text-base leading-tight">
              {message}
            </p>
            {subtitle && (
              <p className="text-xs text-brand-cream/70 mt-1 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <button
            onClick={() => toast.dismiss(t.id)}
            className="shrink-0 w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center text-brand-cream/60 hover:text-brand-cream transition"
            aria-label="Close"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/20">
          <div
            className="h-full bg-gradient-to-r from-brand-goldLight to-brand-gold"
            style={{
              animation: `progress 5s linear forwards`,
            }}
          />
        </div>
      </div>
    ),
    {
      duration: 5000,
      position: "top-right",
    }
  );
};

// ⭐ Warning Toast
export const showWarning = (message, subtitle = "") => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-toast-in" : "animate-toast-out"
        } max-w-md w-full bg-gradient-to-br from-yellow-900 to-yellow-800 shadow-2xl rounded-2xl pointer-events-auto flex ring-1 ring-yellow-500/40 overflow-hidden relative`}
      >
        <div className="w-1.5 bg-yellow-500 shrink-0" />

        <div className="flex-1 p-4 flex items-start gap-3">
          <div className="shrink-0 w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center ring-2 ring-yellow-500/30">
            <AlertTriangle
              size={22}
              className="text-yellow-400"
              strokeWidth={2.5}
            />
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-yellow-50 text-sm sm:text-base leading-tight">
              {message}
            </p>
            {subtitle && (
              <p className="text-xs text-yellow-100/70 mt-1 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <button
            onClick={() => toast.dismiss(t.id)}
            className="shrink-0 w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center text-yellow-100/60 hover:text-yellow-50 transition"
            aria-label="Close"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/20">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500"
            style={{
              animation: `progress 5s linear forwards`,
            }}
          />
        </div>
      </div>
    ),
    {
      duration: 5000,
      position: "top-right",
    }
  );
};

// ⭐ Loading Toast with Promise
export const showPromise = (promise, messages) => {
  return toast.promise(
    promise,
    {
      loading: messages.loading || "Sending...",
      success: messages.success || "Success!",
      error: messages.error || "Something went wrong",
    },
    {
      style: {
        background: "linear-gradient(135deg, #0F3D2E 0%, #1B5E45 100%)",
        color: "#F5F1E8",
        padding: "16px 20px",
        borderRadius: "16px",
        border: "1px solid rgba(201, 162, 39, 0.3)",
        boxShadow: "0 20px 40px -10px rgba(15, 61, 46, 0.5)",
      },
      success: {
        duration: 4000,
        icon: "✅",
      },
      error: {
        duration: 5000,
        icon: "❌",
      },
    }
  );
};
