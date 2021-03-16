let C = document.getElementById('C');
let F = document.getElementById('F');
let D = document.getElementById('D');
let E = document.getElementById('E');


let button = document.getElementById('button');
let result = document.getElementById('result');
let result1 = document.getElementById('result1');


button.onclick = function() {


let c1 = Number(C.value);
console.log(c1);
let f1 = Number(F.value);
console.log(f1);
let d1 = Number(D.value);
console.log(d1);
let e1 = Number(E.value);
console.log(e1);

let q = 1;

  let summ = Math.pow(c1,2) + Math.tan(f1) * (c1 + q) + Math.pow(d1,2);
  console.log(summ);
  let summ1 = Math.pow(e1,d1) + Math.log(c1) / +  Math.sqrt(c1*d1+f1);
  console.log(summ1);





  result.value = summ;
  result1.value = summ1;



}
