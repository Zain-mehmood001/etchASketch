const container = document.querySelector(".grid-container"); // select the container
for(let i = 0; i < 16*16; i++) // creats 256 divs
{
    const block = document.createElement('div');
    block.style.width = '5.5%';// 5.5%
    block.style.height = '0';
    block.style.paddingBottom = '5.5%';     // 5.5%
    block.style.margin = '1.5px';
    block.textContent = i + 1;
    block.classList.add('cell');
    block.style.backgroundColor = 'gray';
    container.appendChild(block);
}

const cells = document.querySelectorAll('.grid-container .cell');
cells.forEach(cell => {
    cell.addEventListener('mouseenter',
    function changeColor(){
        //cell.style.transition = '0s';
        cell.style.backgroundColor = "lightblue";
    });
});
/*
cells.forEach(cell => {
    cell.addEventListener('mouseleave',
    function changeColor(){
        //cell.style.transition = '1.00s';
        cell.style.backgroundColor = "gray";
    });
});*/