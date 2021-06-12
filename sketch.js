

var a = prompt("Enter the first variable: ");
var b = prompt("Enter the second variable: ");
function setup(){
  var button1 = createButton("click here to Swap");
  button1.mousePressed(swap);
  }


function draw()

{
}
function swap()
{
[a, b] = [b, a];
  console.log("value of a after swaping is ", +a);
  console.log("value of b after swaping is ", +b);

}
