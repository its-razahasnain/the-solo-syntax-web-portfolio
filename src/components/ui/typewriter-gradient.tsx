"use client";

import { useEffect, useRef } from "react";

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
  const textRef = useRef<HTMLSpanElement>(null);
  const liveRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    const liveElement = liveRef.current;

    if (!textElement || words.length === 0) {
      return;
    }

    let wordIndex = 0;
    let displayText = "";
    let isDeleting = false;
    let timeoutId: number;

    const tick = () => {
      const currentWord = words[wordIndex] ?? "";

      if (!isDeleting && displayText === currentWord) {
        isDeleting = true;
        timeoutId = window.setTimeout(tick, pauseDuration);
        return;
      }

      if (isDeleting) {
        if (displayText.length > 0) {
          displayText = currentWord.slice(0, displayText.length - 1);
          textElement.textContent = displayText;

          timeoutId = window.setTimeout(tick, deletingSpeed);
          return;
        }

        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;

        if (liveElement) {
          liveElement.textContent = words[wordIndex] ?? "";
        }

        timeoutId = window.setTimeout(tick, typingSpeed);
        return;
      }

      displayText = currentWord.slice(0, displayText.length + 1);
      textElement.textContent = displayText;

      timeoutId = window.setTimeout(tick, typingSpeed);
    };

    textElement.textContent = "";

    if (liveElement) {
      liveElement.textContent = words[0] ?? "";
    }

    timeoutId = window.setTimeout(tick, typingSpeed);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <>
      <span
        aria-hidden="true"
        className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent"
      >
        <span ref={textRef} />
        <span
          aria-hidden="true"
          className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.08em] bg-gradient-to-b from-blue-400 to-purple-500 align-baseline opacity-80"
        />
      </span>

      <span
        ref={liveRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
    </>
  );
}