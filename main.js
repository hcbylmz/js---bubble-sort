//let array = [10,7,9,3,2,1,5,6,4,8,12,11];
let array = [12,11,10,9,8,7,6,5,4,3,2,1];
let array1 = Array.from(array);
let big = true;
let arrayToHtml = document.querySelector(".change");
let newPara = document.querySelector("div");
let passValue=1;
arrayToHtml.textContent = "Orginal array = "+ array1;


while (big){
  big = false;
  for (let i = 0 ; i<array.length-1; i++){
    if (array[i]>array[i+1]){
      let temp = array[i];
      array[i] = array [i+1];
      array[i+1]=temp;
      big = true;
    }
  }
var para = document.createElement("p");
var node = document.createTextNode("Pass - "+ passValue + " =  "+ array);
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);
passValue ++ ;
}
