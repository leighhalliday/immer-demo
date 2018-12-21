import { changeName, addPerson, changeStreet } from "./example";

it("changes property immutably", () => {
  const personBefore = { name: "Leigh" };
  const personAfter = changeName(personBefore, "Albert");

  expect(personBefore.name).toBe("Leigh");
  expect(personAfter.name).toBe("Albert");
});

it("pushes to array immutably", () => {
  const peopleBefore = [{ name: "Leigh" }, { name: "Albert" }];
  const peopleAfter = addPerson(peopleBefore, { name: "Ricardo" });

  expect(peopleBefore.length).toBe(2);
  expect(peopleAfter.length).toBe(3);
});

it("changes deep data immutably", () => {
  const personBefore = {
    name: "Leigh",
    address: {
      street: "123 Road"
    }
  };
  const personAfter = changeStreet(personBefore, "123 Crescent");

  expect(personBefore.address.street).toBe("123 Road");
  expect(personAfter.address.street).toBe("123 Crescent");
});
