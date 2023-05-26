let count = 0;
document.getElementById("inc").addEventListener("click",()=>{
    count++;
    document.getElementById("disp").innerHTML = count;
})
document.getElementById("dec").addEventListener("click",()=>{
    count--;
    document.getElementById("disp").innerHTML = count;
})
document.getElementById("res").addEventListener("click",()=>{
    count=0;
    document.getElementById("disp").innerHTML = "00";
})