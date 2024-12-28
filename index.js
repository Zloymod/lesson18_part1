import { sum } from "./main";
import javaScriptLogo from "./assets/jsLogo.webp";

import "./index.css";

function hello(arg) {
  console.log("Hello World!", arg);
}

hello(sum(1, 2));

const img = document.createElement("img");
img.src = javaScriptLogo;
document.querySelector("body").append(img);
console.log(javaScriptLogo);
console.log("tests");
console.log("tests");
console.log("tests");
