/* eslint-disable @next/next/no-img-element */
import React from "react";

const GradeCard = ({ items }) => {
  return (
    <div className="bg-zinc-300 flex flex-col p-5 shadow-xl rounded-3xl space-y-4 relative break-all md:m-8 m-2 backdrop-blur-3xl bg-opacity-60">
      <img
        alt={items.grade}
        className="m-auto w-full block object-cover object-center rounded-xl max-w-[24rem] sm:w-48"
        src={items.image}
        loading="lazy"
        decoding="async"
      />

      <div className="space-y-3 w-full font-medium">
        <h2 className="text-xl font-bold">Grade - {items.grade}</h2>
      </div>
    </div>
  );
};

export default GradeCard;
