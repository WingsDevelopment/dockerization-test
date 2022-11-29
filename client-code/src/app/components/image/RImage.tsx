import { maxWidth } from "@mui/system";
import React from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export const RImage: React.FC<Props> = ({ src, alt, className, style }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        maxWidth: "100%",
        ...style,
      }}
    />
  );
};
