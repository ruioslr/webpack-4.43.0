// main.js
import { A } from "./a";
import B from "./b";

console.log(A);
B();

export default function() {
	console.log(A);
}
