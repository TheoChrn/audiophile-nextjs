"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import React from "react";

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  variant?: Variant;
  customClassName?: string;
}

const variants = {
  default: "text-primary-foreground",
  primary: "text-primary-foreground bg-primary",
  secondary:
    "text-secondary-foreground bg-secondary border-secondary hover:bg-secondary-hover hover:border-secondary-hover",
  outline:
    "text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground",
  accent:
    "bg-accent text-accent-foreground border-accent hover:bg-accent-hover hover:border-accent-hover",
  nav: "border-none px-0 py-0 p-0 hover:text-accent",
};
type Variant =
  | "default"
  | "primary"
  | "accent"
  | "outline"
  | "secondary"
  | "nav";

const LinkButton = ({
  children,
  variant,
  customClassName,
  ...linkProps
}: LinkButtonProps) => {
  const variantClassName = variant ? variants[variant] : variants.default;
  return (
    <Link
      {...linkProps}
      className={`border-2 px-12 py-6 text-center text-subtitle uppercase  duration-200  ${variantClassName} ${customClassName}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
