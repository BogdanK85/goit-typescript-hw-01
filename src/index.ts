import { conacatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    conacatenation(input.value, "hello!");
  });
}
