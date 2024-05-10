/**Testing */
document.addEventListener("click", myFunction);

function myFunction() {
  // document.getElementById("demo").innerHTML = "Hello World";
  document.getElementById("demo").classList.add("hairOne");
}

/**Actual Stuff */
let hairCount = 0
let eyesCount = 0
let clothesCount = 0
let pantsCount = 0
let AccessoriesCount = 0


//Counters
const hairRotate = () => {
  console.log("hair")
  if (hairCount < 5) {
    hairCount++
  } else {
    hairCount = 0
  }
  console.log(hairCount)
  updateHair();
};

const eyesRotate = () => {
  console.log("eyes");
  if (eyesCount < 4) {
    eyesCount++
  } else {
    eyesCount = 0
  }
  console.log(eyesCount)
  updateEyes();
}

const clothesRotate = () => {
  console.log("clothes");
  if (clothesCount < 3) {
    clothesCount++
  } else {
    clothesCount = 0
  }
  console.log(clothesCount)
  updateClothes();
}

const pantsRotate = () => {
  console.log("pants");
  if (pantsCount < 2) {
    pantsCount++
  } else {
    pantsCount = 0
  }
  console.log(pantsCount)
  updatePants();
}

const accessoryRotate = () => {
  console.log("accessories");
  if (AccessoriesCount < 2) {
    AccessoriesCount++
  } else {
  AccessoriesCount = 0
  }
  console.log(AccessoriesCount)
  updateAccessories();
}

//Updaters
const updateHair = () => {
  switch (hairCount) {
    case 0:
      document.getElementById("hair").classList.remove("hairFive")
      document.getElementById("currentHair").innerHTML = "Bald!";
      break;
    case 1:
      document.getElementById("hair").classList.add("hairOne")
      document.getElementById("currentHair").innerHTML = "Almost Bald!";

      break;
    case 2:
      document.getElementById("hair").classList.remove("hairOne")
      document.getElementById("hair").classList.add("hairTwo")
      document.getElementById("currentHair").innerHTML = "Spiky!";

      break;
    case 3:
      document.getElementById("hair").classList.remove("hairTwo")
      document.getElementById("hair").classList.add("hairThree")
      document.getElementById("currentHair").innerHTML = "Black Hair!";

      break;
    case 4:
      document.getElementById("hair").classList.remove("hairThree")
      document.getElementById("hair").classList.add("hairFour")
      document.getElementById("currentHair").innerHTML = "Purple Hair!";

      break;
    case 5:
      document.getElementById("hair").classList.remove("hairFour")
      document.getElementById("hair").classList.add("hairFive")
      document.getElementById("currentHair").innerHTML = "Bowl Cut!";
      break;
    default:
      document.getElementById("currentHair").innerHTML = "Bald!";
      break;
  }
}

const updateEyes = () => {
  switch (eyesCount) {
    case 0:
      document.getElementById("eyes").classList.remove("eyesFour")
      document.getElementById("currentEyes").innerHTML = "none!";
      break;
    case 1:
      document.getElementById("eyes").classList.add("eyesOne")
      document.getElementById("currentEyes").innerHTML = "Blue!";

      break;
    case 2:
      document.getElementById("eyes").classList.remove("eyesOne")
      document.getElementById("eyes").classList.add("eyesTwo")
      document.getElementById("currentEyes").innerHTML = "Green!";

      break;
    case 3:
      document.getElementById("eyes").classList.remove("eyesTwo")
      document.getElementById("eyes").classList.add("eyesThree")
      document.getElementById("currentEyes").innerHTML = "Yellow!";
      break;
    case 4:
      document.getElementById("eyes").classList.remove("eyesThree")
      document.getElementById("eyes").classList.add("eyesFour")
      document.getElementById("currentEyes").innerHTML = "Red!";
      break;
    default:
      document.getElementById("currentEyes").innerHTML = "none!";
      break;
  }
}

const updateClothes = () => {
  switch (clothesCount) {
    case 0:
      document.getElementById("clothes").classList.remove("clothesThree")
      document.getElementById("currentClothes").innerHTML = "none!";

      break;
    case 1:
      document.getElementById("clothes").classList.add("clothesOne")
      document.getElementById("currentClothes").innerHTML = "T-shirt!";
      break;
    case 2:
      document.getElementById("clothes").classList.remove("clothesOne")
      document.getElementById("clothes").classList.add("clothesTwo")
      document.getElementById("currentClothes").innerHTML = "Fancy!";
      break;
    case 3:
      document.getElementById("clothes").classList.remove("clothesTwo")
      document.getElementById("clothes").classList.add("clothesThree")
      document.getElementById("currentClothes").innerHTML = "Sweater!";
      break;
    default:
      document.getElementById("currentClothes").innerHTML = "none!";
      break;
  }
}

const updatePants = () => {
  switch (pantsCount) {
    case 0:
      document.getElementById("pants").classList.remove("pantsTwo")
      document.getElementById("currentPants").innerHTML = "none!";
      break;
    case 1:
      document.getElementById("pants").classList.add("pantsOne")
      document.getElementById("currentPants").innerHTML = "Long!";
      break;
    case 2:
      document.getElementById("pants").classList.remove("pantsOne")
      document.getElementById("pants").classList.add("pantsTwo")
      document.getElementById("currentPants").innerHTML = "Shorts!";
      break;
    default:
      document.getElementById("currentPants").innerHTML = "none!";
      break;
  }
}

const updateAccessories = () => {
  switch (AccessoriesCount) {
    case 0:
      document.getElementById("accessories").classList.remove("accessoryTwo")
      document.getElementById("currentAccessories").innerHTML = "none!";
      break;
    case 1:
      document.getElementById("accessories").classList.add("accessoryOne")
      document.getElementById("currentAccessories").innerHTML = "Wolf!";
      break;
    case 2:
      document.getElementById("accessories").classList.remove("accessoryOne")
      document.getElementById("accessories").classList.add("accessoryTwo")
      document.getElementById("currentAccessories").innerHTML = "Alien!";
      break;
    default:
      break;
  }
}

//

const hair = document.getElementById("hair");
const eye = document.getElementById("eyes");
const shirt = document.getElementById("shirt")
const pants = document.getElementById("pants")
const accessories = document.getElementById("accessories")

const hairButton = document.querySelector("#changeHair");
const eyesButton = document.querySelector("#changeEyes");
const clothesButton = document.querySelector("#changeClothes");
const pantsButton = document.querySelector("#changePants");
const accessoriesButton = document.querySelector("#changeAccessories")

const currentHair = document.querySelector("#currentHair")

hairButton.addEventListener("click", hairRotate);
eyesButton.addEventListener("click", eyesRotate);
clothesButton.addEventListener("click", clothesRotate);
pantsButton.addEventListener("click", pantsRotate);
accessoriesButton.addEventListener("click", accessoryRotate)
