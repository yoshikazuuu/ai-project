import clsx from "clsx";
import * as React from "react";

type AccentType = React.ComponentPropsWithoutRef<"span">;

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsx(
        className,
        "transition-colors",
        "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] dark:from-yellow-400 dark:via-gray-50 dark:to-teal-300",
        "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500",
        "bg-clip-text text-transparent",
      )}
    >
      {children}
    </span>
  );
}
