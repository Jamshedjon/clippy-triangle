const form = document.getElementById("form");
const clippy = document.getElementById("clippy");
form.addEventListener("input", function (event) {
  event.preventDefault();

  let ax = document.getElementById("ax").value;
  let ay = document.getElementById("ay").value;
  let bx = document.getElementById("bx").value;
  let by = document.getElementById("by").value;
  let cx = document.getElementById("cx").value;
  let cy = document.getElementById("cy").value;

  let axv = document.getElementById("axv");
  axv.textContent = ax;
  let ayv = document.getElementById("ayv");
  ayv.textContent = ay;
  let bxv = document.getElementById("bxv");
  bxv.textContent = bx;
  let byv = document.getElementById("byv");
  byv.textContent = by;
  let cxv = document.getElementById("cxv");
  cxv.textContent = cx;
  let cyv = document.getElementById("cyv");
  cyv.textContent = cy;

  clippy.style = ` clip-path: polygon(${cx}% ${cy}%, ${ax}% ${ay}%, ${bx}% ${by}%); `;
});
