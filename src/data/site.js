// Edit hotel details here — the whole site updates from this file.

export const hotel = {
  name: "UD PALACE",
  tagline: "COMFORT & HOSPITALITY",
  // Country code + number, no spaces or "+"  (used for Call and WhatsApp)
  phone: "918619602317",
  address: "Ajmer, Rajasthan – 305001",
  quote: "A Stay That Feels Like Home",
};
export const images = {
  hero: "hero.jpg",
};

// Put image files in /public/images/ with these names
export const heroSlides = [
  "hero.jpg",
  "main-building.jpg",
  "balcony-corridor.jpg",
  "hall.jpg",
  "stairs.jpg",
];
/* Nearby attractions shown in the "Why Stay Here" section */
export const attractions = [
  {
    icon: "🕌",
    title: "Ajmer Dargah Sharif",
    detail: "Less than 1 km away",
    photos: ["dargah-1.jpg", "dargah-2.jpg", "dargah-3.jpg"],
  },
  {
    icon: "🌊",
    title: "Ana Sagar Lake",
    detail: "Just 0.5 km away",
    photos: ["anasagar-1.jpg", "anasagar-2.jpg", "anasagar-3.jpg"],
  },
  {
    icon: "🛍️",
    title: "Mittal Mall",
    detail: "Less than 2 km away",
    photos: ["mittal-mall-1.jpg"],
  },
  {
    icon: "🚆",
    title: "Ajmer Railway Station",
    detail: "Less than 2 km away",
    photos: ["railway-1.jpg"],
  },
  {
    icon: "🏞️",
    title: "Pushkar",
    detail: "15 km away",
    photos: ["pushkar-1.jpg", "pushkar-2.jpg"],
  },
  {
    icon: "🏙️",
    title: "Main City Location",
    detail: "In the heart of Ajmer",
    photos: ["city-1.jpg", "city-2.jpg"],
  },
];
/* Photos shown in the Gallery section (files inside /public/images/) */
export const gallery = [
  { file: "main-building.jpg", caption: "Main Building" },
  { file: "balcony-corridor.jpg", caption: "Balcony & Corridor" },
  { file: "hall.jpg", caption: "Hall" },
  { file: "stairs.jpg", caption: "Stairs" },
];
export const features = [
  { icon: "🛏️", label: "Comfortable Rooms" },
  { icon: "🚘", label: "Free Parking" },
  { icon: "📶", label: "Free Wi-Fi" },  
  { icon: "🛎️", label: "Warm Hospitality" },
  { icon: "🚗", label: "Prime Location" },
];

/* Facilities that every room has */
const commonAmenities = [
  "24-hour front desk",
  "Telephone",
  "Smart TV",
  "Free Wi-Fi",
  "Shampoo, body wash & moisturiser",
  "Fresh towels",
  "Daily housekeeping",
];

/* Builds the facilities list: AC and mini fridge only where the room has them */
const facilities = ({ ac, fridge }) => [
  ...(ac ? ["Air conditioning"] : []),
  ...(fridge ? ["Mini fridge"] : []),
  ...commonAmenities,
];

/*
  ROOMS
  - tagline: short line shown on the card
  - facts:   quick facts (beds, guests, extra bed) shown in the details panel
  - note:    optional highlighted message in the details panel
  - images:  photos shown in the details gallery. Put the files in
             public/images/rooms/ with exactly these names. The first photo
             is also used on the card.
  - focus:   which part of the photo the card shows ("center 62%" = a bit lower)
*/
export const rooms = [
  {
    id: "suite",
    name: "Suite",
    tagline: "Max 3 adults · 1 free extra bed",
    description:
      "A bright, airy room with a plush double bed, warm wooden finishes and soft ambient ceiling lights. A comfortable, calm stay in the heart of Ajmer. One extra bed can be added for one person at no charge.",
    price: 1199,
    thumb: "rooms/suite-thumb.jpg",
    images: ["rooms/suite-1.jpg", "rooms/suite-2.jpg"],
    focus: "center 62%",
    fallback: "linear-gradient(135deg,#8a6a4a,#d8b98d)",
    facts: ["👥 Max 3 adults", "➕ 1 extra bed free"],
    amenities: facilities({ ac: true, fridge: false }),
  },
  {
    id: "super-suite",
    name: "Super Suite",
    tagline: "King bed · Mini fridge · Max 2 adults",
    description:
      "A comfortable room with a king-size bed and a mini fridge, well suited to couples. This room sleeps up to 2 adults and an extra bed cannot be added.",
    note: "Private bathroom, just outside the room, for your use only.",  
    price: 1399,
    images: [
      "rooms/super-suite-1.jpg",
      "rooms/super-suite-2.jpg",
      "rooms/super-suite-3.jpg",
      "rooms/super-suite-4.jpg",
    ],
    fallback: "linear-gradient(135deg,#6b4a30,#c7a77a)",
    facts: ["🛏️ King-size bed", "👥 Max 2 adults", "🚫 No extra bed"],
    amenities: facilities({ ac: true, fridge: true }),
  },
  {
    id: "large-twin",
    name: "Large Twin Room",
    tagline: "Double + single bed · Max 4 guests",
    description:
      "A roomy option for small groups and families, with one double bed and one single bed that comfortably sleep 3 adults. One extra bed can be added for free, taking the room to a maximum of 4 guests.",
    price: 1599,
    images: [
      "rooms/large-twin-1.jpg",
      "rooms/large-twin-2.jpg",
      "rooms/large-twin-3.jpg",
    ],
    fallback: "linear-gradient(135deg,#5d6f7c,#c7b08a)",
    facts: ["🛏️ 1 double + 1 single bed", "👥 Max 4 guests", "➕ 1 extra bed free"],
    amenities: facilities({ ac: true, fridge: false }),
  },
  {
    id: "superior-king",
    name: "Superior King Room",
    tagline: "Double bed · Mini fridge · Max 3 adults",
    description:
      "A comfortable room with a double bed and a mini fridge. Up to 3 adults can stay, with one extra bed added for free.",
    price: 1499,
    images: [
      "rooms/superior-king-1.jpg",
      "rooms/superior-king-2.jpg",
      "rooms/superior-king-3.jpg",
    ],
    fallback: "linear-gradient(135deg,#7a5a3a,#e0c49a)",
    facts: ["🛏️ 1 double bed", "👥 Max 3 adults", "➕ Extra bed free"],
    amenities: facilities({ ac: true, fridge: true }),
  },
  {
    id: "family-double",
    name: "Family Double Room",
    tagline: "3 double beds · Max 7 guests",
    description:
      "Our largest room, made for big families and groups, with 3 double beds. Up to 7 guests can stay, including one extra bed that can be added for free.",
    price: 2499,
    images: ["rooms/family-double-1.jpg", "rooms/family-double-2.jpg","rooms/family-double-3.jpg", "rooms/family-double-4.jpg"],
    fallback: "linear-gradient(135deg,#8a5f3a,#d9b98c)",
    facts: ["🛏️ 3 double beds", "👥 Max 7 guests", "➕ 1 extra bed free"],
    amenities: facilities({ ac: true, fridge: false }),
  },
  {
    id: "classic-quadruple",
    name: "Classic Quadruple Room",
    tagline: "Max 5 adults · Non-AC for now",
    description:
      "A simple, budget-friendly room for groups of friends or family, with space for up to 5 adults including one extra bed at no charge.",
    price: 1199,
    images: [
      "rooms/classic-quadruple-1.jpg",
      "rooms/classic-quadruple-2.jpg",
      "rooms/classic-quadruple-3.jpg",
    ],
    fallback: "linear-gradient(135deg,#6e5a46,#cdb594)",
    facts: ["👥 Max 5 adults", "➕ 1 extra bed free", "🌿 Non-AC"],
    note: "This room is non-AC for now. AC will be installed before summer.",
    amenities: facilities({ ac: false, fridge: false }),
  },
];
