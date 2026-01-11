// "use client";

// export function BackgroundEffects() {
//   return (
//     <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
//       {/* TRUE white base */}
//       <div className="absolute inset-0" />

//       {/* Ultra-light grid (barely visible) */}
//       <div className="absolute inset-0 bg-grid opacity-[0.6]" />

//       {/* Ambient blobs — extremely subtle */}
//       <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full
//         bg-[radial-gradient(circle,hsl(var(--primary)/0.14),transparent_70%)]
//         blur-[180px]" />

//       <div className="absolute top-[35%] -right-40 h-[520px] w-[520px] rounded-full
//         bg-[radial-gradient(circle,hsl(var(--accent-foreground)/0.10),transparent_70%)]
//         blur-[180px]" />

//       <div className="absolute bottom-[-30%] left-[25%] h-[520px] w-[520px] rounded-full
//         bg-[radial-gradient(circle,hsl(var(--primary-dark)/0.12),transparent_70%)]
//         blur-[200px]" />
//       {/* Near-invisible texture */}
//       <div className="absolute inset-0 bg-noise opacity-[0.02]" />
//     </div>
//   );
// }

export function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ contain: "strict" }}
    >
      {/* Base */}
      <div className="absolute inset-0 bg-white" />

      {/* GRID — visible but ultra-light */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(0, 0, 0, 0.22) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.22) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "40px 40px",
          opacity: 0.12,
        }}
      />

      {/* Soft ambient glow (still safe) */}
      <div
        className="absolute inset-0 opacity-[0.06] transform-gpu"
        style={{
          background:
            "radial-gradient(circle at 25% 30%, hsl(var(--primary) / 0.35), transparent 55%)",
          willChange: "transform",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.05] transform-gpu"
        style={{
          background:
            "radial-gradient(circle at 75% 55%, hsl(var(--accent-foreground) / 0.3), transparent 60%)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
