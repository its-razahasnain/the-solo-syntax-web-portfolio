"use client";

import { useEffect, useState } from "react";

type TypewriterGradientProps = {
  words: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export function TypewriterGradient({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: TypewriterGradientProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const delay =
      !isDeleting && displayText === currentWord
        ? pauseDuration
        : isDeleting
          ? deletingSpeed
          : typingSpeed;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (displayText === currentWord) {
          setIsDeleting(true);
          return;
        }

        setDisplayText(currentWord.slice(0, displayText.length + 1));
        return;
      }

      if (displayText.length > 0) {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        return;
      }

      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % words.length);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span
      aria-live="polite"
      className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent"
    >
      {displayText}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.08em] bg-gradient-to-b from-blue-400 to-purple-500 align-baseline opacity-80"
      />
    </span>
  );
}