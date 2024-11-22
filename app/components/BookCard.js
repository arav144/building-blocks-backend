/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ProgramCard = ({ items }) => {
  return (
    <div className="max-w-[24rem] bg-zinc-300 flex flex-col p-5 shadow-xl rounded-3xl space-y-4 relative break-all md:m-8 m-2 backdrop-blur-3xl bg-opacity-60">
      <img
        alt={items.title}
        className="m-auto w-full block object-cover object-center rounded-xl sm:w-96"
        src={items.image}
        loading="lazy"
        decoding="async"
      />

      <div className="space-y-3 w-full font-medium">
        <h3 className="text-xs tracking-widest font-bold bg-blue rounded py-1 w-fit px-2 text-light">
          {items.subject}
        </h3>
        <h2 className="text-xl font-bold">{items.title}</h2>
        <p>{items.description}</p>
        <p className="font-bold flex gap-4 text-lg flex-wrap">
          <span className="text-purple">Grade: {items.grade} </span>
          <span className="text-zinc-500">{items.author}</span>
          <span className="bg-green-400 px-2 text-light rounded">
            {items.slug}
          </span>
        </p>
        <p>{items.orientation}</p>
        <p>{items.edition}</p>
        <Link passHref={true} href={items ? items?.uri : "/"} className="flex">
          <button className="rounded-full px-4 py-1 bg-purple w-full text-light hover:bg-darkBlue transition-all duration-200">
            View Book
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
