/* eslint-disable @next/next/no-img-element */
import React from "react";

const UserCard = ({ items }) => {
  return (
    <div className="bg-zinc-300 flex flex-col p-5 shadow-xl rounded-3xl space-y-4 relative break-all md:m-8 m-2 backdrop-blur-3xl bg-opacity-60">
      <div className="space-y-3 w-max font-medium">
        <h2 className="text-xl">
          <span className="font-bold"> Name - </span>
          {items.name}
        </h2>
        <h2 className="text-xl">
          <span className="font-bold"> Email - </span>
          {items.email}
        </h2>
        <h2 className="text-xl">
          <span className="font-bold"> Phone - </span>
          {items.phone}
        </h2>
      </div>
    </div>
  );
};

export default UserCard;
