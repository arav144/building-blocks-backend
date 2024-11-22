"use client";

import Navbar from "@/app/components/Navbar";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function LayoutHome({ children }) {
  return (
    <main>
      <ProgressBar
        height="70px"
        color="#A778FF"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Navbar />
      <div className="my-20 ml-20 mr-4">{children}</div>
    </main>
  );
}
