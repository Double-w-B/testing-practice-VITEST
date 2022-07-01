import { it, expect, beforeEach, afterAll, afterEach } from "vitest";
import { Person } from "./hooks";

const name = "Jan";
const phone = 880234432;
let person;

beforeEach(() => {
  person = new Person(name, phone);
});

afterEach(() => {
  person.clearData();
  it("all properties should be cleared", () => {
    expect(person.name).toBe("");
    expect(person.phone).toBe("");
  });
});

afterAll(() => {
  it("all properties should be cleared", () => {
    expect(person.name).toBe("");
    expect(person.phone).toBe("");
  });
});

it("should update name of Person", () => {
  const newName = "Janusz";
  person.updateName(newName);

  expect(person.phone).toBe(phone);
  expect(person.name).toBe(newName);
});

it("should update phone number of Person", () => {
  const newNumber = 580987789;
  person.updatePhone(newNumber);

  expect(person.name).toBe(name);
  expect(person.phone).toBe(newNumber);
});
