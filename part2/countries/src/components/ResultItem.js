function ResultItem(props) {
  const handleShowButton = () => {
    props.handleShowButton(props.name);
  };

  return (
    <div>
      {props.name}
      <button onClick={handleShowButton}>show</button>
    </div>
  );
}

export default ResultItem;
