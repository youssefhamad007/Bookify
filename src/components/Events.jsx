"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click";
import book1 from '../assets/book1.jpg'
import book2 from '../assets/book2.jpg'
import book3 from '../assets/book3.jpg'
import book4 from '../assets/book4.jpg'
import book5 from "../assets/book5.jpg"
import book6 from  "../assets/book6.jpg"
import book7 from '../assets/book7.jpg'
import book8 from '../assets/book8.jpg'
import book9 from '../assets/book9.jpg'
import book10 from '../assets/book10.jpg'
import book11 from '../assets/book11.jpg'
import book12 from '../assets/book12.jpg'
import book13 from '../assets/book13.jpg'
import book14 from '../assets/book14.jpg'
import book15 from "../assets/book15.jpg"
export function EventsCard({ onAddToCart }) {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base">
                      {active.description}
                    </motion.p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        <strong>Writer:</strong> {active.Writer}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      <strong>Price:</strong> {active.price}
                    </p>
                  </div>

                  <motion.button
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => onAddToCart(active)}
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-md hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-400 cursor-pointer"
                    >
                      {active.ctaText}
                    </motion.button>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul
        className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-center" />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
      
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "A young wizard's first year at a magical school",
    title: "Harry Potter and the Sorcerer's Stone",
    src: `${book1}`,
    ctaText: "Read Now",
    Writer: "J.K. Rowling",
    price: "$20",
    content: () => (
      <p>
        Follow Harry as he discovers a world of spells, creatures, and danger in the hidden halls of Hogwarts. A global phenomenon that started it all.
      </p>
    ),
  },
  {
    description: "A dystopian world under total surveillance",
    title: "1984",
    src: `${book2}`,
    ctaText: "Read Now",
    Writer: "George Orwell",
    price: "$15",
    content: () => (
      <p>
        Big Brother is watching. Dive into a grim future where freedom is outlawed and thoughts are controlled by a tyrannical regime.
      </p>
    ),
  },
  {
    description: "A sharp, satirical take on love and society",
    title: "Pride and Prejudice",
    src: `${book3}`,
    ctaText: "Read Now",
    Writer: "Jane Austen",
    price: "$18",
    content: () => (
      <p>
        Elizabeth Bennet faces social expectations and personal pride while navigating the complexities of romance and family.
      </p>
    ),
  },
  {
    description: "A child's resilience in Nazi Germany",
    title: "The Book Thief",
    src: `${book4}`,
    ctaText: "Read Now",
    Writer: "Markus Zusak",
    price: "$17",
    content: () => (
      <p>
        Told through the eyes of Death, this story follows Liesel, a girl who finds refuge and meaning through books during wartime.
      </p>
    ),
  },
  {
    description: "An unassuming hobbit's epic adventure",
    title: "The Hobbit",
    src: `${book5}`,
    ctaText: "Read Now",
    Writer: "J.R.R. Tolkien",
    price: "$22",
    content: () => (
      <p>
        Join Bilbo Baggins as he journeys far from home to face dragons, dwarves, and destiny in this fantasy classic.
      </p>
    ),
  },
  {
    description: "A tale of friendship and guilt across decades",
    title: "The Kite Runner",
    src: `${book6}`,
    ctaText: "Read Now",
    Writer: "Khaled Hosseini",
    price: "$16",
    content: () => (
      <p>
        Amir's journey from privileged childhood to redemption is set against the backdrop of a changing Afghanistan.
      </p>
    ),
  },
  {
    description: "A commuter's view hides a dark mystery",
    title: "The Girl on the Train",
    src: `${book7}`,
    ctaText: "Read Now",
    Writer: "Paula Hawkins",
    price: "$14",
    content: () => (
      <p>
        Rachel sees something shocking from the train—but her fragile memory may be hiding more than she knows in this gripping thriller.
      </p>
    ),
  },
  {
    description: "A raw and emotional journey through abuse and healing",
    title: "It Ends With Us",
    src: `${book8}`,
    ctaText: "Read Now",
    Writer: "Colleen Hoover",
    price: "$19",
    content: () => (
      <p>
        Lily navigates love, loss, and hard truths as she’s forced to break cycles and define her own strength.
      </p>
    ),
  },
  {
    description: "Small changes, big transformations",
    title: "Atomic Habits",
    src: `${book9}`,
    ctaText: "Read Now",
    Writer: "James Clear",
    price: "$21",
    content: () => (
      <p>
        Discover a proven framework to build better habits, break bad ones, and unlock your full potential over time.
      </p>
    ),
  },
  {
    description: "A memoir of grace, ambition, and public life",
    title: "Becoming",
    src: `${book10}`,
    ctaText: "Read Now",
    Writer: "Michelle Obama",
    price: "$25",
    content: () => (
      <p>
        From the South Side of Chicago to the White House, Michelle Obama shares her deeply personal journey of empowerment and hope.
      </p>
    ),
  },
  {
    description: "A deadly game of survival in a divided society",
    title: "The Hunger Games",
    src: `${book11}`,
    ctaText: "Read Now",
    Writer: "Suzanne Collins",
    price: "$17",
    content: () => (
      <p>
        Katniss Everdeen volunteers in place of her sister for a brutal televised fight to the death—and sparks a revolution.
      </p>
    ),
  },
  {
    description: "A future without pain, love, or individuality",
    title: "Brave New World",
    src: `${book12}`,
    ctaText: "Read Now",
    Writer: "Aldous Huxley",
    price: "$16",
    content: () => (
      <p>
        Enter a hyper-controlled society where happiness is manufactured and human freedom is extinct—but at what cost?
      </p>
    ),
  },
  {
    description: "Grump meets kindness in a story of healing",
    title: "A Man Called Ove",
    src: `${book13}`,
    ctaText: "Read Now",
    Writer: "Fredrik Backman",
    price: "$18",
    content: () => (
      <p>
        Ove's quiet, bitter routine is interrupted by new neighbors and old memories in this heartwarming and funny story of second chances.
      </p>
    ),
  },
  {
    description: "Hollywood glamour, scandal, and secrets",
    title: "The Seven Husbands of Evelyn Hugo",
    src: `${book14}`,
    ctaText: "Read Now",
    Writer: "Taylor Jenkins Reid",
    price: "$20",
    content: () => (
      <p>
        Legendary actress Evelyn Hugo finally tells her truth, revealing a legacy shaped by love, lies, and power in old Hollywood.
      </p>
    ),
  },
  {
    description: "A second chance to explore alternate lives",
    title: "The Midnight Library",
    src: `${book15}`,
    ctaText: "Read Now",
    Writer: "Matt Haig",
    price: "$19",
    content: () => (
      <p>
        Between life and death lies a library where Nora Seed can see what might have been—but is any life truly perfect?
      </p>
    ),
  },
];



