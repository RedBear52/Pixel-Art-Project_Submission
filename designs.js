/*
DECLARING GLOBAL VARIABLES:
Finding each element by Id and then storing each in its own variable.
*/
const inputColor = document.getElementById("colorpicker");
const inputWidth = document.getElementById("inputwidth");
const inputHeight = document.getElementById("inputheight");
const inputSize = document.getElementById("sizepicker");
const gridLayout = document.getElementById("pixelcanvas");
const whiteOut = document.getElementById("erasebutton");
const clearGrid = document.getElementById("clearbutton");
/*
ADDING EVENT LISTERERS:
Applying addEventListener method to relevant variables(targets), defining the type of event(submit, click, etc.) &
defining the listener(action) to be taken via an inline function definition.
*/
inputSize.addEventListener('submit', function(event) {
  event.preventDefault(); //Prevent grid from immediately disappearing once the event listener has finished firing
  makeGrid(inputHeight.value, inputWidth.value); //calls the makeGrid funcion with the user's inputs as the arguments
});

clearGrid.addEventListener('click', function(event) {
    gridLayout.innerHTML = " "; // A handy and efficient way to clear the grid using innerHTML propery.
});

whiteOut.addEventListener('click', function(event) {
  inputColor.value = "#ffffff"; // sets the color value to white once the button is clicked.
});
/*
When size is submitted by the user, call makeGrid()
LINE BY LINE BREAKDOWN OF MAKEGRID FUNCTION:
Define function and parameters
  Find table element by ID and store in variable('table')
  Use handy innerHTML to clear the table element(the grid) before running the loop
  Create for loop that runs # of times user inputted in 'height' field
    Create new row element and store it in newRow variable
    Call appendChild method on table variable with newRow as argument
    Create InnerLoop that runs # of times user inputted in 'width' field
      Create a td element and store it in newCell variable
      Set background color of cell to 'white' (necessary to differentiate grid from page bg color)
      Call appendChild method on current row with newCell as argument (adds cell to row)
      Apply addEventListener to newCell: target=newCell | type='click' | listener=function(change color based on user's input)
*/
function makeGrid(height, width) {
  let table = document.getElementById("pixelcanvas");
  table.innerHTML = " ";
  for (var r = 0; r < height; r++) {
    let newRow = document.createElement('tr');
    table.appendChild(newRow);
    for (var c = 0; c < width; c++) {
    let newCell = document.createElement('td');
    newCell.style.backgroundColor="white";
    newRow.appendChild(newCell);
    newCell.addEventListener('click', function(event) {
    event.target.style.backgroundColor = inputColor.value;
    });
  }
}
}
