import Person from "./Person";

const Persons = ({ persons, searchTerm, removePerson }) => {
  return (
    <>
      {persons
        .filter(
          (person) => person.name.toLowerCase().indexOf(searchTerm) !== -1
        )
        .map((person) => (
          <Person key={person.id} person={person} removePerson={removePerson} />
        ))}
    </>
  );
};

export default Persons;
