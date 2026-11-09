// Edit hotel details here — the whole site updates from this file.

export const hotel = {
  name: "UD PALACE",
  tagline: "COMFORT & HOSPITALITY",
  // Country code + number, no spaces or "+"
  phone: "910000000000",
  address: "Ajmer, Rajasthan – 305001",
  quote: "A Stay That Feels Like Home",
};

// Put image files in /public/images/ with these names
export const images = {
  hero: "hero.jpg",
  fort: "fort.jpg",
};

export const features = [
  { icon: "🛏️", label: "Comfortable Rooms" },
  { icon: "📶", label: "Free Wi-Fi" },
  { icon: "🍴", label: "In-House Dining" },
  { icon: "🚗", label: "Prime Location" },
  { icon: "🛎️", label: "Warm Hospitality" },
];

export const rooms = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    description: "Ideal for a comfortable stay.",
    price: 2499,
    image: "deluxe.jpg",
    fallback: "linear-gradient(135deg,#8a6a4a,#d8b98d)",
  },
  {
    id: "executive",
    name: "Executive Room",
    description: "More space, more comfort.",
    price: 3299,
    image: "executive.jpg",
    fallback: "linear-gradient(135deg,#5d6f7c,#c7b08a)",
  },
  {
    id: "family",
    name: "Family Suite",
    description: "Spacious stay for the whole family.",
    price: 4299,
    image: "family.jpg",
    fallback: "linear-gradient(135deg,#7a5a3a,#e0c49a)",
  },
];
