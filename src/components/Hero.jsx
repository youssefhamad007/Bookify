"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
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
export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "The Last Light of Eloria",
    thumbnail: `${book1}`,
    description: <p>
      A sweeping fantasy epic set in a fractured kingdom where magic is fading, and a reluctant heroine must reignite the light to save her world.
    </p>,
    price: "$19.99",
    style: "Fantasy",
    brand: "Mythic Press",
    availability: "In Stock"
  },
  {
    title: "Waves Beneath the Sky",
    thumbnail: `${book2}`,
    description: <p>
      A lyrical tale of love and loss, this maritime drama explores one woman’s journey to reconnect with her past across oceans and time.
    </p>,
    price: "$17.50",
    style: "Literary Fiction",
    brand: "Oceanic House",
    availability: "Limited Stock"
  },
  {
    title: "Quantum Mirage",
    thumbnail: `${book3}`,
    description: <p>
      Dive into a mind-bending sci-fi thriller where reality glitches, timelines blur, and a physicist races against time to save existence itself.
    </p>,
    price: "$22.00",
    style: "Science Fiction",
    brand: "NovaBound",
    availability: "In Stock"
  },
  {
    title: "The Puzzle of Black Hollow",
    thumbnail: `${book4}`,
    description: <p>
      A chilling mystery set in a fog-covered village, where secrets buried in the past resurface through a forgotten diary and a lost girl’s whispers.
    </p>,
    price: "$16.00",
    style: "Mystery",
    brand: "Dark Trail Books",
    availability: "In Stock"
  },
  {
    title: "Echoes of 327 Maple Lane",
    thumbnail: `${book5}`,
    description: <p>
      A gripping psychological thriller that unfolds through dual timelines in a house with a dark history and one secret too dangerous to forget.
    </p>,
    price: "$18.75",
    style: "Thriller",
    brand: "Silver Ink Press",
    availability: "In Stock"
  },
  {
    title: "Running with Shadows",
    thumbnail: `${book6}`,
    description: <p>
      A heart-racing espionage novel following a rogue agent and a cyber hacker entangled in a global conspiracy that could topple empires.
    </p>,
    price: "$21.00",
    style: "Spy Thriller",
    brand: "Cipher & Co.",
    availability: "Backordered"
  },
  {
    title: "Skateparks and Summer Nights",
    thumbnail: `${book7}`,
    description: <p>
      A coming-of-age romance set in the 90s, filled with sun-soaked skateparks, cassette tapes, and the thrill of first love.
    </p>,
    price: "$14.99",
    style: "Young Adult",
    brand: "Sunbeam Books",
    availability: "In Stock"
  },
  {
    title: "Iron Will",
    thumbnail: `${book8}`,
    description: <p>
      A powerful biography of a world-class athlete who overcame impossible odds to become a legend in sports history and human resilience.
    </p>,
    price: "$20.00",
    style: "Biography",
    brand: "Endurance Press",
    availability: "Limited Stock"
  },
  {
    title: "Concrete Roses",
    thumbnail: `${book9}`,
    description: <p>
      An urban novel capturing the raw reality of street life, family ties, and ambition in the heart of a bustling inner city.
    </p>,
    price: "$15.00",
    style: "Urban Fiction",
    brand: "Grit House Publishing",
    availability: "In Stock"
  },
  {
    title: "Trail of Embers",
    thumbnail: `${book10}`,
    description: <p>
      A survival story set in the unforgiving wilderness where two strangers must face the elements—and their pasts—to make it out alive.
    </p>,
    price: "$17.25",
    style: "Adventure",
    brand: "Wild Track Books",
    availability: "In Stock"
  },
  {
    title: "Boots and Ballads",
    thumbnail: `${book11}`,
    description: <p>
      A soulful collection of country poetry that blends rustic charm with modern heartache, perfect for lovers of rhythm and roots.
    </p>,
    price: "$13.95",
    style: "Poetry",
    brand: "Prairie Verse Press",
    availability: "In Stock"
  },
  {
    title: "Cloud Atlas Rising",
    thumbnail: `${book12}`,
    description: <p>
      A speculative journey across parallel lives and shifting identities, this novel challenges our notions of time, memory, and destiny.
    </p>,
    price: "$19.50",
    style: "Speculative Fiction",
    brand: "Eclipse House",
    availability: "In Stock"
  },
  {
    title: "The Soft Steps of Silence",
    thumbnail: `${book13}`,
    description: <p>
      A tender memoir tracing the author’s path through grief, healing, and the rediscovery of joy in the quietest corners of life.
    </p>,
    price: "$18.00",
    style: "Memoir",
    brand: "Gentle Press",
    availability: "Backordered"
  },
  {
    title: "The Timber Journal",
    thumbnail: `${book14}`,
    description: <p>
      A rugged field guide and reflective narrative chronicling one man’s journey building a cabin—and a life—deep in the northern woods.
    </p>,
    price: "$24.99",
    style: "Nature Writing",
    brand: "Woodland Reads",
    availability: "In Stock"
  },
  {
    title: "Casual Tales for Rainy Days",
    thumbnail: `${book15}`,
    description: <p>
      A charming collection of light-hearted short stories perfect for cozy afternoons, filled with humor, heart, and everyday magic.
    </p>,
    price: "$12.00",
    style: "Short Stories",
    brand: "Cozy Corner Books",
    availability: "In Stock"
  }
];

