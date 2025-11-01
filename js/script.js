// =========================================

let boxOne = document.getElementById("boxOne");
let boxTne = document.getElementById("boxTne");
let boxTrre = document.getElementById("boxTrre");
let boxFne = document.getElementById("boxFne");
let boxVrre = document.getElementById("boxVrre");
let boxSne = document.getElementById("boxSne");

// =========================================

let rea = document.getElementById("rea");

// 1========================================

rea.addEventListener("click", () => {
  boxOne.setAttribute("hidden", true);
  boxTne.removeAttribute("hidden");
});

// =========================================

let inPPP = document.getElementById("inPPP");
let tRea = document.getElementById("tRea");
let erow = document.getElementById("erow");

// 2========================================

// inPPP.addEventListener("input", () => {
//     inPPP.value = inPPP.value.replace(/[^a-zA-Z]/g, "");
//   });

// user number input korte parbe nah

inPPP.addEventListener("input", () => {
  let value = inPPP.value;
  if (/[^a-zA-Z]/.test(value)) {
    erow.removeAttribute("hidden");
    // inPPP.value = value.replace(/[^a-zA-Z]/g, "");
  } else {
    erow.setAttribute("hidden", true);
  }
});

tRea.addEventListener("click", () => {
  let inpValue = inPPP.value;

  if (inpValue == "") {
    erow.removeAttribute("hidden");
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

// =========================================

let tUwewe = document.getElementById("tUwewe");
let inOPP = document.getElementById("inOPP");
let tOea = document.getElementById("tOea");
let erEw = document.getElementById("erEw");

// 3========================================

tOea.addEventListener("click", () => {
  let inpValue = inOPP.value;
  if (inpValue == "") {
    erEw.removeAttribute("hidden");
    erEw.innerText = "Please give a number";
  } else {
    let num = Number(inOPP.value);
    if (num >= 0 && num <= 9) {
      erEw.setAttribute("hidden", true);
      boxTrre.setAttribute("hidden", true);
      boxFne.removeAttribute("hidden");
    } else {
      erEw.removeAttribute("hidden");
      erEw.innerText = "Give a number 0 is out of 9";
      inOPP.value = "";
    }

    // if (inOPP.value >= 0 && inOPP.value <= 9) {
    //   erEw.removeAttribute("hidden");
    //   erEw.innerText = "Give a number 0 is out of 9";
    //   inOPP.value = "";
    //   if (inpValue == "") {
    //     erEw.innerText = "Please give a number";
    //   }
    // } else {
    //   erEw.setAttribute("hidden", true);
    //   boxTrre.setAttribute("hidden", true);
    //   boxFne.removeAttribute("hidden");
    // }
  }
});

inOPP.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    tOea.click();
  }
});

tOea.addEventListener("click", () => {});

// =========================================

let inFPP = document.getElementById("inFPP");
let tFea = document.getElementById("tFea");
let eFow = document.getElementById("eFow");

// 4========================================

tFea.addEventListener("click", () => {
  let inpValue = inFPP.value;
  if (inpValue == "") {
    eFow.removeAttribute("hidden");
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

// =========================================

let tVwewe = document.getElementById("tVwewe");
let inVPP = document.getElementById("inVPP");
let tVea = document.getElementById("tVea");
let eVow = document.getElementById("eVow");

// 5========================================

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

inVPP.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    tVea.click();
  }
});

tVea.addEventListener("click", () => {});

// // =========================================

let eSewe = document.getElementById("eSewe");
let rSa = document.getElementById("rSa");

// // 6========================================

tVea.addEventListener("click", () => {
  if (inOPP.value === inVPP.value) {
    eSewe.innerHTML = "Congratulation! <br>" + inFPP.value + " Wins!";
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

// =========================================

//   113 and 116 number line er dainamic value er color change korte hobe
