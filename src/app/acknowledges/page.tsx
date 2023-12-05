"use client";

import Link from "next/link";
import { SiGithub, SiGooglecolab } from "react-icons/si";

import { Button } from "@/components/ui/button";

export default function Acknowledges() {
  return (
    <>
      <div className="absolute -z-10 -mt-[56px] h-screen w-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-yellow-400/30 via-red-50/0 transition-colors dark:from-cyan-600/50 dark:via-red-50/0" />
      <div className="layout">
        <section id="intro">
          <div className="-mt-[56px] flex h-screen w-full flex-col items-center justify-center gap-4 align-middle">
            <h1 className="balance h-36 w-[102%] bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-center text-8xl font-extrabold tracking-tighter text-transparent  dark:bg-gradient-to-r dark:from-green-300 dark:to-purple-400">
              Acknowledgement
            </h1>
            <div className="flex flex-col items-start gap-4 md:flex-row">
              <div className="balance flex max-w-md flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold">IndoNLP</h1>
                <p className="text-center text-muted-foreground">
                  Terima kasih kepada IndoNLP yang telah memberikan data untuk
                  kami gunakan dalam proyek ini. Terima kasih juga kepada semua
                  kontributor yang telah berkontribusi dalam proyek ini. Saya
                  berharap proyek mereka dapat dikenal banyak orang dan membantu
                  masyarakat Indonesia dalam Natural Language Processing.
                </p>
                <Link href="https://github.com/IndoNLP" target="_blank">
                  <Button variant="outline">
                    <SiGithub className="mr-2" /> GitHub
                  </Button>
                </Link>
              </div>
              <div className="balance flex max-w-md flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold">Google Colab</h1>
                <p className="text-center text-muted-foreground">
                  Terima kasih kepada Google Colab yang telah memberikan layanan
                  gratis untuk kami gunakan dalam proyek ini. Sehingga kami
                  dapat menggunakan GPU yang disediakan untuk melatih model
                  kami.
                </p>
                <Link href="https://colab.research.google.com/" target="_blank">
                  <Button variant="outline">
                    <SiGooglecolab className="mr-2 text-yellow-400" /> Colab
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
