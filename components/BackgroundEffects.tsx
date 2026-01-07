"use client";

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* TRUE white base */}
      <div className="absolute inset-0 bg-white" />

      {/* Ultra-light grid (barely visible) */}
      <div className="absolute inset-0 bg-grid opacity-[0.6]" />

    

      {/* Ambient blobs — extremely subtle */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full 
        bg-[radial-gradient(circle,hsl(var(--primary)/0.14),transparent_70%)]
        blur-[180px]" />

      <div className="absolute top-[35%] -right-40 h-[520px] w-[520px] rounded-full 
        bg-[radial-gradient(circle,_hsl(var(--accent-foreground)/0.10),_transparent_70%)]
        blur-[180px]" />

      <div className="absolute bottom-[-30%] left-[25%] h-[520px] w-[520px] rounded-full 
        bg-[radial-gradient(circle,_hsl(var(--primary-dark)/0.12),_transparent_70%)]
        blur-[200px]" />
      {/* Near-invisible texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
    </div>
  );
}
