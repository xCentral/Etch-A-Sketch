

const container = document.querySelector('.container');
let df = new DocumentFragment();

for(let i = 0; i < 256; i++) {   
const makeGrid = document.createElement('div');
makeGrid.classList.add('makeGrid');
makeGrid.textContent = 'x';
df.appendChild(makeGrid);
}

container.appendChild(df);


let weDraw = document.querySelectorAll('.makeGrid');
weDraw.forEach((makeGrid)=>{ 
    makeGrid.addEventListener('mouseover', () => {
        makeGrid.style.backgroundColor ="red"});
});

