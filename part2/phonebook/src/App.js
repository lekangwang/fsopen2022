import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/person";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [notifMessage, setNotifMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    personService.getNumbers().then((res) => setPersons(res));
  }, []);

  const alertForDuplicatePersons = () => {
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return true;
    }
    return false;
  };

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleUpdatePerson = (e) => {
    e.preventDefault();
    if (
      window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      )
    ) {
      const person = persons.find((person) => person.name === newName);
      const updatedPerson = { ...person, number: newNumber };

      personService
        .update(updatedPerson)
        .then((res) => {
          setPersons(
            persons.filter((person) => person.id !== res.id).concat(res)
          );
          setNewName("");
          setNewNumber("");
          setNotifMessage(`Updated ${newName}`);
          setTimeout(() => {
            setNotifMessage("");
          }, 5000);
          setIsError(false);
        })
        .catch((err) => {
          setNotifMessage(
            `Information of ${newName} has already been removed from server`
          );
          setTimeout(() => {
            setNotifMessage("");
          }, 5000);
          setIsError(true);
          setPersons(persons.filter((p) => p.name !== newName));
        });
    }
  };

  const handleAddPerson = (e) => {
    e.preventDefault();
    if (alertForDuplicatePersons()) {
      return;
    } else if (!newName || !newNumber) {
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    personService.create(newPerson).then((res) => {
      setPersons(persons.concat(res));
      setNotifMessage(`Added ${newName}`);
      setTimeout(() => {
        setNotifMessage("");
      }, 5000);
      setIsError(false);
      setNewName("");
      setNewNumber("");
    });
  };

  const removePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.remove(person).then((res) => {
        setPersons(persons.filter((n) => n.id !== person.id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notifMessage} isError={isError} />
      <Filter searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />
      <h2>add new</h2>
      <PersonForm
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        handleAddPerson={handleAddPerson}
        handleUpdatePerson={handleUpdatePerson}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        searchTerm={searchTerm}
        removePerson={removePerson}
      />
    </div>
  );
};

export default App;
