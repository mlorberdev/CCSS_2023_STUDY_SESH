import {g5} from "./g5.js";
import {g6} from "./g6.js";
import {g7} from "./g7.js";
import {g8} from "./g8.js";

!(function () {
  let N = 0, G, ss;
  const init = () => {
    switch (G) {
      case "5": ss = g5; break;
      case "6": ss = g6; break;
      case "7": ss = g7; break;
      case "8": ss = g8; break;
    }
    document.getElementById("n").innerHTML = ss[N][0];
    document.getElementById("s").innerHTML = ss[N][1];
    document.getElementById("a").innerHTML = `<a href="https://www.education.com/common-core/CCSS.MATH.CONTENT.${ss[N][0]}/">materials</a>`;
  }
  document.getElementById("next").addEventListener("click", () => { N === ss.length - 1 ? N = 0 : N++; init(); });
  document.getElementById("back").addEventListener("click", () => { N === 0 ? N = ss.length - 1 : N--; init(); });
  document.getElementById("m").addEventListener("click", () => document.getElementById("menu").style.left = 0);
  document.querySelectorAll(".grade").forEach(grade => grade.addEventListener("click", () => {
    G = grade.id.split("")[1];
    N = 0;
    init();
    document.getElementById("menu").style.left = "100vw";
  }));
})();