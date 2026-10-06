"use client";

// ⭐ Multi-ring animated spinner
export function RingSpinner({ size = 24, color = "#C9A227" }) {
  return (
    <div
      className="spinner-ring"
      style={{
        width: size,
        height: size,
        borderColor: `${color}33`,
        borderTopColor: color,
      }}
    />
  );
}

// ⭐ Dots pulsing spinner
export function DotsSpinner({ color = "#C9A227", size = 8 }) {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="spinner-dot"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}

// ⭐ Premium loading with Tazmeel logo
export function BrandSpinner({ text = "Sending..." }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-6 h-6">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-brand-gold/20" />
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-gold border-r-brand-gold animate-spin" />
        {/* Center dot */}
        <div className="absolute inset-[7px] rounded-full bg-brand-gold animate-pulse" />
      </div>
      <span className="font-medium">{text}</span>
    </div>
  );
}

// ⭐ SVG Circle spinner
export function CircleSpinner({ size = 20, color = "#C9A227" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="3"
        strokeOpacity="0.2"
      />
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
