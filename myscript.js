let setNum = 8;
let trigger = false;

const container = document.querySelector(".container");

function gridd() {
  let df = new DocumentFragment();
  for (let i = 0; i < setNum * setNum; i++) {
    const makeGrid = document.createElement("div");
    makeGrid.classList.add("makeGrid");
    makeGrid.textContent = "";
    df.appendChild(makeGrid);
  }
  container.appendChild(df);

  let weDraw = document.querySelectorAll(".makeGrid");
  weDraw.forEach((makeGrid) => {
    
    makeGrid.addEventListener("mouseover", () => {
        if(trigger === true){
      makeGrid.style.backgroundColor = "red";
   } });
  });
}

document.querySelector(".setNum").addEventListener("click", function () {
  let numPrompt = prompt("Provide a number between 8-64");
  if (numPrompt > 64) {
    prompt("Not within the number range, try again!");
  } else {
    setNum = parseInt(numPrompt);
    removeGrids();
    let htmlStyles = window.getComputedStyle(document.querySelector("html"));
    parseInt(htmlStyles.getPropertyValue("--colNum"));
    //container.style.gridTemplate= `repeat(${setNum}, 1fr)`;
    document.documentElement.style.setProperty(`--colNum`,setNum)
    gridd();
  }
});

function removeGrids() {
  let removeGrids = document.querySelectorAll(".makeGrid");
  removeGrids.forEach((removeGrids) => {
    removeGrids.remove();
  });
}

document.addEventListener('mousedown', function() {
    trigger = true;})

    document.addEventListener('mouseup', function(){
        trigger = false;
    });
    

gridd();
