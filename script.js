let noOfCells = 16; // default size of grid

function makegrid(){

    const container = document.querySelector(".grid-container"); // select the container

    const cellHeight = (window.innerHeight / noOfCells) - 1; // gets the windows max height which in my case is 670px
                    // divides it on the number of cells we wanna have and minus 1px because of the gap in between
    const cellWidth = cellHeight;

    for(let i = 0; i < noOfCells*noOfCells; i++) // creats 256 divs
    {
        const block = document.createElement('div');
        block.style.width = cellWidth + "px";// 5.5%
        block.style.height = cellHeight + "px";
        block.classList.add('cell');
        block.style.backgroundColor = 'black';
        container.appendChild(block);
    }

    const cells = document.querySelectorAll('.grid-container .cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseenter',
        function changeColor(){
            cell.style.transition = '0s';
            /*
            let x = Math.floor(Math.random()*255);
            let y =  Math.floor(Math.random()*255);
            let z = Math.floor(Math.random()*255);
            cell.style.backgroundColor = 
            "#"+
            (x).toString(16)+
            (y).toString(16)+
            (z).toString(16); // complete random rgb*/
            cell.style.backgroundColor = 'cyan';
            cell.style.transform = 'scale(1.5, 1.5)';
        });
    });
    
    cells.forEach(cell => {
        cell.addEventListener('mouseleave',
        function changeColor(){
            cell.style.transform = 'scale(1, 1)';
            cell.style.transition = '10s';
            cell.style.backgroundColor = "black";
        });
    });
}

makegrid(); // make a grid initially

function removeGrid()
{
    let grid = document.querySelector('.grid-container'); // select the grid wala container
    while(grid.firstChild)
    {
        grid.removeChild(grid.firstChild);
    }
}

function newgrid()
{
    // remove existing grid
    removeGrid();

    // make new grid
    makegrid();
}

function getcells()
{
    noOfCells = parseInt(prompt("Enter number of squares per side: "));
    console.log(noOfCells);
    if(noOfCells > 100 || noOfCells < 1 || isNaN(noOfCells))
    {
        noOfCells = 16;
        alert("Enter a valid number! 1 - 100");
    }
    newgrid();
}

const button = document.querySelector('button');
button.addEventListener('click', getcells);