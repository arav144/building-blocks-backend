import React from "react";
import LayoutHome from "./components/LayoutHome";
import LoadingDots from "@/app/components/LoadingDots";

const loading = () => {
  return (
    <LayoutHome>
      <LoadingDots />
    </LayoutHome>
  );
};

export default loading;
