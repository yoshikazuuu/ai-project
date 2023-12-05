"use client";

import { Button } from "@/components/ui/button";
import { FaArrowDown } from "react-icons/fa";

import Link from "next/link";
import { useState, useEffect } from "react";
import Accent from "@/components/accent";
import Image from "next/image";
import { HiSparkles } from "react-icons/hi2";

export default function Home() {
  return (
    <>
      <div className="absolute -z-10 -mt-[56px] h-screen w-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-600/50 via-red-50/0 transition-colors" />
      <div className="layout">
        <section id="intro">
          <div className="-mt-[56px] flex h-screen w-full flex-col items-center justify-center gap-4 align-middle">
            <p className="bg-gradient-to-r from-purple-400 to-yellow-400 text-center text-2xl font-bold tracking-tight dark:bg-gradient-to-r dark:from-green-300 dark:via-blue-500 dark:to-purple-600">
              binus/ai
            </p>

            <h1 className="balance h-48 w-[102%] bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-center text-8xl font-extrabold tracking-tighter text-transparent  dark:bg-gradient-to-r dark:from-green-300 dark:to-purple-400">
              Coming Soon!{" "}
              <HiSparkles className="absolute inline-block text-4xl text-yellow-400" />
            </h1>
          </div>
        </section>
      </div>
    </>
  );
}
