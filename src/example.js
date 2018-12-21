import produce from "immer";

// const changeName = (person, name) => {
//   person.name = name;
//   return person;
// };

// const changeName = (person, name) => {
//   return { ...person, name };
// };

const changeName = (person, name) => {
  return produce(person, draft => {
    draft.name = name;
  });
};

// const addPerson = (people, person) => {
//   people.push(person);
//   return person;
// };

// const addPerson = (people, person) => {
//   return [...people, person];
// };

const addPerson = (people, person) => {
  return produce(people, draft => {
    draft.push(person);
  });
};

// const changeStreet = (person, street) => {
//   person.address.street = street;
//   return person;
// };

// const changeStreet = (person, street) => {
//   return {
//     ...person,
//     address: {
//       ...person.address,
//       street
//     }
//   };
// };

const changeStreet = (person, street) => {
  return produce(person, draft => {
    draft.address.street = street;
  });
};

export { changeName, addPerson, changeStreet };
