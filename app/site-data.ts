export type Product = {
  slug: string;
  code: string;
  name: string;
  category: "bikes" | "jeeps" | "cars" | "scooters";
  categoryLabel: string;
  image: string;
  gallery: string[];
  description: string;
};

export const categories = [
  {
    slug: "bikes",
    name: "Kidz Ride on Bikes",
    image: "/legacy/images/bike-1/01.jpg",
    intro: "Two wheels, a whole lot of confidence.",
  },
  {
    slug: "jeeps",
    name: "Kidz Ride on Jeeps",
    image: "/legacy/images/jeep-1/01.jpg",
    intro: "Adventure-ready electric rides for little explorers.",
  },
  {
    slug: "cars",
    name: "Kidz Ride on Cars",
    image: "/legacy/images/car/01.jpg",
    intro: "Big-car feeling in a child-sized electric ride.",
  },
  {
    slug: "scooters",
    name: "Kidz Ride on Scooters",
    image: "/legacy/images/scooter/01.jpg",
    intro: "Easy, exciting first rides for growing riders.",
  },
];

export const homepageFeatures = [
  {
    title: "6V - 2 Battery",
    copy: "Long-lasting dual battery system.",
    mark: "⚡",
  },
  {
    title: "LED Headlight",
    copy: "With multicolor front lights.",
    mark: "✦",
  },
  {
    title: "Safety Wheels",
    copy: "Stable support system.",
    mark: "◉",
  },
  {
    title: "Foot Pedal Brake",
    copy: "Easy-to-use braking system.",
    mark: "◌",
  },
  {
    title: "USB MP3",
    copy: "With one panel control.",
    mark: "♫",
  },
  {
    title: "Openable Doors",
    copy: "Realistic car experience.",
    mark: "↔",
  },
  {
    title: "All Models",
    copy: "Ride-on bikes and jeeps for every play style.",
    mark: "✚",
  },
  {
    title: "Lights in Wheels",
    copy: "Eye-catching wheel lights while riding.",
    mark: "◌",
  },
  {
    title: "Range of Colours",
    copy: "Multiple attractive colour options available.",
    mark: "●",
  },
  {
    title: "Comfortable Seat",
    copy: "Designed for relaxed everyday play.",
    mark: "⌂",
  },
  {
    title: "Age Group 1 to 12 Years",
    copy: "Options for toddlers and growing kids.",
    mark: "01",
  },
];

export const homepageTestimonials = [
  {
    name: "Ritu Sharma",
    initials: "RS",
    quote:
      "The finish feels premium, the ride feels stable, and my son loves the lights.",
  },
  {
    name: "Pradeep Nair",
    initials: "PN",
    quote:
      "Our jeep instantly became the evening favourite. Strong build and smooth controls.",
  },
  {
    name: "Sunita Patel",
    initials: "SP",
    quote:
      "The team helped us choose the right model. It feels safe, sturdy and special.",
  },
  {
    name: "Arjun Kapoor",
    initials: "AK",
    quote:
      "Beautiful detailing and a proper luxury toy feel. It is a birthday centerpiece.",
  },
];

export const distributorTestimonials = [
  {
    name: "Bengaluru Retail Partner",
    initials: "BR",
    role: "Verified retail partner",
    quote:
      "The range is easy to present, the product support is clear, and families respond to the quality.",
  },
  {
    name: "South India Distributor",
    initials: "SI",
    role: "Authorized distributor",
    quote:
      "Kidz Auto gives us dependable models, practical guidance and a collection retailers can believe in.",
  },
  {
    name: "Family Toy Store",
    initials: "FT",
    role: "Retail partner",
    quote:
      "The bikes and jeeps make a strong display, and the team helps us match each family to the right ride.",
  },
];

export const homepageGallery = [
  { image: "/legacy/images/about.jpg", alt: "Kidz Auto ride-on collection" },
  { image: "/legacy/images/car1/01.jpg", alt: "Kidz Auto ride-on car" },
  { image: "/legacy/images/jeep-1/01.jpg", alt: "Kidz Auto ride-on jeep" },
  { image: "/legacy/images/bike-1/01.jpg", alt: "Kidz Auto ride-on bike" },
  {
    image: "/legacy/images/scooter/red/01.jpg",
    alt: "Kidz Auto ride-on scooter",
  },
];

export const products: Product[] = [
  {
    slug: "kab-y1200",
    code: "KAB-Y1200",
    name: "KAB Y1200",
    category: "bikes",
    categoryLabel: "Kidz Ride on Bikes",
    image: "/legacy/images/bike-1/01.jpg",
    gallery: [
      "/legacy/images/bike-1/01.jpg",
      "/legacy/images/bike-1/02.jpg",
      "/legacy/images/bike-1/03.jpg",
      "/legacy/images/bike-1/04.jpg",
    ],
    description:
      "A compact electric bike made for confident first rides, with a sturdy frame and easy controls.",
  },
  {
    slug: "kab-y1600",
    code: "KAB-Y1600",
    name: "KAB Y1600",
    category: "bikes",
    categoryLabel: "Kidz Ride on Bikes",
    image: "/legacy/images/bike-1/010.jpg",
    gallery: [
      "/legacy/images/bike-1/010.jpg",
      "/legacy/images/bike-1/011.jpg",
      "/legacy/images/bike-1/09.jpg",
      "/legacy/images/bike-2/01.jpg",
    ],
    description:
      "A feature-rich ride-on bike with the comfort and detail that make every outing feel special.",
  },
  {
    slug: "kab-y9188",
    code: "KAB-Y9188",
    name: "KAB Y9188",
    category: "scooters",
    categoryLabel: "Kidz Ride on Scooters",
    image: "/legacy/images/scooter/red/01.jpg",
    gallery: [
      "/legacy/images/scooter/red/01.jpg",
      "/legacy/images/scooter/red/02.jpg",
      "/legacy/images/scooter/red/03.jpg",
      "/legacy/images/scooter/blue/01.jpg",
    ],
    description:
      "A playful electric scooter with a low, approachable profile for everyday adventures.",
  },
  {
    slug: "kab-j2188",
    code: "KAB-J2188",
    name: "KAB J2188",
    category: "jeeps",
    categoryLabel: "Kidz Ride on Jeeps",
    image: "/legacy/images/jeep-1/01.jpg",
    gallery: [
      "/legacy/images/jeep-1/01.jpg",
      "/legacy/images/jeep-1/02.jpg",
      "/legacy/images/jeep-1/03.jpg",
      "/legacy/images/jeep-1/04.jpg",
    ],
    description:
      "A bold, child-sized jeep with the styling and presence of a real off-road classic.",
  },
  {
    slug: "kab-j6188",
    code: "KAB-J6188",
    name: "KAB J6188",
    category: "jeeps",
    categoryLabel: "Kidz Ride on Jeeps",
    image: "/legacy/images/jeep5/02.jpg",
    gallery: [
      "/legacy/images/jeep5/02.jpg",
      "/legacy/images/jeep5/03.jpg",
      "/legacy/images/jeep5/04.jpg",
      "/legacy/images/jeep5/05.jpg",
    ],
    description:
      "A roomy electric jeep that brings a little more adventure to the family driveway.",
  },
  {
    slug: "kab-r2100",
    code: "KAB-R2100",
    name: "KAB R2100",
    category: "jeeps",
    categoryLabel: "Kidz Ride on Jeeps",
    image: "/legacy/images/jeep5/06.jpg",
    gallery: [
      "/legacy/images/jeep5/06.jpg",
      "/legacy/images/jeep5/07.jpg",
      "/legacy/images/jeep5/08.jpg",
      "/legacy/images/jeep5/09.jpg",
    ],
    description:
      "A rugged-looking ride for children who are happiest when the next turn is unknown.",
  },
  {
    slug: "kab-cf8",
    code: "KAB-CF8",
    name: "KAB CF8",
    category: "cars",
    categoryLabel: "Kidz Ride on Cars",
    image: "/legacy/images/car1/01.jpg",
    gallery: [
      "/legacy/images/car1/01.jpg",
      "/legacy/images/car1/02.jpg",
      "/legacy/images/car2/01.jpg",
      "/legacy/images/car3/01.jpg",
    ],
    description:
      "A polished ride-on car with a familiar shape and a memorable first-drive feeling.",
  },
];

export function productsForCategory(slug: string) {
  return products.filter((product) => product.category === slug);
}
