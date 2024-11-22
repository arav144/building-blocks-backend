/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const Notfound = () => {
  return (
    <section className="flex justify-center items-center h-full flex-col gap-8">
      <img
        src="https://res.cloudinary.com/dyyfqn5lq/image/upload/v1691064566/assets/cooderx%20page%20not%20found.png"
        alt="404 page not found"
        className="w-1/3"
        loading="lazy"
        decoding="async"
      />

      <Link
        href="/"
        className="flex gap-2 justify-between items-center bg-darkBlue text-light py-2 px-4 rounded-xl break-all"
      >
        <span className="font-bold">Go Back</span>
        <FiExternalLink className="text-xl" />
      </Link>
    </section>
  );
};

export default Notfound;
