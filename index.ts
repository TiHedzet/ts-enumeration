import { Instantiate } from "./src/enumeration.js";
import { MyEnumeration, testArr } from "./tests/test.js";

const x = Instantiate(MyEnumeration);
const y = Instantiate(MyEnumeration);


console.log(x === y);