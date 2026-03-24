interface BlanketIconProps {
  className?: string;
}

export default function BlanketIcon({ className = "w-5 h-5" }: BlanketIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Blanket body - rounded rectangle */}
      <rect x="2" y="4" width="20" height="16" rx="3" ry="3" />
      {/* Top fold */}
      <path d="M2 10h20" />
      {/* Wavy warmth pattern */}
      <path d="M7 15c1-1 2-1 3 0s2 1 3 0 2-1 3 0" />
    </svg>
  );
}
