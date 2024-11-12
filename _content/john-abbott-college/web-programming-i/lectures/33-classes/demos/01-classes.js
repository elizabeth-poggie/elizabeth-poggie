class MyClass {
  constructor(param1) {
    this.field1 = param1;
    this.secretField = 3;
  }
  get secretField() {
    return this.secretField;
  }
  set field(value) {
    this.secretField = value;
  }
}
let theInstance = new MyClass(3);
// set field
theInstance.field = 34;
// get field
console.log(theInstance.field);
