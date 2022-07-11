const Person = ({ person, removePerson }) => {
  return (
    <div>
      {person.name} {person.number}
      <button onClick={() => removePerson(person)}>delete</button>
    </div>
  );
};

export default Person;
