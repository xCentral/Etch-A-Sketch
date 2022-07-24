let setNum = 8;
let trigger = false;

const container = document.querySelector(".container");

// Default function to set parameters
function createGrid() {
  let df = new DocumentFragment();
  for (let i = 0; i < setNum * setNum; i++) { // we multiply value with with value given by user, to createGrid
    const makeGrid = document.createElement("div");
    makeGrid.classList.add("makeGrid");
    makeGrid.textContent = "";
    df.appendChild(makeGrid);
  }
  container.appendChild(df);

  //Drawing only when the mouse is held down and hovering
  let weDraw = document.querySelectorAll(".makeGrid");
  weDraw.forEach((makeGrid) => {
    
    makeGrid.addEventListener("mouseover", () => {
        if(trigger === true){
      makeGrid.style.backgroundColor = "red";
   } });
  });
}
// prompt for our button, update to a slider in the future
document.querySelector(".setNum").addEventListener("click", function () {
  let numPrompt = prompt("Provide a number between 8-64");
  if (numPrompt > 64) {
    prompt("Not within the number range, try again!");
  } else {
    setNum = parseInt(numPrompt);
    removeGrids();
    let htmlStyles = window.getComputedStyle(document.querySelector("html"));
    parseInt(htmlStyles.getPropertyValue("--colNum")); // Changing directly to a property css
    document.documentElement.style.setProperty(`--colNum`,setNum)
    createGrid();
  }
});

// Grid reset function
function removeGrids() {
  let removeGrids = document.querySelectorAll(".makeGrid");
  removeGrids.forEach((removeGrids) => {
    removeGrids.remove();
  });
}

    document.addEventListener('mousedown', function() {
        trigger = true;
    });

    document.addEventListener('mouseup', function(){
        trigger = false;
    });
    

    createGrid();
