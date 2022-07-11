const PersonForm = ({
  persons,
  newName,
  newNumber,
  handleNewName,
  handleNewNumber,
  handleAddPerson,
  handleUpdatePerson,
}) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button
          type="submit"
          onClick={
            persons.find((p) => p.name === newName)
              ? handleUpdatePerson
              : handleAddPerson
          }
        >
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
