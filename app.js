// const number = document.getElementById("number")
let element = document.getElementById("center")
let button = document.getElementById("tlacitko")
let time = 0

let kostka = document.getElementById("kostka")

let pozice = 0
function animace(){
  let a = setTimeout(stopka,1000);
  let b = setInterval(anim,10)
  function anim(){
    pozice += 40
    kostka.style.transform = 'rotate(' + pozice + 'deg)';
    //console.log(pozice)
  }
  function stopka(){
    clearInterval(b)
  }
}

function play() {
  const audio = document.getElementById("audio");
  audio.play();
}

function losovani(){
  let randomCislo = Math.ceil(Math.random()*6)
  // number.innerText = randomCislo
  kostka.setAttribute("src", `img/${randomCislo}.svg`)
}

function pozadi(){
  let center = document.getElementById("center")
  center.classList.add("normal")
}

function losovat(){

  button.addEventListener('click', animace())
  element.classList.remove("normal");
  element.classList.remove("green");

  play()
  let a = setTimeout(cisteni,1000);
  let b = setInterval(losovani,50)

  function cisteni(){
    let center = document.getElementById("center")
    center.classList.add("green")
    clearInterval(b)
    let r = setTimeout(pozadi,250);
  }
}
