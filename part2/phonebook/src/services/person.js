import axios from "axios";

const getNumbers = () => {
  return axios.get("http://localhost:3001/persons").then((res) => res.data);
};

const create = (person) => {
  return axios
    .post("http://localhost:3001/persons", person)
    .then((res) => res.data);
};

const remove = (person) => {
  return axios
    .delete(`http://localhost:3001/persons/${person.id}`)
    .then((res) => res.data);
};

const update = (person) => {
  return axios
    .put(`http://localhost:3001/persons/${person.id}`, person)
    .then((res) => res.data);
};

export default {
  getNumbers,
  create,
  remove,
  update,
};
