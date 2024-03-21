import * as React from "react";

import { cn } from "@/lib/utils";

export type Variant = "default" | "focus" | "error";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
}

const variants = {
  default: "border-input placeholder:input-placeholder",
  focus: "text-primary-foreground bg-primary",
  error: "border-red-600 outline-red-500",
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    const variantClassName = variant ? variants[variant] : variants.default;
    return (
      <input
        type={type}
        className={cn(
          "outline-accent border-2 text-input-text text-subtitle px-small py-[1.8rem] rounded  placeholder:text-subtitle",
          variantClassName,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
