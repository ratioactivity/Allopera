// === ALLNERA PARK PRESENTS: DINO OF THE DAY ===

// Wave 1 🦕
const dinoList = [
  { name: "Aardonyx", fact: "A transitional dinosaur between early bipeds and giant sauropods.", wiki: "https://en.wikipedia.org/wiki/Aardonyx" },
  { name: "Abelisaurus", fact: "A large carnivorous dinosaur from South America with short, bulldog-like skull.", wiki: "https://en.wikipedia.org/wiki/Abelisaurus" },
  { name: "Achelousaurus", fact: "A hornless relative of Triceratops with a rough boss on its nose.", wiki: "https://en.wikipedia.org/wiki/Achelousaurus" },
  { name: "Achillobator", fact: "A raptor with massive claws and strong legs named after Achilles.", wiki: "https://en.wikipedia.org/wiki/Achillobator" },
  { name: "Acrocanthosaurus", fact: "Recognized by tall neural spines that formed a ridge along its back.", wiki: "https://en.wikipedia.org/wiki/Acrocanthosaurus" },
  { name: "Aegyptosaurus", fact: "A long-necked dinosaur from Egypt, destroyed during WWII bombings.", wiki: "https://en.wikipedia.org/wiki/Aegyptosaurus" },
  { name: "Afrovenator", fact: "One of Africa’s most complete theropods; name means 'African hunter.'", wiki: "https://en.wikipedia.org/wiki/Afrovenator" },
  { name: "Agilisaurus", fact: "A small, agile herbivore that could sprint on two legs.", wiki: "https://en.wikipedia.org/wiki/Agilisaurus" },
  { name: "Alamosaurus", fact: "One of the last sauropods before the extinction event.", wiki: "https://en.wikipedia.org/wiki/Alamosaurus" },
  { name: "Albertaceratops", fact: "A horned dinosaur with long brow horns similar to Triceratops.", wiki: "https://en.wikipedia.org/wiki/Albertaceratops" },
  { name: "Albertosaurus", fact: "A close relative of T. rex but smaller and faster.", wiki: "https://en.wikipedia.org/wiki/Albertosaurus" },
  { name: "Alectrosaurus", fact: "A lesser-known Asian tyrannosauroid with long limbs built for speed.", wiki: "https://en.wikipedia.org/wiki/Alectrosaurus" },
  { name: "Alioramus", fact: "A long-snouted tyrannosaur known from Mongolia.", wiki: "https://en.wikipedia.org/wiki/Alioramus" },
  { name: "Allosaurus", fact: "The apex predator of the Late Jurassic; sleek, strong, and efficient.", wiki: "https://en.wikipedia.org/wiki/Allosaurus" },
  { name: "Alvarezsaurus", fact: "A tiny dinosaur with one giant claw per hand, possibly for digging insects.", wiki: "https://en.wikipedia.org/wiki/Alvarezsaurus" },
  { name: "Amargasaurus", fact: "Had twin rows of spines along its neck that may have supported a sail.", wiki: "https://en.wikipedia.org/wiki/Amargasaurus" },
  { name: "Ammosaurus", fact: "A small plant-eater that may have walked on two or four legs.", wiki: "https://en.wikipedia.org/wiki/Ammosaurus" },
  { name: "Ampelosaurus", fact: "A European sauropod covered in armor-like osteoderms.", wiki: "https://en.wikipedia.org/wiki/Ampelosaurus" },
  { name: "Amygdalodon", fact: "One of the earliest known sauropods from South America.", wiki: "https://en.wikipedia.org/wiki/Amygdalodon" },
  { name: "Anchiceratops", fact: "Had a large frill with ornate ridges and two long brow horns.", wiki: "https://en.wikipedia.org/wiki/Anchiceratops" },
  { name: "Anchiornis", fact: "A feathered dinosaur that could glide before true flight evolved.", wiki: "https://en.wikipedia.org/wiki/Anchiornis" },
  { name: "Anchisaurus", fact: "One of the earliest plant-eating dinosaurs, small and lightweight.", wiki: "https://en.wikipedia.org/wiki/Anchisaurus" },
  { name: "Ankylosaurus", fact: "The living tank of the Late Cretaceous, armored and wielding a tail club.", wiki: "https://en.wikipedia.org/wiki/Ankylosaurus" },
  { name: "Anserimimus", fact: "A fast, ostrich-like dinosaur with strong arms and claws.", wiki: "https://en.wikipedia.org/wiki/Anserimimus" },
  { name: "Antarctosaurus", fact: "A sauropod discovered in South America, despite its icy name.", wiki: "https://en.wikipedia.org/wiki/Antarctosaurus" },
  { name: "Apatosaurus", fact: "Once mixed up with Brontosaurus; its neck vertebrae were massive.", wiki: "https://en.wikipedia.org/wiki/Apatosaurus" },
  { name: "Aquilops", fact: "The earliest known horned dinosaur in North America.", wiki: "https://en.wikipedia.org/wiki/Aquilops" },
  { name: "Aragosaurus", fact: "A large plant-eater from Spain’s Early Cretaceous.", wiki: "https://en.wikipedia.org/wiki/Aragosaurus" },
  { name: "Aralosaurus", fact: "A hadrosaur with a bony crest, discovered in Kazakhstan.", wiki: "https://en.wikipedia.org/wiki/Aralosaurus" },
  { name: "Archaeoceratops", fact: "An early ceratopsian showing the first steps toward horns.", wiki: "https://en.wikipedia.org/wiki/Archaeoceratops" }
];

// === Dino Logic ===
function getDinoOfTheDay() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  const dino = dinoList[dayOfYear % dinoList.length];
  return dino;
}

function showDino() {
  const dino = getDinoOfTheDay();
  const container = document.getElementById("dino-info");
  if (dino) {
    container.innerHTML = `
      <h3>${dino.name.toUpperCase()}</h3>
      <p>${dino.fact}</p>
      <a href="${dino.wiki}" target="_blank">Learn More</a>
    `;
  } else {
    container.innerHTML = "<p>No dinosaur data available!</p>";
  }
}

document.addEventListener("DOMContentLoaded", showDino);
