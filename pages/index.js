import Head from "next/head";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Skills from "../components/Skills";
// import { useState } from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mikuláš Richter Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <Navbar />
          <Header />
          <Skills />
        </section>
        <section></section>
      </main>
    </div>
  );
}
