import React from "react";

interface GradientTextProps {
  text: string;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <span
      className={`bg-gradient-to-l from-foreground to-primary bg-clip-text text-transparent ${className}`}
    >
      {text}
    </span>
  );
};

export default GradientText;
