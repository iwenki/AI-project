let generatorElement=document.querySelector("#form-container");
generatorElement.addEventListener("submit", generateQuote);

function generateQuote(event){
  event.preventDefault();
  let userFeedback=document.querySelector(".text-box");
  let apiKey = "cbc90ba0a21t28a990f44b7f6f3ea68o";
  let context =
    "You are an AI assistant that has read the Harry Potter series by J.K Rowling, The Alchemist by Paulo Coelho, The Lord of the Rings by John Ronald Reuel Tolkien and A Song of Ice and Fire series by George R. R. Martin. You have collected a wide variety of your favorite and meaningful quotes from these books.";
let prompt= `Please provide a short quote about ${userFeedback.value}.At the end of the quote, state the character, book and author from where the quote comes from.`;
let apiUrl =
  `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayQuote);


}
function displayQuote(response){
  new Typewriter("#quote", {
  strings: response.data.answer,
  autoStart: true,
  cursor: "",
  delay: 80,
});
}