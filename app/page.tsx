"use client";

import { useState } from "react";
import Image from "next/image";
import HeartsFloating from "@/Components/HeartsFloating";
import CircularGallery from "@/Components/CircularGallery";

export default function Home() {
  const [date, setDate] = useState("");
  const [tries, setTries] = useState(3);
  const [isTrue, setIsTrue] = useState(false); // set ko muna to true

  const [firstSection, setFirstSection] = useState(false);

  const onSubmit = () => {
    if (!date) {
      alert("Please select a date before submitting.");
      return;
    }

    if (date !== "2026-02-06") {
      setTries((prev) => prev - 1);

      if (tries - 1 === 2) {
        alert("wrong sweeeeetie, kaya mo yan!");
      }

      if (tries - 1 === 1) {
        alert("waaaaaaah baby last try nah ituh 😤");
      }

      if (tries - 1 === 0) {
        alert("hay baby");
      }

      setDate("");
      return;
    }

    alert("hmmm....");

    setIsTrue(true);
    console.log(`You have selected the date: ${date}`);
  };
  return (
    <main className="h-screen">
      {!isTrue && !firstSection && (
        <section className="h-full bg-gray-700">
          <div className="flex flex-col justify-center items-center h-full w-[80%] mx-auto">
            <h1
              className="text-red-500 text-3xl text-center mb-5"
              style={{ fontFamily: "var(--font-nosifer)" }}
            >
              Can you tell the right answer
              <br />
              <span className="text-7xl">?</span>
            </h1>
            <input
              type="date"
              placeholder="Date"
              className="input rounded-2xl w-full mb-5"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              max={new Date().toISOString().split("T")[0]}
              disabled={tries === 0}
            />
            {tries === 1 && (
              <p className="text-gray-500 mb-5">Hint: The night you said yes</p>
            )}
            <button
              className="btn btn-error btn-lg btn-soft rounded-3xl border-none"
              disabled={tries === 0}
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </section>
      )}

      {isTrue && (
        <section
          className="bg-pink-200 h-full animate-fade-in relative overflow-hidden"
          onClick={() => {
            setIsTrue(false);
            setFirstSection(true);
          }}
        >
          {/* Floating hearts */}
          <HeartsFloating />
          <div className="w-[80%] mx-auto flex flex-col justify-center items-center h-full relative z-10">
            <h1
              className="text-4xl text-red-500 font-bold"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              You got it right!
            </h1>
          </div>
        </section>
      )}

      {firstSection && (
        <section className="bg-pink-200 h-full animate-fade-in relative overflow-hidden">
          {/* Floating hearts */}
          <HeartsFloating />

          <div className="mx-auto flex flex-col justify-center items-center h-full relative z-10">
            <h1
              className="text-4xl text-red-500 font-bold text-center w-[80%]"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              Our first weeks of love
            </h1>

            <div className="h-100 w-full ">
              <CircularGallery
                scrollSpeed={1}
                items={[
                  { image: "1st.jpg", text: "First" },
                  { image: "2nd.jpg", text: "Second" },
                  { image: "3rd.jpg", text: "Third" },
                  { image: "4th.jpg", text: "Fourth" },
                  { image: "5th.jpg", text: "Fifth" },
                ]}
              />
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
