"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { HiSparkles } from "react-icons/hi2";

import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <HiSparkles />
        <span className="hidden font-bold sm:inline-block">binus/ai</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/emotion"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/emotion" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Emotion
        </Link>
        <Link
          href="/batch"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/batch")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Batch
        </Link>
        <Link
          href="/acknowledges"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/acknowledges")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Acknowledges
        </Link>
        <Link
          href="/others"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/others")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Others
        </Link>
      </nav>
    </div>
  );
}
