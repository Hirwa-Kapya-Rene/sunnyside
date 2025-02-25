//selector

//document.querySelector('h4').style.background="red";
/*const balise = document.querySelector('h4');

console.log(balise)

const btn = document.querySelector('#btn1');

console.log(btn)*/

const questContainer = document.querySelector('.click-event');
questContainer.addEventListener("click", ()=> {
  //alert("Done");
  questContainer.classList.add("container-clicked")
})

questContainer.style.borderRadius = "100px";

const btn = document.querySelector('#btn1');
btn.addEventListener("click", ()=> {
  console.log("BTC");
})
