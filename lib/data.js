// Each entry has a search "query" used to fetch a real Pexels photo (see lib/pexels.js).
// If no API key is set, the emoji tile is shown instead.
export const heroQuery = "masala chai glass spices";
export const bannerQuery = "tea shop interior cozy";
export const storyQueries = ["chai whole spices", "samosa snacks plate", "banana fritters", "tea cup milk"];

export const menu = [
  { name: "Kadak chai", price: 15, desc: "Strong, milky and ginger-forward.", query: "indian tea glass milk", emoji: "☕", tone: "t1" },
  { name: "Masala chai", price: 20, desc: "Cardamom and black pepper.", query: "masala chai", emoji: "🫖", tone: "t2" },
  { name: "Filter coffee", price: 25, desc: "Served in a steel tumbler.", query: "south indian filter coffee", emoji: "🥛", tone: "t3" },
  { name: "Lemon tea", price: 20, desc: "Hot or iced, lightly sweet.", query: "lemon tea glass", emoji: "🍋", tone: "t4" },
  { name: "Banana fritters", price: 40, desc: "Four pieces, fried to order.", query: "banana fritters", emoji: "🍌", tone: "t1" },
  { name: "Veg puff", price: 25, desc: "Baked fresh every morning.", query: "puff pastry snack", emoji: "🥟", tone: "t2" },
  { name: "Egg roast bun", price: 45, desc: "Spiced egg in a soft bun.", query: "egg bun bakery", emoji: "🥚", tone: "t3" },
  { name: "Plum cake slice", price: 35, desc: "Baked in our own oven.", query: "plum cake slice", emoji: "🍰", tone: "t4" },
];

export const reviews = [
  { stars: 5, text: "The best kadak chai on this road. I stop here every morning before work.", name: "Rahul M.", note: "Regular since 2019" },
  { stars: 5, text: "Hot banana fritters and a clean, friendly shop. We bring the whole family.", name: "Divya S.", note: "Local resident" },
  { stars: 4, text: "Great plum cake. Get here early because the puffs sell out fast.", name: "Joseph K.", note: "Visits on weekends" },
];
