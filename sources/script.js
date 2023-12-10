let generatorElement=document.querySelector("#form-container");
generatorElement.addEventListener("submit", generateQuote);

function generateQuote(event){
  event.preventDefault();

new Typewriter("#quote", {
  strings: "It does not do to dwell on dreams and forget to live.",
  autoStart: true,
  cursor: "",
  delay: 160,
});
}