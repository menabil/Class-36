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
  let value = inPPP.value;
  if (/[^a-zA-Z]/.test(value)) {
    erow.removeAttribute("hidden");
    erow.innerText = "Numbers are not taken";
  } else {
    erow.setAttribute("hidden", true);
  }
});
// Number input dela error show korbe

tRea.addEventListener("click", () => {
  let inpValue = inPPP.value;

  if (inpValue == "") {
    erow.removeAttribute("hidden");
    erow.innerText = "Name Is Missing";
  } else {
    erow.setAttribute("hidden", true);

    boxTne.setAttribute("hidden", true);
    boxTrre.removeAttribute("hidden");
    tUwewe.innerText = inPPP.value;
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

inFPP.addEventListener("input", () => {
  let boinp = inFPP.value;
  if (/[^a-zA-Z]/.test(boinp)) {
    eFow.removeAttribute("hidden");
    eFow.innerText = "Numbers are not taken";
  } else {
    eFow.setAttribute("hidden", true);
  }
});

// Number input dela error show korbe

tFea.addEventListener("click", () => {
  let inpValue = inFPP.value;
  if (inpValue == "") {
    eFow.removeAttribute("hidden");
    eFow.innerText = "Name Is Missing";
  } else {
    eFow.setAttribute("hidden", true);

    boxFne.setAttribute("hidden", true);
    boxVrre.removeAttribute("hidden");
    tVwewe.innerText = inFPP.value;
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

tVea.addEventListener("click", () => {
  let inpValue = inVPP.value;
  if (inpValue == "") {
    eVow.removeAttribute("hidden");
    eVow.innerText = "Please give a number";
  } else {
    if (inOPP.value != inVPP.value) {
      eVow.removeAttribute("hidden");
      eVow.innerText = "Try Again";
      inVPP.value = "";
      if (inpValue == "") {
        eVow.innerText = "Please give a number";
      }
    } else {
      eVow.setAttribute("hidden", true);
      boxVrre.setAttribute("hidden", true);
      boxSne.removeAttribute("hidden");
    }
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
    inFPP.innerText.color = "green";
    rSa.style.background = "green";
  } else {
    eSewe.innerHTML = "Sorry! <br>" + inPPP.value + " Wins!";
    inPPP.innerText.color = "red";
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
