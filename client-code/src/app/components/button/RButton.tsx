import React, { PropsWithChildren } from "react";

export type ButtonVariant = "contained" | "outlined" | "soft" | "text";
export type ButtonColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

export type ButtonType = "button" | "submit" | "reset";

interface Props extends PropsWithChildren<{}> {
  additionalStyle?: string;
  type?: ButtonType;
  onClick?: () => void;
}

export const RButton: React.FC<Props> = ({
  additionalStyle,
  type,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{
        cursor: "pointer",
        backgroundColor: "var(--color-primary)",
        fontWeight: "700",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        borderRadius: "0.25rem",
      }}
    >
      {children}
    </button>
  );
};
