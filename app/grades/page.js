"use client";

import { useEffect, useState } from "react";
import LoadingDots from "../components/LoadingDots";
import axios from "axios";
import LayoutHome from "../components/LayoutHome";
import GradeCard from "../components/GradeCard";

function Pages() {
  const [grades, setGrades] = useState([]);
  const [isGradesLoaded, setIsGradesLoaded] = useState(false);

  useEffect(() => {
    if (grades.length < 1) {
      axios.get("/api/grades").then((response) => {
        setGrades(response.data);
        setIsGradesLoaded(true);
      });
    }
  }, [grades, isGradesLoaded]);

  return (
    <LayoutHome>
      {/* Grade section */}
      <section className="flex flex-wrap items-center justify-center mb-12 mt-4 bg-green-200 rounded-3xl p-4 gap-8">
        <div className="flex justify-between items-center w-full text-light flex-wrap">
          <h2 className="relative text-2xl md:text-3xl font-bold text-darkBlue">
            Grades
            <svg
              className="absolute -bottom-[20%] right-0 md:inline-block hidden"
              width="100%"
              viewBox="0 0 635 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0152 20C82.0548 16.9623 144.875 12.0904 207.988 12.4899C336.564 13.3038 465.114 20 593.693 20C607.135 20 620.578 20 634.021 20C638.885 20 624.293 20 619.429 20C510.816 20 402.28 17.1213 293.685 12.4899C202.575 8.60417 -70.7849 0.842195 20.3418 2.14582C147.951 3.97135 275.402 15.5268 403.062 14.332C454.198 13.8534 505.892 15.9049 556.946 7.81381C560.662 7.22488 564.525 6.01275 568.222 4.69642"
                stroke="#5CA9FF"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </h2>
        </div>

        {grades.length < 1 ? (
          !isGradesLoaded ? (
            <LoadingDots />
          ) : (
            <h1 className="text-center">No Grades is uploaded yet</h1>
          )
        ) : (
          // card
          grades.map((items) => <GradeCard key={items.grade} items={items} />)
        )}
      </section>
    </LayoutHome>
  );
}

export default Pages;
