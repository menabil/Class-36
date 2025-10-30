// =========================================

let boxOne = document.getElementById("boxOne");
let rea = document.getElementById("rea");

// 1========================================

rea.addEventListener("click", () => {
  boxOne.setAttribute("hidden", true);
  boxTne.removeAttribute("hidden");
});

// =========================================

let boxTne = document.getElementById("boxTne");
let inPPP = document.getElementById("inPPP");
let tRea = document.getElementById("tRea");
let erow = document.getElementById("erow");

// 2========================================

tRea.addEventListener("click", () => {
  let inpValue = inPPP.value;
  if (inpValue == "") {
    erow.removeAttribute("hidden");
    inpValue = "";
  } else {
    erow.setAttribute("hidden", true);
    inpValue = "";
    boxTne.setAttribute("hidden", true);
    boxTrre.removeAttribute("hidden");
    tUwewe.innerText = inPPP.value;
  }
});

// =========================================

let boxTrre = document.getElementById("boxTrre");
let tUwewe = document.getElementById("tUwewe");
let inOPP = document.getElementById("inOPP");
let tOea = document.getElementById("tOea");
let erEw = document.getElementById("erEw");

// 3========================================

tOea.addEventListener("click", () => {
  let inpValue = inOPP.value;
  if (inpValue == "") {
    erEw.removeAttribute("hidden");
    inpValue = "";
  } else {
    erEw.setAttribute("hidden", true);
    inpValue = "";
    boxTrre.setAttribute("hidden", true);
    boxFne.removeAttribute("hidden");
  }
});

// =========================================

let boxFne = document.getElementById("boxFne");
let inFPP = document.getElementById("inFPP");
let tFea = document.getElementById("tFea");
let eFow = document.getElementById("eFow");

// 4========================================

tFea.addEventListener("click", () => {
  let inpValue = inFPP.value;
  if (inpValue == "") {
    eFow.removeAttribute("hidden");
    inpValue = "";
  } else {
    eFow.setAttribute("hidden", true);
    inpValue = "";
    boxFne.setAttribute("hidden", true);
    boxVrre.removeAttribute("hidden");
    tVwewe.innerText = inFPP.value;
  }
});

// =========================================

let boxVrre = document.getElementById("boxVrre");
let tVwewe = document.getElementById("tVwewe");
let inVPP = document.getElementById("inVPP");
let tVea = document.getElementById("tVea");
let eVow = document.getElementById("eVow");

// 5========================================

tVea.addEventListener("click", () => {
  let inpValue = inVPP.value;
  if (inpValue == "") {
    eVow.removeAttribute("hidden");
    inpValue = "";
  } else {
    eVow.setAttribute("hidden", true);
    inpValue = "";
    boxVrre.setAttribute("hidden", true);
    boxSne.removeAttribute("hidden");
  }
});

// =========================================

let boxSne = document.getElementById("boxSne");
let eSewe = document.getElementById("eSewe");
let rSa = document.getElementById("rSa");

// 6========================================

rSa.addEventListener("click", () => {
  boxSne.setAttribute("hidden", true);
  boxOne.removeAttribute("hidden");

  if (inOPP.value == inVPP.value) {
    console.log((eSewe.innerText = "Sorry! Player One is Win"));
  }
});

// =========================================
