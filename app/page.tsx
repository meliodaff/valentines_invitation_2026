"use client";

import { useState } from "react";
import Image from "next/image";
import HeartsFloating from "@/Components/HeartsFloating";
import CircularGallery from "@/Components/CircularGallery";
import Stack from "@/Components/Stack";
import DomeGallery from "@/Components/DomeGallery";

export default function Home() {
  const [date, setDate] = useState("");
  const [tries, setTries] = useState(3);
  const [isTrue, setIsTrue] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const [sheSaidYes, setSheSaidYes] = useState(false);
  const [firstSection, setFirstSection] = useState(false);
  const [secondSection, setSecondSection] = useState(false);
  const [thirdSection, setThirdSection] = useState(false);
  const [fourthSection, setFourthSection] = useState(false);
  const onSubmit = () => {
    if (!date) {
      alert("Please select a date before submitting.");
      return;
    }

    if (date !== "2024-08-11") {
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
      {!isTrue &&
        !firstSection &&
        !secondSection &&
        !thirdSection &&
        !fourthSection && (
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
                <p className="text-gray-500 mb-5">
                  Hint: The night you said yes
                </p>
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
            if (!isTapped) {
              setIsTapped(true);
            } else {
              setIsTrue(false);
              setFirstSection(true);
            }
          }}
        >
          {/* Floating hearts */}
          <HeartsFloating />
          <div className="w-[80%] mx-auto flex flex-col justify-center items-center h-full relative z-10">
            <h1
              className={`text-4xl text-red-500 font-bold ${isTapped ? "opacity-0" : "opacity-100"} duration-300 text-center`}
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              You got it right!
            </h1>

            <p
              style={{ fontFamily: "var(--font-pacifico)" }}
              className={`${isTapped ? "opacity-100" : "opacity-0"} duration-300 text-4xl text-red-500 font-bold text-center mt-5`}
            >
              Do you remember our firsts week of love?
            </p>
          </div>
        </section>
      )}

      {firstSection && (
        <section
          className="bg-pink-200 h-full animate-fade-in relative overflow-hidden"
          onClick={() => {
            console.log("das");
            setFirstSection(false);
            setSecondSection(true);
          }}
        >
          {/* Floating hearts */}
          <HeartsFloating />

          <div className="mx-auto flex flex-col justify-center items-center h-full relative z-10">
            <h1
              className="text-4xl text-red-500 font-bold text-center w-[80%]"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              This is how it looks like
            </h1>

            <div className="h-100 w-full ">
              <CircularGallery
                textColor="#e11d48"
                scrollSpeed={2}
                items={[
                  { image: "1st.jpg", text: "first cinema date" },
                  { image: "5th.jpg", text: "first new year together" },
                  { image: "4th.jpg", text: "first pizza date" },
                  { image: "6th.jpg", text: "first lego flower" },
                  { image: "7th.jpg", text: "first valentines day" },
                ]}
              />
            </div>
          </div>
        </section>
      )}
      {secondSection && (
        <section
          className="bg-pink-200 h-full animate-fade-in relative overflow-hidden"
          onClick={() => {
            setFirstSection(false);
            setSecondSection(false);
            setThirdSection(true);
          }}
        >
          {/* Floating hearts */}
          <HeartsFloating />

          <div className="mx-auto flex flex-col justify-center items-center h-full relative z-10">
            <h1
              className="text-2xl text-red-500 font-bold text-center w-[80%]"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              my silly litol girlfriend
            </h1>

            <div className="h-70 w-70">
              <Stack
                randomRotation={false}
                sensitivity={200}
                sendToBackOnClick={true}
                cards={[
                  "8th.jpg",
                  "9th.jpg",
                  "10th.jpg",
                  "11st.jpg",
                  "12nd.jpg",
                  "13rd.jpg",
                  "14th.jpg",
                  "15th.jpg",
                  "16th.jpg",
                  "17th.jpg",
                  "18th.jpg",
                  "19th.jpg",
                  "20th.jpg",
                  "21st.jpg",
                  "22nd.jpg",
                  "23rd.jpg",
                  "24th.jpg",
                  "25th.jpg",
                  "26th.jpg",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`card-${i + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ))}
                autoplay={false}
                autoplayDelay={3000}
                pauseOnHover={false}
              />
            </div>
            <p
              className="text-2xl text-red-500 font-semibold text-center w-[80%]"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              cotie awuawbh81h38921iodl;kasdnm
            </p>
          </div>
        </section>
      )}

      {thirdSection && (
        <section
          className="bg-pink-200 h-full animate-fade-in relative overflow-hidden"
          // onClick={() => {
          //   setThirdSection(false);
          // }}
        >
          {/* Floating hearts */}
          <HeartsFloating />

          <div className="mx-auto flex flex-col justify-center items-center h-full relative z-10">
            <h1
              className="text-2xl text-red-500 font-semibold text-center w-[80%]"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              we've been together in every valentine's day. now, im hoping that
              you would still want to celebrate it with me. Can you be my
              valentine this 2026, my baby?
            </h1>

            <div className="flex gap-5 mt-10 mb-5 items-center">
              <button
                className="btn btn-xl border-none btn-soft btn-error rounded-2xl"
                onClick={() => {
                  setSheSaidYes(true);

                  setTimeout(() => {
                    setThirdSection(false);
                    setFourthSection(true);
                  }, 3000);
                }}
              >
                Yes 🥰
              </button>
              <button
                className="btn btn-sm border-none btn-soft btn-error rounded-2xl btn-disabled"
                disabled
              >
                No 😡
              </button>
            </div>
            <p
              style={{ fontFamily: "var(--font-pacifico)" }}
              className={`text-4xl text-red-500 font-bold text-center w-[80%] duration-300 ${sheSaidYes ? "opacity-100" : "opacity-0"}`}
            >
              KYUKYUUU X AVOCADORIA DATE NAAAH <br /> <br /> WAAAAABYU BAAAABY
            </p>
          </div>
        </section>
      )}
      {fourthSection && (
        <section
          className="bg-pink-200 h-full animate-fade-in relative overflow-hidden"
          // onClick={() => {
          //   setThirdSection(false);
          // }}
        >
          {/* Floating hearts */}
          <HeartsFloating />

          <div className="mx-auto flex flex-col justify-center items-center h-full relative z-10">
            {/* <h1
              className="text-2xl text-red-500 font-semibold text-center w-[80%]"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              FOURTH SECTION
            </h1> */}
            <DomeGallery
              images={[
                "27th.jpg",
                "28th.jpg",
                "29th.jpg",
                "30th.jpg",
                "31st.jpg",
                "32nd.jpg",
                "33rd.jpg",
                "34th.jpg",
                "35th.jpg",
                "36th.jpg",
                "37th.jpg",
                "38th.jpg",
                "39th.jpg",
                "40th.jpg",
                "41st.jpg",
                "42nd.jpg",
                "43rd.jpg",
                "44th.jpg",
                "45th.jpg",
                "46th.jpg",
                "47th.jpg",
                "48th.jpg",
                "49th.jpg",
                "50th.jpg",
                "51st.jpg",
                "52nd.jpg",
                "53rd.jpg",
                "54th.jpg",
                "55th.jpg",
                "56th.jpg",
                "57th.jpg",
                "58th.jpg",
                "59th.jpg",
                "60th.jpg",
                "61st.jpg",
                "62nd.jpg",
                "63rd.jpg",
                "64th.jpg",
                "65th.jpg",
                "66th.jpg",
                "67th.jpg",
                "68th.jpg",
                "69th.jpg",
                "70th.jpg",
                "71st.jpg",
                "72nd.jpg",
                "73rd.jpg",
                "74th.jpg",
                "75th.jpg",
                "76th.jpg",
                "77th.jpg",
              ]}
              fit={1.5}
              minRadius={600}
              maxVerticalRotationDeg={0}
              segments={34}
              dragDampening={2}
              grayscale={false}
              openedImageHeight={"400px"}
              openedImageWidth={"300px"}
            />
          </div>
        </section>
      )}
    </main>
  );
}
