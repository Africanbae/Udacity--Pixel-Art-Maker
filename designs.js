function clearGrid() {
    const colRow = document.querySelectorAll("tr");
    colRow.forEach((row) => {
        row.remove();
    });
}
const pixelCanvas = document.getElementById("pixelCanvas");
const sizePicker = document.getElementById("sizePicker");
// Select color input
let color = document.getElementById("colorPicker");
// Your code goes here!
function makeGrid(event) {
    event.preventDefault();
    //reset canvas back to default
    pixelCanvas.innerHTML = '';
    //clears the grid
    clearGrid();
    //select size input
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    //loop that create canvas by iterating over height and width
    for (let i = 1; i <= height; i++){
        //loop over each row
        const row = document.createElement("tr");
        for (let j = 1; j <= width; j++) {
            //loop over each column
            const col = document.createElement("td");
            col.id = "col-i-j";
            row.appendChild(col);
        }
        pixelCanvas.appendChild(row);
    }
}
// on color selection return color
pixelCanvas.addEventListener("click", function (event){
    event.target.style.backgroundColor = color.value;
});
// pick size on submit of form
sizePicker.addEventListener("submit", makeGrid);
