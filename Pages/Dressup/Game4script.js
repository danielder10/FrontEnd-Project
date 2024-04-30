/**Testing */
document.addEventListener("click", myFunction);

function myFunction() {
  // document.getElementById("demo").innerHTML = "Hello World";
  document.getElementById("demo").classList.add("hairOne");
}

/**Actual Stuff */
let hairCount = 0
let eyeCount = 0


//Hair
const hairRotate = () => {
  console.log("hair")
  if (hairCount < 7) {
    hairCount++
  } else {
    hairCount = 0
  }
  updateHair()
}

const updateHair = () => {
  switch (hairCount) {
    case 0:
      document.getElementById("hair").classList.add("")
      break;
    case 1:
      document.getElementById("hair").classList.add("hairOne")
      break;
    case 2:
      document.getElementById("hair").classList.remove("hairOne")
      document.getElementById("hair").classList.add("hairTwo")
      break;
    case 3:
      document.getElementById("hair").classList.remove("hairTwo")
      document.getElementById("hair").classList.add("hairThree")
      break;
    case 4:
      document.getElementById("hair").classList.remove("hairThree")
      document.getElementById("hair").classList.add("hairFour")
      break;
    case 5:
      document.getElementById("hair").classList.remove("hairFour")
      document.getElementById("hair").classList.add("hairFive")
      break;
    case 6:
      document.getElementById("hair").classList.remove("hairFive")
      hairCount = 0
    default:
      break;
  }
}

//Eye
const eyeCount = () => {
  console.log("eye")
  if (eyeCount < 7) {
    eyeCount++
  } else {
    eyeCount = 0
  }
  updateEye()
}

const hair = document.getElementById("hair")
const hairButton = document.querySelector("#changeHair")

hairButton.addEventListener("click", hairRotate)
updateHair();
