import { EnumerationBase, Instantiate } from "../src/enumeration.js";

class MyInnerClass {
    constructor(public key: number, public value: string) {}
}

export class MyEnumeration extends EnumerationBase<MyInnerClass> {
    constructor() {
        super();
    }

    public readonly First: MyInnerClass = new MyInnerClass(1, '1');
    public readonly Second: MyInnerClass = new MyInnerClass(2,'2');
}

export const testArr = Instantiate(MyEnumeration).Enumerate(x => x.key);
