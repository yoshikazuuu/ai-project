"use client";

import { Button } from "@/components/ui/button";
import { FaArrowDown } from "react-icons/fa";

import Link from "next/link";
import { useState, useEffect } from "react";
import Accent from "@/components/accent";
import Image from "next/image";
import { HiSparkles } from "react-icons/hi2";

export default function Home() {
  const [egg, setEgg] = useState(false);
  return (
    <>
      <div className="absolute -z-10 -mt-[56px] h-screen w-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-yellow-400/30 via-red-50/0 transition-colors dark:from-cyan-600/30 dark:via-red-50/0" />
      <div className="layout">
        <section id="intro">
          <div className="-mt-[56px] flex h-screen w-full flex-col items-center justify-center gap-4 align-middle">
            <p className="bg-gradient-to-r from-purple-400 to-yellow-400 text-center text-2xl font-bold tracking-tight dark:bg-gradient-to-r dark:from-green-300 dark:via-blue-500 dark:to-purple-600">
              binus/ai
            </p>

            <h1 className="balance w-[102%] bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-center text-8xl font-extrabold tracking-tighter text-transparent  dark:bg-gradient-to-r dark:from-green-300 dark:to-purple-400">
              Feel the Pulse of Emotions{" "}
              <HiSparkles className="absolute inline-block text-4xl text-yellow-400" />
            </h1>

            <p className="balance w-2/3 text-center text-xl text-muted-foreground">
              Dengan kemampuan untuk mengenali{" "}
              <span className="inline-block bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text font-bold italic text-transparent dark:bg-gradient-to-r dark:from-green-300 dark:to-purple-400">
                5 jenis emosi yang berbeda,
              </span>{" "}
              aplikasi ini membuka peluang luas untuk pengembangan lebih lanjut
              dalam pemrosesan bahasa alami.
            </p>

            <div className="flex h-20 items-center justify-center align-middle">
              <div className="flex gap-2">
                <Link href="/emotion">
                  <Button
                    variant="default"
                    className="rounded-full font-extrabold"
                  >
                    Try it out! 🚀
                  </Button>
                </Link>
              </div>
            </div>

            <p className="text-md text-muted-foreground">
              Lihat bagaimana proses kami
              <Link href="#about">
                <FaArrowDown className="ml-1 inline-block animate-bounce" />
              </Link>
            </p>
          </div>
        </section>

        <section id="about" className="h-full w-full">
          <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold tracking-tight">
              🌐 <Accent>Powered by BERT Model</Accent>
            </h1>
            <p className="balance max-w-[48rem] text-center text-xl text-muted-foreground">
              "Feel the Pulse of Emotions" berdiri di atas teknologi{" "}
              <Accent className="font-bold">BERT</Accent>
              (Bidirectional Encoder Representations from Transformers).{" "}
              <Accent className="font-bold">BERT</Accent>, diperkenalkan oleh
              Google pada Oktober 2018, telah menjadi acuan utama dalam
              eksperimen Pemrosesan Bahasa Alami (NLP).
              <br />
              <br />
              Model ini dirancang dengan cermat menggunakan dua ukuran model:{" "}
              <Accent className="font-bold">BERTBASE</Accent>{" "}
              <span className="inline-block font-bold text-foreground">
                (110 juta parameter)
              </span>{" "}
              dan <Accent className="font-bold">BERTLARGE </Accent>
              <span className="inline-block font-bold text-foreground">
                (340 juta parameter)
              </span>
              . Keduanya telah dilatih pada dataset berukuran besar, termasuk
              Toronto BookCorpus dan Wikipedia bahasa Inggris.
            </p>
          </div>
        </section>

        <section id="parameter" className="h-full w-full">
          <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold tracking-tight">
              💡{" "}
              <Accent>
                Why <Accent className="font-bold">BERT</Accent>?
              </Accent>
            </h1>
            <p className="balance max-w-[48rem] text-center text-xl text-muted-foreground">
              <Accent className="font-bold">BERT</Accent> memungkinkan aplikasi
              kami untuk memahami konteks secara mendalam dan memberikan hasil
              yang lebih akurat. Dengan{" "}
              <span className="font-bold text-foreground">
                124,445,189 parameter
              </span>
              , model ini memiliki kapasitas besar untuk memproses dan
              menginterpretasikan makna di balik setiap kalimat.
            </p>
          </div>
        </section>

        <section id="dataset" className="h-full w-full">
          <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold tracking-tight">
              📊 <Accent>Data Training yang Solid</Accent>
            </h1>
            <div className="balance max-w-[48rem] text-center text-xl text-muted-foreground">
              Kami memastikan kualitas analisis emosi dengan data training yang
              mencakup.
              <div className="my-8 grid grid-cols-4 rounded-md border bg-slate-200 text-foreground shadow-lg dark:bg-slate-900">
                <div className="flex flex-col items-center justify-center gap-2 p-7 align-middle">
                  <p className="text-4xl font-extrabold">674,923</p>
                  <p className="text-muted-foreground">karakter</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 border-l p-7 align-middle">
                  <p className="text-4xl font-extrabold">14,722</p>
                  <p className="text-muted-foreground">kata</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 border-l p-7 align-middle">
                  <p className="text-4xl font-extrabold">3,524</p>
                  <p className="text-muted-foreground">paragraf</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 border-l p-7 align-middle">
                  <p className="text-4xl font-extrabold">720</p>{" "}
                  <p className="text-muted-foreground">kalimat</p>
                </div>
              </div>{" "}
              Data ini mencerminkan keragaman bahasa dan konteks, memastikan
              aplikasi dapat menangkap nuansa emosi secara menyeluruh.
            </div>
          </div>
        </section>

        <section id="dataset" className="h-full w-full">
          <div className="mt-20  flex h-fit flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold tracking-tight">
              🔄 <Accent>Proses Training yang Teliti</Accent>
            </h1>
            <p className="balance max-w-[48rem] text-center text-xl text-muted-foreground">
              Menggunakan teknik fine-tuning dari data, menggabungkan mesin
              pembelajaran dan teknik deep learning, serta transformer. Dengan
              demikian, aplikasi kami memastikan pemahaman yang mendalam
              terhadap konten yang kompleks.
            </p>
            <Image
              src="/training.png"
              alt="Training"
              width={500}
              height={500}
            />

            <h1 className="text-2xl font-bold tracking-tight">
              Un-trained vs Trained
            </h1>
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col items-center justify-center gap-2 rounded-md border p-5 shadow-lg">
                <p className="text-xl font-extrabold">Aku sayang ibu!</p>
                <p className="text-sm text-muted-foreground">Emotion: Hate</p>
                <p
                  className="w-fit rounded-md border px-2 py-1 text-center text-sm font-light"
                  style={{ backgroundColor: `hsla(${36.441}, 100%, 50%)` }}
                >
                  <span className="font-bold text-background">
                    Confidence: 36.441%
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-md border p-5 shadow-lg">
                <p className="text-xl font-extrabold">Aku sayang ibu!</p>
                <p className="text-sm text-muted-foreground">Emotion: Love</p>
                <p
                  className="w-fit rounded-md border px-2 py-1 text-center text-sm font-light"
                  style={{ backgroundColor: `hsla(${99.702}, 100%, 50%)` }}
                >
                  <span className="font-bold text-background">
                    Confidence: 99.702%
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="start" className="h-full w-full">
          <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold tracking-tight">
              🚀 <Accent>Mari kita coba!</Accent>
            </h1>
            <p className="balance max-w-[48rem] text-center text-xl text-muted-foreground">
              Lansung saja, mari coba aplikasi kami!
            </p>
            <Link href="/emotion">
              <Button variant="default" className="rounded-full font-extrabold">
                Try it out! 🚀
              </Button>
            </Link>
          </div>
        </section>

        <footer className="flex h-fit flex-col items-center justify-center py-5 align-middle">
          <div className="flex gap-2 text-muted-foreground">
            Made with 💖 by{" "}
            <span
              onClick={() => setEgg(!egg)}
              className="-ml-1 cursor-pointer rounded-md px-1 py-[0.5] text-primary hover:bg-primary/20"
            >
              binus/ai.
            </span>
          </div>
          {egg && (
            <div className="my-5">
              <Link href="https://youtu.be/JTOM6fuXptg" target="_blank">
                <Image
                  src="/mijuki.webp"
                  alt="binus/ai"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          )}
        </footer>
      </div>
    </>
  );
}
