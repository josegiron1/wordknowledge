import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import data from "../data.json";
import Image from "next/image";

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * data.cards.length);
  return data.cards[randomIndex];
}

const Home: NextPage = () => {
  const [randomCard, setRandomCard] = useState({ word: "", meaning: "" });

  useEffect(() => {
    setRandomCard(getRandomCard() || { word: "", meaning: "" });
  }, []);

  function getCard() {
    setRandomCard(getRandomCard() || { word: "", meaning: "" });
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
          getRandomCard={() => getCard()}
        />
        <footer className="absolute bottom-0 p-2 text-white flex gap-3">
          <SocialMediaItem
            href="https://www.linkedin.com/in/gironjose5/"
            src="/linkedin_logo_icon.svg"
            alt="LinkedIn"
            text="gironjose5"
          />
          <SocialMediaItem
            href="https://github.com/josegiron1"
            src="/social_github_icon.svg"
            alt="GitHub"
            text="josegiron1"
          />
        </footer>
      </main>
    </>
  );
};

function Flashcard({
  word,
  meaning,
  getRandomCard,
}: {
  word: string;
  meaning: string;
  getRandomCard: () => void;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex md:h-96 md:w-1/2 sm:w-2/3 sm:h-fit flex-col items-center justify-center">
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
      <button
        className="mt-4 rounded-md bg-white p-2 text-black"
        onClick={() => {
          if (!isFlipped) {
            getRandomCard();
          } else {
            setIsFlipped(false);
            getRandomCard();
          }
        }}
      >
        Next
      </button>
    </div>
  );
}

function SocialMediaItem({
  href,
  src,
  alt,
  text,
}: {
  href: string;
  src: string;
  alt: string;
  text: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center gap-2 hover:underline sm:flex-row"
    >
      <Image src={src} width={24} height={24} alt={alt} /> <span>{text}</span>
    </a>
  );
}

export default Home;
