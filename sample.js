const b = document.getElementById('base');
const h = document.getElementById('height');
const button1 = document.getElementById('btn-triangle');
const area = document.getElementById('area');
const shape = document.getElementById('shapename');
button1.addEventListener('click',function(){
const result1 = document.createElement('h1');
if(b.value===null || h.value ===null){
    result1.innerText = "input value";
}
else{
    result1.innerText = shape.innerText+" "+"area is:"+b.value * h.value * 0.5+"cm";
}
 result1.style.color = "white"
 result1.style.backgroundColor ="green";
 result1.style.width = "300px";
 result1.style.height = "50px";
 result1.style.padding = "10px";
 result1.style.fontSize = "20px";
 result1.style.borderRadius = "10px";
 result1.style.marginBottom = "10px";
 result1.style.marginTop = "10px";
 b.value =" ";
 h.value = " ";

 area.appendChild(result1);
});