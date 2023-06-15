import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import data from "../data.json";

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * data.cards.length);
  return data.cards[randomIndex];
}

const Home: NextPage = () => {
  const [randomCard, setRandomCard] = useState({ word: "", meaning: "" });
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    setRandomCard(getRandomCard() || { word: "", meaning: "" });
  }, []);

  function flip() {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
    }
    , 500);
  }


  return (
    <>
      <Head>
        <title>Word Knowledge</title>
        <meta name="description" content="Army ASVAB Word Knowledge" />
        <link rel="icon" href="/wk.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0f0f0f] to-[#15162c]">
        <Flashcard
          word={randomCard?.word || ""}
          meaning={randomCard?.meaning || ""}
          flip={isFlipping}
        />
        <button
          className="mt-4 rounded-md bg-white p-2 text-black"
          onClick={() => {
            flip();
            setRandomCard(getRandomCard() || { word: "", meaning: "" });
          }}
        >
          Next
        </button>
      </main>
    </>
  );
};

function Flashcard({
  word,
  meaning,
  flip
}: {
  word: string;
  meaning: string;
  flip?: boolean;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (isFlipped === true && flip === true) {
      setIsFlipped(false);
    }
  }, [flip]);


  return (
    <div className="flex h-96 w-1/2 items-center justify-center">
      <div
        className={`card h-full w-full ${isFlipped ? "is-flipped" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-side front flex items-center justify-center rounded-md bg-white p-2 text-black">
          <p className="text-4xl">{word}</p>
        </div>
        <div className="card-side back flex items-center justify-center rounded-md bg-white p-2 text-black">
          <p className="text-4xl leading-normal">
            <mark className="bg-[#d4ff32]">{meaning}</mark>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
