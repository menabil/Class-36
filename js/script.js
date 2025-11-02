// =========================================

let boxOne = document.getElementById("boxOne");
let boxTne = document.getElementById("boxTne");
let boxTrre = document.getElementById("boxTrre");
let boxFne = document.getElementById("boxFne");
let boxVrre = document.getElementById("boxVrre");
let boxSne = document.getElementById("boxSne");

// =========================================

let rea = document.getElementById("rea");

// Box One==================================

rea.addEventListener("click", () => {
  boxOne.setAttribute("hidden", true);
  boxTne.removeAttribute("hidden");
});

// =========================================

let inPPP = document.getElementById("inPPP");
let tRea = document.getElementById("tRea");
let erow = document.getElementById("erow");

// Box Two==================================

// inPPP.addEventListener("input", () => {
//     inPPP.value = inPPP.value.replace(/[^a-zA-Z]/g, "");
//   });

// user number input korte parbe nah

inPPP.addEventListener("input", () => {
  let boinp = inPPP.value;
  if (/[^a-zA-Z]/.test(boinp)) {
    erow.removeAttribute("hidden");
    erow.innerText = "Numbers are not taken";
    tRea.setAttribute("disabled", "true");
  } else {
    tRea.removeAttribute("disabled");
    erow.setAttribute("hidden", true);
  }
});
// Number input dela error show korbe

tRea.addEventListener("click", () => {
  let inpValue = inPPP.value;

  if (inpValue == "") {
    erow.removeAttribute("hidden");
    erow.innerText = "Name Is Missing";
  } else if (/\d/.test(inpValue)) {
    erow.removeAttribute("hidden");
  } else {
    tUwewe.innerText = inPPP.value;
    erow.setAttribute("hidden", true);
    boxTne.setAttribute("hidden", true);
    boxTrre.removeAttribute("hidden");
  }
});

inPPP.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    tRea.click();
  }
});

tRea.addEventListener("click", () => {});
// For press Enter

// =========================================

let tUwewe = document.getElementById("tUwewe");
let inOPP = document.getElementById("inOPP");
let tOea = document.getElementById("tOea");
let erEw = document.getElementById("erEw");

// Box Three================================

tOea.addEventListener("click", () => {
  let inpValue = inOPP.value;
  if (inpValue == "") {
    erEw.removeAttribute("hidden");
    erEw.innerText = "Please give a number";
  } else {
    let num = inOPP.value;
    if (num >= 0 && num <= 9) {
      erEw.setAttribute("hidden", true);
      boxTrre.setAttribute("hidden", true);
      boxFne.removeAttribute("hidden");
    } else {
      erEw.removeAttribute("hidden");
      erEw.innerText = "Give a number 0 is out of 9";
      inOPP.value = "";
    }
  }
});

inOPP.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    tOea.click();
  }
});

tOea.addEventListener("click", () => {});
// For press Enter

// ========================================

let inFPP = document.getElementById("inFPP");
let tFea = document.getElementById("tFea");
let eFow = document.getElementById("eFow");

// Box Four================================

// inPPP.addEventListener("input", () => {
//     inPPP.value = inPPP.value.replace(/[^a-zA-Z]/g, "");
//   });

// user number input korte parbe nah

inFPP.addEventListener("input", () => {
  let boinp = inFPP.value;
  if (/[^a-zA-Z]/.test(boinp)) {
    eFow.removeAttribute("hidden");
    eFow.innerText = "Numbers are not taken";
    tFea.setAttribute("disabled", "true");
  } else {
    tFea.removeAttribute("disabled");
    eFow.setAttribute("hidden", true);
  }
});

// Number input dela error show korbe

tFea.addEventListener("click", () => {
  let inpValue = inFPP.value;

  if (inpValue == "") {
    eFow.removeAttribute("hidden");
    eFow.innerText = "Name Is Missing";
  } else if (/\d/.test(inpValue)) {
    eFow.removeAttribute("hidden");
  } else {
    tVwewe.innerText = inFPP.value;
    eFow.setAttribute("hidden", true);
    boxFne.setAttribute("hidden", true);
    boxVrre.removeAttribute("hidden");
  }
});

inFPP.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    tFea.click();
  }
});

tFea.addEventListener("click", () => {});
// For press Enter

// =========================================

let tVwewe = document.getElementById("tVwewe");
let inVPP = document.getElementById("inVPP");
let tVea = document.getElementById("tVea");
let eVow = document.getElementById("eVow");

// Box Five=================================
// let chances = 3;

// tVea.addEventListener("click", () => {
//   let inpValue = Number(inVPP.value);

//   if (inVPP.value === "") {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "Please give a number";
//   } else if (inpValue >= 0 && inpValue <= 9) {
//     if (inpValue == Number(inOPP.value)) {
//       boxVrre.setAttribute("hidden", true);
//       boxSne.removeAttribute("hidden");
//     } else {
//       chances--;
//       if (chances > 0) {
//         eVow.removeAttribute("hidden");
//         eVow.innerText = `${chances} Chance Left`;
//       } else {
//         eVow.removeAttribute("hidden");
//         eVow.innerText = "No Chance Left";
//         // এখানে চাইলে game over logic বসাও
//       }
//       inVPP.value = "";
//     }
//   } else {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "Give a number 0-9";
//     inVPP.value = "";
//   }
// });

// let chances = 3;
// tVea.addEventListener("click", () => {
//   let inpValue = inVPP.value;

//   if (inpValue == "") {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "Please give a number";
//   } else if (inOPP.value != inVPP.value && chances == 3) {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "3 Chance Left";
//     chances = 2;
//     inVPP.value = "";

//     // eVow.setAttribute("hidden", true);
//   } else if (inOPP.value != inVPP.value && chances == 2) {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "2 Chance Left";
//     chances = 1;
//     inVPP.value = "";

//     // eVow.setAttribute("hidden", true);
//   } else if (inOPP.value != inVPP.value && chances == 1) {
//     chances = 0;
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "1 Chance Left";
//     inVPP.value = "";

//     // eVow.setAttribute("hidden", true);
//   } else if (inpValue == inOPP.value) {
//     boxVrre.setAttribute("hidden", true);
//     boxSne.removeAttribute("hidden");
//   } else {
//     boxVrre.setAttribute("hidden", true);
//     boxSne.removeAttribute("hidden");
//   }
// });

// let chances = 3;

// tVea.addEventListener("click", () => {
//   let inpValue = inVPP.value; // convert to number

//   // Empty input check
//   if (inVPP.value.trim() === "") {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "Please give a number";
//   }

//   // Out of range check
//   if (isNaN(inpValue) || inpValue < 0 || inpValue > 9) {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "Give a number between 0 and 9";
//     inVPP.value = "";
//   }

//   // Wrong guess conditions (keeping your raw style)
//   if (inpValue != inOPP.value && chances == 3) {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "3 Chance Left";
//     chances = 2;
//     inVPP.value = "";
//   } else if (inpValue != inOPP.value && chances == 2) {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "2 Chance Left";
//     chances = 1;
//     inVPP.value = "";
//   } else if (inpValue != inOPP.value && chances == 1) {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "1 Chance Left";
//     chances = 0;
//     inVPP.value = "";
//   } else if (inpValue == inOPP.value) {
//     boxVrre.setAttribute("hidden", true);
//     boxSne.removeAttribute("hidden");
//   } else {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "Something went wrong!";
//     inVPP.value = "";
//   }
// });

// // Elements
// // let tVwewe = document.getElementById("tVwewe");
// // let inVPP = document.getElementById("inVPP");
// // let tVea = document.getElementById("tVea");
// // let eVow = document.getElementById("eVow");
// // let boxVrre = document.getElementById("boxVrre"); // Wrong guess box
// // let boxSne = document.getElementById("boxSne");   // Success box
// // let inOPP = document.getElementById("inOPP");     // Correct number (hidden or input)

// // Initial chances
// let chances = 3;

// tVea.addEventListener("click", () => {
//   let inpValue = Number(inVPP.value); // convert input to number

//   // 1️⃣ Empty input check
//   if (inVPP.value.trim() === "") {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "Please give a number";

//   // 2️⃣ Out of range check
//   } else if (isNaN(inpValue) || inpValue < 0 || inpValue > 9) {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "Give a number between 0 and 9";
//     inVPP.value = "";

//   // 3️⃣ Wrong guess: chance 3
//   } else if (inpValue != Number(inOPP.value) && chances == 3) {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "3 Chance Left";
//     chances = 2;
//     inVPP.value = "";

//   // 4️⃣ Wrong guess: chance 2
//   } else if (inpValue != Number(inOPP.value) && chances == 2) {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "2 Chance Left";
//     chances = 1;
//     inVPP.value = "";

//   // 5️⃣ Wrong guess: chance 1
//   } else if (inpValue != Number(inOPP.value) && chances == 1) {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "1 Chance Left";
//     chances = 0;
//     inVPP.value = "";

//   // 6️⃣ Correct guess
//   } else if (inpValue == Number(inOPP.value)) {
//     boxVrre.setAttribute("hidden", true);
//     boxSne.removeAttribute("hidden");
//     eVow.setAttribute("hidden", true); // hide warning if any

//   // 7️⃣ Else: safeguard
//   } else {
//     eVow.removeAttribute("hidden");
//     eVow.innerText = "Something went wrong!";
//     inVPP.value = "";
//   }
// });

// let tVwewe = document.getElementById("tVwewe");
// let inVPP = document.getElementById("inVPP");
// let tVea = document.getElementById("tVea");
// let eVow = document.getElementById("eVow");
// let boxVrre = document.getElementById("boxVrre");
// let boxSne = document.getElementById("boxSne");
// let inOPP = document.getElementById("inOPP");

let chances = 3;

tVea.addEventListener("click", () => {
  let inpValue = Number(inVPP.value);

  if (inVPP.value.trim() === "") {
    eVow.removeAttribute("hidden");
    eVow.innerText = "Please give a number";
  } else if (isNaN(inpValue) || inpValue < 0 || inpValue > 9) {
    eVow.removeAttribute("hidden");
    eVow.innerText = "Give a number between 0 and 9";
    inVPP.value = "";
  } else if (inpValue != Number(inOPP.value) && chances == 3) {
    eVow.removeAttribute("hidden");
    eVow.innerText = "3 Chance Left";
    chances = 2;
    inVPP.value = "";
  } else if (inpValue != Number(inOPP.value) && chances == 2) {
    eVow.removeAttribute("hidden");
    eVow.innerText = "2 Chance Left";
    chances = 1;
    inVPP.value = "";
  } else if (inpValue != Number(inOPP.value) && chances == 1) {
    eVow.removeAttribute("hidden");
    eVow.innerText = "1 Chance Left";
    chances = 0;
    inVPP.value = "";
  } else if (chances == 0) {
    // <-- নতুন: chance শেষ
    eVow.removeAttribute("hidden");
    eVow.innerText = "No Chance Left! Game Over.";
    inVPP.value = "";
    boxVrre.setAttribute("hidden", true);
    boxSne.removeAttribute("hidden"); // Optional: game over box
  } else if (inpValue == Number(inOPP.value)) {
    boxVrre.setAttribute("hidden", true);
    boxSne.removeAttribute("hidden");
    eVow.setAttribute("hidden", true);
  } else {
    eVow.removeAttribute("hidden");
    eVow.innerText = "Something went wrong!";
    inVPP.value = "";
  }
});

// For Check result

inVPP.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    tVea.click();
  }
});

tVea.addEventListener("click", () => {});
// For press Enter

// =========================================

let eSewe = document.getElementById("eSewe");
let rSa = document.getElementById("rSa");

// Box Six==================================

tVea.addEventListener("click", () => {
  if (inOPP.value === inVPP.value) {
    eSewe.innerHTML =
      "Congratulation! <br> <span style = 'color:green'>" +
      inFPP.value +
      "</span> Wins!";
    // inFPP.innerText.color = "green";
    rSa.style.background = "green";
  } else {
    eSewe.innerHTML =
      "Sorry! <br><span style = 'color:red'>" + inPPP.value + "</span>  Wins!";
    // inPPP.innerText.color = "red";
    rSa.style.background = "red";
  }
});

rSa.addEventListener("click", () => {
  boxSne.setAttribute("hidden", true);
  boxOne.removeAttribute("hidden");

  inPPP.value = "";
  inOPP.value = "";
  inFPP.value = "";
  inVPP.value = "";
});

// For Reset This Program
