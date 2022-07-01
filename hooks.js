export class Person {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  updatePhone(newNumber) {
    this.phone = newNumber;
  }
  updateName(newName) {
    this.name = newName;
  }

  clearData() {
    this.name = "";
    this.phone = "";
  }
}

