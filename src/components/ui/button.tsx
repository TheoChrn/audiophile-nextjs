import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center  whitespace-nowrap text-base uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "hover:bg-primary/90  bg-primary text-primary-foreground shadow",
        destructive:
          "hover:bg-destructive/90 bg-destructive text-destructive-foreground shadow-sm",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "hover:bg-secondary/80 bg-secondary text-secondary-foreground shadow-sm",
        ghost: "pointer-events-none cursor-none text-base text-gray-400",
        link: "text-primary underline-offset-4 hover:underline",
        select: "bg-none text-base text-primary-foreground hover:text-accent",
        delete: "border-[none] text-base underline hover:text-accent",
        accent:
          "border-accent bg-accent py-6 text-accent-foreground hover:border-accent-hover hover:bg-accent-hover",
      },
      size: {
        default: "px-[3.45rem] py-6",
        sm: "rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "size-9",
        select: "w-auto",
        cartSelect: "px-[1.15rem] py-[0.7rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
