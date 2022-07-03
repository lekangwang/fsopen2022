function Header(props) {
  return <h1>{props.course}</h1>;
}

function Part(props) {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
}

function Content(props) {
  const parts = [];
  props.parts.forEach(({ name, exercises }) => {
    parts.push(<Part name={name} exercises={exercises} />);
  });

  return <div>{parts}</div>;
}

function Total(props) {
  const total = props.parts.reduce((acc, { exercises }) => {
    return acc + exercises;
  }, 0);

  return <p>Number of exercises {total}</p>;
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 11,
      },
      {
        name: "Using props to pass data",
        exercises: 22,
      },
      {
        name: "State of a component",
        exercises: 33,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
