const clear = document.querySelector(".clear");
const cap = document.querySelector(".cap");
const sort = document.querySelector(".sort");
const reverse = document.querySelector(".reverse");
const strip = document.querySelector(".strip");
const num = document.querySelector(".num");
const shuffle = document.querySelector(".shuffle");

const textarea = document.querySelector("textarea");

clear.addEventListener("click",() => {
    textarea.value = "";
})

cap.addEventListener("click",()=>{
    console.log("hello");
    let hello = textarea.value
    if(hello.toUpperCase() == hello){
        hello = hello.toLowerCase();
    }
    else{
        hello = hello.toUpperCase()
    }
    textarea.value = hello;
})

sort.addEventListener("click",()=>{
  const textAreaContent = textarea.value.trim();
textarea.value = textAreaContent.split("\n").sort().join("\n");
})

reverse.addEventListener("click",()=>{
  const textLines = textarea.value.trim().split("\n");
  let reversedlines = "";

  textLines.forEach((textLine) => {
    reversedlines += textLine.split("").reverse().join("") + "\n";
  });

  textarea.value = reversedlines;
})

strip.addEventListener("click",()=>{
  const textLines = textarea.value.split("\n");
  let strippedLines = "";
  console.log(textLines);
  textLines.forEach((textLine) => {
    if (textLine === "") {
      return;
    }
    strippedLines += textLine.trim() + "\n";
  });

  textarea.value = strippedLines;
});

num.addEventListener("click",()=>{
  const textLines = textarea.value.trim().split("\n");
  let numberAddedLines = "";

  textLines.forEach((textLine, index) => {
    numberAddedLines += `${index + 1})` + textLine + "\n";
  });

  textarea.value = numberAddedLines;
});

shuffle.addEventListener("click",()=>{
  const textLines = textarea.value.trim().split("\n");
  textarea.value = textLines.sort(() => Math.random() - 0.5).join("\n");
});