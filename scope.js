var x= 90;//Global Variable
function Diff(){
    var y=23;//Local Variable
    console.log(x-y);
}
Diff();
console.log(x-y);//'y' won't be defined as it is local to function 'Diff'