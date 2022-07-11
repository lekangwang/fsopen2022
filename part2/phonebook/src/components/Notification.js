const Notification = ({ message, isError }) => {
  const container = {
    display: "flex",
    width: "80%",
    backgroundColor: "lightgray",
    padding: "10px 20px",
    color: isError ? "red" : "green",
    border: `5px solid ${isError ? "red" : "green"}`,
    marginBottom: "20px",
    fontSize: 16,
  };

  return (
    <>
      {message === "" ? (
        ""
      ) : (
        <div style={container}>
          <div>
            <h2 style={{ padding: "0", margin: "0" }}>{message}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
