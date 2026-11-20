/**
 * All site content. Sources: the current stonecraftonline.com (address, facts, projects, green room, admirers, press),
 * Nate's notes (polished floors, countertops, restaurants & bars, insured) and the Google reviews supplied by the client.
 */

export const business = {
  name: "StoneCraft",
  tagline: "At StoneCraft, we always break the mold.",
  founder: "Scott Chasse",
  phone: "(207) 591-7711",
  phoneHref: "tel:+12075917711",
  email: "info@stonecraftonline.com",
  street: "10 Dunnell Rd",
  city: "Buxton",
  region: "ME",
  zip: "04093",
  siteUrl: "https://stonecraftonline.com", // current domain; keep in sync with gatsby-config.js, static/robots.txt, static/sitemap.xml
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=10+Dunnell+Rd+Buxton+ME+04093",
  googleReviews: "https://www.google.com/search?q=%2B1(207)591-7711#lrd=0x4cb2909479cc7011:0xd3bd0651158bdd06,1,,,,",
  areas: ["Buxton", "Gorham", "Portland", "Scarborough", "Freeport"],
};

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Our work", href: "/#work" },
  { label: "Reviews", href: "/reviews/" },
  { label: "In the press", href: "/in-the-press/" },
  { label: "About", href: "/#about" },
];

/** Read like a datasheet: these numbers are from the current site's "Concrete facts" page. */
export const specs = [
  { value: "8,000–10,000", unit: "psi", label: "Compressive strength" },
  { value: "1200", unit: "°F+", label: "Heat resistance of every color" },
  { value: "1,000+", unit: "lb", label: "On an unsupported 12-inch overhang" },
  { value: "UV-stable", unit: "", label: "Colors guaranteed not to fade" },
];

export const services = [
  {
    id: "floors",
    title: "Polished concrete floors",
    kicker: "Residential and commercial",
    img: "/images/floors.webp",
    w: 1200,
    h: 800,
    alt: "Sunlit room with a polished concrete floor",
    text: "Durable, low-maintenance floors for homes, shops, restaurants and bars, finished to the sheen and color you choose.",
    points: ["Homes, kitchens and living spaces", "Restaurants, bars and retail", "Stained and polished finishes"],
  },
  {
    id: "countertops",
    title: "Concrete countertops",
    kicker: "Kitchens and bathroom vanities",
    img: "/images/counters.webp",
    w: 1200,
    h: 800,
    img2: "/images/vanity.webp",
    w2: 1200,
    h2: 673,
    alt: "Kitchen island with a concrete countertop and wooden stools",
    alt2: "Bathroom vanity with a concrete top and a stone vessel sink",
    text: "One-of-a-kind counters, from kitchen islands to double vanities, with integrated sinks and drain boards, inlays and custom edges.",
    points: ["Integrated sinks, bowls and drain boards", "Inlays of glass, shells, copper and more", "Any shape, any color, up to 3 inches thick"],
  },
  {
    id: "commercial",
    title: "Restaurants and bars",
    kicker: "Commercial",
    img: "/images/bars.webp",
    w: 1200,
    h: 800,
    alt: "Concrete bar top in front of a bottle shelf",
    text: "Bar tops, counters and floors that take a full service every night and still look good, made to fit your room.",
    points: ["Bar tops and serving counters", "Floors that handle foot traffic", "Made to your layout and color"],
  },
];

export const alsoMade = [
  { label: "Concrete sinks", img: "/images/gallery/g05.webp" },
  { label: "Fireplace surrounds", img: "/images/gallery/g07.webp" },
  { label: "Outdoor fire pits", img: "/images/gallery/g06.webp" },
  { label: "Kitchens", img: "/images/gallery/g03.webp" },
  { label: "Tubs and showers", icon: "droplet" },
  { label: "Outdoor furniture", icon: "home" },
];

/** Photos from the current site's galleries. */
export const gallery = [
  { id: "g04", w: 460, h: 350, alt: "Curved concrete bar top in a restaurant" },
  { id: "g02", w: 343, h: 450, alt: "Glass-aggregate countertop with an agate inlay" },
  { id: "g01", w: 597, h: 450, alt: "Concrete trough sink with glass aggregate along the edge" },
  { id: "g03", w: 333, h: 450, alt: "Black concrete counter beside a six-burner range" },
  { id: "g09", w: 210, h: 450, alt: "Stained concrete floor in a commercial kitchen" },
  { id: "g05", w: 601, h: 450, alt: "Concrete counter with an integrated sink" },
  { id: "g07", w: 326, h: 450, alt: "Corner fireplace with a dark surround" },
  { id: "g06", w: 592, h: 450, alt: "Outdoor fire pit courtyard with a dark capped seat wall" },
  { id: "g10", w: 255, h: 450, alt: "Stained concrete floor beside stainless steel equipment" },
  { id: "g11", w: 414, h: 350, alt: "A stone fireplace and a dark concrete fireplace wall" },
  { id: "g08", w: 205, h: 450, alt: "Wall fireplace niche with a dark concrete face" },
];

/** From the current site's Projects page (wording lightly tidied). */
export const projects = [
  { title: "Azure Café Bar, Freeport", tag: "Bar top", colors: ["Jersey Cream"], text: "A bar you can lean on in your boots. Jersey Cream with glass inlays and a gray serpentine seam." },
  { title: "Law offices, Portland", tag: "Vanity", colors: [], text: "A rugged vanity with a view of the Portland skyline from the new offices of Drummond Woodsum on the Back Bay." },
  { title: "Iconic Delivery", tag: "Vanity", colors: [], text: "A double vanity that arrived through a third-floor window: a large-aggregate Iconic Ice made mostly from a local glass-maker's discards." },
  { title: "Portland loft fireplace", tag: "Fireplace", colors: ["Carbon"], text: "A carbon-colored surround with a relief design, the hottest spot in a cool downtown loft." },
  { title: "Strong and simple", tag: "Kitchen", colors: [], text: "Counters 3 inches thick, with a ramped drain board and grooves integrated into the piece and the seam kept to a minimum." },
  { title: "Collection as aggregate", tag: "Inlays", colors: [], text: "If it is meaningful to you and does not absorb water, we can probably make it part of the piece. Here, seashells and sea glass." },
  { title: "A perfect storm", tag: "Kitchen", colors: ["Nectarine", "Storm Green"], text: "A Nectarine acid stain on the island and Storm Green on the counters." },
  { title: "Match this", tag: "Kitchen", colors: ["Dovetail Gray"], text: "A bread-maker chose Dovetail Gray with glass marble inlays that match the cabinetry in her Down East home." },
  { title: "Ebony acid stain", tag: "Vanity", colors: ["Ebony"], text: "A white vessel sink sits on a custom vanity base with an Ebony acid-stained top." },
  { title: "Copper", tag: "Counters", colors: ["Copper"], text: "Patina-ed, aged copper, with flecks of copper inlaid to match the light fixtures." },
  { title: "Mossy", tag: "Counters", colors: ["Mossy"], text: "Moss-colored, because our counters are not rolling anywhere and they are not technically a stone." },
];

export const colors = [
  { name: "Jersey Cream", hex: "#efe2c6" },
  { name: "Moonlight", hex: "#d3d8dc" },
  { name: "Mirage", hex: "#aab5bc" },
  { name: "Smoke", hex: "#8e969b" },
  { name: "Dovetail Gray", hex: "#7b8386" },
  { name: "Dune", hex: "#cdb98e" },
  { name: "Carbon", hex: "#2d2e30" },
  { name: "Graphite", hex: "#4b4e52" },
  { name: "Storm Green", hex: "#516c5c" },
  { name: "Mossy", hex: "#6e7d3f" },
  { name: "Copper", hex: "#b06b3c" },
  { name: "Ebony", hex: "#181818" },
  { name: "Nectarine", hex: "#e98a5c" },
];

/** From the current site's "Concrete facts" page. */
export const facts = [
  { term: "Strength", icon: "zap", stat: { value: "8,000–10,000", unit: "psi" }, text: "Compressive strength that makes our counters one of the strongest solid surfaces available." },
  { term: "Heat resistance", icon: "flame", stat: { value: "1200", unit: "°F+" }, text: "Every color and our sealers are heat-resistant to at least 1200°F. A hot pad or a built-in trivet is still a good idea." },
  { term: "Reinforcement", icon: "layers", stat: { value: "1,000+", unit: "lb" }, text: "Lightweight carbon and PVA fibers let a slab carry over 1,000 pounds on an unsupported 12-inch overhang." },
  { term: "Scratch resistance", icon: "shield", text: "StoneCraft concrete is scratch-resistant. We still recommend a cutting board, or having us build one in, to protect your knives and the sealer." },
  { term: "Chipping", icon: "tool", text: "Any solid surface can chip. If one does, it can be filled or sanded back to its original look." },
  { term: "Cracking", icon: "activity", text: "As concrete cures it can develop fine shrinkage cracks. They are never structural, and with the color they add depth and character." },
  { term: "Staining", icon: "droplet", text: "Like any natural surface, concrete is not totally stainless. Our process and sealer minimize porosity so spills wipe up easily. Clean them up behind you." },
  {
    term: "Made to order",
    icon: "star",
    wide: true,
    text: "Every piece is made for its space, with colors that are guaranteed not to fade.",
    chips: ["Any shape", "Our own colors", "Acid stains", "Integrated bowls and drain boards", "Inlays", "Fiber-optic lighting", "Low-wattage heating elements"],
  },
];

/** From the current site's "Green room" page (claims are the client's own, dated 2017; confirm before launch). */
export const green = [
  { title: "Recycled glass", feature: true, stat: "85%", statLabel: "waste glass in Maine EcoStone", text: "Maine EcoStone is made with up to 85 percent waste glass collected in Greater Portland's recycling bins." },
  { title: "Local materials", text: "Our sand and stone come from local pits, and our cement from a nearby Maine plant, keeping transport to a minimum." },
  { title: "Bio-diesel trucks", text: "Our delivery trucks run on bio-diesel made in our shop from used fry oil donated by nearby restaurants." },
  { title: "Reuse and recycling", wide: true, text: "We reuse forms, molds and shop waste, and our counters can be reused as other concrete structures at the end of their life." },
];

export const reviews = {
  featured: {
    name: "Stephani F.",
    source: "Google review",
    excerpt:
      "After extensive flood damage to my condo, I was under tremendous pressure to get my concrete floors restored because nothing else in the renovation could move forward until they were finished. To make matters worse, two other concrete floor contractors backed out at the last minute, leaving me feeling completely defeated.",
    text: [
      "After extensive flood damage to my condo, I was under tremendous pressure to get my concrete floors restored because nothing else in the renovation could move forward until they were finished. To make matters worse, two other concrete floor contractors backed out at the last minute, leaving me feeling completely defeated.",
      "From our very first conversation, I had a feeling I’d found the right person for the job, and Scott proved me right. He went out of his way to help me through a difficult situation and made me feel like my project truly mattered. He was thoughtful, communicative, professional, and genuinely kind from start to finish.",
      "Because he was completely transforming the look of my concrete floors, not just repairing them, I was understandably nervous. Scott took the time to explain the process, how concrete behaves, and what I could realistically expect. His knowledge, honesty, and obvious passion for his craft immediately put me at ease. He listened to my concerns, answered every question patiently, and made sure I was happy with the final result.",
      "The floors look beautiful, but what I’ll remember just as much is how Scott treated me. In an industry where reliability and communication can be hard to find, he showed up when he said he would, did exactly what he promised, and truly cared about the outcome.",
      "I wholeheartedly recommend Scott, not only because of the quality of his work, but because he’s the kind of person you hope to find when you’re trusting someone with your home.",
    ],
  },
  google: [
    {
      name: "Melissa Curtis",
      title: "ABSOLUTELY BEAUTIFUL!",
      text: "I am so pleased with the work that Scott did at my new home. It was a couple years in the making due to us building the house on our own. He was amazing to deal with and he gave me great ideas! I was looking just to have the master bathroom sink/countertop done. I ended up having him do my fireplace hearth as well. When it came time for the job to be done, he was prompt with messaging, meeting me for measurements, getting the job done, installed and we couldn’t be happier. My husband and I highly recommend!!",
    },
    {
      name: "Rob Baril",
      title: "Great price",
      text: "My wife and I are so happy with our new concrete countertop from Stonecraft! Scott is responsive, easy to work with, and extremely talented. He gave us some creative ideas for our pool bar countertop, including an LED feature, it really pops! His workmanship is top notch and his close attention to details exceeded our expectations. I highly recommend Scott and Stonecraft Inc!!!",
    },
    {
      name: "Erica Gottshalk",
      title: "Great price",
      text: "Scott made some beautiful concrete counter tops for my store in Gorham. He was easy to work with, timely, and a good communicator. We are very satisfied with his work & will be hiring him again.",
    },
    {
      name: "Alice Chaplick",
      text: "Outstanding customer service from start to finish! Scott was professional, responsive, and went above and beyond to make sure I was happy. The quality of his work and product are excellent. Highly recommend this company!",
    },
    { name: "Rebecca West", text: "Scott was incredible. He worked with me to create the sink that I envisioned." },
    { name: "Rich Earle", tag: "Local Guide", text: "Custom built and installed a beautiful countertop. Came out as ordered and described." },
  ],
  admirers: [
    {
      name: "Barbara",
      place: "Durham, ME",
      text: "Scott and Kevin at Stone Craft turned what seemed like an impossible renovating nightmare into an absolutely beautiful and functional piece of art. Our 1830’s farm house presented a real challenge when we started to renovate our master bathroom. I wanted something that would appear traditional and yet accommodate more than one user. We had limited space and a sloped ceiling. Their solution of custom designing a trough sink that accommodated two pump looking faucets met all my criteria and then some. Kevin and Scott were a joy to work with and their ability to work with individual requirements in an economical way made for a wonderful experience. They worked closely with me from the beginning to the end of the project and met all deadlines as promised. Stone Craft’s a wonderful find when looking for something unique and beautifully created for your personal project.",
    },
    {
      name: "Colleen",
      place: "Oquossoc, ME",
      text: "Here are some photos of the sink in our finished kitchen. It looks fantastic and we receive compliments and comments on it constantly. Most guests think it is soapstone and are surprised to discover it is concrete. The color is a nice complement. I love the large custom size, shape and soap dish area.",
    },
    {
      name: "A family",
      place: "Little Sebago Lake, ME",
      text: "For years now, our family and friends have enjoyed so many beautiful moments around our countertops from StoneCraft. Their color, feel, and heartiness are perfect in our home.",
    },
    {
      name: "Mark & Becky Curtis",
      place: "Gorham, ME",
      text: "We searched high and low for a counter top product to use in our new home that wouldn’t just be the “cookie cutter” solution. Of all the materials we found, concrete allowed the most flexibility in color, design, and durability. Scott was able to come up with colors you can’t get anywhere else. Then, he made one of a kind counters for our game room that always bring the best compliments from any guest. It’s been 3 years, the counters look great and we’re still happy.",
    },
    { name: "Pam & Doug", place: "Gorham, ME", text: "Scott Chasse was so wonderful to work with. We found him to be very helpful and our bathroom vanity looks great." },
    {
      name: "Liz & Greg",
      place: "Portland, ME",
      text: "There’s something special about knowing that our countertops are one-of-a-kind. Our kitchen is the highlight of our home thanks to Scott’s passion and craftsmanship. We wanted something contemporary that would work within the authenticity of our Victorian home. StoneCraft helped us find that perfect balance with concrete. We looked at everything from natural stone to some of the high-end synthetics. Nothing met all of our needs until we found StoneCraft and learned about concrete.",
    },
    {
      name: "Kathie",
      place: "Woolwich, ME",
      text: "I get so many positive compliments on my concrete counters and sink from StoneCraft. They are unique, strong, functional and blend into my kitchen beautifully. The folks at StoneCraft are wonderful to work with, on time with their delivery and very customer oriented. Great to do business with!",
    },
    {
      name: "Ed & Sandy Valente",
      place: "Scarborough, ME",
      text: "We just can’t say enough about our new StoneCraft concrete countertops. The finish, texture, artistic edging and custom inlay all speak for themselves. Scott was very easy to work with and knowledgeable, offering many suggestions that contributed highly to the successful remodeling of our kitchen. He is an artisan by nature, and a true craftsman of the old school. In our “book”, StoneCraft goes highly recommended.",
    },
  ],
};

export const serviceOptions = ["Polished concrete floor", "Kitchen countertop", "Bathroom vanity or sink", "Restaurant or bar", "Fireplace, fire pit or outdoor piece", "Something else"];

/** From the press article. */
export const pull = {
  text: "There's a lot of different little flecks of color in there, and the bigger pieces look like glass and you can see down into them.",
  who: "Susan McGinty, on her new recycled-glass counter",
};

/** What reviewers mention most. */
export const mentions = ["Responsive", "On time", "Great ideas", "One-of-a-kind pieces", "Easy to work with"];
