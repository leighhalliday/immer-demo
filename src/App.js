import React, { Component } from "react";
import produce from "immer";
import uuid from "./uuid";
import "./App.css";

export default class App extends Component {
  nameRef = React.createRef();

  state = {
    details: { eventName: "Birthday Party" },
    people: [
      { uuid: uuid(), name: "Leigh", attending: true },
      { uuid: uuid(), name: "Pedro", attending: false },
      { uuid: uuid(), name: "Dorothy", attending: false },
      { uuid: uuid(), name: "Grandma", attending: true }
    ]
  };

  setEventName = value => {
    // const { details } = this.state;
    // this.setState({
    //   details: { ...details, eventName: value }
    // });

    this.setState(
      produce(draft => {
        draft.details.eventName = value;
      })
    );
  };

  updateAttending = (uuid, newAttending) => {
    // const { people } = this.state;
    // const newPeople = people.map(person => {
    //   if (person.uuid === uuid) {
    //     return { ...person, attending: newAttending };
    //   }
    //   return person;
    // });
    // this.setState({
    //   people: newPeople
    // });

    this.setState(
      produce(draft => {
        draft.people.forEach(person => {
          if (person.uuid === uuid) {
            person.attending = newAttending;
          }
        });
      })
    );
  };

  addPerson = name => {
    // const { people } = this.state;
    // this.setState({
    //   people: [...people, { uuid: uuid(), attending: false, name }]
    // });

    this.setState(
      produce(draft => {
        draft.people.push({ uuid: uuid(), attending: false, name });
      })
    );
  };

  removePerson = uuid => {
    const { people } = this.state;
    const newPeople = people.filter(person => person.uuid !== uuid);
    this.setState({
      people: newPeople
    });
  };

  render() {
    const { details, people } = this.state;

    return (
      <div className="App">
        <input
          onChange={e => {
            const value = e.target.value;
            this.setEventName(value);
          }}
          value={details.eventName}
        />

        {people.map(person => (
          <li key={person.uuid}>
            {person.name} - {person.attending ? "Going" : "Not Going"}
            <button
              onClick={e => {
                e.preventDefault();
                this.updateAttending(person.uuid, !person.attending);
              }}
            >
              {person.attending ? "Not Going" : "Going"}
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                this.removePerson(person.uuid);
              }}
            >
              Remove
            </button>
          </li>
        ))}
        <form
          onSubmit={e => {
            e.preventDefault();
            if (this.nameRef.current.value) {
              this.addPerson(this.nameRef.current.value);
              e.target.reset();
            }
          }}
        >
          <input ref={this.nameRef} placeholder="Attendee's name" required />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
